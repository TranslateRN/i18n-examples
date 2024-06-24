import React from "react";
import { useTranslation } from "react-i18next";

function getDirection(locale) {
  switch (locale) {
    case "ar":
      return "rtl";
    default:
      return "ltr";
  }
}

export default function App() {
  const { t, i18n } = useTranslation("translations");
  const locale = i18n.language;

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <select
          value={locale}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          <option value="en">en</option>
          <option value="es">es</option>
          <option value="ar">ar</option>
        </select>
      </div>
      <div
        dir={getDirection(locale)}
        style={{ padding: "20px" }}
        data-testid="examples"
      >
        <h3>Using t function with ICU format</h3>
        {t("message.simple")}
        <br />
        {t("message.argument", { name: "John" })}
        <br />
        {t("message.plural", { count: 6 })}
        <br />
        {t("message.select", { gender: "female" })}
        <br />
        <span
          dangerouslySetInnerHTML={{
            __html: t("message.text-format", {
              b: (chunks) => `<b>${chunks}</b>`,
            }),
          }}
        />
        <br />
        {t("message.number-format", { num: 7500 })}
        <br />
        {t("message.currency-format", { amount: 7.5 })}
        <br />
      </div>
    </div>
  );
}
