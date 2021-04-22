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
    <div style="margin-right: 350px">
      <v-btn
        class="mx-2"
        style="margin-left: -250px !important; position: absolute"
        fab
        dark
        large
        elevation="24"
        color="red"
        v-if="showPointer === 0"
      >
        <v-icon dark> mdi-cursor-pointer </v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        style="margin-left: -130px !important; position: absolute"
        fab
        dark
        large
        elevation="24"
        color="red"
        v-if="showPointer === 1"
      >
        <v-icon dark> mdi-cursor-pointer </v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        style="margin-left: -20px !important; position: absolute"
        fab
        dark
        large
        elevation="24"
        color="red"
        v-if="showPointer === 2"
      >
        <v-icon dark> mdi-cursor-pointer </v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        style="margin-left: 100px !important; position: absolute"
        fab
        dark
        elevation="24"
        large
        color="red"
        v-if="showPointer == 3"
      >
        <v-icon dark> mdi-cursor-pointer </v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        style="margin-left: 220px !important; position: absolute"
        fab
        dark
        large
        elevation="24"
        v-if="showPointer === 4"
        color="red"
      >
        <v-icon dark> mdi-cursor-pointer </v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        style="margin-left: 340px !important; position: absolute"
        fab
        dark
        elevation="24"
        v-if="showPointer === 5"
        large
        color="red"
      >
        <v-icon dark> mdi-cursor-pointer </v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        style="margin-left: 455px !important; position: absolute"
        fab
        dark
        v-if="showPointer == 6"
        large
        elevation="24"
        color="red"
      >
        <v-icon dark> mdi-cursor-pointer </v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        style="margin-left: 575px !important; position: absolute"
        fab
        v-if="showPointer == 7"
        dark
        elevation="24"
        large
        color="red"
      >
        <v-icon dark> mdi-cursor-pointer </v-icon>
      </v-btn>
    </div>
    <v-container style="margin-top: 100px">
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
          <v-btn
            color="accent"
            elevation="24"
            x-large
            @click="insertionSortAlg()"
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
            <v-icon dark> mdi-arrow-right-bold-circle </v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <br />
    <br />

    <v-btn
      :loading="loading3"
      :disabled="loading3"
      absolute
      color="blue-grey"
      class="ma-2 white--text"
      @click="(loader = 'loading3'), updateChart()"
      style="
        position: absolute;
        margin-top: 160px !important;
        margin-left: 180px !important;
      "
    >
      Submit
    </v-btn>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  props: {
    listdata: {
      type: String,
    },
    InputDataSubmited: {
      type: Boolean,
    },
  },
  randomNumArr: {
    type: Array,
  },
  myResult: {
    type: Array,
  },
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      stepForward: 0,
      showPointer: 0,
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
      this.showPointer = 0; //resetting the array pointer position
      this.stepForward = 0; //resetting the array x position
    },
    updateChart() {
      this.myResult = this.myResult = this.listdata
        .split(" ")
        .map((n) => parseInt(n, 10)); // seperate each number

      const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];

      // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
      this.chartOptions = {
        colors: [colors[Math.floor(Math.random() * colors.length)]],
      };
      // In the same way, update the series option

      this.series = [
        {
          data: this.myResult,
        },
      ];
    },
    insertionSortAlg() {
      var current;
      var randArr;
      randArr = this.randomNumArr;

        for (var x = 0; x < randArr.length ; ++x) {//8
            current = randArr[x];//8
            var j = x - 1;

            while (j >= 0 && randArr[j] > current) {
                randArr[j + 1] = randArr[j];
                j = j - 1;
            }
            randArr[j + 1] = current;

        }

      console.log(randArr);
      this.series = [
        {
          data: randArr,
        },
      ];
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
      this.showPointer++;
      this.randomNumArr = randArr;
      this.stepForward = inc;
      if (inc == this.randomNumArr.length) {
        inc = 0;
        this.showPointer = 0;
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
