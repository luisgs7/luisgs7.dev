<template>
  <div class="bg-background text-on-surface font-body selection:bg-primary/30 min-h-screen">
    <nav
      class="fixed top-0 w-full z-[100] bg-background/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] pt-[env(safe-area-inset-top,0px)]"
    >
      <div
        class="flex justify-between items-center gap-3 max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 font-headline"
      >
        <NuxtLink
          to="/"
          class="text-lg sm:text-xl font-bold tracking-tighter text-primary shrink-0"
        >
          {{ siteTitle }}
        </NuxtLink>

        <div class="hidden md:flex items-center gap-8">
          <NuxtLink to="/" class="text-on-surface hover:text-primary transition-colors font-headline">
            {{ copy.nav.home }}
          </NuxtLink>
          <NuxtLink to="/blog" class="text-on-surface hover:text-primary transition-colors font-headline">
            {{ copy.nav.blog }}
          </NuxtLink>
          <NuxtLink
            to="/cursos"
            class="text-primary border-b-2 border-primary pb-1 font-headline"
          >
            {{ copy.nav.courses }}
          </NuxtLink>
          <button
            type="button"
            class="text-on-surface hover:text-primary transition-colors font-headline"
            @click="openContact"
          >
            {{ copy.nav.contact }}
          </button>
        </div>

        <div class="flex items-center shrink-0 md:hidden">
          <button
            type="button"
            class="flex items-center justify-center size-11 rounded-lg text-on-surface hover:bg-surface-container-high border border-outline-variant/20"
            :aria-expanded="mobileNavOpen"
            aria-controls="cursos-mobile-nav"
            :aria-label="copy.a11y.openMenu"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            <X v-if="mobileNavOpen" class="size-6 shrink-0" aria-hidden="true" stroke-width="2" />
            <Menu v-else class="size-6 shrink-0" aria-hidden="true" stroke-width="2" />
          </button>
        </div>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-show="mobileNavOpen"
          id="cursos-mobile-nav"
          class="md:hidden fixed inset-x-0 bottom-0 z-[90] flex flex-col border-t border-outline-variant/20 bg-background top-[calc(4rem+env(safe-area-inset-top,0px))] sm:top-[calc(5rem+env(safe-area-inset-top,0px))] shadow-[0_-8px_40px_rgba(0,0,0,0.45)]"
        >
          <nav class="flex flex-col p-4 gap-2" @click.stop>
            <NuxtLink
              to="/"
              class="py-3.5 px-4 rounded-xl bg-surface-container-high font-semibold"
              @click="mobileNavOpen = false"
            >
              {{ copy.nav.home }}
            </NuxtLink>
            <NuxtLink
              to="/blog"
              class="py-3.5 px-4 rounded-xl bg-surface-container-high font-semibold"
              @click="mobileNavOpen = false"
            >
              {{ copy.nav.blog }}
            </NuxtLink>
            <NuxtLink
              to="/cursos"
              class="py-3.5 px-4 rounded-xl bg-surface-container-highest text-primary font-bold border border-primary/20"
              @click="mobileNavOpen = false"
            >
              {{ copy.nav.courses }}
            </NuxtLink>
            <button
              type="button"
              class="text-left py-3.5 px-4 rounded-xl bg-surface-container-high font-semibold w-full"
              @click="openContact"
            >
              {{ copy.nav.contact }}
            </button>
          </nav>
          <button
            type="button"
            class="flex-1 min-h-[25vh] w-full bg-background border-0 p-0"
            :aria-label="copy.a11y.closeMenuOverlay"
            @click="mobileNavOpen = false"
          />
        </div>
      </Transition>
    </nav>

    <main
      class="pt-[calc(4rem+env(safe-area-inset-top,0px))] sm:pt-[calc(5rem+env(safe-area-inset-top,0px))]"
    >
      <div class="relative overflow-hidden border-b border-outline-variant/10">
        <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            class="absolute top-0 right-0 h-full w-[min(55%,640px)] bg-gradient-to-l from-primary/[0.1] via-transparent to-transparent"
          />
          <div
            class="absolute top-24 right-[10%] h-[min(50vh,400px)] w-[min(85vw,420px)] rounded-full bg-tertiary/[0.05] blur-[90px]"
          />
        </div>
        <div class="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20 relative z-10">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-outline-variant/15 border border-outline-variant/10 mb-6"
          >
            <GraduationCap class="size-4 text-primary shrink-0" aria-hidden="true" stroke-width="2" />
            <span class="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
              {{ page.badge }}
            </span>
          </div>
          <h1
            class="text-4xl sm:text-5xl font-headline font-extrabold tracking-tight text-on-surface mb-6"
          >
            {{ page.title }}
          </h1>
          <p class="text-on-surface-variant text-base sm:text-lg leading-relaxed mb-10">
            {{ page.lead }}
          </p>
          <BlogNewsletterSignup
            v-model="email"
            :kicker="signup.kicker"
            :blurb="signup.blurb"
            :placeholder="signup.placeholder"
            :button-label="signup.cta"
            :mailto-subject="signup.mailtoSubject"
            :mailto-body-intro="signup.mailtoBodyIntro"
          />
        </div>
      </div>
    </main>

    <footer
      class="bg-background w-full border-t border-outline-variant/15 pb-[max(1rem,env(safe-area-inset-bottom))]"
    >
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <div class="flex flex-col gap-2 text-center md:text-left">
          <div class="font-headline font-bold text-on-surface">{{ footer.brand }}</div>
          <div class="font-body text-xs text-on-surface/50">
            © {{ year }} {{ footer.rightsLine }}
          </div>
        </div>
        <nav
          class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10"
          :aria-label="copy.a11y.socialNav"
        >
          <a
            v-for="link in copy.socialLinks"
            :key="link.label"
            class="group text-on-surface-variant hover:text-primary transition-colors font-label text-xs uppercase tracking-widest font-bold min-h-11 inline-flex items-center gap-2.5 px-2 py-1 rounded-lg hover:bg-surface-container-high/20"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="link.iconSrc"
              alt=""
              width="20"
              height="20"
              class="footer-social-icon h-5 w-5 shrink-0 opacity-90 group-hover:opacity-100 transition-opacity"
              loading="lazy"
            />
            {{ link.label }}
          </a>
        </nav>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-primary/40 shrink-0" />
          <span class="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
            {{ footer.availability }}
          </span>
        </div>
      </div>
    </footer>

    <ContactModal
      v-model="contactModalOpen"
      :linkedin-href="linkedInHref"
      :recipient-email="copy.contact?.formEmail ?? ''"
      :close-label="copy.a11y.closeContactModal"
      :title="copy.nav.contact"
    />
  </div>
