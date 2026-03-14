export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  useSeoMeta({
    ogSiteName: config.public.siteName,
    twitterCard: 'summary_large_image',
  })
})

