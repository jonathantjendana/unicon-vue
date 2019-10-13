<template>
  <v-parallax src="../assets/hero.jpeg" height="600">
    <v-layout column align-center justify-center class="white--text">
      <img src="../assets/logo.png" alt="Vuetify.js" height="200" />
      <h1 class="white--text mb-2 display-1 text-center">UNICON 2020</h1>
      <div class="subheading mb-4 text-center">Organised by NUS Entrepreneurship Society</div>
      <v-btn class="mt-12" color="blue lighten-2" dark large href="/">Get Your Tickets Now!</v-btn>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  name: "Home"
};
</script>