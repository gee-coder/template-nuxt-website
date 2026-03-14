# 协作流程说明

## 1. 目标

本文件用于约束官网模板的协作、分流与发布节奏，帮助团队在内容、交互与部署迭代中保持一致。

## 2. 建议启用的协作能力

建议在 GitHub 中启用：

- Discussions：承接官网内容建议、SEO 问题与使用问答
- Projects：管理页面迭代、活动页需求与缺陷修复
- Releases：沉淀版本说明与升级注意事项

## 3. 建议的 Discussions 分类

- `Q&A`：环境、部署、联系表单联调问题
- `Ideas`：页面结构、内容模块、视觉优化建议
- `Show and tell`：二次开发官网展示
- `Announcements`：版本发布、配置变更、兼容性提醒

## 4. 建议的 Projects 看板泳道

- `Inbox`
- `Ready`
- `In Progress`
- `Review`
- `Blocked`
- `Done`

## 5. 标签治理建议

建议采用三层标签结构：

- 类型：`type:bug`、`type:feature`、`type:docs`、`type:chore`、`type:breaking`
- 状态：`status:needs-triage`、`status:ready`、`status:blocked`
- 优先级：`priority:p1`、`priority:p2`、`priority:p3`

官网模板建议保留的领域标签：

- `area:content`
- `area:contact`
- `area:seo`
- `area:infra`

## 6. Pull Request 协作链路

1. 开发者发起 Pull Request
2. `CODEOWNERS` 自动请求维护者评审
3. `pr-labeler` 自动补充领域标签
4. `release-drafter` 持续汇总到版本草稿
5. CI 与人工验证通过后合并

## 7. 发布协作建议

- 发布前更新 [CHANGELOG.md](./CHANGELOG.md)
- 参照 [RELEASE.md](./RELEASE.md) 执行构建与配置核对
- 如涉及联系表单或公开接口变更，需同步通知后端维护者
