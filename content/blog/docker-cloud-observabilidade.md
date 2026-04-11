---
title: Docker, cloud e observabilidade
description: Containers, deploy, Prometheus e Grafana para acompanhar o que corre em produção sem surpresas.
date: '2025-02-26'
tag: DevOps
tagVariant: primary
image: https://lh3.googleusercontent.com/aida-public/AB6AXuD-akQukJUWNBb_ZAvd2o2TMvdcU7GPWqBYP1PSGoOUSXrIg0rutY8FOoOUtcIn23c2WmfPkCD_C9pqJ_YyxCT5EKvVUIz40XwtgMShrNNnZ3NVrvpuw1_HHdfY4PZlbBx4AiEjKldCVMrYw8xHYQVHergWf1QHWULUEEaC71KJa7fKzgezCvqkYrgsxsKRn13beF4cuE5QlQvhowy1XIZaA4ItU-MZ19B2eOCfl473gMRDoHdI90HWhM27K3G8k9w3mWOIj2wSSI0
imageAlt: Monitorização de infraestrutura
readTime: '6 min de leitura'
tags:
  - Docker
  - DevOps
  - Observabilidade
---

## Containers como unidade de deploy

Imagens **Docker** reproduzíveis reduzem o “funciona na minha máquina”. Multi-stage builds mantêm imagens pequenas; `.dockerignore` evita copiar lixo para o contexto de build.

```dockerfile
# Dockerfile — build e runtime separados
FROM python:3.12-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --user --no-cache-dir -r requirements.txt

FROM python:3.12-slim
WORKDIR /app
ENV PATH="/home/appuser/.local/bin:$PATH"
RUN useradd --create-home appuser
USER appuser
COPY --from=builder /root/.local /home/appuser/.local
COPY --chown=appuser:appuser . .
CMD ["gunicorn", "myapp.wsgi:application", "-b", "0.0.0.0:8000"]
```

```yaml
# docker-compose.yml — serviço + healthcheck
services:
  api:
    build: .
    ports:
      - "8000:8000"
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health/"]
      interval: 30s
      timeout: 5s
      retries: 3
```

## Cloud e custos

Escolher instâncias e volumes em função do perfil de carga (CPU vs I/O) e rever periodicamente. Autoscaling ajuda, mas só faz sentido com métricas e limites de custo definidos.

## Prometheus e Grafana

**Prometheus** para séries temporais (latência, erros, uso de CPU/memória) e **Grafana** para dashboards partilhados com a equipa. Alertas acionáveis — com runbooks curtos — evitam fadiga de alerta.

```yaml
# prometheus.yml — scrape da API (ex.: métricas /metrics com django-prometheus ou client nativo)
scrape_configs:
  - job_name: "api"
    metrics_path: /metrics
    static_configs:
      - targets: ["api:8000"]
    relabel_configs:
      - source_labels: [__address__]
        target_label: instance
```

## Cultura operacional

Observabilidade não substitui logs estruturados e tracing quando precisas de seguir um pedido entre serviços. O objetivo é detetar regressões cedo e responder com calma.
