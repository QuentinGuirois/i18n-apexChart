import { createApp } from "vue";
import App from "./App.vue";

import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: "ja",
 globalInjection: true,
  messages: {
    en: {
      message: {
        language: "English",
        greeting: "Hello !"
      }
    },
    ar: {
      message: {
        language: "العربية",
        greeting: "السلام عليكم"
      }
    },
    es: {
      message: {
        language: "Español",
        greeting: "Hola !"
      }
    }
  }
});

createApp(App).use(i18n).mount("#app");






