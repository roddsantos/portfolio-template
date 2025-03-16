<template>
  <div class="section">
    <h3>{{ section.title }}</h3>
    <div
      class="section-item"
      :style="props.section.type === 'grid' ? {} : props.section.options || {}"
    >
      <p class="text" v-if="props.section.type === 'text'">
        {{ props.section.content }}
      </p>
      <img
        class="image"
        v-if="props.section.type === 'image'"
        :src="(props.section.content as string)"
      />
      <div v-if="props.section.type === 'list'">
        <li
          v-for="(item, index) of props.section.content"
          :key="`item-` + index"
        >
          {{ item }}
        </li>
      </div>
      <div
        class="grid"
        :style="{
          gridTemplateColumns: `repeat(auto-fill, minmax(18%, ${(
            100 / props.section.content.length -
            10
          ).toFixed(2)}%))`,
          ...props.section.options,
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
.section {
  & h3 {
    margin: 1rem;
  }
}

.section-item {
  display: flex;
}

.text {
  font-size: 1.5rem;
}
.image {
  max-width: 40%;
}

.grid {
  display: grid;
  gap: 1rem;
  grid-template-rows: repeat(auto-fill, 300px);
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
      max-height: 90%;
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
