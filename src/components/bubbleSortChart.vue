<template>
  <div class="example">
    <apexcharts
      width="1000"
      height="500"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
    <br />
    <br />

    <div>
      {{ listdata }}
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  props: [
    'listdata'
    ],
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
          name: "Value",
          data: [30, 80, 45, 50, 49, 91, 60, 70],
        },
      ],
    };
  },
};
</script>
