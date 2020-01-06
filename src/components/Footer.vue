<template>
  <v-footer class="indigo">
    <v-row align="center" justify="center">
      <v-col cols="3">
        <a href="https://www.nes.org.sg/" target="_blank">
          <v-img contain :aspect-ratio="getAspectRatio" src="../assets/nes_logo.png" />
        </a>
      </v-col>
      <v-spacer/>
      <v-col cols="3" md="3" class="d-none d-sm-block white--text"><span style="font-family: Graphik-Regular">Copyright © 2020 - Unicon</span></v-col>
      <v-spacer/>
      <v-col cols="3" md="3">
        <v-btn v-for="icon in icons" :key="icon" class="margin-adjust" :href=icon.link dark icon>
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-col>
      <v-col cols ="12" class="d-md-none white--text"><span style="font-family: Graphik-Regular">Copyright © 2020 - Unicon</span></v-col>

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
  }),
  computed: {
      getAspectRatio : function() {
          if (this.$vuetify.breakpoint.name != 'xs') {
              return 10;
          } else {
              return 3;
          }
      }
  }
};
</script>

<style scoped>
  @media only screen and (min-width: 480px) {
    .margin-adjust {
      margin-right: 20%;
      margin-left: 20%;
    }
  }


  @media only screen and (min-width: 960px) {
    .margin-adjust {
      margin-right: 8%;
      margin-left: 8%;
    }
  }
</style>