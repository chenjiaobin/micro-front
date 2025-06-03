<template>
  <button class="ui-button" :class="type" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger'].includes(value)
  }
})

defineEmits(['click'])
</script>

<style scoped>
.ui-button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.primary {
  background-color: #4CAF50;
  color: white;
}

.secondary {
  background-color: #2196F3;
  color: white;
}

.danger {
  background-color: #f44336;
  color: white;
}

.ui-button:hover {
  opacity: 0.8;
}
</style> 