import { CSSProperties, HTMLAttributes } from "vue";

export type ColorsType = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
};

export type StylesType = {
  theme: "default" | "custom";
  colors: ColorsType;
};

export type StartSectionType = {
  background?: string;
  align?: "left" | "right" | "center";
};

export type SocialType = {
  [key: string]: {
    name: string;
    link: string;
    class: string;
  };
};

export type SectionTypeField = "text" | "image" | "grid" | "list";

export type GridItemType = {
  type: "icon" | "image";
  class: string;
  source: string;
  title: string;
};

type StyleValue =
  | false
  | null
  | undefined
  | string
  | CSSProperties
  | Array<StyleValue>;

// export type SectionOptionsType = Partial<CSSStyleDeclaration> {
//   orientation: "left" | "right" | "center";
// };

export type SectionType = {
  title: string;
  type: "text" | "image" | "grid" | "list";
  style: "transparent" | "filled" | "outlined";
  content: string | string[] | GridItemType[];
  options: {
    backgroundColor: string;
  };
};

export type DataType = {
  title: string;
  description: string;
  start: StartSectionType;
  styles: StylesType;
  socials: SocialType;
  sections: SectionType[][];
};
