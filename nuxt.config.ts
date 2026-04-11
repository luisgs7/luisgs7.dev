// https://nuxt.com/docs/api/configuration/nuxt-config
// Site estático: sem base de dados em runtime. Conteúdo em Markdown (@nuxt/content);
// `nuxt generate` produz HTML estático (sem servidor Node).
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: [
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
      {
        name: 'Space Grotesk',
        provider: 'google',
        weights: [400, 500, 700],
        subsets: ['latin'],
      },
    ],
  },
  image: {
    quality: 76,
    format: ['avif', 'webp', 'jpeg'],
    domains: ['lh3.googleusercontent.com', 'images.unsplash.com'],
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
          quality: 72,
        },
      },
    },
  },
  nitro: {
    compressPublicAssets: true,
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
    },
  },
  app: {
    head: {
      htmlAttrs: {
        class: 'dark',
        lang: 'pt',
      },
    },
  },
})
