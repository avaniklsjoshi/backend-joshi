import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Introduction from "./Introduction";

export default function LandingPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("docTitleNameHome");
  });
  return (
    <div>
      <Introduction />
    </div>
  );
}