</template>

<script setup lang="ts">
import { GraduationCap, Menu, X } from 'lucide-vue-next'
import { computed, defineAsyncComponent, onUnmounted, ref, watch } from 'vue'

const ContactModal = defineAsyncComponent(() => import('~/components/ContactModal.vue'))

const copy = useHomeCopy()
const siteTitle = copy.site.title

const email = ref('')
const contactModalOpen = ref(false)
const mobileNavOpen = ref(false)

function openContact() {
  contactModalOpen.value = true
  mobileNavOpen.value = false
}

const linkedInHref = computed(
  () => copy.socialLinks.find((l) => l.icon === 'linkedin')?.href ?? '#',
)

const page = {
  badge: 'Curadoria em preparação',
  title: 'Cursos',
  lead:
    'Em breve serão adicionados aqui cursos recomendados. Até lá, pode deixar o seu e-mail para receber novidades do site e ser avisado quando houver novidades nesta secção.',
}

const signup = {
  kicker: 'Novidades',
  blurb: 'Cadastre o seu e-mail para receber novidades do site (artigos, atualizações e avisos sobre cursos).',
  placeholder: 'email@dominio.com',
  cta: 'Subscrever',
  mailtoSubject: 'Subscrição — novidades do site (cursos) — luisgs7.dev',
  mailtoBodyIntro:
    'Quero receber novidades do site e ser informado quando forem publicados cursos recomendados.',
}

const footer = {
  brand: copy.footer.brand,
  rightsLine: `${copy.footer.rightsName}. ${copy.footer.rightsTagline}`,
  availability: 'Disponível para projetos selecionados',
}

const year = new Date().getFullYear()

useHead({
  title: () => `Cursos | ${siteTitle}`,
  meta: [
    {
      name: 'description',
      content: page.lead.slice(0, 155),
    },
  ],
})

watch([mobileNavOpen, contactModalOpen], ([nav, contact]) => {
  if (!import.meta.client) return
  document.documentElement.style.overflow = nav || contact ? 'hidden' : ''
})

onUnmounted(() => {
  if (import.meta.client) document.documentElement.style.overflow = ''
})
</script>
