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
            {{ copy.nav.home }}
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="text-primary border-b-2 border-primary pb-1 font-headline"
          >
            {{ copy.nav.blog }}
          </NuxtLink>
          <NuxtLink
            to="/cursos"
            class="text-on-surface hover:text-primary transition-colors font-headline"
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

        <div class="flex items-center gap-3 sm:gap-6 shrink-0">
          <div class="relative hidden lg:block">
            <Search
              class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant pointer-events-none"
              aria-hidden="true"
              stroke-width="2"
            />
            <input
              v-model="searchQuery"
              class="bg-surface-container-highest border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary w-52 xl:w-64 text-on-surface placeholder:text-on-surface-variant/50"
              placeholder="Pesquisar artigos..."
              type="search"
              autocomplete="off"
              aria-label="Pesquisar artigos por título ou texto do conteúdo"
            />
          </div>
          <button
            type="button"
            class="md:hidden flex items-center justify-center size-11 rounded-lg text-on-surface hover:bg-surface-container-high border border-outline-variant/20"
            :aria-expanded="mobileNavOpen"
            aria-controls="blog-mobile-nav"
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
          id="blog-mobile-nav"
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
              class="py-3.5 px-4 rounded-xl bg-surface-container-highest text-primary font-bold border border-primary/20"
              @click="mobileNavOpen = false"
            >
              {{ copy.nav.blog }}
            </NuxtLink>
            <NuxtLink
              to="/cursos"
              class="py-3.5 px-4 rounded-xl bg-surface-container-high font-semibold"
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
      <header class="relative overflow-hidden bg-background py-12 sm:py-16 lg:py-20 xl:py-24">
        <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            class="absolute top-0 right-0 h-full w-[min(55%,720px)] bg-gradient-to-l from-primary/[0.12] via-primary/[0.04] to-transparent"
          />
          <div
            class="absolute top-12 right-[8%] h-[min(70vh,520px)] w-[min(90vw,480px)] rounded-full bg-tertiary/[0.06] blur-[100px]"
          />
          <div
            class="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_left,black_20%,transparent_75%)]"
          />
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center"
          >
            <div class="min-w-0">
              <div
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-outline-variant/20 border border-outline-variant/15 mb-6"
              >
                <span class="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span class="font-label text-[10px] uppercase tracking-[0.2em] text-primary">
                  {{ hero.badge }}
                </span>
              </div>
              <h1
                class="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-headline font-extrabold tracking-tight leading-[0.92] mb-6 sm:mb-8"
              >
                {{ hero.titleLine1 }}<br />
                <span
                  class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary"
                  >{{ hero.titleGradient }}</span
                >
              </h1>
              <p
                class="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-2xl border-l-2 border-primary/25 pl-4 sm:pl-5"
              >
                {{ hero.lead }}
              </p>
              <div
                v-if="availableFilterTopics.length || postCount > 0"
                class="flex flex-wrap gap-2 sm:gap-3 mt-8 sm:mt-10"
                role="group"
                :aria-label="'Filtrar artigos por tema'"
              >
                <button
                  v-if="postCount > 0"
                  type="button"
                  class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[11px] sm:text-xs font-label uppercase tracking-widest transition-colors min-h-10"
                  :class="
                    selectedTopic === null
                      ? 'bg-primary/15 border-primary/40 text-primary ring-1 ring-primary/25'
                      : 'bg-surface-container-high/80 border-outline-variant/15 text-on-surface-variant hover:border-outline-variant/30'
                  "
                  :aria-pressed="selectedTopic === null"
                  @click="selectedTopic = null"
                >
                  <span class="size-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  {{ postCount }} {{ postCount === 1 ? 'artigo' : 'artigos' }}
                </button>
                <button
                  v-for="topicLabel in availableFilterTopics"
                  :key="topicLabel"
                  type="button"
                  class="px-3 py-1.5 rounded-lg border text-[11px] sm:text-xs font-medium transition-colors min-h-10"
                  :class="
                    selectedTopic === topicLabel
                      ? 'bg-primary/15 border-primary/40 text-primary ring-1 ring-primary/25'
                      : 'bg-surface-container-highest/50 border-outline-variant/10 text-on-surface-variant/90 hover:border-outline-variant/25'
                  "
                  :aria-pressed="selectedTopic === topicLabel"
                  :aria-label="`Filtrar por ${topicLabel}`"
                  @click="selectedTopic = topicLabel"
                >
                  {{ topicLabel }}
                </button>
              </div>
            </div>
            <div class="relative min-w-0 w-full lg:max-w-none">
              <div
                class="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-tertiary/15 opacity-80 blur-sm pointer-events-none"
                aria-hidden="true"
              />
              <div
                class="relative bg-surface-container-lowest/95 backdrop-blur-sm p-5 sm:p-6 lg:p-7 rounded-xl border border-outline-variant/15 code-font text-[11px] sm:text-xs text-primary/80 shadow-[0_24px_48px_rgba(0,0,0,0.35)] lg:rotate-[1deg]"
              >
                <div
                  class="flex items-center gap-2 mb-3 pb-3 border-b border-outline-variant/10 text-[10px] text-on-surface-variant/70 font-sans"
                >
                  <span class="flex gap-1.5" aria-hidden="true">
                    <span class="size-2.5 rounded-full bg-red-500/80" />
                    <span class="size-2.5 rounded-full bg-amber-500/80" />
                    <span class="size-2.5 rounded-full bg-emerald-500/80" />
                  </span>
                  <span class="font-mono tracking-wide">models.py</span>
                </div>
                <pre class="whitespace-pre-wrap overflow-x-auto m-0"><code>{{ hero.codeSnippet }}</code></pre>
              </div>
              <p
                class="mt-4 text-[11px] text-on-surface-variant/50 font-label uppercase tracking-widest text-center lg:text-right"
              >
                {{ hero.codeCaption }}
              </p>
            </div>
          </div>
        </div>
      </header>

      <section class="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 flex flex-col md:flex-row gap-10 md:gap-12">
        <aside class="w-full md:w-64 shrink-0 order-2 md:order-1">
          <div class="md:sticky md:top-28 space-y-8">
            <BlogNewsletterSignup
              v-model="newsletterEmail"
              v-model:name="newsletterName"
              :kicker="sidebar.newsletterTitle"
              :blurb="sidebar.newsletterBlurb"
              :placeholder="sidebar.newsletterPlaceholder"
              :button-label="sidebar.newsletterCta"
            />
          </div>
        </aside>

        <div class="flex-grow min-w-0 order-1 md:order-2">
          <p
            v-if="
              matchedArticleCount > 0 &&
              (selectedTopic !== null ||
                searchQuery.trim() ||
                matchedArticleCount > ARTICLES_PAGE_SIZE)
            "
            class="text-xs font-label text-on-surface-variant mb-4 uppercase tracking-widest"
            aria-live="polite"
          >
            A mostrar {{ shownArticleCount }} de {{ matchedArticleCount }}
            {{ matchedArticleCount === 1 ? 'artigo' : 'artigos' }}
          </p>
          <p
            v-if="!displayedPosts.length && postCount > 0"
            class="text-sm text-on-surface-variant mb-6 py-8 text-center border border-dashed border-outline-variant/25 rounded-xl"
          >
            Nenhum artigo corresponde a esta pesquisa ou filtro.
          </p>
          <div v-if="matchedArticleCount" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <NuxtLink
              v-for="post in pagedDisplayedPosts"
              :key="post.path"
              :to="post.path"
              class="group block bg-surface-container-high rounded-xl overflow-hidden hover:bg-surface-bright transition-all duration-300 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div class="aspect-video w-full bg-surface-container-lowest relative overflow-hidden">
                <NuxtPicture
                  :src="post.image"
                  :alt="post.imageAlt"
                  width="800"
                  height="450"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  loading="lazy"
                  :img-attrs="{
                    class:
                      'w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity',
                  }"
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
                    {{ formatArticleDate(post.date) }}
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
                <span
                  class="inline-flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest font-bold sm:group-hover:gap-3 transition-all"
                >
                  {{ readInsightLabel }}
                  <ChevronRight class="size-4 shrink-0" aria-hidden="true" stroke-width="2.25" />
                </span>
              </div>
            </NuxtLink>
          </div>
          <div v-if="hasMoreArticles" class="flex justify-center mt-10 sm:mt-12">
            <button
              type="button"
              class="min-h-12 px-8 py-3 rounded-xl border border-primary/35 bg-surface-container-high text-primary font-headline text-sm font-bold tracking-tight hover:bg-primary/10 hover:border-primary/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 transition-colors"
              @click="loadMoreArticles"
            >
              Carregar mais
            </button>
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
      :close-label="copy.a11y.closeContactModal"
      :title="copy.nav.contact"
    />
  </div>
