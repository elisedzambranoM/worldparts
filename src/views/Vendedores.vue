<template>
  <div>
    <nav-bar></nav-bar>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-row>
      <v-col>
        <h2>Componente Vendedores</h2>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Vendedores",

  components: {
    NavBar,
  },

  data: () => ({
    items: [
      {
        text: "Home",
        disabled: false,
        href: "breadcrumbs_home",
      },
      {
        text: "vendedores",
        disabled: false,
        href: "breadcrumbs_vendedores",
      },
      {
        text: "Link 2",
        disabled: true,
        href: "breadcrumbs_pedidos",
      },
    ],
  }),
};
</script>

<style></style>
