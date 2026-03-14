<template>
  <div class="site-shell">
    <SiteHeader />
    <main>
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from '~/app/components/SiteHeader.vue'
import SiteFooter from '~/app/components/SiteFooter.vue'
</script>

<style scoped>
.site-shell {
  min-height: 100vh;
}
</style>

