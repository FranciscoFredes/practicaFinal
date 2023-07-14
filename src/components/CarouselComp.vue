<template>
  <div>
    <v-carousel cycle height="450" hide-delimiter-background show-arrows-on-hover>
      <template v-slot:prev="{ on, attrs }">
        <v-btn color="deep-purple" v-bind="attrs" v-on="on">Previous slide</v-btn>
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn color="deep-purple" v-bind="attrs" v-on="on">Next slide</v-btn>
      </template>
      <v-carousel-item v-for="(producto, i) in productos" :key="i">
        <v-sheet height="400px" width="100%">
           <v-row class="pt-4" align="end" justify="center">
            <div class="text-h4">
              {{producto.title.slice(0, 30)}}
          <v-img :src="producto.image"></v-img>         
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>


<script>
export default {
    name: 'carousel-comp',
     props: { 
       productos: {
       type: Array,
       required: true
    }},
      
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
    .v-image{
      width: 100%; 
      height: 100%; 
      object-fit: contain;
    }
</style>