export default defineNuxtConfig({
  compatibilityDate: '2025-03-01',
  css: ['~/app/assets/styles/main.css'],
  devtools: { enabled: true },
  dir: {
    pages: 'app/pages',
    layouts: 'app/layouts',
  },
  plugins: ['~/app/plugins/site-meta.client'],
  runtimeConfig: {
    public: {
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || 'Nex 官网',
      siteTagline: process.env.NUXT_PUBLIC_SITE_TAGLINE || '用一套稳定清晰的技术底座，把产品更快推向市场。',
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8080/api/v1',
    },
  },
  app: {
    head: {
      titleTemplate: `%s | ${process.env.NUXT_PUBLIC_SITE_NAME || 'Nex 官网'}`,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: '一套面向创业团队的 Nuxt 3 官网模板，默认连接统一后端能力。',
        },
      ],
    },
  },
})
