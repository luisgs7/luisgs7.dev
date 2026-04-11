---
title: FastAPI para serviços assíncronos
description: Quando escolher FastAPI, como estruturar rotas e integrar com filas e bases de dados de forma sustentável.
date: '2025-03-18'
tag: FastAPI
tagVariant: tertiary
image: https://lh3.googleusercontent.com/aida-public/AB6AXuApFe3tJep2M46xBelxnhpK7RcYM9rER2oK1zRjBzJUck4jH0EuBEBD0Ap3qeAAoF09mI1xJO_EQmZwpd8zdPI8qLE32z0BMkdXulhHZ_QVUsmNKCDrOgakIKe9RzFTgp2ffQw7cNcY6bhBXDw_HCWUvj9fuEfZXynoNU_nIya7FWbPp9cneJNJjedIyiR_0sEZfsubffGxTaE6kwYkpPhI2NdL2GQ6xGbdyeDgOUMY5vJw-qqVekHo5M6Rq9bXFqZhTMhSfK3cMLs
imageAlt: Serviço API em execução
readTime: '6 min de leitura'
tags:
  - FastAPI
  - Async
  - Python
---

## Porque FastAPI

Quando o gargalo são I/O (HTTP para outros serviços, bases de dados assíncronas, leitura de object storage), **async** pode aumentar o throughput com o mesmo hardware. FastAPI, sobre Starlette e Pydantic, encaixa bem nesse perfil.

## Rotas e dependências

Agrupar dependências (`Depends`) para sessões de base de dados, utilizador autenticado e políticas de rate limit mantém os handlers finos e testáveis. Evito lógica pesada dentro das funções de rota — serviços em módulos separados facilitam testes unitários.

```python
from fastapi import Depends, APIRouter
from sqlalchemy.ext.asyncio import AsyncSession

from .deps import get_db, get_current_user
from .schemas import ReportOut
from .services import build_report

router = APIRouter(prefix="/reports", tags=["reports"])

@router.get("/{report_id}", response_model=ReportOut)
async def get_report(
    report_id: str,
    session: AsyncSession = Depends(get_db),
    user=Depends(get_current_user),
):
    return await build_report(session, user_id=user.id, report_id=report_id)
```

## Filas e tarefas longas

Operações longas não devem bloquear a resposta HTTP: delegar a **Celery**, **RQ** ou workers dedicados, com a API apenas a enfileirar e a expor estado (polling ou WebSockets, conforme o caso).

```python
# Resposta imediata com ID de tarefa — o cliente consulta o estado depois
from fastapi import FastAPI, Depends
from celery import Celery

app = FastAPI()
celery_app = Celery("worker")

@celery_app.task
def generate_export(user_id: str, filters: dict) -> str:
    # trabalho pesado aqui
    return "https://storage.example/exports/abc.csv"

@app.post("/exports/")
async def enqueue_export(user=Depends(get_current_user), body: ExportFilters):
    task = generate_export.delay(str(user.id), body.model_dump())
    return {"task_id": task.id, "status": "pending"}
```

## Observações práticos

Medir com APM ou métricas simples (tempo por rota, erros) antes de otimizar micro-detalhes. A stack certa é a que a equipa consegue operar em produção com confiança.
