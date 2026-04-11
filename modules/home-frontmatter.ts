import { readFileSync } from 'node:fs'
import { join } from 'pathe'
import { parse as parseYaml } from 'yaml'
import { defineNuxtModule } from '@nuxt/kit'
import type { Plugin } from 'vite'

const VIRTUAL_RESOLVED = '\0virtual:home-frontmatter'
const VIRTUAL_PUBLIC = 'virtual:home-frontmatter'

/** Mesma regra que `useHomeCopy` usava para isolar o YAML entre `---`. */
function extractHomeYamlBlock(raw: string): string {
  const text = raw.replace(/^\uFEFF/, '')
  if (!text.startsWith('---')) return ''
  const afterOpen = text.indexOf('\n', 3)
  if (afterOpen === -1) return ''
  const fromContent = text.slice(afterOpen + 1)
  const closeIdx = fromContent.search(/^\s*---\s*$/m)
  if (closeIdx === -1) return ''
  return fromContent.slice(0, closeIdx).trimEnd()
}

export default defineNuxtModule({
  meta: { name: 'home-frontmatter' },
  setup(_options, nuxt) {
    const plugin: Plugin = {
      name: 'virtual-home-frontmatter',
      enforce: 'pre',
      resolveId(id) {
        if (id === VIRTUAL_PUBLIC) return VIRTUAL_RESOLVED
      },
      load(id) {
        if (id !== VIRTUAL_RESOLVED) return null
        const path = join(nuxt.options.rootDir, 'content/home.md')
        const raw = readFileSync(path, 'utf8')
        const yamlBlock = extractHomeYamlBlock(raw)
        if (!yamlBlock) {
          throw new Error('[home-frontmatter] Bloco YAML em falta em content/home.md')
        }
        const data = parseYaml(yamlBlock)
        return `export default ${JSON.stringify(data ?? {})}`
      },
    }

    nuxt.hooks.hook('vite:extendConfig', (config) => {
      config.plugins ??= []
      config.plugins.push(plugin)
    })
  },
})
