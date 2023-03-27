<template>
  <v-container>
    <v-app-bar>
      <v-app-bar-title>
        Organisations
      </v-app-bar-title>
    </v-app-bar>

    <v-text-field v-model="phrase_secrete" label="Entrez la phrase secrete">
    </v-text-field>
    <span>{{ phrase_secrete }}</span>

    <hr>
     {{ nomOrga[0].name}}
    <p v-for="ele in nomOrga.teams" :key="ele.name">{{ ele.name }}</p>

    <!-- {{ nomOrga[0].name}} -->

  </v-container>
</template>
  
<script>



//import {  mapActions } from 'vuex';
export default {
  name: 'OrganisationComponents',
  data: () => ({
    phrase_secrete: "oui",
    items: {} ,
  }),


  computed: {
    nomOrga() {
      return this.$store.state.nomOrga
    },
  },
  mounted() {
    this.$store.dispatch("getNomOrga")
    //console.log(this.nomOrga , "totot")
  }


}

</script>
  
  