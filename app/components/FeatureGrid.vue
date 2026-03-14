<template>
  <section class="container section">
    <div class="section-head">
      <span class="eyebrow">Why this template</span>
      <h2 class="section-title">Clear boundaries, calmer shipping.</h2>
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
  { title: 'Shared contracts', copy: 'Backend, admin, website, and miniapp speak the same envelope and auth payload.' },
  { title: 'Clean layering', copy: 'Handlers stay thin while services own business rules and repositories own persistence.' },
  { title: 'Operator-first admin', copy: 'Menus, roles, and users are in place before the first custom feature lands.' },
  { title: 'Marketing-ready front', copy: 'SEO-friendly pages and a live contact form are already wired into the backend.' },
]
</script>

<style scoped>
.section {
  padding: 28px 0 44px;
}

.section-head {
  display: grid;
  gap: 12px;
  margin-bottom: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.feature {
  padding: 22px;
}

.feature h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.feature p {
  margin: 0;
  color: #5a6778;
  line-height: 1.7;
}

@media (max-width: 760px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>

