<template>
    <h1> Ropa hombre</h1>
</template>

<script>
export default {
    name: 'Men-cloth',
    // props: {},
    data: function(){
        return {}
    },
     computed: {},
    methods: {
        async    fetchMenCloth() {
     try {
      let response = await  fetch("/ropaHombre.json")
      let json = await response.json();         
       console.log(json)   
    }
     catch (error) {
     console.log(error);
     }
        }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.fetchMenCloth();
    },
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>