</template>

<script setup lang="ts">
import { ChevronRight, Menu, Search, X } from 'lucide-vue-next'
import { computed, defineAsyncComponent, onUnmounted, ref, watch } from 'vue'

import { postMatchesTopicLabel, sortAggregatedTopicLabels } from '~/utils/blogTopicFilter'

const ContactModal = defineAsyncComponent(() => import('~/components/ContactModal.vue'))

const copy = useHomeCopy()
const siteTitle = copy.site.title

const { data: posts } = await useAllBlogPostCards()

const postCount = computed(() => posts.value?.length ?? 0)

const availableFilterTopics = computed(() => {
  const labels: string[] = []
  for (const p of posts.value ?? []) {
    for (const t of p.topics ?? []) labels.push(t)
  }
  return sortAggregatedTopicLabels(labels)
})

const selectedTopic = ref<string | null>(null)
const searchQuery = ref('')

const filteredPosts = computed(() => {
  const list = posts.value ?? []
  const topic = selectedTopic.value
  if (!topic) return list
  return list.filter((p) => postMatchesTopicLabel(p, topic))
})

const displayedPosts = computed(() => {
  let list = filteredPosts.value
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return list
  return list.filter((p) => (p.searchBlob ?? '').includes(q))
})

/** Quantos artigos mostrar de cada vez na listagem principal */
const ARTICLES_PAGE_SIZE = 4
const visibleArticleLimit = ref(ARTICLES_PAGE_SIZE)

