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
          <NuxtLink
            to="/"
            class="text-on-surface hover:text-primary transition-colors font-headline"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="text-primary border-b-2 border-primary pb-1 font-headline"
          >
            Blog
          </NuxtLink>
          <NuxtLink to="#" class="text-on-surface hover:text-primary transition-colors font-headline">
            Courses
          </NuxtLink>
          <button
            type="button"
            class="text-on-surface hover:text-primary transition-colors font-headline"
            @click="openContact"
          >
            {{ copy.nav.contact }}
          </button>
        </div>

        <div class="flex items-center gap-3 sm:gap-6 shrink-0">
          <div class="relative hidden lg:block">
            <span
              class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm pointer-events-none"
            >
              search
            </span>
            <input
              v-model="searchQuery"
              class="bg-surface-container-highest border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary w-52 xl:w-64 text-on-surface placeholder:text-on-surface-variant/50"
              placeholder="Search insights..."
              type="search"
              autocomplete="off"
            />
          </div>
          <button
            type="button"
            class="md:hidden flex items-center justify-center size-11 rounded-lg text-on-surface hover:bg-surface-container-high border border-outline-variant/20"
            :aria-expanded="mobileNavOpen"
            aria-controls="blog-mobile-nav"
            aria-label="Menu"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            <span class="material-symbols-outlined">{{ mobileNavOpen ? 'close' : 'menu' }}</span>
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
          id="blog-mobile-nav"
          class="md:hidden fixed inset-x-0 bottom-0 z-[90] flex flex-col border-t border-outline-variant/20 bg-background top-[calc(4rem+env(safe-area-inset-top,0px))] sm:top-[calc(5rem+env(safe-area-inset-top,0px))] shadow-[0_-8px_40px_rgba(0,0,0,0.45)]"
        >
          <nav class="flex flex-col p-4 gap-2" @click.stop>
            <NuxtLink
              to="/"
              class="py-3.5 px-4 rounded-xl bg-surface-container-high font-semibold"
              @click="mobileNavOpen = false"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/blog"
              class="py-3.5 px-4 rounded-xl bg-surface-container-highest text-primary font-bold border border-primary/20"
              @click="mobileNavOpen = false"
            >
              Blog
            </NuxtLink>
            <NuxtLink
              to="#"
              class="py-3.5 px-4 rounded-xl bg-surface-container-high font-semibold"
              @click="mobileNavOpen = false"
            >
              Courses
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
            aria-label="Fechar"
            @click="mobileNavOpen = false"
          />
        </div>
      </Transition>
    </nav>

    <main
      class="pt-[calc(4rem+env(safe-area-inset-top,0px))] sm:pt-[calc(5rem+env(safe-area-inset-top,0px))]"
    >
      <header class="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
        <div class="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
          <div
            class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent"
          />
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-outline-variant/20 border border-outline-variant/15 mb-6"
          >
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span class="font-label text-[10px] uppercase tracking-[0.2em] text-primary">
              {{ hero.badge }}
            </span>
          </div>
          <h1
            class="text-4xl sm:text-6xl md:text-8xl font-headline font-extrabold tracking-tight leading-[0.9] mb-8"
          >
            {{ hero.titleLine1 }}<br />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary"
              >{{ hero.titleGradient }}</span
            >
          </h1>
          <p class="max-w-xl text-on-surface-variant text-base sm:text-lg leading-relaxed">
            {{ hero.lead }}
          </p>
        </div>
        <div class="absolute -right-20 bottom-10 hidden xl:block opacity-40 pointer-events-none">
          <div
            class="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 code-font text-xs text-primary/70 transform rotate-2 max-w-md"
          >
            <pre class="whitespace-pre-wrap"><code>{{ hero.codeSnippet }}</code></pre>
          </div>
        </div>
      </header>

      <section class="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 flex flex-col md:flex-row gap-10 md:gap-12">
        <aside class="w-full md:w-64 shrink-0 order-2 md:order-1">
          <div class="md:sticky md:top-28 space-y-8">
            <div class="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
              <h3 class="font-label text-xs uppercase tracking-widest text-tertiary mb-6">
                {{ sidebar.categoriesTitle }}
              </h3>
              <nav class="flex flex-col gap-1">
                <a
                  v-for="cat in categories"
                  :key="cat.id"
                  href="#"
                  class="flex items-center gap-3 px-4 py-3 rounded-md transition-all group font-label text-sm uppercase tracking-widest"
                  :class="
                    cat.active
                      ? 'text-primary bg-surface-container-highest'
                      : 'text-on-surface/60 hover:bg-surface-container-high hover:text-primary'
                  "
                >
                  <span class="material-symbols-outlined text-lg">{{ cat.icon }}</span>
                  {{ cat.label }}
                </a>
              </nav>
            </div>
            <div
              class="bg-gradient-to-br from-surface-container-high to-surface-container-low p-6 rounded-xl border border-outline-variant/5"
            >
              <span class="material-symbols-outlined text-tertiary mb-4">auto_awesome</span>
              <h4 class="font-headline font-bold text-on-surface mb-2">
                {{ sidebar.newsletterTitle }}
              </h4>
              <p class="text-xs text-on-surface-variant mb-4">
                {{ sidebar.newsletterBlurb }}
              </p>
              <input
                v-model="newsletterEmail"
                class="w-full bg-surface-container-lowest border-none rounded py-2 px-3 text-xs text-on-surface placeholder:text-on-surface-variant/50 mb-3"
                :placeholder="sidebar.newsletterPlaceholder"
                type="email"
                autocomplete="email"
              />
              <button
                type="button"
                class="w-full py-2 bg-primary text-on-primary rounded font-label text-[10px] uppercase tracking-widest font-bold hover:brightness-110 transition-all"
              >
                {{ sidebar.newsletterCta }}
              </button>
            </div>
          </div>
        </aside>

        <div class="flex-grow min-w-0 order-1 md:order-2">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <article
              v-for="post in posts"
              :key="post.title"
              class="group bg-surface-container-high rounded-xl overflow-hidden hover:bg-surface-bright transition-all duration-300 hover:scale-[1.01]"
            >
              <div class="aspect-video w-full bg-surface-container-lowest relative overflow-hidden">
                <img
                  :alt="post.imageAlt"
                  class="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  :src="post.image"
                  loading="lazy"
                />
                <div class="absolute top-4 left-4">
                  <span
                    class="px-2 py-1 rounded backdrop-blur-md font-label text-[10px] uppercase tracking-tighter border"
                    :class="
                      post.tagVariant === 'tertiary'
                        ? 'bg-tertiary/20 text-tertiary border-tertiary/20'
                        : 'bg-primary/20 text-primary border-primary/20'
                    "
                  >
                    {{ post.tag }}
                  </span>
                </div>
              </div>
              <div class="p-6 sm:p-8">
                <div class="flex flex-wrap items-center gap-4 mb-4">
                  <span class="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
                    {{ post.date }}
                  </span>
                  <span class="w-1 h-1 rounded-full bg-outline-variant shrink-0" />
                  <span class="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
                    {{ post.readTime }}
                  </span>
                </div>
                <h2
                  class="text-xl sm:text-2xl font-headline font-bold text-on-surface mb-4 group-hover:text-primary transition-colors leading-tight"
                >
                  {{ post.title }}
                </h2>
                <p class="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-3">
                  {{ post.excerpt }}
                </p>
                <a
                  class="inline-flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest font-bold hover:gap-3 transition-all"
                  href="#"
                >
                  {{ readInsightLabel }}
                  <span class="material-symbols-outlined text-sm">chevron_right</span>
                </a>
              </div>
            </article>
          </div>

          <div class="mt-16 flex justify-center">
            <nav class="flex items-center gap-2" aria-label="Pagination">
              <button
                type="button"
                class="w-10 h-10 flex items-center justify-center rounded bg-surface-container-high text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all"
                aria-label="Previous page"
              >
                <span class="material-symbols-outlined text-lg">navigate_before</span>
              </button>
              <button
                type="button"
                class="w-10 h-10 flex items-center justify-center rounded bg-primary text-on-primary font-label text-xs font-bold"
                aria-current="page"
              >
                1
              </button>
              <button
                type="button"
                class="w-10 h-10 flex items-center justify-center rounded bg-surface-container-high text-on-surface-variant hover:bg-surface-bright transition-all font-label text-xs"
              >
                2
              </button>
              <button
                type="button"
                class="w-10 h-10 flex items-center justify-center rounded bg-surface-container-high text-on-surface-variant hover:bg-surface-bright transition-all font-label text-xs"
              >
                3
              </button>
              <span class="px-2 text-outline-variant font-label text-xs">...</span>
              <button
                type="button"
                class="w-10 h-10 flex items-center justify-center rounded bg-surface-container-high text-on-surface-variant hover:bg-surface-bright transition-all font-label text-xs"
              >
                12
              </button>
              <button
                type="button"
                class="w-10 h-10 flex items-center justify-center rounded bg-surface-container-high text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all"
                aria-label="Next page"
              >
                <span class="material-symbols-outlined text-lg">navigate_next</span>
              </button>
            </nav>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-background w-full border-t border-outline-variant/15 pb-[max(1rem,env(safe-area-inset-bottom))]">
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
import { computed, onUnmounted, ref, watch } from 'vue'

