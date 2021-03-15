<template>
  <div>
    <nav-bar></nav-bar>
    <h3 class="mt-5 ml-5">Home</h3>
    <v-container>
      <v-row>
        <v-col>
          <jumbo />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <venta-mensual />
        </v-col>
        <v-col>
          <venta-anual />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ranking-vendedores />
        </v-col>
        <v-col>
          <ranking-productos />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Jumbo from "@/components/Jumbo.vue";
import VentaMensual from "@/components/VentaMensual.vue";
import VentaAnual from "@/components/VentaAnual.vue";
import RankingVendedores from "@/components/RankingVendedores.vue";
import RankingProductos from '@/components/RankingProductos.vue'

export default {
  name: "Home",
  components: {
    NavBar,
    Jumbo,
    VentaMensual,
    VentaAnual,
    RankingVendedores,
    RankingProductos,
  },
};
</script>

RankingVendedores
