<template>
  <section class="container hero">
    <div class="glass hero-card">
      <div class="hero-copy">
        <span class="eyebrow">创业官网模板</span>
        <h1 class="section-title">{{ title }}</h1>
        <p class="section-copy">{{ copy }}</p>
        <div class="hero-actions">
          <NuxtLink class="action primary" to="/contact">立即咨询</NuxtLink>
          <NuxtLink class="action secondary" to="/features">查看能力</NuxtLink>
        </div>
      </div>

      <div class="hero-metrics">
        <article v-for="metric in metrics" :key="metric.label" class="metric">
          <strong>{{ metric.value }}</strong>
          <span>{{ metric.label }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  copy: string
}>()

const metrics = [
  { label: '协同仓库', value: '4' },
  { label: '默认鉴权', value: '令牌鉴权' },
  { label: '默认终端', value: '后台 + 小程序' },
]
</script>

<style scoped>
.hero {
  padding: 18px 0 36px;
}

.hero-card {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  padding: 28px;
}

.hero-copy {
  display: grid;
  gap: 16px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.action {
  padding: 14px 18px;
  border-radius: 999px;
  font-weight: 700;
}

.primary {
  color: white;
  background: linear-gradient(135deg, #0f766e, #0b5d91);
}

.secondary {
  border: 1px solid #dbe3ef;
}

.hero-metrics {
  display: grid;
  gap: 12px;
}

.metric {
  padding: 18px;
  border-radius: 22px;
  background: rgba(15, 23, 42, 0.04);
}

.metric strong {
  display: block;
  font-size: 34px;
}

.metric span {
  color: #64748b;
}

@media (max-width: 860px) {
  .hero-card {
    grid-template-columns: 1fr;
  }
}
</style>
