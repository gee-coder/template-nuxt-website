<template>
  <div>
    <HeroPanel :title="headline" :copy="copy" />
    <FeatureGrid />

    <section class="container split">
      <article class="glass split-card">
        <span class="eyebrow">为复用而生</span>
        <h2>先把第一版产品跑起来，不必每次都从底座重搭。</h2>
        <p>
          这套模板把后端契约、后台管理、官网获客和小程序鉴权先对齐好，让你后续新增模块时直接从业务逻辑起步。
        </p>
      </article>
      <article class="glass split-card">
        <span class="eyebrow">当前已包含</span>
        <ul>
          <li>后端登录鉴权与角色权限体系</li>
          <li>管理后台工作台与系统管理骨架</li>
          <li>官网展示页与联系表单</li>
          <li>微信小程序登录页与统一令牌流转</li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroPanel from '~/app/components/HeroPanel.vue'
import FeatureGrid from '~/app/components/FeatureGrid.vue'

const config = useRuntimeConfig()
const headline = `${config.public.siteName} 帮小团队更快把产品原型落地。`
const copy = '用一套清晰、可扩展的基础工程，把后端、后台、官网和小程序先统一起来，再专注做业务。'

useSeoMeta({
  title: '首页',
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
