<template>
  <div>
    <HeroPanel :title="headline" :copy="copy" />
    <FeatureGrid />

    <section class="container split">
      <article class="glass split-card">
        <span class="eyebrow">Built for reuse</span>
        <h2>Ship the first product fast without rebuilding the foundation every time.</h2>
        <p>
          The template aligns backend contracts, admin operations, website intake, and miniapp auth so your next module
          starts from business logic instead of setup fatigue.
        </p>
      </article>
      <article class="glass split-card">
        <span class="eyebrow">Included now</span>
        <ul>
          <li>Backend auth and RBAC</li>
          <li>Admin dashboard and CRUD scaffolding</li>
          <li>Nuxt marketing pages</li>
          <li>Miniapp login shell and shared token flow</li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroPanel from '~/app/components/HeroPanel.vue'
import FeatureGrid from '~/app/components/FeatureGrid.vue'

const config = useRuntimeConfig()
const headline = `${config.public.siteName} helps small teams launch with less glue code.`
const copy = 'Use one practical foundation for your backend, admin, public website, and miniapp without losing architectural clarity.'

useSeoMeta({
  title: 'Home',
  description: copy,
})
</script>

<style scoped>
.split {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  padding-bottom: 48px;
}

.split-card {
  padding: 24px;
}

.split-card h2 {
  margin: 12px 0;
  font-size: 28px;
}

.split-card p,
.split-card li {
  color: #5b6879;
  line-height: 1.8;
}

@media (max-width: 760px) {
  .split {
    grid-template-columns: 1fr;
  }
}
</style>

