# Vue 3 + TypeScript + Vite

开发环境：node20+

- 包含 Vue 3 + TypeScript + Vite 基本配置

- element ui plus 组件库

- eslint 代码规范

- prettier 代码格式化

- stylelint 样式规范

- husky git 钩子

- commitlint 提交规范

- vuei18n 国际化

- pinia 状态管理

### husky tutorial

```
husky install (pnpm run prepare)
npx husky add .husky/pre-commit "pnpm run lint:lint-staged"
npx husky add .husky/commit-msg "npx --no-install commitlint --edit"
```
