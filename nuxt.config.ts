export default defineNuxtConfig({
  compatibilityDate: '2025-03-01',
  css: ['~/app/assets/styles/main.css'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || 'Nex Studio',
      siteTagline: process.env.NUXT_PUBLIC_SITE_TAGLINE || 'Launch with one calm, durable stack.',
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8080/api/v1',
    },
  },
  app: {
    head: {
      titleTemplate: `%s | ${process.env.NUXT_PUBLIC_SITE_NAME || 'Nex Studio'}`,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'A Nuxt 3 marketing site template that connects to a shared startup backend.',
        },
      ],
    },
  },
})

