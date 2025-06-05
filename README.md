# Vite + Vue3 模块联邦示例项目

这是一个基于 Vite + Vue3 的模块联邦（Module Federation）示例项目，展示了如何使用 Vite 的模块联邦功能实现微前端架构。

## 项目结构

```
├── main-app/          # Vue 主应用
│   ├── src/
│   │   ├── components/
│   │   │   └── ReactWrapper.vue  # React 组件包装器
│   │   └── App.vue
│   ├── package.json
│   └── vite.config.js
├── react-app/         # React 远程模块
│   ├── src/
│   │   ├── components/
│   │   │   ├── Counter.jsx
│   │   │   └── TodoList.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── ui-library/        # Vue 远程模块
    ├── src/
    │   ├── components/
    │   │   ├── Card.vue
    │   │   └── Button.vue
    │   └── index.js
    ├── package.json
    └── vite.config.js
```

## 技术栈

- **主应用**：Vue 3 + Vite
- **React 远程模块**：React 18 + Vite
- **Vue 远程模块**：Vue 3 + Vite
- **构建工具**：Vite
- **模块联邦**：@originjs/vite-plugin-federation

## 功能特性

1. **Vue 和 React 组件混合使用**
   - 使用 ReactWrapper 组件在 Vue 应用中渲染 React 组件
   - 支持 React 组件的异步加载
   - 实现组件间的数据传递和事件通信

2. **远程模块加载**
   - 支持 Vue 和 React 远程组件的动态加载
   - 实现模块间的依赖共享
   - 优化加载性能和资源利用

3. **组件通信**
   - Vue 和 React 组件间的事件传递
   - Props 的双向绑定
   - 状态管理的统一处理

## 开发指南

### 环境要求
- Node.js >= 16
- npm >= 7

### 安装依赖
```bash
# 安装主应用依赖
cd main-app
npm install

# 安装 React 远程模块依赖
cd ../react-app
npm install

# 安装 Vue 远程模块依赖
cd ../ui-library
npm install
```

### 开发模式
```bash
# 启动 React 远程模块
cd react-app
npm run dev

# 启动 Vue 远程模块
cd ui-library
npm run dev

# 启动主应用
cd main-app
npm run dev
```

### 构建部署
```bash
# 构建 React 远程模块
cd react-app
npm run build
npm run preview -- --port 5002

# 构建 Vue 远程模块
cd ui-library
npm run build
npm run preview -- --port 5001

# 构建主应用
cd main-app
npm run build
npm run preview
```

## 注意事项

1. **React 组件集成**
   - 使用 `shallowRef` 存储 React 组件
   - 通过 `ReactWrapper` 组件进行渲染
   - 确保正确访问组件的默认导出
   - 注意组件生命周期的管理

2. **模块联邦配置**
   - 确保远程模块的端口配置正确
   - 共享依赖版本需要保持一致
   - 注意模块加载顺序

3. **开发调试**
   - 使用浏览器开发工具监控模块加载
   - 检查网络请求确保资源正确加载
   - 注意跨域配置

## 常见问题

1. **React 组件加载失败**
   - 检查模块导入方式是否正确
   - 确认组件是否正确导出
   - 验证 ReactWrapper 组件的使用

2. **样式冲突**
   - 使用 CSS Modules 或 scoped 样式
   - 注意样式优先级
   - 避免全局样式污染

3. **性能优化**
   - 合理使用异步加载
   - 优化组件重渲染
   - 注意内存泄漏问题

## 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

MIT 