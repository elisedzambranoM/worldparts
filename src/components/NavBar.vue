<template>
  <v-toolbar dense :dark="true">
    <v-toolbar-title>Company</v-toolbar-title>
    <v-btn depressed color="default" @click="$router.push('/')">
      Home
    </v-btn>
    <v-btn depressed color="default" @click="$router.push('/vendedores')">
      Vendedores
    </v-btn>
    <v-btn depressed color="default">
      Pedidos
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn depressed color="default">
      Cerrar Sesión
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style></style>
