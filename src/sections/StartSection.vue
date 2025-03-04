<template>
  <section
    id="start"
    :class="['start', props.start?.align || 'left']"
    :style="{ backgroundColor: props.start?.background || colors.background }"
  >
    <h1>{{ props.title }}</h1>
    <h2>{{ props.description }}</h2>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { StartSectionType } from "@/types/data";
import { useStylesStore } from "@/store/styles";

const { colors } = useStylesStore();
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
    type: Object as PropType<StartSectionType>,
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
