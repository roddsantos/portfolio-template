export type StylesType = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
};

export type StartSectionType = {
  background?: string;
  align?: "left" | "right" | "center";
};

export type SocialType = {
  name: string;
  link: string;
  icon: string;
};

export type DataType = {
  title: string;
  description: string;
  start: StartSectionType;
  styles: StylesType;
  socials: {
    [key: string]: SocialType;
  };
};
