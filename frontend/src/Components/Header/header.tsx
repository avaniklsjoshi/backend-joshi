import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LanguagePicker from "./languagePicker";
import * as SC from "./partials";
import ThemePicker from "./themePicker";
import "./header.scss";
import { ROUTES, ROUTES_NAME_KEY } from "../../Configs/Constants/const";

export default function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigateToFeatures = () => {
    navigate(ROUTES.FEATURES);
  };
  const navigateHome = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <SC.HeaderContainer>
      <div className="header-container">
        <div className="header-title" onClick={navigateHome} aria-hidden="true">
          {t("avani")}
        </div>
        <div className="header-accessibilities">
          <div>
            <ThemePicker />
          </div>
          <div className="feature-language">
            <div
              className="header-navigator"
              onClick={navigateToFeatures}
              aria-hidden="true"
            >
              {t(ROUTES_NAME_KEY.FEATURES)}
            </div>
            <div className="header-lang-picker">
              <LanguagePicker />
            </div>
          </div>
        </div>
      </div>
    </SC.HeaderContainer>
  );
}
