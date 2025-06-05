## React 组件集成问题

### 问题描述
在将 React 远程组件集成到 Vue 主应用时，遇到以下错误：
```
Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
```

### 错误原因
1. **模块导入方式不当**
   - 使用 Vue 的 `defineAsyncComponent` 导入 React 组件
   - React 组件需要直接获取组件本身，而不是 Vue 的异步组件包装器

2. **组件类型不匹配**
   - 传递的是 Vue 的异步组件对象，而不是 React 组件本身
   - React 无法正确渲染非标准组件类型

### 解决方案
1. **使用 shallowRef 和动态导入**
```javascript
// 修改前
const ReactCounter = defineAsyncComponent(() => import('react-app/Counter'))

// 修改后
const ReactCounter = shallowRef(null)
import('react-app/Counter').then(module => {
  ReactCounter.value = module
})
```

2. **访问组件的默认导出**
```javascript
// 修改前
<ReactWrapper :component="ReactCounter" />

// 修改后
<ReactWrapper 
  v-if="ReactCounter"
  :component="ReactCounter.default"
  :props="{...}"
/>
```

3. **改进 ReactWrapper 组件**
```javascript
const props = defineProps({
  component: {
    type: [Object, Function],  // 支持对象和函数类型
    required: true
  }
})

const renderReactComponent = () => {
  if (reactRoot.value && props.component) {  // 确保组件存在
    if (!root) {  // 避免重复创建 root
      root = createRoot(reactRoot.value)
    }
    // ...
  }
}
```

### 数据流说明
1. **组件加载过程**：
   - 异步加载 React 组件
   - 将模块存储在 shallowRef 中
   - Vue 检测到变化
   - ReactWrapper 接收到新的组件
   - ReactWrapper 创建 React root 并渲染组件

2. **Props 传递过程**：
   - Vue 组件传递 props
   - ReactWrapper 转换 props（包括事件处理函数）
   - 传递给 React 组件

### 实现效果
- React 组件能够正确加载和渲染
- Props 和事件能够正确传递
- 组件的生命周期得到正确管理
- Vue 和 React 的集成更加稳定和可靠
