import { renderToStaticMarkup } from "react-dom/server";
import ES from "@assets/translations/es.translations.json";
import EN from "@assets/translations/en.translations.json";

const languages = [
  {
    name: "EN",
    code: "en",
    translation: EN
  },
  {
    name: "ES",
    code: "es",
    translation: ES
  }
];

export const activateTranslations = addtranslate => languages.map(({ translation, code }) => addtranslate(translation, code));
export const initialize = () => ({
  languages: languages.map(({ name, code }) => ({ name, code })),
  translation: EN,
  options: { renderToStaticMarkup }
});
