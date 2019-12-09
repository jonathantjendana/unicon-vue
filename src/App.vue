<template>
    <v-app id="app">
        <div v-if="this.$route.path !== '/landingpage'">
            <app-navigation v-show="this.$route.path !== '/landingpage'"></app-navigation>
            <Carousel></Carousel>
            <v-content id="scroll-with-options">
                <transition name="router-animate">
                    <router-view></router-view>
                </transition>
            </v-content>
            <Footer></Footer>
        </div>
        <v-content v-else>
            <landing-page-hero></landing-page-hero>
            <landing-page-details></landing-page-details>
            <v-footer padless>
                <v-col class="text-center" cols="12">
                    &copy; {{ new Date().getFullYear() }} —
                    <strong>Brought to you by NUS Entrepreneurship Society</strong>
                </v-col>
            </v-footer>
        </v-content>
    </v-app>
</template>

<script>
    import AppNavigation from "@/components/AppNavigation";
    import Footer from "@/components/Footer";

    import LandingPageHero from "@/components/LandingPageHero";
    import LandingPageDetails from "@/components/LandingPageDetails";
    import Carousel from "./components/Carousel";

    export default {
        name: "App",
        components: {
            AppNavigation,
            Carousel,
            Footer,
            LandingPageHero,
            LandingPageDetails,
        }
    };
</script>

<style>
    @font-face {
        font-family: "twitchy.tvregular";
        src: url("./assets/fonts/twitchy.tv-webfont.woff2") format("woff2"),
        url("./assets/fonts/twitchy.tv-webfont.woff") format("woff");
        font-weight: normal;
        font-style: normal;
    }

    #app {
        width: auto;
        font-family: Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #ffffff;
        margin: 0;
    }

    .white--text {
        color: #ffffff;
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
        }
        to {
            /*transform: translateX(-50px);*/
            opacity: 0;
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

    .unicon {
        font-family: "twitchy.tvregular"
    }
</style>