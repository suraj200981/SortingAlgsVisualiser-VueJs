<template>
  <div class="bubblesort">
    <h1>This is the bubble sort page</h1>
    <br />
    <center>
      <Chart :listdata="items" />
    </center>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <center>
      <div id="inputContainer">
        <v-layout row>
          <v-flex>
            <v-text-field
              v-model="numsInput"
              filled
              rounded
              dense
              prepend-inner-icon="mdi-numeric"
              label="Enter numbers to sort here"
              clearable
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-btn
              :loading="loading3"
              :disabled="loading3"
              color="blue-grey"
              class="ma-2 white--text"
              @click="loader = 'loading3'"
            >
              Submit
            </v-btn>
          </v-flex>
        </v-layout>
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
      items: ["first", "second", "lmao"],
    };
  },
  methods: {
    submitInput() {
      this.names = this.names.concat({ first: "", last: "" });
    },
    handleInput(name, idx) {
      this.names = this.names.map((n, i) => (i === idx ? name : n));
    },
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
  margin-left: 500px;
}
</style>