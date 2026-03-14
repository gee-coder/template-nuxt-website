<template>
  <section class="container page">
    <div class="glass page-card">
      <span class="eyebrow">Feature map</span>
      <h1 class="section-title">A public website that fits the rest of the stack.</h1>
      <p class="section-copy">
        This repo is intentionally narrow: strong SEO pages, clear calls to action, runtime-configured content, and a
        backend contact hook. That keeps the marketing layer focused while the product logic lives elsewhere.
      </p>
    </div>

    <div class="grid">
      <article v-for="item in items" :key="item.title" class="glass feature">
        <h3>{{ item.title }}</h3>
        <p>{{ item.copy }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  { title: 'SEO-first rendering', copy: 'Nuxt 3 serves the public pages with search visibility in mind.' },
  { title: 'Runtime configuration', copy: 'Brand text and API base URLs can change without rewriting the page layer.' },
  { title: 'Contact pipeline', copy: 'The contact form sends directly into the backend submission endpoint.' },
  { title: 'Composable-friendly', copy: 'Future calculators, lead magnets, or booking widgets can be added cleanly.' },
]

useSeoMeta({
  title: 'Features',
  description: 'Explore the public website capabilities in the startup template stack.',
})
</script>

<style scoped>
.page {
  display: grid;
  gap: 18px;
  padding-bottom: 48px;
}

.page-card,
.feature {
  padding: 24px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.feature p {
  color: #5b6879;
  line-height: 1.7;
}

@media (max-width: 760px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>

