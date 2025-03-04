import { defineStore } from "pinia";
import { ref } from "vue";

export const useGeneralStore = defineStore("general", () => {
  const darkMode = ref<boolean>(false);

  if (localStorage.getItem("darkMode")) {
    darkMode.value = JSON.parse(localStorage.getItem("darkMode") || "false");
  }

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    localStorage.setItem("darkMode", JSON.stringify(!darkMode.value));
  };

  return {
    darkMode,
    toggleDarkMode,
  };
});
