<template>
  <v-container>
    <v-app-bar>
      <v-app-bar-title>
        <p>Heroes</p>
      </v-app-bar-title>
    </v-app-bar>
    <br>
    <v-btn variant="tonal" @click=" display_button = !display_button">
      Ajouter un nouvel héro
    </v-btn>
    <br>

    <v-form @submit.prevent="creeNouveauHero" v-if=display_button>
      <v-text-field v-if=display_button :rules="heroRealNameRules" v-model="heroRealName" label="Vrai nom"
                    required></v-text-field>
      <v-text-field
          v-model="heroPublicName"
          :rules="heroPublicNameRules"
          label="Nom public"
          required
      ></v-text-field>
      <br>
      <v-btn value="actions" block class="mt-2" @click="creeNouveauHero">Ajouter</v-btn>
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
      <tr v-for="ele in getListeHero" :key="ele.id">
        <td>{{ ele.publicName }}</td>
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


import {mapActions} from "vuex";

export default {
  name: 'HeroesComponents',
  data: () => ({
    columns: ["publicName"],
    items: {},
    heroPublicName: "",
    heroRealName: "",
    display_button : false ,
    heroPublicNameRules: [
      v => !!v || "Un nom public de héro est requis",
    ],
    heroRealNameRules: [
      v => !!v || "Un nom réel de héro est requis",
    ],
  }),
  methods: {
    ...mapActions(["registerHero"]),

    async creeNouveauHero() {
      const hero = {
        publicName: this.heroPublicName,
        realName: this.heroRealName,
      };
      await this.registerHero(hero);
      console.log("envoie2")
    }
  },
  computed: {
    getListeHero() {
      return this.$store.state.listeHero
    },
  },
  mounted() {
    this.$store.dispatch("getListeHero")
    //console.log(this.nomOrga , "totot")
  }


}

</script>
  
  