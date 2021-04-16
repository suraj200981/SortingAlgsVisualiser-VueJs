<template>
  <div>
    <center>
      <v-hover>
        <v-avatar size="250">
          <img
            class="bio"
            src="https://media-exp1.licdn.com/dms/image/C5603AQFsJOM49ghWyA/profile-displayphoto-shrink_400_400/0/1581612214075?e=1623888000&v=beta&t=gnpnUmI-qQN3RaN_ttoQnGlr5ocsOdHDtgZtIowE4zQ"
            alt="Suraj Sharma"
          />
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
