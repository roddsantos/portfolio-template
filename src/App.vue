<template>
  <Start
    :title="data.title"
    :description="data.description"
    :start="data.start"
  />
</template>

<script setup lang="ts">
import Start from "./sections/StartSection.vue";
import data from "@/data/data.json";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
  height: 100%;
  width: 100vw;
  overflow-y: auto;
}

h1 {
  margin: 0px;
}
</style>
