import { StartSectionType } from "./../types/data";
import { SocialType, StylesType } from "@/types/data";
import dataJson from "../../data.json";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useDataStore = defineStore("data", () => {
  const title = ref<string>("");
  const description = ref<string>("");
  const socials = ref<SocialType>({});
  const start = ref<StartSectionType>({});
  const styles = ref<StylesType>({
    theme: "default",
    colors: {
      primary: "#333333",
      secondary: "#dddddd",
      accent: "#000000",
      background: "#ffffff",
      text: "#000000",
    },
  });

  const defineData = () => {
    title.value = (dataJson.title as string) || "";
    description.value = dataJson.description || "";
    socials.value = (dataJson.socials as SocialType) || {
      email: {
        name: "",
        link: "",
        icon: "",
      },
    };
    start.value = (dataJson.start as StartSectionType) || {
      align: "left",
    };
    styles.value = (dataJson.styles as StylesType) || styles.value;

    document.documentElement.style.setProperty(
      "--primary",
      dataJson.styles.colors.primary
    );
    document.documentElement.style.setProperty(
      "--secondary",
      dataJson.styles.colors.secondary
    );
    document.documentElement.style.setProperty(
      "--accent",
      dataJson.styles.colors.accent
    );
    document.documentElement.style.setProperty(
      "--background",
      dataJson.styles.colors.background
    );
    document.documentElement.style.setProperty(
      "--text",
      dataJson.styles.colors.text
    );
  };

  return {
    defineData,
    title,
    description,
    socials,
    styles,
    start,
  };
});
