<template>
  <div>
    <h1>{{ data.name }}</h1>
    <h2>{{ data.description }}</h2>
  </div>
</template>

<script>
import data from "@/data/data.json";
console.log(data);
export default {
  name: "TheStart",
  data() {
    return { data };
  },
};
</script>
