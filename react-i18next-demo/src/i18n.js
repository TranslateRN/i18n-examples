import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import ICU from 'i18next-icu';

i18n
  .use(ICU)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    backend: {
      loadPath: 'src/locales/{{lng}}/{{ns}}.json'
    },

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    nsSeparator: false,
    keySeparator: false,

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      useSuspense: true,
    },
  });

export default i18n;
