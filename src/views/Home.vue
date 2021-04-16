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

      <v-card elevation="2" tile max-width="400">
        <v-system-bar color="black darken-2" dark style="height: 50px">
          <v-col class="d-flex justify-space-around">
            <v-card-title class="justify-center" color="white"
              ><b>You can find me on:</b></v-card-title
            >
          </v-col>
          <br />
          <br />
        </v-system-bar>
        <br />
        <hover>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title font-weight-light">
                GitHub
              </v-list-item-title>
              <v-list-item-subtitle
                >You can access the source code for this<br />app or check out
                any of my other projects.</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="80"
              ><img src="https://image.flaticon.com/icons/png/512/25/25231.png"
            /></v-list-item-avatar>
          </v-list-item>
        </hover>
        <br>
        <!--------------------------------------->
         <hover>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title font-weight-light">
                LinkedIn
              </v-list-item-title>
              <v-list-item-subtitle
                >Connect with me on Linkedin.</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="80"
              ><img src="https://www.seekpng.com/png/small/8-84419_linkedin-logo-png-icon-linkedin-logo-png.png"
            /></v-list-item-avatar>
          </v-list-item>
        </hover>
        <br>
           <!--------------------------------------->
         <hover>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title font-weight-light">
                Email
              </v-list-item-title>
              <v-list-item-subtitle
                >Email me.</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="75"
              ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdSOGPJxi1giye1TXysqtElJ9dQxsTrryZnQ&usqp=CAU"
            /></v-list-item-avatar>
          </v-list-item>
        </hover>

      </v-card>
    </center>

  </div>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.theme--dark.v-system-bar {
  color: white !important;
}
element.style {
  /* height: 100px !important; */
}
</style>
