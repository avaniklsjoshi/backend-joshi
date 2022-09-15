import colorMode from "../../Assets/Images/colorMode.png";
import dayMode from "../../Assets/Images/dayMode.png";
import nightMode from "../../Assets/Images/nightMode.png";
import { IThemeConfig } from "../../Theme/themeConfig";
import dark from "../../Theme/themes/dark";
import girly from "../../Theme/themes/girly";
import light from "../../Theme/themes/light";

export const THEME_ARRAY: IThemeConfig[] = [
  {
    themeName: "girly",
    themeColor: "#f1b7ea",
    themeIcon: colorMode,
    themeValue: girly
  },
  {
    themeName: "light",
    themeColor: "#f5f5f5",
    themeIcon: dayMode,
    themeValue: light
  },
  {
    themeName: "dark",
    themeColor: "#4B4453",
    themeIcon: nightMode,
    themeValue: dark
  }
];

export const DEFAULT_THEME = dark;
export const LOCAL_STORAGE_THEME_KEY = "joshi-themes";

export enum LANGUAGE_NAMES {
  HINDI = "हिन्दी",
  ENGLISH = "English",
  GERMAN = "Deutsch"
}
export enum LANGUAGE_NAMES_KEY {
  HINDI = "hn",
  ENGLISH = "en",
  GERMAN = "de"
}
export const DEFAULT_LANGUAGE = LANGUAGE_NAMES_KEY.ENGLISH;

export enum ROUTES {
  HOME = "/",
  FEATURES = "/features",
  NOT_FOUND = "*"
}
export enum ROUTES_NAME_KEY {
  HOME = "",
  FEATURES = "featuresRoute"
}
export enum DOC_TITLE_NAME {
  HOME = "Avani Joshi | Frontend Developer",
  FEATURES = "Avani Joshi | Frontend Developer | Features",
  NOT_FOUND = "Avani Joshi | Frontend Developer | Not Found"
}

export enum SOCIAL_LINKS {
  GITHUB = "https://github.com/avaniklsjoshi",
  GITLAB = "https://gitlab.com/avaniklsjoshi",
  LINKEDIN = "https://www.linkedin.com/in/avani-joshi-6365b887/",
  TWITTER = "https://twitter.com/avaniklsjoshi/"
}

export const PORTFOLIO_URLS = [
  {
    path: "../../Assets/Portfolio/Avani Joshi Cover letter.pdf",
    name: "Avani Joshi Cover letter.pdf"
  },
  {
    path: "../../Assets/Portfolio/Resume1.pdf",
    name: "Avani Joshi Resume.pdf"
  },
  {
    path: "../../Assets/Portfolio/Avani Joshi Frontend Developer.pdf",
    name: "Avani Joshi Frontend Developer.pdf"
  },
  {
    path: "../../Assets/Portfolio/Avani Joshi Projects Worked on.pdf",
    name: "Avani Joshi Projects Worked on.pdf"
  }
];

export const CARDS_LIST = [
  {
    path: "LINK TO MICROFRONTEND",
    title: "Things to notice in App",
    description: "Things to notice in app in various parts",
    thumbnail: "https://media.giphy.com/media/6RrGJniqA0zD07caO1/giphy.gif",
    information: "This will be a microfrontend for Things to notice in app."
  },
  {
    path: "LINK TO MICROFRONTEND",
    title: "Angular Air Quality App",
    description: "Mean App to see Air Quality",
    thumbnail: "https://media.giphy.com/media/6RrGJniqA0zD07caO1/giphy.gif",
    information:
      "This will be a microfrontend for Air Quality App. Which is a FullStack App."
  }
  // {
  //   path: "LINK TO MICROFRONTEND",
  //   title: "UI Designs",
  //   description: "examples for cool css tricks",
  //   thumbnail: "https://media.giphy.com/media/6RrGJniqA0zD07caO1/giphy.gif",
  //   information:
  //     "this will be a microfrontend for all the UI related cool stuff."
  // },
  // {
  //   path: "LINK TO MICROFRONTEND",
  //   title: "JS Techniques",
  //   description: "examples for cool JS tricks",
  //   thumbnail: "https://media.giphy.com/media/6RrGJniqA0zD07caO1/giphy.gif",
  //   information:
  //     "this will be a microfrontend for all the Js related cool stuff."
  // },
  // {
  //   path: "LINK TO MICROFRONTEND",
  //   title: "React Learnings",
  //   description: "examples for cool React tricks",
  //   thumbnail: "https://media.giphy.com/media/6RrGJniqA0zD07caO1/giphy.gif",
  //   information:
  //     "this will be a microfrontend for all the React related cool stuff."
  // },
  // {
  //   path: "LINK TO MICROFRONTEND",
  //   title: "ROUTING Patterns",
  //   description: "examples for necessary routing techniques",
  //   thumbnail: "https://media.giphy.com/media/6RrGJniqA0zD07caO1/giphy.gif",
  //   information:
  //     "this will be a microfrontend for all the routing related cool stuff."
  // },
  // {
  //   path: "LINK TO MICROFRONTEND",
  //   title: "Random Stuff",
  //   description: "examples which are hard to find suitable tab",
  //   thumbnail: "https://media.giphy.com/media/6RrGJniqA0zD07caO1/giphy.gif",
  //   information: "this will be a microfrontend for all the ramdom  cool stuff."
  // }
];
