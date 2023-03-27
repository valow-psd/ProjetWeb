<template>
  <v-container>
    <v-app-bar>
      <v-app-bar-title>
        Organisations
      </v-app-bar-title>
    </v-app-bar>

    <v-text-field 
    v-model="phrase_secrete" 
    label="Entrez la phrase secrete" >
    </v-text-field>
    <span>{{ phrase_secrete }}</span>
  </v-container>
</template>
  
<script>
export default {
  name: 'OrganisationView',
  data : () => ({
    phrase_secrete : "oui"
  })
}
</script>
  
  