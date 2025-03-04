<template>
  <Start
    :title="typedData.title"
    :description="typedData.description"
    :start="typedData.start"
  />
</template>

<script setup lang="ts">
import Start from "./sections/StartSection.vue";
import { DATA } from "../data";
import { DataType } from "@/types/data";
import { useGeneralStore } from "@/store/styles";

const typedData = DATA as DataType;
const { setColors } = useGeneralStore();
setColors(typedData.styles);
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
