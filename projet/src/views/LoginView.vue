<template>
<v-container>
  <v-card>
    <v-card-title>Se connecter</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="connexion">
        <v-text-field
          v-model="mdp"
          Label="Entrez le mot de passe"
          type="password"
          required
        ></v-text-field>
        <v-btn type="submit">Se connecter</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</v-container>
</template>

<script>
export default {
  data(){
    return {
      mdp : ""
    }
  },
  methods: {
    se_connecter(){
      this.$store.commit('setMdpOrga', this.mdp)
      this.$router.push('/orgs')
    }
  },
  name: "LoginView"
}
</script>

<style scoped>

</style>