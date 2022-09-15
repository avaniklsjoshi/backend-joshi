import "./footer.scss";
import { useTranslation } from "react-i18next";
import { PORTFOLIO_URLS as urls } from "../../Configs/Constants/const";

export default function DownloadPortfolio() {
  const { t } = useTranslation();

  const downloadAll = () => {
    const link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link);
    for (let i = 0; i < urls.length; i += 1) {
      link.setAttribute("href", urls[i].path);
      link.setAttribute("download", urls[i].name);
      link.click();
    }
    document.body.removeChild(link);
  };

  return (
    <div className="download-container">
      <div className="button-container">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <span onClick={downloadAll} aria-hidden="true">
          {t("downloadPortfolio")}
        </span>
      </div>
    </div>
  );
}
