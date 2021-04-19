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

    <div>
      {{ listdata }}
      <br />
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
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      numArr: this.listdata,
      renderComponent: this.refreshC,
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
          data: [1,2,3,4,5,6,7,8],
        },
      ],
    };
  },

   methods: {
      forceRerender() {
        // Remove my-component from the DOM
        this.renderComponent = false;

        this.$nextTick(() => {
          // Add the component back in
          this.renderComponent = true;
        });
      }
   }
};
</script>
