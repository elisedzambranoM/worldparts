<template>
  <v-container>
    <v-row class="contenedor">
      <v-col>
        <div>
          <p>Oficina</p>
          <v-select sm="4" :items="items" label="Seleccione..."></v-select>
        </div>
      </v-col>
      <v-col>
        <div>
          <p>Manager</p>
          <v-select sm="4" :items="items" label="Seleccione..."></v-select>
        </div>
      </v-col>
      <v-col>
        <div>
          <p>Periodo de consulta</p>
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="YY/MM/DD"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
        </div>
      </v-col>
      <v-col align="center" justify="space-around" class="mt-11">
        <v-btn depressed color="primary">
          Buscar
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  ID Vendedor
                </th>
                <th class="text-left">
                  Vendedor
                </th>
                <th class="text-left">
                  Venta Unidades
                </th>
                <th class="text-left">
                  Venta Pesos
                </th>
                <th class="text-left">
                  Meta Venta
                </th>
                <th class="text-left">
                  Cumplimiento Meta
                </th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="vendedor in ranking" :key="vendedor.id">
                <td>{{ vendedor.id }}</td>
                <td>{{ vendedor.vendedor }}</td>
                <td>{{ vendedor.ventaUnidades }}</td>
                <td>{{ vendedor.ventaPesos }}</td>
                <td>{{ vendedor.metaVta }}</td>
                <td>
                  <v-progress-linear
                    v-model="power"
                    color="info"
                    class="grafico"
                    height="25"
                  ></v-progress-linear>
                </td>
                <td>
                  <v-btn x-small color="info" dark @click="redirect(vendedor.id)">
                    Ver Detalle
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-start">
        <v-pagination v-model="page" :length="6"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MonitorVendedores",

  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],

    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,

    ranking: [
      {
        id: "1",
        vendedor: "Juan Valdez",
        ventaUnidades: 130,
        ventaPesos: 154000,
        metaVta: 1500000,
      },
      {
        id: "2",
        vendedor: "Rosita Rosas",
        ventaUnidades: 160,
        ventaPesos: 1540000,
        metaVta: 1500000,
      },
      {
        id: "3",
        vendedor: "Luis Enrique",
        ventaUnidades: 560,
        ventaPesos: 153500,
        metaVta: 188000,
      },
      {
        id: "4",
        vendedor: "Lisa Perez",
        ventaUnidades: 590,
        ventaPesos: 153000,
        metaVta: 288000,
      },
    ],
    power: 55,

    page: 1,
  }),

  methods:{
      redirect(id){
      this.$router.push(`/vendedor/${id}`)
    }
  }
};
</script>

<style scoped>
.contenedor {
  border: 1px solid #dbd6d6;
  padding: 5px;
}
.grafico {
  background-color: #f8f8f8;
  border-radius: 16px;
  width: 120px;
  max-height: 12px;
}
.numeracion {
  justify-content: start;
}
</style>
