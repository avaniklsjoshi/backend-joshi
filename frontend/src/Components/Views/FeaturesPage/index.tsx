import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./feature.scss";
import Cards from "./cards";

export default function FeaturesPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("docTitleNameFeatures");
  });

  return (
    <div className="feature-container">
      <div className="feature-title">{t("featuresRoute")}</div>
      <Cards />
    </div>
  );
}