const pagedDisplayedPosts = computed(() =>
  displayedPosts.value.slice(0, visibleArticleLimit.value),
)

const matchedArticleCount = computed(() => displayedPosts.value.length)
const shownArticleCount = computed(() => pagedDisplayedPosts.value.length)
const hasMoreArticles = computed(
  () => displayedPosts.value.length > visibleArticleLimit.value,
)

function loadMoreArticles() {
  visibleArticleLimit.value = Math.min(
    visibleArticleLimit.value + ARTICLES_PAGE_SIZE,
    displayedPosts.value.length,
  )
}

watch([selectedTopic, searchQuery], () => {
  visibleArticleLimit.value = ARTICLES_PAGE_SIZE
})

function formatArticleDate(iso: string) {
  if (!iso) return ''
  try {
    return new Intl.DateTimeFormat('pt-PT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(iso))
  } catch {
    return iso
  }
}

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
  title: () => `Blog | ${siteTitle}`,
  meta: [
    {
      name: 'description',
      content: `Perspetivas de engenharia em arquitetura, IA e full-stack — ${siteTitle}.`,
    },
  ],
})

const year = new Date().getFullYear()
const newsletterEmail = ref('')
const newsletterName = ref('')

watch([mobileNavOpen, contactModalOpen], ([nav, contact]) => {
  if (!import.meta.client) return
  document.documentElement.style.overflow = nav || contact ? 'hidden' : ''
})

onUnmounted(() => {
  if (import.meta.client) document.documentElement.style.overflow = ''
})

const hero = {
  badge: 'Sistema online: v4.2.0',
  titleLine1: 'Inteligência',
  titleGradient: 'técnica',
  lead: 'No cruzamento entre arquitetura de alta performance, IA generativa e ecossistemas full-stack fluidos. Perspetivas de engenharia para o arquiteto moderno.',
  codeCaption: 'Model Django com JSONField e domínio de topologia',
  codeSnippet: `from django.db import models

# Nó de processamento: topologia e estado cinético.
class LogicNode(models.Model):
    name = models.CharField(max_length=128)
    topology = models.JSONField(default=dict)
    kinetic = models.BooleanField(default=True)

    class Meta:
        ordering = ["name"]

    def __str__(self) -> str:
        return self.name`,
}

const readInsightLabel = 'Ler artigo'

const sidebar = {
  newsletterTitle: 'Newsletter semanal',
  newsletterBlurb:
    'Análises profundas de arquitetura técnica todas as semanas. Indique o nome e o e-mail para subscrever.',
  newsletterPlaceholder: 'email@dominio.com',
  newsletterCta: 'Subscrever',
}

const footer = {
  brand: copy.footer.brand,
  rightsLine: `${copy.footer.rightsName}. ${copy.footer.rightsTagline}`,
  availability: 'Disponível para projetos selecionados',
}
</script>
