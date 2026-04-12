<template>
  <div class="bg-background text-on-surface font-body min-h-screen selection:bg-primary/30">
    <!-- Nav (layout tipo mock: links + CTA em gradiente) -->
    <nav
      class="fixed top-0 w-full z-[100] bg-background/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] pt-[env(safe-area-inset-top,0px)]"
    >
      <div
        class="flex justify-between items-center gap-3 max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 font-headline"
      >
        <NuxtLink
          to="/"
          class="text-lg sm:text-xl font-bold tracking-tighter text-primary shrink-0 min-w-0 truncate"
        >
          {{ siteTitle }}
        </NuxtLink>

        <div class="hidden md:flex items-center gap-8">
          <NuxtLink to="/" class="text-on-surface hover:text-primary transition-colors font-headline">
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

        <div class="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            class="hidden sm:inline-flex min-h-11 px-5 items-center justify-center bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-lg font-bold text-sm tracking-tight active:scale-95 transition-transform shadow-lg shadow-primary/20"
            @click="openContact"
          >
            {{ copy.hero.ctaPrimary }}
          </button>
          <button
            type="button"
            class="flex md:hidden items-center justify-center min-h-11 min-w-11 rounded-xl text-on-surface hover:bg-surface-container-high border border-outline-variant/20 active:bg-surface-container-high"
            :aria-expanded="mobileNavOpen"
            aria-controls="article-mobile-nav"
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
          id="article-mobile-nav"
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
            <button
              type="button"
              class="w-full min-h-12 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-sm shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform"
              @click="openContact"
            >
              {{ copy.hero.ctaPrimary }}
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
      class="pt-[calc(5.25rem+env(safe-area-inset-top,0px))] sm:pt-[calc(6.5rem+env(safe-area-inset-top,0px))] md:pt-[calc(7rem+env(safe-area-inset-top,0px))] pb-[max(5rem,env(safe-area-inset-bottom))] sm:pb-24"
    >
      <div v-if="post" class="max-w-4xl mx-auto px-4 sm:px-6">
        <!-- Breadcrumbs -->
        <nav
          class="flex flex-wrap items-center gap-x-2 gap-y-1 mb-6 sm:mb-8 font-label text-on-surface-variant text-[10px] sm:text-xs uppercase tracking-widest"
          aria-label="Trilho"
        >
          <NuxtLink class="hover:text-primary transition-colors min-h-11 inline-flex items-center -my-2 py-2" to="/">
            {{ copy.nav.home }}
          </NuxtLink>
          <ChevronRight class="size-3 shrink-0 opacity-70" aria-hidden="true" stroke-width="2" />
          <NuxtLink
            class="hover:text-primary transition-colors min-h-11 inline-flex items-center -my-2 py-2"
            to="/blog"
          >
            {{ copy.nav.blog }}
          </NuxtLink>
          <ChevronRight class="size-3 shrink-0 opacity-70" aria-hidden="true" stroke-width="2" />
          <span class="text-primary/80 line-clamp-2 sm:truncate sm:max-w-none max-w-full">{{
            categoryLabel
          }}</span>
        </nav>

        <h1
          class="text-[1.65rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline mb-6 sm:mb-8 text-on-surface tracking-tighter"
        >
          {{ post.title }}
        </h1>

        <div
          class="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6 mb-8 sm:mb-12 py-5 sm:py-6 border-y border-outline-variant/15"
        >
          <div class="flex items-center gap-3 min-w-0">
            <NuxtPicture
              src="/images/luis-face.jpeg"
              alt=""
              width="80"
              height="80"
              sizes="40px"
              :img-attrs="{
                class:
                  'w-11 h-11 sm:w-10 sm:h-10 rounded-full object-cover object-[52%_28%] border border-outline-variant/20 shrink-0',
              }"
            />
            <div class="min-w-0">
              <p class="text-sm font-semibold font-headline text-on-surface truncate">
                {{ authorShortName }}
              </p>
              <p class="text-[11px] sm:text-xs text-on-surface-variant font-label leading-snug">
                {{ formattedDate }}<span v-if="readTimeLabel"> · {{ readTimeLabel }}</span>
              </p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="chip in tagChips"
              :key="chip"
              class="px-2.5 sm:px-3 py-1 rounded-full bg-outline-variant/20 text-[9px] sm:text-[10px] font-label text-on-surface-variant border border-outline-variant/10 uppercase tracking-tighter"
            >
              {{ chip }}
            </span>
          </div>
        </div>
      </div>

      <!-- Índice (mobile): colapsável -->
      <div
        v-if="post && (tocItems?.length ?? 0) > 0"
        class="lg:hidden max-w-4xl mx-auto px-4 sm:px-6 mb-8"
      >
        <details class="group rounded-xl border border-outline-variant/15 bg-surface-container-low/80">
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 font-label text-xs font-bold uppercase tracking-widest text-primary min-h-12"
          >
            <span>{{ tocTitle }}</span>
            <ChevronRight
              class="size-4 shrink-0 transition-transform group-open:rotate-90"
              aria-hidden="true"
              stroke-width="2"
            />
          </summary>
          <nav class="border-t border-outline-variant/10 px-2 pb-3 pt-1" aria-label="Nesta página">
            <a
              v-for="item in tocItems"
              :key="`m-${item.id}`"
              class="flex min-h-11 items-center rounded-lg px-3 text-sm text-on-surface-variant active:bg-surface-container-high"
              :class="item.depth === 3 ? 'pl-6 text-[13px]' : ''"
              :href="`#${item.id}`"
            >
              {{ item.text }}
            </a>
          </nav>
        </details>
      </div>

      <!-- Imagem de destaque (mesmo tratamento visual que os cards na home) -->
      <div v-if="post && coverSrc" class="max-w-6xl mx-auto px-3 sm:px-6 mb-10 sm:mb-16">
        <div
          class="aspect-video bg-surface-container-highest relative overflow-hidden rounded-3xl sm:rounded-[2rem] border border-outline-variant/10"
        >
          <!-- URLs remotas: <img> direto — o IPX do NuxtImg falha com alguns hosts (ex. lh3.googleusercontent.com). -->
          <img
            v-if="isRemoteCover"
            :src="coverSrc"
            :alt="coverAlt"
            class="w-full h-full object-cover opacity-80"
            loading="eager"
            fetchpriority="high"
            referrerpolicy="no-referrer"
            decoding="async"
          />
          <NuxtPicture
            v-else
            :src="coverSrc"
            :alt="coverAlt"
            width="800"
            height="450"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, min(1152px, 100vw)"
            loading="eager"
            :preload="{ fetchPriority: 'high' }"
            :img-attrs="{
              class: 'w-full h-full object-cover opacity-80',
              fetchpriority: 'high',
              decoding: 'async',
            }"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-surface-container-high to-transparent pointer-events-none"
          />
        </div>
      </div>

      <!-- Conteúdo + sidebar TOC -->
      <div class="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-8 lg:gap-12">
        <aside class="hidden lg:block w-64 shrink-0 order-2 lg:order-1">
          <div class="sticky top-32 space-y-8">
            <div v-if="tocItems.length">
              <h2 class="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary mb-4">
                {{ tocTitle }}
              </h2>
              <nav class="flex flex-col gap-3" aria-label="Nesta página">
                <a
                  v-for="item in tocItems"
                  :key="item.id"
                  class="text-sm border-l-2 border-transparent pl-4 transition-colors text-on-surface-variant hover:text-primary scroll-mt-28"
                  :class="item.depth === 3 ? 'ml-2' : ''"
                  :href="`#${item.id}`"
                >
                  {{ item.text }}
                </a>
              </nav>
            </div>
            <BlogNewsletterSignup v-model="sidebarCtaEmail" v-model:name="sidebarCtaName" />
          </div>
        </aside>

        <article
          v-if="post"
          ref="articleBodyRef"
          class="blog-article-prose order-1 lg:order-2 flex-1 min-w-0 max-w-none"
        >
          <ContentRenderer :value="post" />
        </article>
      </div>

      <!-- Newsletter: visível em mobile (sidebar em desktop) -->
      <div v-if="post" class="lg:hidden max-w-4xl mx-auto px-4 sm:px-6 mt-10">
        <h2 class="font-label text-xs uppercase tracking-[0.2em] text-tertiary mb-4">
          Próximos passos
        </h2>
        <BlogNewsletterSignup v-model="sidebarCtaEmail" v-model:name="sidebarCtaName" />
      </div>

      <!-- Bio do autor -->
      <div v-if="post" class="max-w-4xl mx-auto px-4 sm:px-6 mt-12 sm:mt-20">
        <div
          class="p-5 sm:p-8 bg-surface-container-low rounded-2xl flex flex-col md:flex-row items-center gap-6 sm:gap-8 border border-outline-variant/10"
        >
          <NuxtPicture
            src="/images/luis-hero.jpeg"
            alt=""
            width="192"
            height="192"
            sizes="96px"
            loading="lazy"
            :img-attrs="{
              class:
                'w-24 h-24 rounded-2xl object-cover object-[54%_30%] shadow-xl border-2 border-primary shrink-0',
            }"
          />
          <div class="text-center md:text-left">
            <h2 class="text-lg sm:text-xl font-bold font-headline mb-2 text-on-surface">
              {{ bioTitle }}
            </h2>
            <p class="text-on-surface-variant text-sm mb-4 leading-relaxed">
              {{ bioText }}
            </p>
            <div class="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4">
              <a
                v-for="link in copy.socialLinks"
                :key="link.label"
                class="group inline-flex min-h-11 items-center gap-2 px-3 rounded-lg text-primary hover:text-tertiary hover:bg-surface-container-high/50 transition-colors font-label text-xs tracking-widest uppercase"
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
            </div>
          </div>
        </div>
      </div>

      <!-- Artigos relacionados -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-28">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <span class="font-label text-xs text-tertiary uppercase tracking-widest block mb-2">{{
              relatedKicker
            }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold font-headline tracking-tighter text-on-surface">
              {{ relatedTitle }}
            </h2>
          </div>
          <NuxtLink
            to="/blog"
            class="text-sm font-label text-primary hover:text-primary-fixed inline-flex items-center gap-2 group shrink-0 min-h-11 -ml-1 px-1 py-2 rounded-lg active:bg-surface-container-high/40"
          >
            {{ relatedArchive }}
            <ArrowRight
              class="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
              stroke-width="2"
            />
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          <template v-for="(rel, idx) in relatedPosts" :key="rel.path">
            <NuxtLink
              v-if="idx === 0"
              :to="rel.path"
              class="md:col-span-2 group bg-surface-container-high rounded-xl sm:rounded-2xl overflow-hidden border border-outline-variant/10 transition-all active:scale-[0.99] sm:hover:bg-surface-bright sm:hover:border-outline-variant/20"
            >
              <div class="grid grid-cols-1 md:grid-cols-2 min-h-0 md:min-h-[240px]">
                <div class="relative h-44 sm:h-52 md:h-full min-h-[11rem] overflow-hidden bg-surface-container-lowest">
                  <NuxtPicture
                    :src="rel.image"
                    :alt="rel.imageAlt"
                    width="800"
                    height="450"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    :img-attrs="{
                      class:
                        'w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85',
                    }"
                  />
                </div>
                <div class="p-4 sm:p-8 flex flex-col justify-center">
                  <span
                    class="font-label text-[10px] uppercase tracking-widest mb-2 sm:mb-3"
                    :class="rel.tagClass"
                  >
                    {{ rel.tag }}
                  </span>
                  <h3
                    class="text-lg sm:text-2xl font-bold font-headline mb-2 sm:mb-3 leading-snug sm:leading-tight group-hover:text-primary transition-colors"
                  >
                    {{ rel.title }}
                  </h3>
                  <p class="text-on-surface-variant text-sm line-clamp-3 mb-4">
                    {{ rel.excerpt }}
                  </p>
                  <span class="font-label text-xs text-on-surface-variant">{{
                    formatArticleDate(rel.date)
                  }}</span>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink
              v-else
              :to="rel.path"
              class="group bg-surface-container-high rounded-xl sm:rounded-2xl overflow-hidden border border-outline-variant/10 transition-all active:scale-[0.99] sm:hover:bg-surface-bright"
            >
              <div class="relative h-40 sm:h-44 overflow-hidden bg-surface-container-lowest">
                <NuxtPicture
                  :src="rel.image"
                  :alt="rel.imageAlt"
                  width="800"
                  height="450"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  :img-attrs="{
                    class:
                      'w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85',
                  }"
                />
              </div>
              <div class="p-4 sm:p-6">
                <span class="font-label text-[10px] uppercase tracking-widest mb-2 block" :class="rel.tagClass">
                  {{ rel.tag }}
                </span>
                <h3
                  class="text-base sm:text-lg font-bold font-headline mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2"
                >
                  {{ rel.title }}
                </h3>
                <p class="text-on-surface-variant text-xs line-clamp-2 mb-3">
                  {{ rel.excerpt }}
                </p>
                <span class="font-label text-xs text-on-surface-variant">{{
                  formatArticleDate(rel.date)
                }}</span>
              </div>
            </NuxtLink>
          </template>
        </div>
      </div>
    </main>

    <footer
      class="bg-background border-t border-outline-variant/15 mt-12 sm:mt-20 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
    >
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <div class="flex flex-col items-center md:items-start gap-2">
          <span class="font-headline font-bold text-on-surface text-lg">{{ copy.footer.brand }}</span>
          <span class="font-body text-xs text-on-surface/50">
            © {{ year }} {{ copy.footer.rightsName }}. {{ copy.footer.rightsTagline }}
          </span>
        </div>
        <nav
          class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          :aria-label="copy.a11y.socialNav"
        >
          <a
            v-for="link in copy.socialLinks"
            :key="`f-${link.label}`"
            class="font-body text-xs text-on-surface/40 hover:text-tertiary transition-colors min-h-11 inline-flex items-center px-2 py-2 rounded-lg active:bg-surface-container-high/30"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ link.label }}
          </a>
        </nav>
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
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-vue-next'
import { computed, defineAsyncComponent, onMounted, onUnmounted, ref, watch } from 'vue'

