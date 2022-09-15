import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./notFound.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../Configs/Constants/const";

export default function NotFoundPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(ROUTES.HOME);
  };

  useEffect(() => {
    document.title = t("docTitleNameNotFound");
  });

  return (
    <div className="page-404">
      <span className="info" />
      <div className="four-zero-four-bg"></div>
      <div className="lost-section">
        <h3>Lost?</h3>
        There&apos;s no place like
        <span className="link-404" onClick={handleHomeClick} aria-hidden="true">
          {t("home")}
        </span>
      </div>
    </div>
  );
}
