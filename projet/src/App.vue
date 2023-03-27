<template>
  <v-container>
    <v-row>
      <v-btn variant="outlined" icon color="secondary" @click=" menuouvert = !menuouvert" ><v-icon>mdi-menu</v-icon></v-btn>
      <v-navigation-drawer floating temporary v-model="menuouvert">
      <v-list-item>
        <v-list-item-content>
          <v-btn v-if="menuouvert" to="" @click="$router.push('/')"> Home </v-btn>
          <v-btn v-if="menuouvert" to="Organisation" @click="$router.push('/Organisation')"> Organisation </v-btn>
          <v-btn v-if="menuouvert" to="Teams" @click="$router.push('/Teams')"> Teams  </v-btn>
          <v-btn v-if="menuouvert" to="Heroes" @click="$router.push('/Hereos')"> Hereos </v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </v-row>
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
