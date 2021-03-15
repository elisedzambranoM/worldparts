<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Ranking de Productos</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Cod Producto
                </th>
                <th class="text-left">
                  Producto
                </th>
                <th class="text-left">
                  Unidades
                </th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="producto in ranking" :key="producto.id">
                <td>{{ producto.id }}</td>
                <td>{{ producto.producto }}</td>
                <td>{{ producto.unidades }}</td>
                <td>
                  <v-btn x-small color="info" dark>
                    Ver Detalle
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "RankingVendedores",

  data() {
    return {
      ranking: [
        {
          id: "54321",
          producto: "Placa Madre Asus",
          unidades: 137,
        },
        {
          id: "54320",
          producto: "Porcesador Intel",
          unidades: 98,
        },
        {
          id: "54322",
          producto: "SSD Western",
          unidades: 122,
        },
        {
          id: "54321",
          producto: "Corsair RAM 32",
          unidades: 95,
        },
      ],
    };
  },
};
</script>

<style></style>
