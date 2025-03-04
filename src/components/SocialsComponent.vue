<template>
  <div class="container">
    <div v-for="social of socials" :key="social.name">
      <v-icon icon="{{ '$'+social.icon }}"></v-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SocialType } from "@/types/data";
import { PropType } from "vue";

const props = defineProps({
  socials: {
    type: Object as PropType<SocialType>,
    default: null,
  },
});

const socials = props.socials
  ? Object.keys(props.socials).map((socialName) => props.socials[socialName])
  : [];
console.log(socials, props.socials);
</script>

<style scoped>
.container {
  display: flex;
  margin-top: 2rem;
  height: 60px;
  padding: 1rem 2rem;
  background-color: var(--secondary);
}
</style>