import { mapBlogDocumentToCard, type BlogPostCard } from '~/composables/useBlogPostCards'
import { extractBlogTocFromBody, type BlogTocItem } from '~/utils/blogToc'

const ContactModal = defineAsyncComponent(() => import('~/components/ContactModal.vue'))

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const { data: post } = await useAsyncData(
  () => `blog-article-${slug.value}`,
  () => queryCollection('blog').path(`/blog/${slug.value}`).first(),
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artigo não encontrado' })
}

const tocItems = computed(() => extractBlogTocFromBody(post.value?.body))

const { data: relatedRaw } = await useAsyncData(
  () => `blog-related-${slug.value}`,
  async () => {
    const docs = await queryCollection('blog').order('date', 'DESC').limit(12).all()
    return docs
      .filter((d) => d.path !== `/blog/${slug.value}`)
      .slice(0, 3)
  },
  { default: () => [] },
)

const relatedPosts = computed<BlogPostCard[]>(() => {
  const rows = relatedRaw.value ?? []
  return rows.map((d) => mapBlogDocumentToCard(d)).filter((x): x is BlogPostCard => x !== null)
})

const copy = useHomeCopy()
const siteTitle = copy.site.title
const year = new Date().getFullYear()

const linkedInHref = computed(
  () => copy.socialLinks.find((l) => l.icon === 'linkedin')?.href ?? '#',
)

