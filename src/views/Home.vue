<template>
  <div>
    <nav-bar></nav-bar>
    <h3>Home</h3>
    <v-container> 
      <v-row>
        <v-col>
        <jumbo/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Jumbo from '@/components/Jumbo.vue';

export default {
  name: "Home",
  components: {
    NavBar,
    Jumbo,
  },
};
</script>
