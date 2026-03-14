<template>
  <section class="container page">
    <div class="glass page-card">
      <span class="eyebrow">能力地图</span>
      <h1 class="section-title">一套能和整条技术链路协同工作的官网。</h1>
      <p class="section-copy">
        这个仓库刻意保持聚焦：负责公开展示、搜索友好能力、清晰的转化入口，以及联系表单到后端的打通，产品逻辑继续留在别的仓库里演进。
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
  { title: '优先考虑搜索友好', copy: '公开页面默认兼顾搜索收录与品牌曝光，方便后续做内容运营。' },
  { title: '运行时可配置', copy: '站点标题、副标题和接口地址都能通过配置切换，不用重写页面。' },
  { title: '咨询链路已接通', copy: '联系表单会直接写入后端公开提交接口，方便后台后续跟进。' },
  { title: '便于继续扩展', copy: '后续继续加计算器、预约组件或活动页时，仍能保持结构清晰。' },
]

useSeoMeta({
  title: '能力介绍',
  description: '查看这套创业模板中官网部分已经具备的公开展示能力。',
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
