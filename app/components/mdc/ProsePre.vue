<template>
  <div class="code-block group my-8 sm:my-10 w-full min-w-0">
    <div
      class="code-block__chrome flex items-center justify-between gap-3 px-4 py-2.5 rounded-t-xl border border-b-0 border-outline-variant/15 bg-surface-container-low"
      aria-hidden="true"
    >
      <div class="flex items-center gap-2">
        <span class="size-2.5 rounded-full bg-red-500/80" />
        <span class="size-2.5 rounded-full bg-amber-500/80" />
        <span class="size-2.5 rounded-full bg-emerald-500/80" />
      </div>
      <span class="font-label text-[10px] uppercase tracking-[0.18em] text-on-surface-variant/70 truncate">
        {{ chromeLabel }}
      </span>
    </div>
    <pre
      :class="[
        'code-block__pre code-font relative w-full min-w-0 overflow-x-auto rounded-b-xl border border-outline-variant/15 bg-surface-container-lowest px-4 sm:px-6 py-4 sm:py-5 text-[11px] sm:text-[0.8125rem] leading-relaxed shadow-[0_16px_48px_rgba(0,0,0,0.35)]',
        props.class,
      ]"
    ><slot /></pre>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array,
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})

const LANG_LABELS: Record<string, string> = {
  python: 'Python',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  bash: 'Bash',
  shell: 'Shell',
  sql: 'SQL',
  json: 'JSON',
  yaml: 'YAML',
  vue: 'Vue',
  html: 'HTML',
  css: 'CSS',
}

const chromeLabel = computed(() => {
  if (props.filename) return props.filename
  const lang = props.language?.toLowerCase()
  if (lang && LANG_LABELS[lang]) return LANG_LABELS[lang]
  if (lang) return lang
  return 'Código'
})
</script>
