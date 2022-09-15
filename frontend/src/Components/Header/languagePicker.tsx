import { MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_NAMES,
  LANGUAGE_NAMES_KEY
} from "../../Configs/Constants/const";

export default function LanguagePicker() {
  const { i18n } = useTranslation();

  const changeLanguageHandler = (e: any) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };

  return (
    <Select
      id="language-select"
      defaultValue={DEFAULT_LANGUAGE}
      onChange={changeLanguageHandler}
      className="language-selectbox"
    >
      <MenuItem value={LANGUAGE_NAMES_KEY.HINDI}>
        {LANGUAGE_NAMES.HINDI}
      </MenuItem>
      <MenuItem value={LANGUAGE_NAMES_KEY.ENGLISH}>
        {LANGUAGE_NAMES.ENGLISH}
      </MenuItem>
      <MenuItem value={LANGUAGE_NAMES_KEY.GERMAN}>
        {LANGUAGE_NAMES.GERMAN}
      </MenuItem>
    </Select>
  );
}
