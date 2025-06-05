<template>
  <div class="app">
    <h1>主应用</h1>
    <div class="components-demo">
      <h2>Vue 组件示例</h2>
      <RemoteButton type="primary">主要按钮</RemoteButton>
      <RemoteButton type="secondary">次要按钮</RemoteButton>
      <RemoteButton type="danger">危险按钮</RemoteButton>

      <RemoteCard 
        title="主应用传递的标题" 
        content="这是主应用传递的内容"
        :showButton="true"
        buttonText="点击获取数据"
        @handleClick="handleCardClick"
      >
        <template #header>
          <h3>卡片标题</h3>
        </template>
        <p>这是卡片的内容区域</p>
        <template #footer>
          <p>卡片底部</p>
        </template>
      </RemoteCard>

      <h2>React 组件示例</h2>
      <div class="react-components">
        <ReactWrapper 
          v-if="ReactCounter"
          :component="ReactCounter.default"
          :props="{
            initialCount: 0,
            onCountChange: handleCountChange
          }"
        />
        <ReactWrapper 
          v-if="ReactTodoList"
          :component="ReactTodoList.default"
          :props="{
            onTodoChange: handleTodoChange
          }"
        />
      </div>

      <div v-if="cardData" class="card-data">
        <h3>接收到的数据：</h3>
        <p>{{ cardData }}</p>
      </div>

      <div v-if="count" class="count-data">
        <h3>计数器数据：</h3>
        <p>{{ count }}</p>
      </div>

      <div v-if="todos.length" class="todo-data">
        <h3>待办事项数据：</h3>
        <ul>
          <li v-for="todo in todos" :key="todo.id">
            {{ todo.text }} - {{ todo.completed ? '已完成' : '未完成' }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref, shallowRef } from 'vue'
import ReactWrapper from './components/ReactWrapper.vue'

const RemoteButton = defineAsyncComponent(() => import('ui-library/Button'))
const RemoteCard = defineAsyncComponent(() => import('ui-library/Card'))

// 使用 shallowRef 来存储 React 组件，因为shallowRef更适合存储组件，因为组件不需要深度响应式
const ReactCounter = shallowRef(null)
const ReactTodoList = shallowRef(null)

// 异步加载 React 组件
import('react-app/Counter').then(module => {
  ReactCounter.value = module
})

import('react-app/TodoList').then(module => {
  ReactTodoList.value = module
})

const cardData = ref('')
const count = ref(0)
const todos = ref([])

const handleCardClick = (data) => {
  cardData.value = data
}

const handleCountChange = (newCount) => {
  count.value = newCount
}

const handleTodoChange = (newTodos) => {
  todos.value = newTodos
}
</script>

<style scoped>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.components-demo {
  margin-top: 20px;
}

h1 {
  color: #2c3e50;
}

h2 {
  color: #42b983;
  margin-top: 30px;
}

button {
  margin-right: 10px;
  margin-bottom: 10px;
}

.ui-card {
  margin-top: 20px;
}

.react-components {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.card-data,
.count-data,
.todo-data {
  margin-top: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #e9ecef;
}

.card-data h3,
.count-data h3,
.todo-data h3 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.card-data p,
.count-data p {
  color: #666;
}

.todo-data ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-data li {
  padding: 5px 0;
  color: #666;
}
</style>
