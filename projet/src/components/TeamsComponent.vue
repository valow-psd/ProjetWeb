<template>
  <v-container>
    <v-app-bar>
      <v-app-bar-title>
        <p>Teams</p>
      </v-app-bar-title>
    </v-app-bar>
    <br>
    <v-btn variant="tonal" @click=" display_button = !display_button">
      Ajouter une nouvelle team
    </v-btn>
    <br>
    <v-form @submit.prevent="submit" v-if=display_button>
      <v-text-field
          v-model="teamName"
          :rules="teamNameRules"
          label="Nom équipe"
          required
      ></v-text-field>
      <v-btn value="name" block class="mt-2" @click="creeNouvelleEquipe">Créer nouvelle équipe</v-btn>
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
      <tr v-for="ele in listeEquipe" :key="ele.id">
        <td>{{ ele.name }}</td>
        <td>{{ ele.nbAffiliations }}</td>
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

table {
  margin-left: 100px;
  width: 80%;
}


</style>
<script>

import {mapActions, mapState} from "vuex";

export default {
  name: 'TeamsComponents',
  data: () => ({
    columns: ["Nom", "Nombre d'affiliation"],
    items: {},
    teamName: "",
    display_button: false,
    teamNameRules: [
      v => !!v || "Un nom d'équipe est requis",
    ],
  }),
  methods: {
    ...mapActions(["getListeEquipe", "registerTeam"]),
    async creeNouvelleEquipe() {
      const team = {
        name: this.teamName,
      };
      await this.registerTeam(team);
      console.log("envoie");
    }
  },
  computed: {
    ...mapState(["listeEquipe"])
  },
  mounted() {
    this.getListeEquipe();
    console.log("testTeams" + this.listeEquipe);
  }
}

</script>
    
    