<template>
  <v-app class="overflow-y-auto">
    <v-app-bar absolute color="green" dark fixed>
      <v-toolbar-title>VueJS AlgVisuliser App </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon large>mdi-chart-bubble</v-icon>
          </v-btn>
        </template>
        <span>Bubble sort algorithm</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon large>mdi-arrow-down-bold-outline</v-icon>
      </v-btn>
       </template>
      <span>Insertion sort algorithm</span>
      </v-tooltip>
       <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon large>mdi-run-fast</v-icon>
      </v-btn>
       </template>
      <span>Quick sort algorithm</span>
      </v-tooltip>
    </v-app-bar>

    <br />
    <br />
    <br />
    <br /><br />
    <v-main>
      <!-- <HelloWorld />-->
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
