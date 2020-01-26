<template>
  <v-app id="app">
      <v-content v-if="this.$route.path === '/landingpage'">
          <landing-page-hero></landing-page-hero>
          <landing-page-details></landing-page-details>
          <v-footer padless>
              <v-col class="text-center" cols="12">
                  &copy; {{ new Date().getFullYear() }} —
                  <strong>Brought to you by NUS Entrepreneurship Society</strong>
              </v-col>
          </v-footer>
      </v-content>
      <div v-if="this.$route.path ==='/audienceGuide'">
          <agenda></agenda>
          <Footer></Footer>
      </div>
    <div v-else>
      <app-navigation v-show="this.$route.path !== '/landingpage'"></app-navigation>
      <Carousel></Carousel>
        <popup></popup>
      <v-content id="scroll-with-options">
        <transition name="router-animate">
          <router-view></router-view>
        </transition>
      </v-content>
      <Footer></Footer>
    </div>

  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";
import Footer from "@/components/Footer";

import LandingPageHero from "@/components/LandingPageHero";
import LandingPageDetails from "@/components/LandingPageDetails";
import Agenda from "./components/CurrentEvent";
import Carousel from "./components/Carousel";
import Popup from "./components/Popup";

export default {
  name: "App",
  components: {
    AppNavigation,
    Carousel,
    Footer,
    LandingPageHero,
    LandingPageDetails,
      Agenda,
      Popup
  }
};
</script>

<style>
html {
  overflow-y: auto;
}
@font-face {
  font-family: "twitchy.tvregular";
  src: url("./assets/fonts/twitchy.tv-webfont.woff2") format("woff2"),
    url("./assets/fonts/twitchy.tv-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Graphik-Bold";
  src: url("./assets/fonts/graphik-bold.woff2") format("woff2"),
    url("./assets/fonts/graphik-Bold.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Graphik-Regular";
  src: url("./assets/fonts/Graphik-Regular.woff2") format("woff2"),
    url("./assets/fonts/Graphik-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

#app {
  width: auto;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}

#app {
  width: auto;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}

.router-animate-enter-active {
  animation: coming 1s;
  animation-delay: 1s;
  opacity: 0;
}

.router-animate-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    /*transform: translateX(0);*/
    opacity: 1;
  }
  to {
    /*transform: translateX(-50px);*/
    opacity: 0;
  }
}

.unicon {
  font-family: "twitchy.tvregular";
}

.graphik-reg {
  font-family: "Graphik-Regular";
}

.graphik-bold {
  font-family: "Graphik-Bold";
}

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes coming {
  from {
    /*transform: translateX(50px);*/
    opacity: 0;
  }
  to {
    /*transform: translateX(0px);*/
    opacity: 1;
  }
}
</style>