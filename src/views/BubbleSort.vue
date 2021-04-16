<template>
  <div class="bubblesort">
    <h1>This is the bubble sort page</h1>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <center>
      <v-text-field
        v-model="message3"
        filled
        rounded
        dense
        prepend-inner-icon="mdi-numeric"
        label="Enter numbers to sort here"
        clearable
      ></v-text-field>
    </center>
  </div>
</template>

<script>
export default {
  name: "BubbleSort",

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.v-text-field {
  width: 400px;
}
</style>