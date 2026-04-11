---
title: APIs com Django REST Framework em produção
description: Padrões de manutenção, testes e evolução de endpoints que servem equipas e clientes em ambiente real.
date: '2025-04-08'
tag: Django
tagVariant: primary
image: https://lh3.googleusercontent.com/aida-public/AB6AXuBKGDHBhEANTThCcbC2tmS_8easCll3MT_K00yEE7dSzkSrm0BvuvhkChuTpu2LBE3SJ8PZT7n0Hp4wEuIHVb-VfA0MhhlYtg131N9A49kR48XxmHnG1mD3gZhg6XHzs9LoZ5q455uEETf_Zts3XDUngLuQVXXU2qZjY9-OlFoJ-V2gFweYNJJpvNv21lVXzr4aHXXr39G4n1a4A2p6ODTMDfb6foBc19whwShuxZ2oE-qUTsiAfi9rNMm1CVyz_jNsCMbLtImHxMY
imageAlt: Código e documentação de API
readTime: '7 min de leitura'
tags:
  - Django
  - DRF
  - Python
---

## Contexto

Em projetos reais, uma API não é só um conjunto de views: é um contrato com clientes móveis, frontends e integrações. O Django REST Framework (DRF) dá estrutura; o desafio é manter consistência quando o tráfego e as equipas crescem.

## Versionamento e contratos

Documentar endpoints com **OpenAPI** (ou esquemas gerados pelo DRF) reduz ambiguidades. Versionar na URL (`/v1/`, `/v2/`) ou por cabeçalho permite evoluir sem quebrar clientes legados de um dia para o outro.

```python
# urls.py — rotas por versão
from django.urls import include, path

urlpatterns = [
    path("api/v1/", include("myapp.api.v1.urls")),
    path("api/v2/", include("myapp.api.v2.urls")),
]
```

```python
# views.py — ViewSet com serializer explícito e permissões
from rest_framework import viewsets, permissions

class InvoiceViewSet(viewsets.ModelViewSet):
    queryset = Invoice.objects.all().order_by("-created_at")
    serializer_class = InvoiceSerializer
    permission_classes = [permissions.IsAuthenticated]
```

## Testes que importam

Priorizo testes de integração sobre serializers e views críticas: autenticação, permissões e fluxos que mexem em dinheiro ou dados sensíveis. Factories (por exemplo com `factory_boy`) mantêm os testes legíveis e estáveis.

```python
import pytest
from rest_framework.test import APIClient

@pytest.mark.django_db
def test_create_invoice_returns_201_for_authenticated_user(user, invoice_payload):
    client = APIClient()
    client.force_authenticate(user=user)
    response = client.post("/api/v1/invoices/", invoice_payload, format="json")
    assert response.status_code == 201
    assert response.data["status"] == "draft"
```

## Próximos passos

Monitorizar latência por view, erros 4xx/5xx e filas associadas (Celery) ajuda a decidir onde investir refactor antes que a dívida técnica se torne bloqueante.
