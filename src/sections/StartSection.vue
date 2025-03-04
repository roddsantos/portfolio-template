<template>
  <section
    id="start"
    :class="['start', start?.align || 'left']"
    :style="{ backgroundColor: start?.background || styles.default.background }"
  >
    <h1>{{ title }}</h1>
    <h2>{{ description }}</h2>
    <SocialsComponent :socials="socials" />
  </section>
</template>

<script setup lang="ts">
import SocialsComponent from "@/components/SocialsComponent.vue";
import { useDataStore } from "@/store/data";
const { title, description, socials, start, styles } = useDataStore();
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
