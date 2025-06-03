<template>
  <div class="app">
    <h1>主应用</h1>
    <div class="components-demo">
      <h2>按钮组件示例</h2>
      <RemoteButton type="primary">主要按钮</RemoteButton>
      <RemoteButton type="secondary">次要按钮</RemoteButton>
      <RemoteButton type="danger">危险按钮</RemoteButton>

      <h2>卡片组件示例</h2>
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

      <div v-if="cardData" class="card-data">
        <h3>接收到的数据：</h3>
        <p>{{ cardData }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'

const RemoteButton = defineAsyncComponent(() => import('ui-library/Button'))
const RemoteCard = defineAsyncComponent(() => import('ui-library/Card'))

const cardData = ref('')

const handleCardClick = (data) => {
  cardData.value = data
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

.card-data {
  margin-top: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #e9ecef;
}

.card-data h3 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.card-data p {
  color: #666;
}
</style>
