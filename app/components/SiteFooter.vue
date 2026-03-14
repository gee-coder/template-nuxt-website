<template>
  <footer class="container footer">
    <div>
      <strong>{{ siteName }}</strong>
      <p>{{ tagline }}</p>
    </div>
    <p>与统一后端、管理后台和小程序模板协同设计，方便一起落地。</p>
  </footer>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const siteName = runtimeConfig.public.siteName
const tagline = runtimeConfig.public.siteTagline
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 28px 0 44px;
  color: #5f6b7a;
}

.footer p {
  margin: 6px 0 0;
}

@media (max-width: 720px) {
  .footer {
    flex-direction: column;
  }
}
</style>
