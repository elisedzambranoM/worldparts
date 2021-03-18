<template>
  <div>
    <nav-bar></nav-bar>
    <v-breadcrumbs :items="items" divider=">>"> </v-breadcrumbs>
    <v-container>
      <v-row>
        <v-col>
          <h2>Monitor de Vendedores</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <monitor-vendedores />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MonitorVendedores from "@/components/MonitorVendedores.vue";

export default {
  name: "Vendedores",

  components: {
    NavBar,
    MonitorVendedores,
  },

  data: () => ({
    items: [
      {
        text: "Home",
        disabled: false,
        href: "/",
      },
      {
        text: "Monitor de Vendedores",
        disabled: false,
        href: "vendedores",
      },
       {
        text: "Ficha Vendedor",
        disabled: false,
        href: "/vendedor",
      },
    ],
  }),
};
</script>

<style></style>
