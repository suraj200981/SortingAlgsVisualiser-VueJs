<template>
  <div class="bubblesort">
    <h1>This is the bubble sort page</h1>
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
import Chart from "../components/bubbleSortChart.vue";
export default {
  name: "BubbleSort",
  components: { Chart },

  data() {
    return {
      input:"",
    };
  },
  methods: {
    // submitInput() {

    //   this.myResult = this.input.split(" ").map( n => parseInt(n, 10)); // seperate each number
    //   console.log(this.myResult);
    //   this.input = ""; //reset the text field to empty on click

    // },
  },
};
</script>
<style scoped>
.v-text-field {
  width: 400px;
}
.flex,
.child-flex > * {
  flex: 1 1 auto;
  max-width: 40% !important;
  margin-right: -200px;
}
#inputContainer {
  margin-left: 750px;
}
</style>