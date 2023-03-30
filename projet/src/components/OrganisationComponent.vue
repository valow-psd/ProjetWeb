<template>
  <v-container>
    <v-app-bar>
      <v-app-bar-title>
        <p>Organisations</p>
      </v-app-bar-title>
    </v-app-bar>
    <br>

    <v-btn variant="tonal" @click=" display_button = !display_button">
      Appuyez pour ajouter +
    </v-btn>
    <br>
   <v-text-field v-if=display_button v-model="phrase_secrete" label="Entrez la phrase secrete"> </v-text-field>

    
    <v-form @submit.prevent="submit" v-if=display_button>
      <v-text-field
        v-model="orgName"
        :rules="orgNameRules"
        label="Nom organisation"
        required
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Envoyer</v-btn>
    </v-form>

    <br>
    <table>
      <thead>
        <tr>
          <th v-for="(item, index) in columns" :key="index">
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ele in getListeOrga" :key="ele.id">
          <td>{{ ele.name }}</td>
        </tr>
      </tbody>
    </table>
  </v-container>
</template>
<style>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

table{
  margin-left: 100px;
  width: 80%;
}
</style>
  
<script>



//import {  mapActions } from 'vuex';
export default {
  name: 'OrganisationComponents',
  data: () => ({
    phrase_secrete: "oui",
    columns:["name"] ,
    display_button : false ,
    items: {},
    orgName: "",
      orgNameRules: [
        v => !!v || "Un nom d'orga est requis",
      ],
  }),


  computed: {
    getListeOrga() {
      return this.$store.state.listeOrga
    },
  },
  mounted() {
    this.$store.dispatch("getListeOrga")
    //console.log(this.nomOrga , "totot")
  }


}

</script>
  
  