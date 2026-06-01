<template>
  <a
    :href="resolvedHref"
    target="_blank"
    rel="noopener noreferrer"
    :class="rootClass"
  >
    <span
      v-if="variant === 'hero'"
      class="pointer-events-none absolute -inset-1 rounded-[inherit] bg-gradient-to-r from-primary/40 via-tertiary/30 to-primary/40 opacity-70 blur-md animate-pulse"
      aria-hidden="true"
    />
    <span
      v-if="variant === 'hero'"
      class="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
      aria-hidden="true"
    >
      <span
        class="absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-resume-shimmer"
      />
    </span>
    <span :class="innerClass">
      <FileText
        class="size-[1.1em] shrink-0"
        :class="variant === 'hero' ? 'text-on-primary/90' : 'text-primary'"
        aria-hidden="true"
        stroke-width="2.25"
      />
      <span>{{ resolvedLabel }}</span>
      <ArrowRight
        v-if="variant !== 'nav'"
        class="size-[1.1em] shrink-0 transition-transform group-hover:translate-x-1"
        :class="variant === 'hero' ? 'text-on-primary/90' : 'text-primary'"
        aria-hidden="true"
        stroke-width="2.25"
      />
    </span>
  </a>
</template>

<script setup lang="ts">
import { ArrowRight, FileText } from 'lucide-vue-next'
import { computed } from 'vue'

type Variant = 'nav' | 'hero' | 'sidebar'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    href?: string
    label?: string
  }>(),
  {
    variant: 'hero',
  },
)

const copy = useHomeCopy()

const resolvedHref = computed(() => props.href ?? copy.resume.href)

const resolvedLabel = computed(() => {
  if (props.label) return props.label
  if (props.variant === 'nav') return copy.nav.resume
  return copy.hero.ctaSecondary
})

const rootClass = computed(() => {
  const base = 'group relative inline-flex items-center justify-center font-bold transition-transform active:scale-95'

  if (props.variant === 'nav') {
    return [
      base,
      'text-primary bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-lg border border-primary/25 animate-resume-glow',
    ]
  }

  if (props.variant === 'sidebar') {
    return [base, 'w-full rounded-xl animate-resume-glow']
  }

  return [base, 'rounded-xl animate-resume-glow']
})

const innerClass = computed(() => {
  const base = 'relative z-10 inline-flex items-center justify-center gap-2.5 rounded-[inherit] w-full'

  if (props.variant === 'nav') {
    return base
  }

  if (props.variant === 'sidebar') {
    return [
      base,
      'min-h-12 px-5 py-3.5 bg-gradient-to-br from-primary to-primary-container text-on-primary text-sm shadow-lg shadow-primary/25',
    ]
  }

  return [
    base,
    'min-h-12 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary text-sm sm:text-base shadow-[0_12px_40px_rgba(87,241,219,0.35)]',
  ]
})
</script>
