<template>
  <div class="container">
    <a
      v-for="social of socials"
      :key="social.name"
      :href="social.link"
      target="_blank"
    >
      <button class="social">
        <i :class="['icon', social.class]"></i>
      </button>
    </a>
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
</script>

<style scoped>
.container {
  display: flex;
  margin-top: 2rem;
  height: 60px;
  width: max-content;
  & a {
    text-decoration: none;
  }
}

.social {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 60px;
  height: 60px;
  margin-right: 1rem;
  border: 2px solid var(--primary);
  background-color: var(--secondary);
  & .icon {
    color: var(--text);
    font-size: 3rem;
  }
}
</style>
