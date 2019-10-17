<template>
  <div>
    <v-responsive :aspect-ratio="16/9">
      <v-parallax src="../assets/background.png" height="1000" class="parallax">
        <v-layout column align-center justify-center class="white--text" style="position:relative">
          <orbit-spinner :animation-duration="1200" :size="500" color="#152238" class="unicon-spinner"/>
          <div class="unicon-logo">
            <img src="../assets/big_logo.svg" alt="Vuetify.js" height="100"/>
            <div class="subheading text-center"><h2>Creating the unicorns of tomorrow</h2></div>
          </div>
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
  height: 90% !important;
}
.unicon-logo{
  z-index: 1;
  position: absolute;
}

  .unicon-spinner {
    position: absolute;
  }

</style>