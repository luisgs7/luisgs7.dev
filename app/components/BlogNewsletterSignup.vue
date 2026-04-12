<script setup lang="ts">
import { X } from 'lucide-vue-next'
import { ref } from 'vue'
import { kitSubscribeForm } from '~/config/kit'

const props = withDefaults(
  defineProps<{
    kicker?: string
    blurb?: string
    placeholder?: string
    namePlaceholder?: string
    buttonLabel?: string
    /** Rótulo acessível do botão que fecha o aviso de confirmação */
    closeConfirmLabel?: string
  }>(),
  {
    kicker: 'Newsletter',
    blurb: 'Receba artigos sobre backend, APIs e boas práticas na sua caixa de entrada.',
    placeholder: 'O seu e-mail',
    namePlaceholder: 'O seu nome',
    buttonLabel: 'Subscrever',
    closeConfirmLabel: 'Fechar aviso de confirmação',
  },
)

const email = defineModel<string>({ default: '' })
const name = defineModel<string>('name', { default: '' })

const inputId = useId()
const nameInputId = useId()
const confirmTitleId = useId()

const emailLabel = 'E-mail para subscrição'
const nameLabel = 'Nome'

const submitting = ref(false)
const submitError = ref('')
const showConfirmModal = ref(false)
const confirmedEmail = ref('')

type KitSubscribeJson =
  | { status: 'success'; redirect_url?: string }
  | { status: 'failed'; errors?: { messages?: string[] } }

async function onSubmit(event: Event) {
  const form = event.currentTarget as HTMLFormElement
  submitError.value = ''
  submitting.value = true
  try {
    const body = new URLSearchParams(new FormData(form) as never)
    const res = await fetch(kitSubscribeForm.action, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body,
    })
    const data = (await res.json()) as KitSubscribeJson
    if (data.status === 'success') {
      const addr = (form.elements.namedItem('email_address') as HTMLInputElement | null)?.value ?? ''
      confirmedEmail.value = addr
      showConfirmModal.value = true
      name.value = ''
      email.value = ''
    } else {
      const msg = data.errors?.messages?.[0]
      submitError.value = msg ?? 'Não foi possível subscrever. Tente de novo.'
    }
  } catch {
    submitError.value = 'Erro de rede. Tente de novo.'
  } finally {
    submitting.value = false
  }
}

function closeConfirmModal() {
  showConfirmModal.value = false
}
</script>

<template>
  <div>
    <form
      class="p-6 rounded-xl bg-surface-container-low border border-outline-variant/10"
      method="post"
      :action="kitSubscribeForm.action"
      @submit.prevent="onSubmit"
    >
      <p class="text-xs font-label text-on-surface-variant mb-4 uppercase tracking-widest">
        {{ props.kicker }}
      </p>
      <p class="text-sm font-headline font-bold mb-4 text-on-surface">
        {{ props.blurb }}
      </p>
      <label class="sr-only" :for="nameInputId">{{ nameLabel }}</label>
      <input
        :id="nameInputId"
        v-model="name"
        type="text"
        name="fields[first_name]"
        autocomplete="name"
        :placeholder="props.namePlaceholder"
        class="w-full mb-3 rounded-lg border border-outline-variant/20 bg-surface-container-highest py-2.5 px-3 text-xs text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/30"
      />
      <label class="sr-only" :for="inputId">{{ emailLabel }}</label>
      <input
        :id="inputId"
        v-model="email"
        type="email"
        name="email_address"
        autocomplete="email"
        inputmode="email"
        required
        :placeholder="props.placeholder"
        class="w-full mb-3 rounded-lg border border-outline-variant/20 bg-surface-container-highest py-2.5 px-3 text-xs text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/30"
      />
      <p
        v-if="submitError"
        class="mb-3 text-xs text-red-400"
        role="alert"
        aria-live="polite"
      >
        {{ submitError }}
      </p>
      <button
        type="submit"
        :disabled="submitting"
        class="w-full py-2.5 text-center bg-surface-container-highest text-primary border border-primary/20 text-xs font-bold rounded-lg hover:bg-primary hover:text-on-primary transition-all min-h-11 disabled:opacity-60 disabled:pointer-events-none"
      >
        {{ submitting ? 'A enviar…' : props.buttonLabel }}
      </button>
    </form>

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
          v-if="showConfirmModal"
          class="fixed inset-0 z-[210] flex items-center justify-center p-4 sm:p-6"
        >
          <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" @click="closeConfirmModal" />
          <div
            role="dialog"
            aria-modal="true"
            :aria-labelledby="confirmTitleId"
            class="relative z-10 w-full max-w-md rounded-2xl border border-outline-variant/20 bg-surface-container-low shadow-[0_24px_80px_rgba(0,0,0,0.55)] p-6 sm:p-8"
            @click.stop
          >
            <div class="flex items-start justify-between gap-4 mb-4">
              <h2
                :id="confirmTitleId"
                class="font-headline text-lg sm:text-xl font-bold text-on-surface pr-2"
              >
                Confirme o e-mail
              </h2>
              <button
                type="button"
                class="shrink-0 flex items-center justify-center size-10 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border border-outline-variant/20 transition-colors"
                :aria-label="props.closeConfirmLabel"
                @click="closeConfirmModal"
              >
                <X class="size-6 shrink-0" aria-hidden="true" stroke-width="2" />
              </button>
            </div>
            <p class="text-sm text-on-surface-variant leading-relaxed">
              Enviamos uma mensagem para
              <strong class="text-on-surface font-semibold">{{ confirmedEmail }}</strong>. Abra a caixa de entrada e
              clique no link de confirmação para concluir a subscrição na newsletter.
            </p>
            <button
              type="button"
              class="mt-6 w-full min-h-11 rounded-xl bg-primary text-on-primary font-headline text-sm font-bold tracking-tight shadow-[0_12px_40px_rgba(87,241,219,0.25)] hover:opacity-95 active:scale-[0.98] transition-all"
              @click="closeConfirmModal"
            >
              Entendido
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
