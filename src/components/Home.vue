<template>
  <div>
    <v-responsive :aspect-ratio="16/9">
      <v-parallax src="../assets/hero.jpeg" height="1000" class="parallax">
        <v-layout column align-center justify-center class="white--text" style="position:relative">
          <img src="../assets/logo2.svg" alt="Vuetify.js" height="100" class="unicon-logo" />
          <orbit-spinner :animation-duration="1200" :size="200" color="#ff1d5e" />
          <!-- <h1 class="white--text mb-2 display-1 text-center">UNICON 2020</h1> -->
          <div class="subheading mb-4 text-center">Organised by NUS Entrepreneurship Society</div>
          <v-btn class="mt-12" color="blue lighten-2" dark large href="/">Get Your Tickets Now!</v-btn>
        </v-layout>
      </v-parallax>
    </v-responsive>
  </div>
</template>

<script>
import { OrbitSpinner } from "epic-spinners";
export default {
  name: "Home",
  components: {
    OrbitSpinner
  }
};
</script>

<style scoped>
.parallax {
  height: 87% !important;
}
.unicon-logo {
  /* position: fixed; */

  z-index: 1;

  position: absolute;
  /* left: 0; */
  top: 30%;
  /* width: 100%; */
  text-align: center;
  /* font-size: 18px; */
}

.unicon-spinner {
  position: fixed;
}
</style>