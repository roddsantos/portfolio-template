<template>
  <section class="content">
    <div
      class="sections"
      v-for="(row, indexRow) of sections"
      :key="'row-' + indexRow"
      :style="{ width: `${(100 / row.length).toFixed(2)}%` }"
    >
      <div
        v-for="(section, indexSection) of row"
        :key="'row-' + indexSection"
        :class="['section', section.type]"
      >
        <h3>{{ section.title }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useDataStore } from "@/store/data";
const { sections } = useDataStore();
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
}

.sections {
  display: flex;
  flex-direction: row;
  padding: 2rem 0px;
}

.section {
  border-radius: var(--border-radius);
  background-color: var(--background);
  color: var(--text);
  min-height: 60px;
  min-width: 100%;
  & h3 {
    margin: 1rem;
  }
}
</style>
