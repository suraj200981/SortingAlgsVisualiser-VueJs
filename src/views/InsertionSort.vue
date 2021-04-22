<template>
  <div class="insertionsort">
    <h1>This is the insertion sort page</h1>
   <br />
    <center>
      <Chart :listdata="input" />
    </center>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <center>
      <div id="inputContainer">
            
            <v-container fluid>
      <v-layout 
          :column="$vuetify.breakpoint.smAndDown"
      >
        <v-flex>
        <v-text-field
              v-model="input"
              filled
              rounded
              dense
              prepend-inner-icon="mdi-numeric"
              label="Enter numbers to sort here"
              clearable
              style="position:absolute;"

            ></v-text-field>
        </v-flex>
      </v-layout>
            </v-container>
      </div>
    </center>
  </div>
</template>
<script>
import Chart from "../components/insertionSortChart.vue";

export default {
  name: "InsertionSort",
  components: { Chart },

  data: () => ({
    //
  }),
};
</script>