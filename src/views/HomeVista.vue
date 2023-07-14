<template>
<div>
    <h1 class= "pa-5 text-center bold">Nuestros mejores productos</h1>
    <carousel-comp :productos="mejoresProductos"></carousel-comp>
    <v-divider></v-divider>    
    <cards-comp :tiposProductos="tiposProductos"></cards-comp>
    </div>
</template>

<script>
import Carousel from '@/components/CarouselComp.vue';
import Cards from '@/components/CategoriasComp.vue'

export default {
    name: 'home-view',
    // props: {},
    data: function(){
        return {           
      mejoresProductos: [],
      tiposProductos: [] 
        }
    },
    // computed: {     },
    methods: {
     async    fetchHome() {
     try {
      let response = await  fetch("/home.json")
      let json = await response.json();         
       this.mejoresProductos = json.mejoresproductos;
       this.tiposProductos = json.tiposproductos;       
    }
     catch (error) {
     console.log(error);
     }
        }
    },
    // watch: {},
    components: {
        'carousel-comp' : Carousel,
        'cards-comp' : Cards,
       
    },   
         // mixins: [],
    // filters: {},
    //-- Lifecycle Methods
    created(){
        this.fetchHome();
    },
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>