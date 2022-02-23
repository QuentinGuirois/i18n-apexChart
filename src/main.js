import { createApp } from "vue";
import App from "./App.vue";
import VueApexCharts from "vue3-apexcharts";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: "fr",
  globalInjection: true,
  messages: {
    en: {
      message: {
        cgu:    "GENERAL CONDITION OF USING",
        art10:  "Article 1. DEFINITIONS ET IDENTIFICATION",
        art11:  "1.1 Définitions",
        art12:  "1.2 Identification",
        sas:    "GAIAR est une SAS au capital de 1 123 400 €, dont le siège social est sis Technoparc Krysalide - PA du, 70 Rue Jean Doucet, 16470 Saint-Michel, France, inscrite au RCS de Bordeaux sous le numéro 820 961 589.",
        art20:  "Article 2. DESCRIPTION DE LA PLATEFORME GAIAR",
        art30:  "Article 3. CONDITIONS D'ACCES AU SERVICE",
        art31:  "3.1 Equipement informatique",
        art32:  "3.2 Compte GAIAR",
        art33:  "3.3 Contrepartie",
        art34:  "3.4 Paiement en ligne et portefeuille",
        art35:  "3.5 Livestream",
        art40:  "Article 4. MISE À DISPOSITION DE CONTENUS PAR LES AYANTS-DROIT",
        art41:  "4.1. Droits concédés",
        art42:  "4.2 Conditions d’exploitation",
        art43:  "4.3. Pluralité d’Ayants-droit",
        art44:  "4.4. Rémunération des Ayants-droit et de GAIAR",
        art45:  "4.5. Reddition des comptes et paiement",
        art46:  "4.6. Garanties de l’Ayant-droit",
        art47:  "4.7. Droit moral de l’Ayant-droit",
        art48:  "4.8. Facturation du Smart Contract et des commissions GAIAR",
        art49:  "4.9 Livestream",
        art50:  "Article 5. CONTENUS INTERDITS",
        art60:  "Article 6. DONNEES PERSONNELLES",
        art70:  "Article 7. PROPRIETE INTELLECTUELLE",
        art80:  "Article 8. RESPONSABILITE",
        art90:  "Article 9. DIVERS"
      }
    },
    fr: {
      message: {
        cgu:    "GENERAL CONDITION OF USING",
        art10:  "Article 1. DEFINITIONS ET IDENTIFICATION",
        art11:  "1.1 Définitions",
        art12:  "1.2 Identification",
        sas:    "GAIAR est une SAS au capital de 1 123 400 €, dont le siège social est sis Technoparc Krysalide - PA du, 70 Rue Jean Doucet, 16470 Saint-Michel, France, inscrite au RCS de Bordeaux sous le numéro 820 961 589.",
        art20:  "Article 2. DESCRIPTION DE LA PLATEFORME GAIAR",
        art30:  "Article 3. CONDITIONS D'ACCES AU SERVICE",
        art31:  "3.1 Equipement informatique",
        art32:  "3.2 Compte GAIAR",
        art33:  "3.3 Contrepartie",
        art34:  "3.4 Paiement en ligne et portefeuille",
        art35:  "3.5 Livestream",
        art40:  "Article 4. MISE À DISPOSITION DE CONTENUS PAR LES AYANTS-DROIT",
        art41:  "4.1. Droits concédés",
        art42:  "4.2 Conditions d’exploitation",
        art43:  "4.3. Pluralité d’Ayants-droit",
        art44:  "4.4. Rémunération des Ayants-droit et de GAIAR",
        art45:  "4.5. Reddition des comptes et paiement",
        art46:  "4.6. Garanties de l’Ayant-droit",
        art47:  "4.7. Droit moral de l’Ayant-droit",
        art48:  "4.8. Facturation du Smart Contract et des commissions GAIAR",
        art49:  "4.9 Livestream",
        art50:  "Article 5. CONTENUS INTERDITS",
        art60:  "Article 6. DONNEES PERSONNELLES",
        art70:  "Article 7. PROPRIETE INTELLECTUELLE",
        art80:  "Article 8. RESPONSABILITE",
        art90:  "Article 9. DIVERS"
      }
    }
  }
});

createApp(App).use(i18n).use(VueApexCharts).mount("#app");






