<template>
     <div>
        <h1 class= "text-center pt-3">Electrónica</h1>
        <v-divider></v-divider>   
 <div class="card-container mt-3">
      <div class="card" v-for="(item, index) in techData" :key="index">
        <div class="card-image">
          <img :src="item.image" :alt="item.title">
        </div>
        <div class="card-content">
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-subtitle">{{ item.subtitle }}</p>
          <p class="card-description">{{ item.description.slice(0,100) }}</p>
        </div>
        <div class="card-actions">
          <button class="card-button">Agregar <v-icon>mdi-cart</v-icon></button>
        </div>
      </div>
    </div>
     </div>
    
</template>

<script>

export default {
    name: 'Men-cloth',
    props: {     
    
    },
    data: function(){
        return { 
            techData: []          
        }
    },
     computed: {},
    methods: {
        async    fetchTechData() {
     try {
      let response = await  fetch("/electronica.json")
      let json = await response.json();         
        this.techData = json; 
    }
     catch (error) {
     console.log(error);
     }
        }
    },
    // watch: {},   
    
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.fetchTechData();
    },
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  gap: 20px;
}
   .card {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-description {
  font-size: 14px;
  color: #888;
}

.card-actions {
  padding: 10px;
  background-color: #f5f5f5;
  text-align: center;
}

.card-button {
  background-color: #2196f3;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-items: end;
}

.card-button:hover {
  background-color: #1976d2;
}
</style>