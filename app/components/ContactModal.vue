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

          <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
            <div>
              <label :for="nameId" class="block text-sm font-medium text-on-surface-variant mb-1.5">
                Nome
              </label>
              <input
                :id="nameId"
                v-model="name"
                type="text"
                name="name"
                autocomplete="name"
                class="w-full rounded-xl border border-outline-variant/25 bg-surface-container-highest px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/60"
                placeholder="O seu nome"
              />
            </div>
            <div>
              <label :for="emailId" class="block text-sm font-medium text-on-surface-variant mb-1.5">
                E-mail
              </label>
              <input
                :id="emailId"
                v-model="email"
                type="email"
                name="email"
                autocomplete="email"
                required
                class="w-full rounded-xl border border-outline-variant/25 bg-surface-container-highest px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/60"
                placeholder="nome@exemplo.com"
              />
            </div>
            <div>
              <label :for="messageId" class="block text-sm font-medium text-on-surface-variant mb-1.5">
                Mensagem
              </label>
              <textarea
                :id="messageId"
                v-model="message"
                name="message"
                rows="4"
                required
                class="w-full rounded-xl border border-outline-variant/25 bg-surface-container-highest px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/60 resize-y min-h-[120px]"
                placeholder="Em que posso ajudar?"
              />
            </div>
            <button
              type="submit"
              class="mt-2 w-full sm:w-auto self-center sm:self-end min-h-12 px-8 py-3 rounded-xl bg-primary text-on-primary font-headline font-bold tracking-tight shadow-[0_12px_40px_rgba(87,241,219,0.25)] hover:opacity-95 active:scale-[0.98] transition-all"
            >
              Enviar
            </button>
          </form>

          <p class="mt-6 text-center text-sm text-on-surface-variant">
            <a
              :href="linkedinHref"
              class="text-primary font-semibold hover:underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'
import { useId, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    linkedinHref: string
    recipientEmail: string
    closeLabel: string
    title?: string
  }>(),
  { title: 'Contato' },
)

const emit = defineEmits<{ 'update:modelValue': [boolean] }>()

const titleId = useId()
const nameId = useId()
const emailId = useId()
const messageId = useId()

const name = ref('')
const email = ref('')
const message = ref('')

function close() {
  emit('update:modelValue', false)
}

function onSubmit() {
  const to = props.recipientEmail.trim()
  if (!to) return
  const subject = encodeURIComponent(`Contato via site — ${name.value || 'visitante'}`)
  const body = encodeURIComponent(
    `Nome: ${name.value}\nE-mail: ${email.value}\n\n${message.value}`,
  )
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
}

watch(
  () => props.modelValue,
  (open) => {
    if (!open) {
      name.value = ''
      email.value = ''
      message.value = ''
    }
  },
)
</script>
