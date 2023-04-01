<template>
  <v-container>
    <v-card>
      <v-card-title>Se connecter</v-card-title>
      <v-card-text>
        <p>Le mot de passe est <strong>nous sommes mechants
        </strong></p>
        <v-form @submit.prevent="connexion">
          <v-text-field
              v-model="mdp"
              Label="Entrez le mot de passe"
              type="showPassword ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              required
              @click:append="showPassword = !showPassword"
          ></v-text-field>
          <br>
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
      mdp : "",
      showPassword: false,
      passwordRules: [
        v => !!v || 'Un mot de passe est requis',
        v => (v && v.length >= 8) || 'Minimum 8 caractères',
      ]
    }
  },
  methods: {
    connexion(){
      this.$store.commit('setMdpOrga', this.mdp)
      this.$router.push('/Organisation')
    }
  },
  name: "LoginView"
}
</script>

<style scoped>
</style>