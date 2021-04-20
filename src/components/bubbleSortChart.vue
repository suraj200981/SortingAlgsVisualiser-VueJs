<template>
  <div class="example">
    <apexcharts
      ref="realtimeChart"
      width="1000"
      height="500"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
    <br />
    <br />
  <v-btn
      class="mx-2"
      fab
      :disabled="true"
      dark
      large
      color="blue"
    >
      <v-icon dark>
        mdi-cursor-pointer
      </v-icon>
    </v-btn>
      <v-btn
      class="mx-2"
      fab
      dark
      large
      color="blue"
    >
      <v-icon dark>
        mdi-cursor-pointer
      </v-icon>
    </v-btn>
      <v-btn
      class="mx-2"
      fab
      dark
      large
      color="blue"
    >
      <v-icon dark>
        mdi-cursor-pointer
      </v-icon>
    </v-btn>
      <v-btn
      class="mx-2"
      fab
      dark
      large
      color="blue"
    >
      <v-icon dark>
        mdi-cursor-pointer
      </v-icon>
    </v-btn>
      <v-btn
      class="mx-2"
      fab
      dark
      large
      color="blue"
    >
      <v-icon dark>
        mdi-cursor-pointer
      </v-icon>
    </v-btn>
      <v-btn
      class="mx-2"
      fab
      dark
      large
      color="blue"
    >
      <v-icon dark>
        mdi-cursor-pointer
      </v-icon>
    </v-btn>
      <v-btn
      class="mx-2"
      fab
      dark
      large
      color="blue"
    >
      <v-icon dark>
        mdi-cursor-pointer
      </v-icon>
    </v-btn>
      <v-btn
      class="mx-2"
      fab
      dark
      large
      color="blue"
    >
      <v-icon dark>
        mdi-cursor-pointer
      </v-icon>
    </v-btn>
    <v-container fluid>
      <v-layout :column="$vuetify.breakpoint.smAndDown">
        <v-flex>
          <v-btn
            color="accent"
            elevation="24"
            x-large
            @click="updateChartWithRandomValues"
            >Generate random numbers</v-btn
          >
        </v-flex>
        <v-flex>
          <v-btn color="accent" elevation="24" x-large @click="updateChart"
            >Update!</v-btn
          >
        </v-flex>
        <v-flex>
          <v-btn color="accent" elevation="24" x-large @click="bubbleSortAlg"
            >Auto sort</v-btn
          >
        </v-flex>

        <v-flex>
          <v-btn class="mx-2" x-large fab dark color="teal">
            <v-icon dark>
              mdi-arrow-left-bold-circle Austin Andrews @Templarian
            </v-icon>
          </v-btn>
        </v-flex>
        <v-flex>
          <v-btn
            class="mx-2"
            x-large
            fab
            dark
            color="teal"
            @click="bubbleSortStepForward"
          >
            <v-icon dark>
              mdi-arrow-right-bold-circle Austin Andrews @Templarian
            </v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <br />
    <br />

    <div>
      User input: {{ listdata }}
      <br />
      Randomly generated: {{ randomNumArr }}
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  props: {
    listdata: {
      type: Array,
    },
  },
  randomNumArr: {
    type: Array,
  },
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      stepForward: 0,
      chartOptions: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [
            "position 0",
            "position 1",
            "position 2",
            "position 3",
            "position 4",
            "position 5",
            "position 6",
            "position 7",
          ],
        },
      },
      series: [
        {
          name: "Bubble Sort",
          data: [30, 40, 45, 50, 49, 60, 70, 81],
        },
      ],
    };
  },
  methods: {
    updateChartWithRandomValues() {
      var arr = [];
      const max = 100;
      const min = 1;
      for (var i = 0, t = 8; i < t; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
      }

      this.randomNumArr = arr;

      const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];

      // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
      this.chartOptions = {
        colors: [colors[Math.floor(Math.random() * colors.length)]],
      };
      // In the same way, update the series option

      this.series = [
        {
          data: this.randomNumArr,
        },
      ];
    },
    updateChart() {
      const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];

      // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
      this.chartOptions = {
        colors: [colors[Math.floor(Math.random() * colors.length)]],
      };
      // In the same way, update the series option

      this.series = [
        {
          data: this.listdata,
        },
      ];
    },
    bubbleSortAlg() {
      var randArr = this.randomNumArr;
      var temp1;
      var temp2;

      for (var j = 0; j < randArr.length - 1; j++) {
        //number of compares is array size -1
        for (var x = 0; x < randArr.length - 1; x++) {
          if (randArr[x] > randArr[x + 1]) {
            temp1 = randArr[x + 1];
            temp2 = randArr[x];

            randArr[x] = temp1;
            randArr[x + 1] = temp2;
            this.series = [
              {
                data: randArr,
              },
            ];
          }
          console.log(randArr);
        }
      }
    },
    bubbleSortStepForward() {
      console.log(this.stepForward);
      console.log(randArr); //this works
      console.log(this.randomNumArr); //this works
      var randArr;
      randArr = this.randomNumArr;

      var temp1;
      var temp2;
      var inc = this.stepForward;
      console.log("test" + randArr); //this works
      console.log(this.stepForward);

      for (var x = inc; x < inc + 1; x++) {
        if (randArr[x] > randArr[x + 1]) {
          temp1 = randArr[x + 1];
          temp2 = randArr[x];

          randArr[x] = temp1;
          randArr[x + 1] = temp2;
          this.series = [
            {
              data: randArr,
            },
          ];
          this.randomNumArr = randArr;
          this.stepForward = inc;
        }

        this.randomNumArr = randArr;
        this.stepForward = inc;
        console.log(randArr); //this works
        console.log(this.randomNumArr); //this works
        console.log(this.stepForward);
      }
      inc++;
      this.randomNumArr = randArr;
      this.stepForward = inc;
      if (inc == this.randomNumArr.length) {
        inc = 0;
        this.randomNumArr = randArr;
        this.stepForward = inc;
      }
    },
  },
};
</script>
<style>
button.v-btn[disabled] {
  opacity: 0.6;
}
</style>
