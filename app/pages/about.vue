<template>
  <section class="container about">
    <article class="glass card">
      <span class="eyebrow">About the template</span>
      <h1 class="section-title">Designed for solo founders and tiny teams who still want clean code.</h1>
      <p class="section-copy">
        The goal is not to mimic a giant enterprise stack. The goal is to make the first few products feel stable,
        legible, and expandable without overbuilding before revenue exists.
      </p>
    </article>

    <article class="glass card">
      <h2>Principles</h2>
      <ul>
        <li>Keep the contracts shared across repos.</li>
        <li>Push business logic into services, not route files.</li>
        <li>Treat the admin as an operator tool, not a dumping ground.</li>
        <li>Keep the website public and focused on conversion.</li>
      </ul>
    </article>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About',
  description: 'Learn the principles behind the startup template architecture.',
})
</script>

<style scoped>
.about {
  display: grid;
  gap: 18px;
  padding-bottom: 48px;
}

.card {
  padding: 24px;
}

.card ul {
  display: grid;
  gap: 10px;
  color: #5b6879;
}
</style>

