<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Etape 1 : i18n </template>
    Installer le gestionnaire de langue dans vue, et l'utiliser dans une fonction de traduction.
    Intégrer ensuite les CGU de Gaiar en utilisant une vue et i18n.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Etape 2 : Installer ApexChart</template>

    Installer ApexChart dans son environnement vuejs local. Afficher un graph en camembert et en ligne avec des données dans un tableau fixe ( créer un tableau avec des valeurs simples  dans "data" d'une vue )

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Etape 3 : Migrations BDD Laravel</template>

    Dans Laravel, voir les migrations de base de données via "php artisan create... ". Appliquer pour créer les bases,models, controllers pour un système de Notifications ( lister tous les champs et types de données nécessaires à la structure de la table) 
S'inspirer de codes existants sur internet.
Réfléchir à une solution pour récupérer le "type" de notification (media, account, smartcontract,) pour pouvoir faire des notifications cliquables en routes Vuejs et différencier si c'est une alerte publique, studio, générale

Appliquer du "softdelete" ( chercher ce que c'est dans Laravel et sur les notifications).
  </WelcomeItem>

</template>
