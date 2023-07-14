import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
   
  },
  mutations: {
  },
  actions: {
    async    fetchHome() {
      try {
       let response = await  fetch("/home.json")
       let json = await response.json();         
        this.mejoresProductos = json.mejoresproductos;
        this.tiposProductos = json.tiposproductos;
        console.log(json)
     }
      catch (error) {
      console.log(error);
      }    
  },
},
  modules: {
  }
})
