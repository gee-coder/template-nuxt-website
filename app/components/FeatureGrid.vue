<template>
  <section class="container section">
    <div class="section-head">
      <span class="eyebrow">为什么选这套模板</span>
      <h2 class="section-title">边界清晰，交付更稳。</h2>
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
  { title: '统一接口契约', copy: '后端、后台、官网和小程序统一使用同一套响应信封与鉴权返回结构。' },
  { title: '分层清晰', copy: '接口层保持轻量，业务规则放进服务层，数据访问沉到仓储层。' },
  { title: '运营后台先就位', copy: '菜单、角色、用户这些基础管理能力在业务功能开始前就能直接使用。' },
  { title: '官网表单已打通', copy: '公开页面、搜索友好能力和联系表单已经连到后端，不需要再重复搭桥。' },
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
