// https://nuxt.com/docs/api/configuration/nuxt-config
// Site estático: sem base de dados em runtime. Conteúdo em Markdown (@nuxt/content);
// `nuxt generate` produz HTML estático (sem servidor Node).
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: [
    './modules/home-frontmatter',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/seo',
    'nuxt-og-image',
  ],
  site: {
    url: 'https://luisgs7.dev',
    name: 'Luís Gustavo Silva',
  },
  /** Menos overhead no servidor Nitro quando as OG são só em build (SSG). */
  ogImage: {
    zeroRuntime: true,
  },
  /** Sitemap só em build; menos código no bundle (estático). */
  sitemap: {
    zeroRuntime: true,
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  fonts: {
    // `latin` cobre português (incl. acentos comuns); menos bytes que latin+latin-ext.
    families: [
      {
        name: 'Manrope',
        provider: 'google',
        weights: [400, 600, 700, 800],
        subsets: ['latin'],
      },
      {
        name: 'Inter',
        provider: 'google',
        weights: [400, 500, 600],
        subsets: ['latin'],
      },
    ],
  },
  image: {
    quality: 68,
    format: ['avif', 'webp', 'jpeg'],
    domains: ['lh3.googleusercontent.com'],
    screens: {
      xs: 360,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
    presets: {
      hero: {
        modifiers: {
          fit: 'cover',
          quality: 60,
        },
      },
      /** Listagens de artigos: largura alinhada a ~2 colunas / mobile, menos bytes que 800px. */
      blogCard: {
        modifiers: {
          fit: 'cover',
          width: 720,
          height: 405,
          quality: 62,
        },
      },
    },
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
    routeRules: {
      '/images/**': {
        headers: { 'cache-control': 'public, max-age=31536000, immutable' },
      },
      '/_nuxt/**': {
        headers: { 'cache-control': 'public, max-age=31536000, immutable' },
      },
      // URLs IPX incluem parâmetros de transformação — cache longo é seguro e melhora o Lighthouse.
      '/_ipx/**': {
        headers: { 'cache-control': 'public, max-age=31536000, immutable' },
      },
      // HTML do blog: revalidação suave (PageSpeed — ciclos de cache no documento).
      '/blog': {
        headers: {
          'cache-control': 'public, max-age=0, s-maxage=600, stale-while-revalidate=86400',
        },
      },
      '/blog/**': {
        headers: {
          'cache-control': 'public, max-age=0, s-maxage=600, stale-while-revalidate=86400',
        },
      },
      '/': {
        headers: {
          'cache-control': 'public, max-age=0, s-maxage=600, stale-while-revalidate=86400',
        },
      },
      '/cursos': {
        headers: {
          'cache-control': 'public, max-age=0, s-maxage=600, stale-while-revalidate=86400',
        },
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        class: 'dark',
        lang: 'pt',
      },
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' },
        { rel: 'dns-prefetch', href: 'https://app.kit.com' },
      ],
    },
  },
  experimental: {
    defaults: {
      nuxtLink: {
        // Evita prefetch ao entrar na viewport (menos JS “não usado” no Lighthouse).
        prefetchOn: { visibility: false, interaction: true },
      },
    },
  },
  vite: {
    build: {
      // Evita o polyfill de modulepreload (pedido em cadeia, ~JS extra no Lighthouse).
      modulePreload: { polyfill: false },
    },
  },
})
