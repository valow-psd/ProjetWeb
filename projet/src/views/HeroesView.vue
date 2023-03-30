<template>
    <v-container>
    <v-app-bar>
      <v-app-bar-title>
        <p>Héros</p>
      </v-app-bar-title>
    </v-app-bar>
  </v-container>
  </template>
  
  <script>
  import HeroesComponents from "@/components/HeroesComponent.vue"

  export default {
    name: 'HeroesView',
    components : {HeroesComponents}
  }
  </script>
  
  