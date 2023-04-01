<template>
  <v-container>
    <v-app-bar>
      <v-app-bar-title>
        <p>Heroes</p>
      </v-app-bar-title>
    </v-app-bar>

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

table{
  margin-left: 100px;
  width: 80%;
}
</style>
  
<script>


export default {
  name: 'HeroesComponents',
  data: () => ({
    columns:["publicName"] ,
    items: {} ,

  }),


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
  
  