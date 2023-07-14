import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeVista.vue'
import MensCloth from '@/views/MenCloth.vue'
import WomenCloth from '@/views/WomenCloth.vue'
import TechsView from '@/views/TechView.vue'
import Cart from '@/views/Cart.vue'
import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {    
      path: '*', 
      name: 'NotFound',
      component: NotFound
    },    
  
    {    
      path: '/home', 
      name: 'Home',
      component: HomeView
    },  
    {    
      path: '/ropa-hombre', 
      name: 'ropa-hombre',
      component: MensCloth
    },   
    {    
      path: '/carrito', 
      name: 'Cart',
      component: Cart
    }, 
    {    
      path: '/ropa-mujer', 
      name: 'ropa-mujer',
      component: WomenCloth
    },  
    {    
      path: '/tech', 
      name: 'tech',
      component: TechsView
    },              
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
