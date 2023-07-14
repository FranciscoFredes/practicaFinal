<template>
<div>    
    <v-container fluid>
      <v-layout justify-center>
        <v-flex xs12 sm8 md6>
          <v-card>
            <v-card-title>
              Página no encontrada
            </v-card-title>
            <v-card-text>
              Lo sentimos, la página que estás buscando no pudo ser encontrada.
            </v-card-text>
             <v-layout justify-center align-center class= pa-5  >
        <v-btn @click="redirectTo('Home')" color="#6A76AB" dark> Volver a Home</v-btn>
        </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
    name: 'Not-found',
    // props: {},
    data: function(){
        return {           
        }
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>