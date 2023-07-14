<template>
  <v-row justify="center" align="center" class="pa-5">
    <v-col cols="4" v-for="(tipo, index) in tiposProductos" :key="index">
      <v-card>
        <v-img :src="tipo.image" height="200"></v-img>
        <v-card-title>{{ tipo.name }}</v-card-title>
        <v-card-text>{{ tipo.text.slice(0, 100) }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Categorias-comp',
  props: {
    tiposProductos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
    
