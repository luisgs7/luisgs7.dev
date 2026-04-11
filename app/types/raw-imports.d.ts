declare module '*.md?raw' {
  const content: string
  export default content
}

declare module 'virtual:home-frontmatter' {
  /** JSON emitido em build a partir de `content/home.md` — alinhado com `HomeFrontmatter`. */
  const data: Record<string, unknown>
  export default data
}
