import { plainTextFromMinimarkBody } from '~/utils/plainTextFromContentBody'
import { resolvePostFilterTopics } from '~/utils/blogTopicFilter'

import type { StatAccent } from './useHomeCopy'

export interface BlogPostCard {
  tag: string
  tagVariant: StatAccent
  title: string
  excerpt: string
  image: string
  imageAlt: string
  path: string
  /** ISO YYYY-MM-DD (para formatação) */
  date: string
  tagClass: string
  shadow: StatAccent
  /** Tags extra do frontmatter */
  tags: string[]
  /** Rótulos de filtro do /blog: campo `topics` no MD ou inferidos de `tag` / `tags` */
  topics: string[]
  /** Título, resumo, tags e texto do corpo em minúsculas — para pesquisa */
  searchBlob: string
}

export function mapBlogDocumentToCard(doc: {
  title?: string
  description?: string
  date?: string
  tag?: string
  tagVariant?: string
  image?: string
  imageAlt?: string
  path?: string
  tags?: string[]
  topics?: string[]
  body?: unknown
  meta?: { tags?: string[]; topics?: string[]; body?: unknown; [key: string]: unknown }
}): BlogPostCard | null {
  if (!doc.path || !doc.title) return null
  const tagVariant = (doc.tagVariant === 'tertiary' ? 'tertiary' : 'primary') as StatAccent
  const rawTags = doc.tags ?? doc.meta?.tags
  const tags = Array.isArray(rawTags)
    ? rawTags.filter((t): t is string => typeof t === 'string')
    : []
  const rawTopics = doc.topics ?? doc.meta?.topics
  const explicitTopics = Array.isArray(rawTopics)
    ? rawTopics.filter((t): t is string => typeof t === 'string').map((t) => t.trim()).filter(Boolean)
    : []
  const tagStr = doc.tag ?? ''
  const topics = resolvePostFilterTopics(explicitTopics, tagStr, tags)
  const body = doc.body ?? doc.meta?.body
  let plainBody = ''
  try {
    plainBody = plainTextFromMinimarkBody(body)
  } catch {
    plainBody = ''
  }
  const searchBlob = [
    doc.title,
    doc.description ?? '',
    doc.tag ?? '',
    ...tags,
    ...topics,
    plainBody,
  ]
    .join('\n')
    .toLowerCase()
  return {
    tag: doc.tag ?? '',
    tagVariant,
    title: doc.title,
    excerpt: doc.description ?? '',
    image: doc.image ?? '',
    imageAlt: doc.imageAlt ?? '',
    path: doc.path,
    date: typeof doc.date === 'string' ? doc.date : '',
    tagClass:
      tagVariant === 'tertiary' ? 'bg-tertiary/10 text-tertiary' : 'bg-primary/10 text-primary',
    shadow: tagVariant,
    tags,
    topics,
    searchBlob,
  }
}

export async function useLatestBlogPostsForHome() {
  return useAsyncData(
    'home-latest-blog',
    async () => {
      const docs = await queryCollection('blog').order('date', 'DESC').limit(4).all()
      return docs.map((d) => mapBlogDocumentToCard(d)).filter((x): x is BlogPostCard => x !== null)
    },
    { default: () => [] },
  )
}

export async function useAllBlogPostCards() {
  return useAsyncData(
    'blog-all-posts',
    async () => {
      const docs = await queryCollection('blog').order('date', 'DESC').all()
      return docs.map((d) => mapBlogDocumentToCard(d)).filter((x): x is BlogPostCard => x !== null)
    },
    { default: () => [] },
  )
}
