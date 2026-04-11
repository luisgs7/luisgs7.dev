/** Slug para âncoras (IDs) a partir do texto do título. */
export function slugifyHeading(text: string) {
  const t = text
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
  return t || 'secao'
}
