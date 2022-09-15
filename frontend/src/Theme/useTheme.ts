import { useEffect, useState } from "react";
import {
  DEFAULT_THEME,
  LOCAL_STORAGE_THEME_KEY
} from "../Configs/Constants/const";
import { getFromLS } from "../Utils/localStorage";

export const useTheme = () => {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    const localTheme = getFromLS(LOCAL_STORAGE_THEME_KEY);
    localTheme ? setTheme(localTheme) : setTheme(DEFAULT_THEME);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded };
};
