import { useTranslation } from "react-i18next";
import DownloadPortfolio from "./downloadPortfolio";
import * as SC from "./partials";
import Social from "./social";
import loveIcon from "../../Assets/Images/love.png";
import "./footer.scss";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <SC.FooterContainer>
      <div className="footer-container">
        <DownloadPortfolio />
        <Social />
        <p className="copyright">
          {t("copyrightText1")}
          <sup>*</sup>
          {t("copyrightText2")}
          <img src={loveIcon} alt="caring love" />
          {t("copyrightText3")}
        </p>
        <p className="star">
          <sup>*</sup>
          {t("copyrightStar")}
        </p>
      </div>
    </SC.FooterContainer>
  );
}