const contactModalOpen = ref(false)
const mobileNavOpen = ref(false)
const articleBodyRef = ref<HTMLElement | null>(null)
const sidebarCtaEmail = ref('')
const sidebarCtaName = ref('')

/** Frontmatter: no Content v3 os campos podem vir na raiz do doc ou só em `meta`. */
const fm = computed(() => {
  const p = post.value as Record<string, unknown> | null | undefined
  if (!p) return {} as Record<string, unknown>
  const meta = (p.meta as Record<string, unknown> | undefined) ?? {}
  return { ...p, ...meta } as Record<string, unknown>
})

const categoryLabel = computed(() => String(fm.value.tag ?? ''))

const coverSrc = computed(() => {
  const u = fm.value.image
  return typeof u === 'string' && u.length ? u : ''
})
const coverAlt = computed(() => String(fm.value.imageAlt ?? ''))

const isRemoteCover = computed(() => /^https?:\/\//i.test(coverSrc.value))

const readTimeLabel = computed(() => {
  const r = fm.value.readTime
  return typeof r === 'string' && r.length ? r : ''
})

const tagChips = computed(() => {
  const main = fm.value.tag
  const extra = fm.value.tags
  const chips: string[] = []
  if (typeof main === 'string' && main.length) chips.push(main.toUpperCase())
  if (Array.isArray(extra)) {
    for (const t of extra) {
      if (typeof t === 'string' && t.length) chips.push(t.toUpperCase())
    }
  }
  return [...new Set(chips)]
})

const authorShortName = computed(() => {
  const full = copy.footer.rightsName
  const parts = full.trim().split(/\s+/)
  const second = parts[1]
  return parts.length >= 2 && second ? `${parts[0]} ${second[0]}.` : full
})

const formattedDate = computed(() => {
  const raw = fm.value.date
  if (!raw || typeof raw !== 'string') return ''
  try {
    return new Intl.DateTimeFormat('pt-PT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(raw))
  } catch {
    return raw
  }
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

const tocTitle = 'Nesta página'
const bioTitle = `Artigo por ${copy.footer.rightsName}`
const bioText =
  'Backend Python, APIs com Django e FastAPI, e DevOps — do desenho à produção, com foco em clareza e entrega.'

const relatedKicker = 'Continuar a ler'
const relatedTitle = 'Artigos sugeridos'
const relatedArchive = 'Ver todos no blog'

function openContact() {
  contactModalOpen.value = true
  mobileNavOpen.value = false
}

onMounted(() => {
  const root = articleBodyRef.value
  const toc = tocItems.value ?? []
  if (!root || !toc.length) return
  const hs = root.querySelectorAll('h2, h3')
  toc.forEach((item, i) => {
    const el = hs[i]
    if (el) el.id = item.id
  })
})

watch([mobileNavOpen, contactModalOpen], ([nav, contact]) => {
  if (!import.meta.client) return
  document.documentElement.style.overflow = nav || contact ? 'hidden' : ''
})

onUnmounted(() => {
  if (import.meta.client) document.documentElement.style.overflow = ''
})

/** URL pública do site (alinhado a `site.url` em nuxt.config) — canónico e og:url em produção. */
const SITE_ORIGIN = 'https://luisgs7.dev'

/** Título da aba / resultados: palavras-chave do artigo primeiro; marca curta no fim (evita "— Blog —" redundante). */
const seoTitle = computed(() => {
  const t = post.value?.title
  if (!t) return siteTitle
  return `${t} | ${siteTitle}`
})

const seoDescription = computed(() => {
  const d = fm.value.description
  return typeof d === 'string' && d.length ? d : ''
})

const canonicalUrl = computed(() => `${SITE_ORIGIN}/blog/${slug.value}`)

const ogImageAbsolute = computed(() => {
  const u = coverSrc.value
  if (!u) return undefined
  if (/^https?:\/\//i.test(u)) return u
  if (u.startsWith('/')) return `${SITE_ORIGIN}${u}`
  return undefined
})

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: seoTitle,
  ogDescription: seoDescription,
  ogType: 'article',
  ogUrl: canonicalUrl,
  ogImage: ogImageAbsolute,
  twitterCard: 'summary_large_image',
  twitterTitle: seoTitle,
  twitterDescription: seoDescription,
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
})
</script>

<style scoped>
.blog-article-prose :deep(p:first-of-type) {
  @apply text-base sm:text-lg md:text-xl text-on-surface-variant font-light leading-relaxed mb-6 sm:mb-8;
}

.blog-article-prose :deep(h2) {
  @apply font-headline text-xl sm:text-2xl font-bold text-on-surface mt-10 sm:mt-12 mb-5 sm:mb-6 scroll-mt-24 md:scroll-mt-28;
}

.blog-article-prose :deep(h3) {
  @apply font-headline text-lg sm:text-xl font-semibold text-tertiary mt-7 sm:mt-8 mb-3 sm:mb-4 scroll-mt-24 md:scroll-mt-28;
}

.blog-article-prose :deep(p) {
  @apply text-on-surface-variant text-[0.9375rem] sm:text-base leading-relaxed mb-5 sm:mb-6 text-left sm:text-justify;
}

.blog-article-prose :deep(ul) {
  @apply list-disc pl-6 mb-6 space-y-2 text-on-surface-variant;
}

.blog-article-prose :deep(li) {
  @apply pl-0.5;
}

.blog-article-prose :deep(code) {
  @apply text-sm bg-surface-container-high px-1.5 py-0.5 rounded text-primary font-mono not-italic;
}

.blog-article-prose :deep(pre) {
  @apply relative my-8 sm:my-10 w-full min-w-0 rounded-lg sm:rounded-xl border border-outline-variant/10 bg-surface-container-lowest overflow-x-auto shadow-xl sm:shadow-2xl pt-9 sm:pt-10 pb-5 sm:pb-6 px-3 sm:px-6 text-[11px] sm:text-xs leading-relaxed;
}

.blog-article-prose :deep(pre::before) {
  content: '';
  @apply absolute top-0 left-0 right-0 h-9 bg-surface-container-low border-b border-outline-variant/10 rounded-t-xl pointer-events-none;
}

.blog-article-prose :deep(pre code) {
  @apply bg-transparent p-0 text-on-surface text-[11px] sm:text-[0.8125rem] leading-relaxed;
}

.blog-article-prose :deep(blockquote) {
  @apply my-8 sm:my-10 p-5 sm:p-8 bg-surface-container-low border-l-4 border-primary rounded-r-xl text-sm text-on-surface-variant;
}

.blog-article-prose :deep(blockquote p) {
  @apply mb-0 text-left sm:text-justify;
}

.blog-article-prose :deep(strong) {
  @apply text-on-surface font-semibold;
}
</style>
