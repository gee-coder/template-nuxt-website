<template>
  <header class="container header">
    <NuxtLink to="/" class="brand">
      <span class="mark">N</span>
      <div>
        <strong>{{ siteName }}</strong>
        <small>{{ tagline }}</small>
      </div>
    </NuxtLink>

    <nav class="nav">
      <NuxtLink v-for="item in items" :key="item.to" :to="item.to" class="nav-link">{{ item.label }}</NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

const siteName = runtimeConfig.public.siteName
const tagline = runtimeConfig.public.siteTagline
const items = [
  { to: '/', label: '首页' },
  { to: '/features', label: '能力介绍' },
  { to: '/about', label: '关于我们' },
  { to: '/contact', label: '联系咨询' },
]
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mark {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  color: white;
  font-weight: 800;
  background: linear-gradient(135deg, #0f766e, #0b5d91);
}

.brand small {
  display: block;
  color: #6b7280;
}

.nav {
  display: flex;
  gap: 18px;
}

.nav-link {
  padding: 10px 14px;
  border-radius: 999px;
  transition: background 0.2s ease;
}

.nav-link:hover {
  background: rgba(15, 118, 110, 0.08);
}

@media (max-width: 720px) {
  .header {
    flex-direction: column;
    gap: 12px;
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
