<template>
  <v-footer class="indigo">
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