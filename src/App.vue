<template>
  <AppRouter />
</template>

<script setup lang="ts">
import { useGeneralStore } from "@/store/general";
import { useDataStore } from "@/store/data";
import AppRouter from "./app-router.vue";

const { defineMode } = useGeneralStore();
const { defineData } = useDataStore();

defineMode();
defineData();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0px;
  height: 100%;
  width: 100vw;
  overflow-y: auto;
}

h1 {
  font-size: 4rem;
  margin: 0px;
}

h2 {
  font-size: 2.5rem;
  margin: 0px;
}

h3 {
  font-size: 2rem;
  margin: 0px;
}

h4 {
  font-size: 1.5rem;
  margin: 0px;
}

section {
  padding: 2rem 10vw;
}
</style>
