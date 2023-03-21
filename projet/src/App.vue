<template>
  <v-container>
    <v-btn  @click=" menuouvert = !menuouvert"></v-btn>
    <v-app-bar>
    <v-app-bar-title>
      Super Heroes
    </v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer floating temporary v-model="menuouvert">
      <v-list-item>
        <v-list-item-content>
          <v-btn v-if="menuouvert" to="Organisation" @click="$router.push('/Organisation')"> Organisation </v-btn>
          <v-btn v-if="menuouvert" to="Teams" @click="$router.push('/Teams')"> Teams  </v-btn>
          <v-btn v-if="menuouvert" to="Heroes" @click="$router.push('/Hereos')"> Hereos </v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <v-row>
      <router-view></router-view>
    </v-row>
  </v-container>
</template>


<style>
</style>
<script>
// import router from './router';


export default {
  data : () => ({
      menuouvert : false 
  })

};
</script>
