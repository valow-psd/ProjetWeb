<template>
  <v-container>
    <v-app-bar>
      <v-app-bar-title>
        Heroes
      </v-app-bar-title>
    </v-app-bar>
    <br>
    <v-btn @click="ajouter = !ajouter">
      ajouter
    </v-btn>
    <br>

    <div v-if="ajouter">
      <v-text-field v-model="publicName" label="Entrez le nom du heros"> </v-text-field>
      <v-text-field v-model="realName" label="Entrez le nom du heros"> </v-text-field>
      <v-text-field v-model="powers" label=""> </v-text-field>
      <v-btn
    @click="card = true" >
      selectioner un pouvoir un pouvoir
    </v-btn>
    </div>

     <v-card v-if="card">
      <v-text-field  v-model="namepouvoir" label="Entrez le nom du pouvoir"> </v-text-field>
      <label>entrez le type du pouvoir :</label>
      <br>
      <input type="number" min=0 max=7 :value="type">
      <br>
      <label>entrez le level du pouvoir : </label>
      <br>
      <input type="number" min=0 max=100 :value="type">

    </v-card>
    
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
        <tr v-for="ele in getListeHeroes" :key="ele.id">
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


export default {
  name: 'HeroesComponents',
  data: () => ({
    columns: ["name"],
    items: {},
    ajouter: false ,
    publicName : "" ,
    realName : "" ,
    powers : [] ,
    card: false,
    namepouvoir:"",
    type:0,
    level:0

  }),
  methods:{
    toto(){
      console.log("hello")
      this.dialog=true
    }
  },


  computed: {
    getListeHeroes() {
      return this.$store.state.listeHeroes
    },
  },
  mounted() {
    this.$store.dispatch("getListeHero")
    //console.log(this.nomOrga , "totot")
  }


}

</script>
  
  