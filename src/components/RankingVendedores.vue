<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Ranking de vendedores</h2>
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
                  Monto
                </th>
                <th class="text-left">
                  Unidades
                </th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="vendedor in ranking" :key="vendedor.id">
                <td>{{ vendedor.id }}</td>
                <td>{{ vendedor.vendedor }}</td>
                <td>{{ vendedor.monto }}</td>
                <td>{{ vendedor.unidades }}</td>
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
          id: "1",
          vendedor: "Matias Matamala",
          monto: "7.357.213",
          unidades: 237,
        },
        {
          id: "2",
          vendedor: "Rosita Rosas",
          monto: "7.357.213",
          unidades: 237,
        },
        {
          id: "3",
          vendedor: "Ned Flander",
          monto: "7.357.213",
          unidades: 237,
        },
        {
          id: "4",
          vendedor: "Lisa Perez",
          monto: "7.357.213",
          unidades: 237,
        },
        
      ],
    };
  },
};
</script>

<style></style>
