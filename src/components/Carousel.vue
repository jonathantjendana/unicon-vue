<template>
  <v-parallax src="../assets/background.png" v-resize="onResize" :height="windowSize.y">
    <v-container fluid>
      <v-row align="center" justify="center" style="height:63vh">
        <orbit-spinner
          :animation-duration="1200"
          :size="350"
          color="#303F9F"
          class="unicon-spinner"
        />
        <v-col class="text-center" cols="12">
          <v-img src="../assets/big_logo.svg" alt="UNICON" contain height="125"/>
          <div class="tagline-1 font-weight-bold text-center mt-3">Creating the unicorns of tomorrow</div>
          <v-spacer />
        </v-col>
      </v-row>

      <v-row align="end" justify="center">
        <div
          class="font-weight-bold tagline-2"
        >Southeast Asia's Largest &amp; Craziest Student Led Conference</div>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
import { OrbitSpinner } from "epic-spinners";
export default {
  name: "carousel",
  components: {
    OrbitSpinner
  },
  data: () => ({
    windowSize: {
      x: 0,
      y: 0
    }
  }),
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = {
        x: window.innerWidth,
        y: window.innerHeight
      };
    }
  }
};
</script>

<style scoped>
.details {
  z-index: 1;
}
.unicon-spinner {
  position: absolute;
  z-index: -100;
}

.tagline-1 {
  font-size: 1.3rem !important;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal !important;
  font-family: "twitchy.tvregular";
}

.tagline-2 {
  font-size: calc(20px + (26-14) * ((100vw - 300px) / (1600 -300)));
  line-height: calc(1.3em + (1.5-1.2) * ((100vw - 300px) / (1600 -300)));
  font-weight: 400;

  letter-spacing: 0.0073529412em !important;
  font-family: "Graphik-Bold";
}
</style>