const copy = useHomeCopy()
const siteTitle = copy.site.title

const linkedInHref = computed(
  () => copy.socialLinks.find((l) => l.icon === 'linkedin')?.href ?? '#',
)

const contactModalOpen = ref(false)
const mobileNavOpen = ref(false)

function openContact() {
  contactModalOpen.value = true
  mobileNavOpen.value = false
}

useHead({
  title: () => `Blog — ${siteTitle}`,
  meta: [
    {
      name: 'description',
      content: `Engineering perspectives on architecture, AI, and full-stack — ${siteTitle}.`,
    },
  ],
})

const year = new Date().getFullYear()
const searchQuery = ref('')
const newsletterEmail = ref('')

watch([mobileNavOpen, contactModalOpen], ([nav, contact]) => {
  if (!import.meta.client) return
  document.documentElement.style.overflow = nav || contact ? 'hidden' : ''
})

onUnmounted(() => {
  if (import.meta.client) document.documentElement.style.overflow = ''
})

const hero = {
  badge: 'System Online: v4.2.0',
  titleLine1: 'Technical',
  titleGradient: 'Intelligence',
  lead: 'Exploring the intersection of high-performance architecture, generative AI, and fluid full-stack ecosystems. Engineering perspectives for the modern architect.',
  codeSnippet: `async function optimizeLogic(node) {
  const kernel = await AI.load('architecture');
  return kernel.process(node.topology).then(res => {
    return { ...res, kinetic: true };
  });
}`,
}

