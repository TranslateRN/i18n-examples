import i18next from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next";

i18next
  .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    compatibilityJSON: "v3", // compatibility isssue for mobile
    debug: true,

    ns: ["common", "welcome"],
    defaultNS: "common",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
