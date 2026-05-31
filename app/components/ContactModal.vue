<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      >
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
        <div
          role="dialog"
          aria-modal="true"
          :aria-labelledby="titleId"
          class="relative z-10 w-full max-w-lg rounded-2xl border border-outline-variant/20 bg-surface-container-low shadow-[0_24px_80px_rgba(0,0,0,0.55)] p-6 sm:p-8"
          @click.stop
        >
          <div class="flex items-start justify-between gap-4 mb-6">
            <h2 :id="titleId" class="font-headline text-xl sm:text-2xl font-bold text-on-surface">
              {{ props.title }}
            </h2>
            <button
              type="button"
              class="shrink-0 flex items-center justify-center size-10 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border border-outline-variant/20 transition-colors"
              :aria-label="closeLabel"
              @click="close"
            >
              <X class="size-6 shrink-0" aria-hidden="true" stroke-width="2" />
            </button>
          </div>

          <nav class="flex flex-col gap-3" aria-label="Canais de contato">
            <div
              class="flex items-stretch gap-2 rounded-xl border border-outline-variant/25 bg-surface-container-highest p-2 sm:p-2.5"
            >
              <a
                :href="linkedinHref"
                class="group flex min-w-0 flex-1 items-center gap-4 rounded-lg px-2 py-2 text-on-surface transition-colors hover:bg-surface-container-high focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#0A66C2]/15 text-[#0A66C2] transition-colors group-hover:bg-[#0A66C2]/25"
                  aria-hidden="true"
                >
                  <svg class="size-6" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </span>
                <span class="min-w-0 flex-1 text-left">
                  <span class="block text-xs font-medium uppercase tracking-wide text-on-surface-variant">
                    LinkedIn
                  </span>
                  <span class="block truncate font-medium text-on-surface group-hover:text-primary">
                    Perfil profissional
                  </span>
                </span>
              </a>
              <button
                type="button"
                class="copy-channel-btn shrink-0 self-center"
                :class="copied === 'linkedin' && 'copy-channel-btn--done'"
                :aria-label="copied === 'linkedin' ? 'Link do LinkedIn copiado' : 'Copiar link do LinkedIn'"
                @click="copyLinkedIn"
              >
                <Check v-if="copied === 'linkedin'" class="size-5" stroke-width="2.25" aria-hidden="true" />
                <Copy v-else class="size-5" stroke-width="2" aria-hidden="true" />
              </button>
            </div>

            <div
              class="flex items-stretch gap-2 rounded-xl border border-outline-variant/25 bg-surface-container-highest p-2 sm:p-2.5"
            >
              <a
                :href="mailtoHref"
                class="group flex min-w-0 flex-1 items-center gap-4 rounded-lg px-2 py-2 text-on-surface transition-colors hover:bg-surface-container-high focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                <span
                  class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20"
                  aria-hidden="true"
                >
                  <Mail class="size-6" stroke-width="2" />
                </span>
                <span class="min-w-0 flex-1 text-left">
                  <span
                    class="block text-xs sm:text-sm font-medium tracking-wide text-on-surface-variant group-hover:text-primary truncate"
                  >
                    {{ contactEmail }}
                  </span>
                </span>
              </a>
              <button
                type="button"
                class="copy-channel-btn shrink-0 self-center"
                :class="copied === 'email' && 'copy-channel-btn--done'"
                :aria-label="copied === 'email' ? 'E-mail copiado' : 'Copiar e-mail'"
                @click="copyEmail"
              >
                <Check v-if="copied === 'email'" class="size-5" stroke-width="2.25" aria-hidden="true" />
                <Copy v-else class="size-5" stroke-width="2" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { Check, Copy, Mail, X } from 'lucide-vue-next'

const CONTACT_EMAIL = 'contato@luisgs7.dev'
const COPY_FEEDBACK_MS = 2000

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    linkedinHref: string
    closeLabel: string
    title?: string
  }>(),
  { title: 'Contato' },
)

const emit = defineEmits<{ 'update:modelValue': [boolean] }>()

const titleId = useId()

const contactEmail = CONTACT_EMAIL
const mailtoHref = `mailto:${CONTACT_EMAIL}`

const copied = ref<'linkedin' | 'email' | null>(null)
let copyFeedbackTimer: ReturnType<typeof setTimeout> | undefined

function close() {
  emit('update:modelValue', false)
}

function showCopyFeedback(field: 'linkedin' | 'email') {
  copied.value = field
  if (copyFeedbackTimer) clearTimeout(copyFeedbackTimer)
  copyFeedbackTimer = setTimeout(() => {
    copied.value = null
  }, COPY_FEEDBACK_MS)
}

async function copyToClipboard(text: string, field: 'linkedin' | 'email') {
  try {
    await navigator.clipboard.writeText(text)
    showCopyFeedback(field)
  } catch {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.left = '-9999px'
    document.body.appendChild(textarea)
    textarea.select()
    try {
      document.execCommand('copy')
      showCopyFeedback(field)
    } finally {
      document.body.removeChild(textarea)
    }
  }
}

function copyLinkedIn() {
  copyToClipboard(props.linkedinHref, 'linkedin')
}

function copyEmail() {
  copyToClipboard(CONTACT_EMAIL, 'email')
}

onUnmounted(() => {
  if (copyFeedbackTimer) clearTimeout(copyFeedbackTimer)
})
</script>

<style scoped>
.copy-channel-btn {
  @apply flex size-10 items-center justify-center rounded-lg border border-outline-variant/25 text-on-surface-variant transition-colors hover:border-primary/40 hover:bg-surface-container-high hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60;
}

.copy-channel-btn--done {
  @apply border-primary/40 bg-primary/10 text-primary;
}
</style>
