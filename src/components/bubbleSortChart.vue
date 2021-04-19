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
    <v-btn
      color="accent"
      elevation="24"
      x-large
      @click="updateChartWithRandomValues"
      >Generate random numbers</v-btn
    >
    <v-btn color="accent" elevation="24" x-large @click="updateChart"
      >Update!</v-btn
    >

    <br />
    <br />

    <div>
      {{ listdata }}
      <br />
      {{ randomNumArr }}
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
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 81],
        },
      ],
    };
  },
  mounted: {},
  methods: {
    updateChartWithRandomValues() {
      var arr = [];
        const max = 100;
        const min = 1;
      for (var i = 0, t = 8; i < t; i++) {
        arr.push( Math.floor(Math.random() * (max - min + 1)) + min);
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
          data: arr,
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
    bubbleSortAlg() {},
  },
};
</script>
