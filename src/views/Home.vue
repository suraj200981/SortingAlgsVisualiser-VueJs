<template>
  <div>
    <center>
      <v-hover>
        <v-avatar size="250">
          <img src="src/assets/logo.png" alt="Girl in a jacket" width="500" height="600">

        </v-avatar>
      </v-hover>
      <br />
      <br />
  <socialLinks/>
    </center>

  </div>
</template>

<script>
import socialLinks from '../components/socialLinks.vue';
export default {
  name: "Home",
  components:{
    socialLinks
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.theme--dark.v-system-bar {
  color: white !important;
}

</style>
