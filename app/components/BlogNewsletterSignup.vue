<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    kicker?: string
    blurb?: string
    placeholder?: string
    buttonLabel?: string
    mailtoSubject?: string
    mailtoBodyIntro?: string
  }>(),
  {
    kicker: 'Newsletter',
    blurb: 'Receba artigos sobre backend, APIs e boas práticas na sua caixa de entrada.',
    placeholder: 'O seu e-mail',
    buttonLabel: 'Subscrever',
    mailtoSubject: 'Subscrição newsletter — luisgs7.dev',
    mailtoBodyIntro: 'Quero subscrever a newsletter.',
  },
)

const email = defineModel<string>({ default: '' })

const copy = useHomeCopy()
const inputId = useId()

const emailLabel = 'E-mail para subscrição'

function submit() {
  const addr = email.value.trim()
  if (!addr) return
  const recipient = copy.contact?.formEmail?.trim()
  if (!recipient) return
  const subject = encodeURIComponent(props.mailtoSubject)
  const body = encodeURIComponent(
    `${props.mailtoBodyIntro}\n\nO meu e-mail: ${addr}\n`,
  )
  if (import.meta.client) {
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
  }
}
</script>

<template>
  <form
    class="p-6 rounded-xl bg-surface-container-low border border-outline-variant/10"
    @submit.prevent="submit"
  >
    <p class="text-xs font-label text-on-surface-variant mb-4 uppercase tracking-widest">
      {{ props.kicker }}
    </p>
    <p class="text-sm font-headline font-bold mb-4 text-on-surface">
      {{ props.blurb }}
    </p>
    <label class="sr-only" :for="inputId">{{ emailLabel }}</label>
    <input
      :id="inputId"
      v-model="email"
      type="email"
      name="email"
      autocomplete="email"
      inputmode="email"
      required
      :placeholder="props.placeholder"
      class="w-full mb-3 rounded-lg border border-outline-variant/20 bg-surface-container-highest py-2.5 px-3 text-xs text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/30"
    />
    <button
      type="submit"
      class="w-full py-2.5 text-center bg-surface-container-highest text-primary border border-primary/20 text-xs font-bold rounded-lg hover:bg-primary hover:text-on-primary transition-all min-h-11"
    >
      {{ props.buttonLabel }}
    </button>
  </form>
</template>
