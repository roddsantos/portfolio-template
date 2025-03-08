<template>
  <div class="section-item">
    <p class="text" v-if="props.section.type === 'text'">
      {{ props.section.content }}
    </p>
    <img
      class="image"
      v-if="props.section.type === 'image'"
      :src="(props.section.content as string)"
    />
    <div v-if="props.section.type === 'list'">
      <li v-for="(item, index) of props.section.content" :key="`item-` + index">
        {{ item }}
      </li>
    </div>
    <div
      class="grid"
      :style="{
        gridTemplateColumns: `repeat(auto-fill, minmax(18%, ${(
          100 / props.section.content.length
        ).toFixed(2)}%))`,
      }"
      v-if="props.section.type === 'grid'"
    >
      <div
        v-for="(item, index) of (props.section.content as unknown as GridItemType[])"
        :key="`grid-item-` + index"
        class="grid-item"
      >
        <img class="img" v-if="item.type === 'image'" :src="item.source" />
        <i class="icon" v-if="item.type === 'icon'" :class="item.class"></i>
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GridItemType, SectionType } from "@/types/data";
import { PropType } from "vue";

const props = defineProps({
  section: {
    type: Object as PropType<SectionType>,
    default: null,
  },
});
</script>

<style lang="css" scoped>
.text {
  font-size: 1.5rem;
}
.image {
  max-width: 40%;
}

.grid {
  display: grid;
  gap: 1rem;
  width: 100%;
  & .grid-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary);
    padding: 1.5rem;
    & .icon {
      font-size: 8vw;
    }
    & .img {
      width: 100%;
    }
    & p {
      margin: 0.75rem 0px 0px;
    }
  }
}

.section-item {
  padding: 1rem;
}
</style>
