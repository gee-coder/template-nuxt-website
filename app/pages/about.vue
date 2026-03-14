<template>
  <section class="container about">
    <article class="glass card">
      <span class="eyebrow">关于模板</span>
      <h1 class="section-title">面向独立开发者和小团队，也尽量保持结构清晰。</h1>
      <p class="section-copy">
        这套模板不是为了模仿大公司的复杂系统，而是为了让创业前期的几个产品也能在稳定、清楚、可扩展的基础上往前做。
      </p>
    </article>

    <article class="glass card">
      <h2>设计原则</h2>
      <ul>
        <li>跨仓库共享统一的接口契约。</li>
        <li>把业务逻辑放进服务层，而不是散落在路由文件里。</li>
        <li>把后台当成运营工具，而不是杂物间。</li>
        <li>让官网持续聚焦公开展示和转化目标。</li>
      </ul>
    </article>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '关于我们',
  description: '了解这套创业模板背后的设计原则和架构取向。',
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
