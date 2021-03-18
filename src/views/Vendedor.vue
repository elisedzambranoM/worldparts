<template>
  <div>
    <nav-bar></nav-bar>
   <v-breadcrumbs :items="items" divider = ">>">
    </v-breadcrumbs>
    <v-container>
      <v-row>
        <v-col>
          <h2>Ficha Vendedor</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="basil"
            grow
          >
            <v-tab>
              General
            </v-tab>
            <v-tab>
              Cartera clientes
            </v-tab>
            <v-tab>
              Cumplimiento
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card color="basil" flat>
                <v-card-text>
                  <General :vendedor="general"></General>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card color="basil" flat>
                <v-card-text>
                  <Cartera :cartera="cartera"></Cartera>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card color="basil" flat>
                <v-card-text>
                  <Cumplimiento :cumplimientos="cumplimientos"></Cumplimiento>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import General from "@/components/General.vue";
import Cartera from "@/components/Cartera.vue";
import Cumplimiento from "@/components/Cumplimiento.vue";

export default {
  name: "Vendedor",

  components: {
    NavBar,
    General,
    Cartera,
    Cumplimiento,
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
        href: "/vendedores",
      },
       {
        text: "Ficha Vendedor",
        disabled: true,
        href: "/vendedor",
      },
    
    ],

    tab: null,
    general: {},
    cartera: [],
    cumplimientos: [],
  }),
};
</script>

<style scoped></style>
