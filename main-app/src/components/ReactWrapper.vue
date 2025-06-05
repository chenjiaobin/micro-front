<template>
  <div ref="reactRoot"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { createRoot } from 'react-dom/client'
import React from 'react'

const props = defineProps({
  component: {
    type: [Object, Function],
    required: true
  },
  props: {
    type: Object,
    default: () => ({})
  }
})

const reactRoot = ref(null)
let root = null

const renderReactComponent = () => {
  if (reactRoot.value && props.component) {
    // 创建 React 根节点
    if (!root) {
      root = createRoot(reactRoot.value)
    }
    
    // 将 props 转换为 React 组件需要的格式
    const reactProps = {
      ...props.props,
      // 将 Vue 的事件处理函数转换为 React 的 props
      ...Object.keys(props.props).reduce((acc, key) => {
        if (key.startsWith('on') && typeof props.props[key] === 'function') {
          const reactEventName = key.charAt(2).toLowerCase() + key.slice(3)
          acc[reactEventName] = props.props[key]
        }
        return acc
      }, {})
    }

    // 渲染 React 组件
    root.render(React.createElement(props.component, reactProps))
  }
}

// 监听 props 变化
watch(() => props.props, () => {
  renderReactComponent()
}, { deep: true })

// 监听组件变化
watch(() => props.component, () => {
  renderReactComponent()
})

onMounted(() => {
  renderReactComponent()
})

onUnmounted(() => {
  if (root) {
    root.unmount()
    root = null
  }
})
</script> 