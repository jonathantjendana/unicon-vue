<template>
  <v-footer class="indigo">
    <v-row align="center" justify="center">
      <v-col cols="3">
        <v-img contain height="45" src="../assets/nes_logo.png" />
      </v-col>
      <v-spacer/>
      <v-col cols="3" class="white--text">Copyright © 2020 - Unicon</v-col>
      <v-spacer/>
      <v-col cols="3">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" :href=icon.link dark icon>
          <v-icon size="24px">{{ icon.icon }}</v-icon>
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
        {
            icon: 'fab fa-facebook',
            link: 'https://www.facebook.com/unicon2020/'
        },
        {
            icon: 'fab fa-linkedin',
            link: 'https://www.linkedin.com/company/unicon2018/'
        },
        {
            icon: 'fab fa-instagram',
            link: 'https://www.instagram.com/unicon.2020/?hl=en'
        },
    ]
  })
};
</script>