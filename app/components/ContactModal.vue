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
            <a
              :href="linkedinHref"
              class="group flex items-center gap-4 rounded-xl border border-outline-variant/25 bg-surface-container-highest px-4 py-3.5 text-on-surface transition-colors hover:border-primary/40 hover:bg-surface-container-high focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
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

            <a
              :href="mailtoHref"
              class="group flex items-center gap-4 rounded-xl border border-outline-variant/25 bg-surface-container-highest px-4 py-3.5 text-on-surface transition-colors hover:border-primary/40 hover:bg-surface-container-high focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              <span
                class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20"
                aria-hidden="true"
              >
                <Mail class="size-6" stroke-width="2" />
              </span>
              <span class="min-w-0 flex-1 text-left">
                <span class="block text-xs font-medium uppercase tracking-wide text-on-surface-variant">
                  E-mail
                </span>
                <span class="block truncate font-medium text-on-surface group-hover:text-primary">
                  {{ contactEmail }}
                </span>
              </span>
            </a>

            <a
              :href="whatsappHref"
              class="group flex items-center gap-4 rounded-xl border border-outline-variant/25 bg-surface-container-highest px-4 py-3.5 text-on-surface transition-colors hover:border-primary/40 hover:bg-surface-container-high focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#25D366] transition-colors group-hover:bg-[#25D366]/25"
                aria-hidden="true"
              >
                <svg class="size-6" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  />
                </svg>
              </span>
              <span class="min-w-0 flex-1 text-left">
                <span class="block text-xs font-medium uppercase tracking-wide text-on-surface-variant">
                  WhatsApp
                </span>
                <span class="block truncate font-medium text-on-surface group-hover:text-primary">
                  {{ whatsappDisplay }}
                </span>
              </span>
            </a>
          </nav>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { Mail, X } from 'lucide-vue-next'

const CONTACT_EMAIL = 'luisgsilva260@gmail.com'
/** E.164 sem +: Brasil 55, DDD 63, 992416684 */
const WHATSAPP_E164 = '5563992416684'

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
const whatsappHref = `https://wa.me/${WHATSAPP_E164}`
const whatsappDisplay = '+55 (63) 99241-6684'

function close() {
  emit('update:modelValue', false)
}
</script>
