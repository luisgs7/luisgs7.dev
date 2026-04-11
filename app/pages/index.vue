<template>
  <div
    class="bg-background text-on-surface font-body selection:bg-primary/30 antialiased overflow-x-hidden"
  >
    <!-- z-30: abaixo do header e do menu móvel (evita ruído por cima do drawer) -->
    <div class="fixed inset-0 bg-noise pointer-events-none z-30" aria-hidden="true" />

    <header
      class="fixed top-0 w-full z-[100] glass-header border-b border-outline-variant/10 pt-[env(safe-area-inset-top,0px)]"
    >
      <nav
        class="flex justify-between items-center gap-3 max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 font-headline tracking-tight min-w-0"
      >
        <NuxtLink
          to="/"
          class="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tighter text-primary shrink-0 min-w-0 truncate"
        >
          {{ copy.site.title }}
        </NuxtLink>
        <div class="hidden md:flex items-center space-x-10">
          <NuxtLink to="/" class="text-primary font-bold border-b-2 border-primary pb-1">
            {{ copy.nav.home }}
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="text-on-surface/70 hover:text-primary transition-colors font-semibold"
          >
            {{ copy.nav.blog }}
          </NuxtLink>
          <NuxtLink
            to="/cursos"
            class="text-on-surface/70 hover:text-primary transition-colors font-semibold"
          >
            {{ copy.nav.courses }}
          </NuxtLink>
          <button
            type="button"
            class="text-on-surface/70 hover:text-primary transition-colors font-semibold"
            @click="openContact"
          >
            {{ copy.nav.contact }}
          </button>
        </div>
        <div class="flex items-center shrink-0 md:hidden">
          <button
            type="button"
            class="flex items-center justify-center size-11 rounded-xl text-on-surface hover:bg-surface-container-high border border-outline-variant/20 transition-colors"
            :aria-expanded="mobileNavOpen"
            aria-controls="mobile-nav"
            :aria-label="copy.a11y.openMenu"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            <X v-if="mobileNavOpen" class="size-6 shrink-0" aria-hidden="true" stroke-width="2" />
            <Menu v-else class="size-6 shrink-0" aria-hidden="true" stroke-width="2" />
          </button>
        </div>
      </nav>
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
          id="mobile-nav"
          class="md:hidden fixed inset-x-0 bottom-0 z-[90] flex flex-col border-t border-outline-variant/20 top-[calc(4rem+env(safe-area-inset-top,0px))] sm:top-[calc(5rem+env(safe-area-inset-top,0px))] bg-background shadow-[0_-8px_40px_rgba(0,0,0,0.45)]"
        >
          <nav
            class="flex flex-col p-4 gap-2 max-w-7xl mx-auto w-full shrink-0"
            aria-label="Navegação principal"
            @click.stop
          >
            <NuxtLink
              to="/"
              class="text-primary font-bold py-3.5 px-4 rounded-xl bg-surface-container-high border border-outline-variant/15 active:bg-surface-container-highest"
              @click="mobileNavOpen = false"
            >
              {{ copy.nav.home }}
            </NuxtLink>
            <NuxtLink
              to="/blog"
              class="text-on-surface py-3.5 px-4 rounded-xl font-semibold bg-surface-container-high border border-outline-variant/15 active:bg-surface-container-highest hover:border-primary/30"
              @click="mobileNavOpen = false"
            >
              {{ copy.nav.blog }}
            </NuxtLink>
            <NuxtLink
              to="/cursos"
              class="text-on-surface py-3.5 px-4 rounded-xl font-semibold bg-surface-container-high border border-outline-variant/15 active:bg-surface-container-highest hover:border-primary/30"
              @click="mobileNavOpen = false"
            >
              {{ copy.nav.courses }}
            </NuxtLink>
            <button
              type="button"
              class="text-left text-on-surface py-3.5 px-4 rounded-xl font-semibold bg-surface-container-high border border-outline-variant/15 active:bg-surface-container-highest hover:border-primary/30 w-full"
              @click="openContact"
            >
              {{ copy.nav.contact }}
            </button>
          </nav>
          <!-- Área tocável abaixo dos links: fundo sólido para tap fechar -->
          <button
            type="button"
            class="flex-1 min-h-[30vh] w-full bg-background cursor-default border-0 p-0"
            :aria-label="copy.a11y.closeMenuOverlay"
            @click="mobileNavOpen = false"
          />
        </div>
      </Transition>
    </header>

    <main
      class="pt-[calc(4rem+env(safe-area-inset-top,0px))] sm:pt-[calc(5rem+env(safe-area-inset-top,0px))]"
    >
      <section
        class="relative min-h-[min(100dvh,820px)] sm:min-h-[85vh] flex items-center overflow-hidden py-10 sm:py-0"
      >
        <div class="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div
            class="absolute top-1/4 -left-1/2 sm:-left-1/4 w-[min(100vw,600px)] h-[min(100vw,600px)] sm:w-[600px] sm:h-[600px] bg-primary/10 blur-[100px] sm:blur-[150px] rounded-full animate-pulse"
          />
          <div
            class="absolute bottom-1/4 -right-1/2 sm:-right-1/4 w-[min(100vw,600px)] h-[min(100vw,600px)] sm:w-[600px] sm:h-[600px] bg-tertiary/10 blur-[100px] sm:blur-[150px] rounded-full"
          />
        </div>
        <div
          class="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center relative z-10"
        >
          <div class="lg:col-span-7 order-2 lg:order-none min-w-0">
            <div
              class="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6 sm:mb-8 backdrop-blur-sm max-w-full"
            >
              <span class="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shrink-0" />
              <span
                class="font-label text-[9px] sm:text-[10px] tracking-widest text-primary font-bold uppercase truncate"
              >
                {{ copy.hero.badge }}
              </span>
            </div>
            <h1
              class="font-headline text-[1.75rem] leading-[0.98] sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter text-on-surface mb-6 sm:mb-8"
            >
              {{ copy.hero.titleLine1 }}<br />
              <span class="text-gradient">{{ copy.hero.titleGradient }}</span>
            </h1>
            <div
              class="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-xl mb-8 sm:mb-12 leading-relaxed space-y-4 text-justify"
            >
              <p>
                {{ copy.hero.leadPara1Before
                }}<span class="text-on-surface font-bold">{{ copy.hero.leadPara1Bold }}</span
                >{{ copy.hero.leadPara1After }}
              </p>
              <p>{{ copy.hero.leadPara2 }}</p>
            </div>
            <div class="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5">
              <button
                type="button"
                class="group bg-primary text-on-primary min-h-12 px-6 sm:px-10 py-3.5 sm:py-5 rounded-xl font-extrabold flex items-center justify-center gap-3 active:scale-95 transition-all shadow-2xl shadow-primary/30 hover:brightness-110 w-full sm:w-auto"
                @click="openContact"
              >
                {{ copy.hero.ctaPrimary }}
                <ArrowRight
                  class="size-5 shrink-0 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                  stroke-width="2.25"
                />
              </button>
              <NuxtLink
                to="/blog"
                class="bg-surface-container-highest/50 backdrop-blur-md border border-outline-variant/30 text-on-surface min-h-12 px-6 sm:px-10 py-3.5 sm:py-5 rounded-xl font-extrabold hover:bg-surface-bright transition-all w-full sm:w-auto inline-flex items-center justify-center"
              >
                {{ copy.hero.ctaSecondary }}
              </NuxtLink>
            </div>
          </div>
          <div
            class="lg:col-span-5 relative order-1 lg:order-none w-full max-w-[min(100%,320px)] sm:max-w-[min(100%,380px)] mx-auto lg:max-w-none shrink-0"
          >
            <div
              class="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[4/5] rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.45)] lg:shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-outline-variant/20 group"
            >
              <NuxtPicture
                :src="copy.hero.profileImage"
                :alt="copy.hero.profileAlt"
                width="720"
                height="900"
                sizes="(max-width: 1023px) 384px, 560px"
                preset="hero"
                loading="eager"
                decoding="async"
                :preload="{ fetchPriority: 'high' }"
                :img-attrs="{
                  class:
                    'w-full h-full object-cover object-center transition-transform duration-700 lg:group-hover:scale-105',
                  fetchpriority: 'high',
                }"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-50 sm:opacity-60 lg:from-background"
              />
            </div>
            <div
              class="hidden lg:block absolute -top-10 -right-10 w-40 h-40 border-2 border-primary/10 rounded-full animate-slow-spin"
            />
          </div>
        </div>
      </section>

      <section
        class="bg-surface-container-lowest/50 py-14 sm:py-20 lg:py-24 border-y border-outline-variant/10 relative overflow-hidden"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2
                class="font-headline text-3xl sm:text-4xl font-extrabold text-on-surface mb-6 sm:mb-8 tracking-tight"
              >
                {{ copy.authority.titleBefore }} <br /><span class="text-primary">{{
                  copy.authority.titleAccent
                }}</span>
              </h2>
              <div
                class="font-body text-on-surface-variant text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 space-y-4 text-justify"
              >
                <p>{{ copy.authority.bodyPara1 }}</p>
                <p>{{ copy.authority.bodyPara2 }}</p>
                <p>
                  {{ copy.authority.bodyPara3Before
                  }}<span
                    class="rounded-sm bg-primary/15 px-1.5 py-0.5 text-primary font-bold"
                    >{{ copy.authority.bodyPara3Highlight }}</span
                  >{{ copy.authority.bodyPara3After }}
                </p>
              </div>
              <div
                class="flex items-start sm:items-center gap-3 sm:gap-4 text-primary font-bold text-sm sm:text-base"
              >
                <BadgeCheck class="size-5 sm:size-6 shrink-0 mt-0.5 sm:mt-0 text-primary" aria-hidden="true" stroke-width="2" />
                <span class="tracking-wide leading-snug">
                  {{ copy.authority.tagline }}
                </span>
              </div>
            </div>
            <div
              class="relative lg:pt-1"
              role="list"
              :aria-label="copy.a11y.timeline"
            >
              <div
                class="absolute left-[15px] top-3 bottom-3 w-[3px] rounded-full bg-gradient-to-b from-tertiary/40 via-outline-variant/25 to-primary/40 sm:left-[17px]"
                aria-hidden="true"
              />
              <div
                v-for="item in copy.timeline"
                :key="item.period + item.title"
                class="relative flex gap-5 sm:gap-6 pb-5 last:pb-0 last:mb-0"
                role="listitem"
              >
                <div
                  class="relative z-[1] flex w-8 shrink-0 justify-center sm:w-9 pt-2.5"
                  aria-hidden="true"
                >
                  <span
                    class="size-3.5 rounded-full ring-[3px] ring-surface-container-lowest/95 sm:size-4 sm:ring-4 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
                    :class="
                      item.accent === 'tertiary'
                        ? 'bg-tertiary shadow-[0_0_16px_rgba(247,190,29,0.25)]'
                        : 'bg-primary shadow-[0_0_16px_rgba(87,241,219,0.3)]'
                    "
                  />
                </div>
                <article
                  class="min-w-0 flex-1 rounded-2xl border border-outline-variant/15 bg-surface-container/90 px-5 py-4 sm:px-6 sm:py-5 shadow-[0_4px_24px_rgba(0,0,0,0.25)] transition-[border-color,box-shadow] hover:border-outline-variant/25"
                >
                  <p
                    class="font-headline text-xs sm:text-sm font-extrabold tracking-wide text-on-surface mb-2 sm:mb-2.5"
                    :class="item.accent === 'tertiary' ? 'text-tertiary' : 'text-primary'"
                  >
                    {{ item.period }}
                  </p>
                  <h3
                    class="font-headline text-base sm:text-lg font-bold text-on-surface tracking-tight leading-snug mb-2"
                  >
                    {{ item.title }}
                  </h3>
                  <p
                    class="font-body text-sm sm:text-[0.9375rem] text-on-surface-variant leading-relaxed"
                  >
                    {{ item.body }}
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 sm:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12 sm:mb-20">
          <h2 class="font-headline text-3xl sm:text-4xl font-extrabold mb-3 sm:mb-4 tracking-tight px-2">
            {{ copy.techIntro.title }}
          </h2>
          <div class="h-1.5 w-24 bg-gradient-to-r from-primary to-primary-container mx-auto rounded-full" />
          <p class="mt-4 sm:mt-6 text-on-surface-variant text-sm sm:text-base max-w-2xl mx-auto px-2">
            {{ copy.techIntro.subtitle }}
          </p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          <div
            v-for="tech in copy.techStack"
            :key="tech.name"
            class="tech-card group p-4 sm:p-6 md:p-8 bg-surface-container rounded-2xl sm:rounded-3xl border border-outline-variant/10 transition-all flex flex-col items-center gap-2 sm:gap-4 min-h-[7.5rem] sm:min-h-0"
          >
            <img
              :alt="tech.name"
              class="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain transition-transform group-hover:scale-110"
              :class="tech.imgClass"
              :src="tech.img"
              loading="lazy"
              decoding="async"
            />
            <span
              class="font-label text-[10px] sm:text-xs md:text-sm font-bold tracking-wider text-on-surface/80 text-center leading-tight"
            >
              {{ tech.name }}
            </span>
          </div>
        </div>
      </section>

      <HomeLatestPosts :blog-intro="copy.blogIntro" />

      <section class="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
        <div
          class="bg-gradient-to-br from-surface-container-high via-surface-container-low to-surface-container-high rounded-3xl sm:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-12 lg:p-24 relative overflow-hidden border border-primary/10 text-center shadow-2xl"
        >
          <div class="relative z-10">
            <h2
              class="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface mb-5 sm:mb-8 tracking-tight px-1"
            >
              {{ copy.cta.titleBefore }} <br /><span class="text-gradient">{{
                copy.cta.titleGradient
              }}</span>
            </h2>
            <p
              class="font-body text-on-surface-variant text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-14 leading-relaxed px-1"
            >
              {{ copy.cta.body }}
            </p>
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
              <button
                type="button"
                class="bg-primary text-on-primary min-h-12 px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-extrabold text-lg sm:text-xl shadow-[0_20px_50px_rgba(87,241,219,0.3)] sm:hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
                @click="openContact"
              >
                {{ copy.cta.primary }}
              </button>
              <a
                v-if="copy.cta.secondaryHref"
                class="bg-surface-container-highest/80 backdrop-blur-md text-on-surface min-h-12 px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-extrabold text-lg sm:text-xl border border-outline-variant/30 sm:hover:bg-surface-bright transition-all w-full sm:w-auto inline-flex items-center justify-center"
                :href="copy.cta.secondaryHref"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ copy.cta.secondary }}
              </a>
              <button
                v-else
                type="button"
                class="bg-surface-container-highest/80 backdrop-blur-md text-on-surface min-h-12 px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-extrabold text-lg sm:text-xl border border-outline-variant/30 sm:hover:bg-surface-bright transition-all w-full sm:w-auto"
              >
                {{ copy.cta.secondary }}
              </button>
            </div>
          </div>
          <div
            class="absolute -top-24 -right-24 w-[min(100vw,400px)] h-[min(100vw,400px)] bg-primary/10 blur-[80px] sm:blur-[120px] rounded-full animate-pulse pointer-events-none"
          />
          <div
            class="absolute -bottom-24 -left-24 w-[min(100vw,400px)] h-[min(100vw,400px)] bg-tertiary/10 blur-[80px] sm:blur-[120px] rounded-full animate-pulse pointer-events-none"
            style="animation-delay: 1s"
          />
        </div>
      </section>
    </main>

    <footer
      class="bg-surface-container-lowest w-full border-t border-outline-variant/10 pb-[max(1rem,env(safe-area-inset-bottom))]"
    >
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10"
      >
        <div class="flex flex-col gap-3 items-center md:items-start text-center md:text-left order-2 md:order-1">
          <span class="font-headline font-extrabold text-on-surface text-xl sm:text-2xl tracking-tighter">
            {{ copy.footer.brand }}
          </span>
          <p class="font-body text-xs sm:text-sm text-on-surface-variant max-w-xs md:max-w-none">
            © {{ year }} {{ copy.footer.rightsName }}. {{ copy.footer.rightsTagline }}
          </p>
        </div>
        <nav
          class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10 order-1 md:order-2"
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
import { ArrowRight, BadgeCheck, Menu, X } from 'lucide-vue-next'
import { computed, defineAsyncComponent, onUnmounted, ref, watch } from 'vue'

const ContactModal = defineAsyncComponent(() => import('~/components/ContactModal.vue'))
const HomeLatestPosts = defineAsyncComponent(() => import('~/components/HomeLatestPosts.vue'))

const copy = useHomeCopy()

useHead({
  title: copy.site.title,
  meta: [
    {
      name: 'description',
      content: `Luís Gustavo Silva — backend Python, APIs (Django, FastAPI) e DevOps — ${copy.site.title}.`,
    },
  ],
})

const year = new Date().getFullYear()
const mobileNavOpen = ref(false)
const contactModalOpen = ref(false)

const linkedInHref = computed(
  () => copy.socialLinks.find((l) => l.icon === 'linkedin')?.href ?? '#',
)

function openContact() {
  contactModalOpen.value = true
  mobileNavOpen.value = false
}

watch([mobileNavOpen, contactModalOpen], ([nav, contact]) => {
  if (!import.meta.client) return
  document.documentElement.style.overflow = nav || contact ? 'hidden' : ''
})

onUnmounted(() => {
  if (import.meta.client) document.documentElement.style.overflow = ''
})
</script>
