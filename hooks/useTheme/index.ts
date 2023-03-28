import { create } from "zustand";

type MainColors = {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  quaternaryColor: string;
  quinaryColor: string;
  senaryColor: string;
  septenaryColor: string;
  octonaryColor: string;
  nonaryColor: string;
  denaryColor: string;
};

interface Theme {
  mainColors: MainColors;
}

export const useTheme = create<Theme>(() => ({
  mainColors: {
    primaryColor: "#03a914",
    secondaryColor: "#1cb215",
    tertiaryColor: "#35baf6",
    quaternaryColor: "#4fc3f7",
    quinaryColor: "#68cbf8",
    senaryColor: "#81d4fa",
    septenaryColor: "#9adcfb",
    octonaryColor: "#b3e5fd",
    nonaryColor: "#cceeff",
    denaryColor: "#e6f7ff",
  },
}));
