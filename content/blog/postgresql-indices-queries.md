---
title: PostgreSQL, índices e queries eficientes
description: Boas práticas para modelar dados, criar índices úteis e evitar armadilhas comuns em aplicações backend.
date: '2025-01-30'
tag: PostgreSQL
tagVariant: tertiary
image: https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&q=80&auto=format&fit=crop
imageAlt: Servidor e armazenamento de dados
readTime: '7 min de leitura'
tags:
  - PostgreSQL
  - SQL
  - Performance
---

## Modelagem e tipos

Escolher tipos adequados (`NUMERIC` para dinheiro, `TIMESTAMPTZ` para instantes) evita bugs silenciosos. Chaves estrangeiras e restrições no servidor ajudam a manter integridade mesmo quando várias aplicações escrevem na mesma base.

```sql
CREATE TABLE invoice (
    id          BIGSERIAL PRIMARY KEY,
    tenant_id   UUID NOT NULL REFERENCES tenant (id),
    amount      NUMERIC(12, 2) NOT NULL CHECK (amount >= 0),
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

## Índices com propósito

Um índice acelera leituras mas custa escrita e espaço. Crio índices para colunas usadas em `WHERE`, `JOIN` e `ORDER BY` frequentes; uso `EXPLAIN (ANALYZE, BUFFERS)` para validar planos em dados realistas.

```sql
CREATE INDEX CONCURRENTLY idx_invoice_tenant_created
    ON invoice (tenant_id, created_at DESC);

EXPLAIN (ANALYZE, BUFFERS)
SELECT id, amount
FROM invoice
WHERE tenant_id = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'
ORDER BY created_at DESC
LIMIT 20;
```

## N+1 e ORMs

Em Django ou SQLAlchemy, **select_related** / **prefetch_related** (ou equivalentes) reduzem idas desnecessárias à base. Em APIs públicas, paginação estável (cursor ou offset consciente do volume) protege o servidor.

```python
# Django — uma query para faturas + cliente (FK)
qs = (
    Invoice.objects.select_related("customer")
    .filter(tenant_id=tenant_id)
    .order_by("-created_at")[:20]
)
```

## Manutenção

`VACUUM`, estatísticas atualizadas e monitorização de conexões evitam degradação lenta ao longo do tempo. Em equipa, convencionar revisão de migrações antes de merge.
