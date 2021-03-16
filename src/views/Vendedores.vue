<template>
  <div>
    <nav-bar></nav-bar>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
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
