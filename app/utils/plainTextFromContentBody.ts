import { textContent } from 'minimark'
import type { MinimarkNode } from 'minimark'

/** Texto corrido a partir do corpo Minimark do @nuxt/content (para pesquisa no cliente). */
export function plainTextFromMinimarkBody(body: unknown): string {
  try {
    if (!body || typeof body !== 'object') return ''
    const o = body as { value?: unknown[] }
    if (!Array.isArray(o.value)) return ''
    const parts: string[] = []
    for (const node of o.value) {
      if (typeof node === 'string') parts.push(node)
      else if (Array.isArray(node) && node.length >= 1 && typeof node[0] === 'string') {
        parts.push(textContent(node as MinimarkNode))
      }
    }
    return parts.join(' ').replace(/\s+/g, ' ').trim()
  } catch {
    return ''
  }
}
