import type { BlogPostCard } from '~/composables/useBlogPostCards'

/** Ordem sugerida no hero quando estes rótulos existem nos artigos */
export const PREFERRED_TOPIC_ORDER = ['Python', 'APIs', 'DevOps', 'Dados'] as const

const preferredTopicSet = new Set<string>(PREFERRED_TOPIC_ORDER)

/** Agrega rótulos únicos; ordem preferencial primeiro, depois A–Z (pt). */
export function sortAggregatedTopicLabels(labels: Iterable<string>): string[] {
  const set = new Set<string>()
  for (const raw of labels) {
    const t = raw.trim()
    if (t) set.add(t)
  }
  const preferred = PREFERRED_TOPIC_ORDER.filter((p) => set.has(p))
  const rest = [...set]
    .filter((l) => !preferredTopicSet.has(l))
    .sort((a, b) => a.localeCompare(b, 'pt', { sensitivity: 'base' }))
  return [...preferred, ...rest]
}

/**
 * Palavras-chave (tag ou tags, sem acentos) → rótulos de filtro do /blog.
 * Usado quando o artigo não define `topics` no frontmatter.
 */
const KEYWORD_TO_TOPICS: Record<string, string[]> = {
  python: ['Python'],
  django: ['Python', 'APIs'],
  fastapi: ['Python', 'APIs'],
  flask: ['Python'],
  pydantic: ['Python'],
  pytest: ['Python'],
  celery: ['Python'],
  api: ['APIs'],
  apis: ['APIs'],
  rest: ['APIs'],
  graphql: ['APIs'],
  openapi: ['APIs'],
  swagger: ['APIs'],
  http: ['APIs'],
  grpc: ['APIs'],
  docker: ['DevOps'],
  kubernetes: ['DevOps'],
  k8s: ['DevOps'],
  terraform: ['DevOps'],
  ansible: ['DevOps'],
  devops: ['DevOps'],
  ci: ['DevOps'],
  cd: ['DevOps'],
  githubactions: ['DevOps'],
  gitlabci: ['DevOps'],
  jenkins: ['DevOps'],
  nginx: ['DevOps'],
  observabilidade: ['DevOps'],
  prometheus: ['DevOps'],
  grafana: ['DevOps'],
  postgresql: ['Dados'],
  postgres: ['Dados'],
  sql: ['Dados'],
  mysql: ['Dados'],
  mongo: ['Dados'],
  mongodb: ['Dados'],
  redis: ['Dados'],
  dados: ['Dados'],
  analytics: ['Dados'],
  etl: ['Dados'],
  pandas: ['Dados', 'Python'],
  numpy: ['Dados', 'Python'],
}

function normalizeKeyword(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9+]+/g, '')
}

function tokensFromTagging(tag: string, tags: string[]): string[] {
  const parts: string[] = []
  if (tag) parts.push(tag)
  for (const t of tags) {
    if (t) parts.push(t)
  }
  const tokens = new Set<string>()
  for (const p of parts) {
    for (const chunk of p.split(/[/,&|]+/)) {
      for (const w of chunk.trim().split(/\s+/)) {
        const n = normalizeKeyword(w)
        if (n) tokens.add(n)
      }
    }
  }
  return [...tokens]
}

/** Rótulos inferidos a partir de `tag` e `tags` (quando não há `topics` no MD). */
export function deriveFilterTopicsFromTags(tag: string, tags: string[]): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  for (const token of tokensFromTagging(tag, tags)) {
    const mapped = KEYWORD_TO_TOPICS[token]
    if (!mapped) continue
    for (const label of mapped) {
      const key = label.toLowerCase()
      if (seen.has(key)) continue
      seen.add(key)
      out.push(label)
    }
  }
  return sortAggregatedTopicLabels(out)
}

/** `topics` explícitos no MD ou, se omitidos/vazios, inferência a partir de tag/tags. */
export function resolvePostFilterTopics(
  explicitTopics: string[],
  tag: string,
  tags: string[],
): string[] {
  const cleaned = explicitTopics.map((t) => t.trim()).filter(Boolean)
  if (cleaned.length) return sortAggregatedTopicLabels(cleaned)
  return deriveFilterTopicsFromTags(tag, tags)
}

export function postMatchesTopicLabel(post: BlogPostCard, topicLabel: string): boolean {
  const needle = topicLabel.trim().toLowerCase()
  if (!needle) return false
  return (post.topics ?? []).some((t) => t.trim().toLowerCase() === needle)
}
