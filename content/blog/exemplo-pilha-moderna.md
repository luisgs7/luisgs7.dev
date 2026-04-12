---
title: 'Exemplo: uma pilha moderna em produção'
description: 'Artigo de referência para o blog — Python, APIs, DevOps e dados no mesmo fluxo de entrega.'
date: '2026-04-12'
tag: 'Python'
tagVariant: 'primary'
image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80'
imageAlt: 'Código num ecrã com ambiente de desenvolvimento'
readTime: '8 min'
tags:
  - FastAPI
  - Docker
  - PostgreSQL
---

Este é um **artigo de exemplo**: use-o como modelo ao adicionar conteúdo real. Os filtros do `/blog` são gerados **dinamicamente**: junta os tópicos de todos os artigos. Se não preencheres `topics` no frontmatter, os botões são **inferidos** a partir de `tag` e `tags` (por exemplo FastAPI → Python e APIs; Docker → DevOps; PostgreSQL → Dados). Opcionalmente podes definir `topics` à mão para forçar rótulos exactos.

## Python

Serviços em Python beneficiam de tipagem gradual e de testes próximos do domínio. O cartão deste post usa o campo `tag` para o rótulo principal do cartão.

## APIs

REST ou eventos, o contrato importa mais do que o framework. Documente limites de taxa e versões públicas.

## DevOps

Pipeline repetível, imagens mínimas e observabilidade desde o primeiro deploy — menos surpresas em produção.

## Dados

Modelos e migrações alinhados com o produto evitam débito técnico silencioso em bases relacionais.

---

Quando criares novos ficheiros em `content/blog/`, basta `tag` e `tags` coerentes, ou acrescenta `topics` no frontmatter para rótulos à medida. A barra de filtros só mostra tópicos que pelo menos um artigo “oferece”.
