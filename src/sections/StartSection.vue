<template>
  <div
    id="start"
    :class="['start', props.start?.align || 'left']"
    :style="{ backgroundColor: props.start?.background || '#ffffff' }"
  >
    <h1>{{ props.title }}</h1>
    <h2>{{ props.description }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  start: {
    type: Object,
  },
});
</script>

<style scoped>
.start {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  &.left {
    align-items: start;
  }
  &.right {
    align-items: end;
  }
  &.center {
    align-items: center;
  }
}
</style>
