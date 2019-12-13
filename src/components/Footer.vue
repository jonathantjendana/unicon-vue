<template>
  <v-footer class="indigo" padless>
    <!-- <v-card class="flex" flat tile>
      <v-card-title class="indigo">
        <strong class="subheading">©UNICON 2020</strong>
        <div class="flex-grow-1"></div>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="py-2 white--text text-center">
        <strong>Brought to you by NUS Entrepreneurship Society</strong>
      </v-card-text>
      <v-row class="mb-3" align="center" justify="center">
        <img src="../assets/nes_logo.png">
        <br>
      </v-row>
    </v-card>-->
    <v-row align="center" justify="center">

      <v-col cols="3">
        <v-img contain height="45" src="../assets/nes_logo.png" />
      </v-col>
      <v-spacer/>
      <v-col cols="3" class="white--text">Copyright © 2019 - Unicon</v-col>
      <v-spacer/>
      <v-col cols="3">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-col>

    </v-row>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>