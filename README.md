# Vite + Vue3 模块联邦示例项目

这是一个基于 Vite + Vue3 的模块联邦（Module Federation）示例项目，展示了如何使用 Vite 的模块联邦功能实现微前端架构。

## 项目结构

```
├── main-app/          # 主应用
│   ├── src/
│   │   ├── App.vue    # 主应用入口组件
│   │   └── main.js    # 主应用入口文件
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── ui-librany/        # 远程模块（UI组件库）
    ├── src/
    │   ├── components/
    │   │   ├── Button.vue  # 按钮组件
    │   │   └── Card.vue    # 卡片组件
    │   ├── App.vue
    │   └── main.js
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 技术栈

- Vue 3
- Vite
- Module Federation (@originjs/vite-plugin-federation)

## 功能特性

- 基于 Vite 的模块联邦实现
- 远程组件共享
- 组件间数据传递
- 事件通信

## 快速开始

### 1. 安装依赖

```bash
# 安装远程模块依赖
cd ui-librany
npm install

# 安装主应用依赖
cd ../main-app
npm install
```

### 2. 构建远程模块

```bash
cd ui-librany
npm run build
npm run preview
```

### 3. 启动主应用

```bash
cd main-app
npm run dev
```

## 项目说明

### 远程模块 (ui-library)

远程模块提供了两个可复用的组件：

1. Button 组件
   - 支持多种类型：primary、secondary、danger
   - 可自定义样式
   - 支持点击事件

2. Card 组件
   - 支持标题、内容、底部插槽
   - 可自定义内容
   - 支持按钮显示和事件处理

### 主应用 (main-app)

主应用通过模块联邦引用远程模块的组件，实现了：

- 组件的远程加载
- 组件间的数据传递
- 事件通信
- 样式隔离

## 开发指南

### 添加新的远程组件

1. 在 `ui-librany/src/components` 中创建新组件
2. 在 `ui-librany/vite.config.js` 中配置暴露组件：

```js
federation({
  exposes: {
    './NewComponent': './src/components/NewComponent.vue'
  }
})
```

### 在主应用中使用远程组件

```js
import { defineAsyncComponent } from 'vue'

const RemoteComponent = defineAsyncComponent(() => 
  import('ui-library/NewComponent')
)
```

## 注意事项

1. 确保远程模块和主应用使用相同版本的 Vue
2. 远程模块需要先构建并运行
3. 注意组件间的数据传递和事件通信

## 许可证

MIT 