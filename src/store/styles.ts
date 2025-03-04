import { StylesType } from "@/types/data";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGeneralStore = defineStore("styles", () => {
  const colors = ref<StylesType>({
    primary: "#333333",
    secondary: "#dddddd",
    accent: "#000000",
    background: "#ffffff",
    text: "#000000",
  });

  const setColors = (colorsData: StylesType) => {
    document.documentElement.style.setProperty("--primary", colorsData.primary);
    document.documentElement.style.setProperty(
      "--secondary",
      colorsData.secondary
    );
    document.documentElement.style.setProperty("--accent", colorsData.accent);
    document.documentElement.style.setProperty(
      "--background",
      colorsData.background
    );
    document.documentElement.style.setProperty("--text", colorsData.text);
    colors.value = { ...colorsData };
  };

  return {
    colors,
    setColors,
  };
});
