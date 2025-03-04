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

export type DataType = {
  title: string;
  description: string;
  start: StartSectionType;
  styles: StylesType;
  socials: SocialType;
};
