import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  DEFAULT_THEME,
  LOCAL_STORAGE_THEME_KEY,
  THEME_ARRAY
} from "../../Configs/Constants/const";
import { IThemeConfig } from "../../Theme/themeConfig";
import { PlaceThemeContext } from "../../Theme/themeContext";
import { useTheme } from "../../Theme/useTheme";
import { setToLS } from "../../Utils/localStorage";

export default function ThemePicker() {
  const themeContext = useContext(PlaceThemeContext);
  const [alignment, setAlignment] = useState(DEFAULT_THEME);
  const { theme } = useTheme();

  const themeSlection = useCallback(
    (type: any) => {
      const selectedTheme: IThemeConfig = THEME_ARRAY.filter((theme) => {
        return theme.themeName === type.currentTarget.value;
      })[0];
      themeContext.setNewTheme(selectedTheme.themeValue);
      setToLS(LOCAL_STORAGE_THEME_KEY, selectedTheme.themeValue);
      setAlignment(selectedTheme.themeValue);
    },
    [themeContext]
  );

  useEffect(() => {
    if (theme) {
      setAlignment(() => theme);
    }
  }, [theme]);

  return (
    <div className="theme-picker">
      <ToggleButtonGroup
        color="primary"
        exclusive
        onChange={themeSlection}
        value={alignment.themeType}
      >
        {THEME_ARRAY.map((theme: IThemeConfig, index: number) => (
          <ToggleButton value={theme.themeName} key={index}>
            <img src={theme.themeIcon} alt="theme logo" className="box-image" />
            <div className="img-back"></div>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
