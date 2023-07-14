<template>
  <v-app>
   <nav-bar></nav-bar>

    <v-main>
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/FooterComp.vue';

export default {
  components: { NavBar,Footer },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