const readInsightLabel = 'Read Insight'

const sidebar = {
  categoriesTitle: 'Categories',
  newsletterTitle: 'Weekly Newsletter',
  newsletterBlurb: 'Deep dives into technical architecture delivered every Sunday.',
  newsletterPlaceholder: 'email@domain.com',
  newsletterCta: 'Subscribe',
}

const categories = [
  { id: 'architecture', icon: 'architecture', label: 'Architecture', active: false },
  { id: 'fullstack', icon: 'layers', label: 'Full-Stack', active: true },
  { id: 'aiml', icon: 'psychology', label: 'AI & ML', active: false },
  { id: 'devops', icon: 'terminal', label: 'DevOps', active: false },
  { id: 'security', icon: 'shield', label: 'Security', active: false },
]

type TagVariant = 'primary' | 'tertiary'

interface BlogPostCard {
  image: string
  imageAlt: string
  tag: string
  tagVariant: TagVariant
  date: string
  readTime: string
  title: string
  excerpt: string
}

const posts: BlogPostCard[] = [
  {
    tag: 'Architecture',
    tagVariant: 'primary',
    date: 'May 24, 2024',
    readTime: '12 min read',
    title: 'Scaling Distributed Systems Beyond the 10k Node Threshold',
    excerpt:
      'Exploring the thermodynamic limits of cluster orchestration and why traditional consensus algorithms fail under extreme asynchronous pressure.',
    imageAlt: 'Modern data center server racks with neon lighting',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA3dobgQpaIdm6f6NrgYAkiWW2_7iDDzfADu9XcG5GyXDHg18E1aXUf8M5IApWZaw-BBk8_l5PPb-V9irPLfAMqciVOxmsI91f8AZZrZ6lCQQQjxwETCu00x5CL62Zo9HfSKuaRQ2bIdVba_FUoNx01FRNhGQC9a3tvNJrcc4kEbI9j807GzR1qyQhMHgEqy0ul8xmJEmfn-U6Q4Hjfc6M-93nyvULw8E-7RQFzEJedgHu__VBV3nvaeG-nGVT4VNmUjq4RpSAvMZ4',
  },
  {
    tag: 'AI & ML',
    tagVariant: 'tertiary',
    date: 'May 18, 2024',
    readTime: '8 min read',
    title: 'LLMs in Production: From RAG to Agentic Workflows',
    excerpt:
      'Why retrieval augmented generation is just the base layer. Implementing autonomous agent loops for complex multi-step reasoning.',
    imageAlt: 'Abstract neural network visualization',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAzq4l9iTgx3uqOO2sLZs9fxaUZYxRjrzi1Fiyto3-RcetMvmkmu5dWVwRuCcumh9tkZzm-96bzBW7PzRcwvgrtpl44JOQ6k_PhegRDQgirjug2KbKtV8F-hVXue4lLUADfUVlyDridrAO8J5DZVCr5TdkJhR6un1lK1cAP6_hl5pI6QrhWoKanUFZZ_nD-iyQB2EVzUfiXZivdbiJQGEZ2OD8Y3ciUKvyu2yHTKtRcN07gwjVRv7ZmMKaK41qo96Fd9cQBJF7j0gg',
  },
  {
    tag: 'Full-Stack',
    tagVariant: 'primary',
    date: 'May 12, 2024',
    readTime: '15 min read',
    title: 'The Death of the Virtual DOM: Fine-grained Reactivity',
    excerpt:
      'Analyzing the shift towards signal-based reactivity and how it redefines state management across the modern web stack.',
    imageAlt: 'Microchip circuit board close-up',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxs7U34ZiLWfXKvYM08WVByrsLKqCG4g6wCdLLf7t88KbUrsHXOAOCSgG2oouhlX3YIc6bdCMu0a0k181ntg9DlFuQmOtYmJW_BbHyw7KZ0fN5Eny9C7C2I492iuE8Yva4Y8mt6oKOf-H8BWHxViBpUIupL30FAw8dqeu9D_jvOjK0tpNN3zdKNEK-ORrf0gcJrzmlmWcaD7IfjZ7zTTO7jhH98pcD62qDpzVJVBJHl7pkwAYGVY7iHpPySzjpQ4fHuGCJfRrz2V8',
  },
  {
    tag: 'DevOps',
    tagVariant: 'primary',
    date: 'May 05, 2024',
    readTime: '10 min read',
    title: 'Platform Engineering vs. Traditional SRE',
    excerpt:
      'Building Internal Developer Platforms (IDPs) to reduce cognitive load without sacrificing operational excellence.',
    imageAlt: 'Code on screen with syntax highlighting',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDKq90Gdn0O7Q_RSbM1fq16zf0Fh_ToPfm3oV0n9bXaLFHXDia2af8penkqJkq6astIjM3cXvtQeJ-wMnngljLTPNhgq_5SefZxuFeoYhm9rZLRJlwNn2TouXc66JlF5871RbfgZFuEkscdsIqdvXr62q-cw8Hd62b4W6Oit-N3oRoPHVltcHHWd-gV8lENPmjMvt_2JqZKPkMviCjU4sCJCCUREHlvXx2b_tQtvUa3mJjuLlkCpIU4UNvxvfqIbFqj6O082anzvb4',
  },
]

const footer = {
  brand: 'luisgs7.dev',
  rightsLine: 'luisgs7.dev. Built with precision.',
  availability: 'Available for selective projects',
}
</script>
