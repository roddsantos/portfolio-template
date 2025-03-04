import {
  DataType,
  SocialType,
  StartSectionType,
  StylesType,
} from "@/types/data";
import data from "../../data.json";

export const DATA: DataType = {
  title: data.title || "",
  description: data.description || "",
  socials: (data.socials as SocialType) || {
    email: {
      name: "",
      link: "",
      icon: "",
    },
  },
  start: (data.start as StartSectionType) || {
    align: "left",
  },
  styles: (data.styles as StylesType) || {
    primary: "#333333",
    secondary: "#dddddd",
    accent: "#000000",
    background: "#ffffff",
    text: "#000000",
  },
};
