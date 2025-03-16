<script setup>
import { ref, computed } from "vue";
import PortfolioPage from "./pages/PortfolioPage.vue";
import CreatorPage from "./pages/CreatorPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

const routes = {
  "/": PortfolioPage,
  "/create": CreatorPage,
};

const currentHash = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentHash.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[window.location.pathname] || NotFoundPage;
});
</script>

<template>
  <component :is="currentView" />
</template>
