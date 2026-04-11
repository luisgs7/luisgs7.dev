import { textContent } from 'minimark'
import type { MinimarkNode } from 'minimark'

import { slugifyHeading } from './slugify'

export interface BlogTocItem {
  id: string
  text: string
  depth: 2 | 3
}

function walk(nodes: MinimarkNode[], items: BlogTocItem[]): void {
  for (const node of nodes) {
    if (typeof node === 'string') continue
    const tag = node[0]
    if (tag === 'h2' || tag === 'h3') {
      const depth = tag === 'h2' ? 2 : 3
      const text = textContent(node).trim()
      if (text) items.push({ id: slugifyHeading(text), text, depth })
    }
    if (node.length > 2) walk(node.slice(2) as MinimarkNode[], items)
  }
}

/** Índice (h2/h3) a partir do corpo Minimark do @nuxt/content — sem API nem ficheiros extra. */
export function extractBlogTocFromBody(body: unknown): BlogTocItem[] {
  const items: BlogTocItem[] = []
  if (!body || typeof body !== 'object') return items
  const o = body as { type?: string; value?: MinimarkNode[] }
  if (Array.isArray(o.value)) {
    walk(o.value, items)
  }
  return items
}
