import type { BlogPostCard } from '~/composables/useBlogPostCards'

/** Temas do hero do /blog — mapeados para tag principal e tags do frontmatter */
export type BlogTopicId = 'python' | 'apis' | 'devops' | 'dados'

export function postMatchesTopic(post: BlogPostCard, topicId: BlogTopicId): boolean {
  const extra = (post.tags ?? []).map((t) => t.toLowerCase())
  const primary = post.tag
  switch (topicId) {
    case 'python':
      return ['Django', 'FastAPI'].includes(primary) || extra.includes('python')
    case 'apis':
      return ['Django', 'FastAPI'].includes(primary)
    case 'devops':
      return primary === 'DevOps' || extra.some((t) => t.includes('devops'))
    case 'dados':
      return primary === 'PostgreSQL' || extra.some((t) => /postgres|^sql$|dados/i.test(t))
    default:
      return false
  }
}
