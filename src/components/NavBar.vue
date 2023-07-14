<template>
<div>
   <v-app-bar
      absolute
      color="#6A76AB"
      dark      
      scroll-target="#scrolling-techniques-4"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>     
      <v-toolbar-title align-with-title class="font-weight-bold" id="scrolling-techniques-4">La Tiendita</v-toolbar-title>

      <v-spacer></v-spacer>

  

      <v-btn icon>
        <v-icon @click="redirectTo('Cart')">mdi-cart</v-icon>
      </v-btn>
   

      <template v-slot:extension>
        <v-tabs> 
              <v-list-item class= "text-center" v-for="route in routes" :key="route.name" @click="redirectTo(route.name) " :disabled="currentRoute==route.name">          
          
            <v-list-item-title>{{route.title}}</v-list-item-title>
          </v-list-item>              </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
      max-height="200"
    >
      <v-container style="height: 100px;"></v-container>
    </v-sheet>
</div>
</template>

<script>
export default {
    name: 'Nav-bar',
    // props: {},
    data: function(){        
        return {
            drawer: false,
            group: null,
            routes:[
                {
                title:"Home",
                name:'Home',
                },
                {
                title:"Vestuario Hombre",
                name:'ropa-hombre',
                },
                {
                title:"Vestuario Mujer",
                name:'ropa-mujer',
                },
                {
                title:"Electrónica",
                name:'tech',
                },
        ]}
    },
    computed: {
        currentRoute(){
            return this.$route.name
        }
    },
    methods: {
        redirectTo(nameRoute){
            this.$router.push({name:nameRoute})
        }
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .v-navigation-drawer {
        height: 100px;
    }
</style>