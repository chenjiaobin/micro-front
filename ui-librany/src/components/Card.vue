<template>
  <div class="ui-card">
    <div v-if="$slots.header" class="ui-card-header">
      <slot name="header"></slot>
    </div>
    <div class="ui-card-content">
      <slot></slot>
      <div v-if="title" class="card-title">{{ title }}</div>
      <div v-if="content" class="card-content">{{ content }}</div>
    </div>
    <div v-if="$slots.footer" class="ui-card-footer">
      <slot name="footer"></slot>
      <button v-if="showButton" class="card-button" @click="handleClick">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  showButton: {
    type: Boolean,
    default: false
  },
  buttonText: {
    type: String,
    default: '点击'
  }
})

const emit = defineEmits(['handleClick'])

const handleClick = () => {
  emit('handleClick', '来自远程组件的数据')
}
</script>

<style scoped>
.ui-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.ui-card-header {
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
  background: #f5f5f5;
}

.ui-card-content {
  padding: 16px;
}

.ui-card-footer {
  padding: 16px;
  border-top: 1px solid #e0e0e0;
  background: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #2c3e50;
}

.card-content {
  color: #666;
  line-height: 1.5;
}

.card-button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.card-button:hover {
  opacity: 0.8;
}
</style> 