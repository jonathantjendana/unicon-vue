<template>
    <v-parallax src="../assets/background.png" v-resize="onResize" :height=windowSize.y>
        <v-layout column align-center justify-center class="white--text" style="position:relative">
            <orbit-spinner :animation-duration="1200" :size="500" color="#152238" class="unicon-spinner"/>
            <div class="unicon-logo">
                <img src="../assets/big_logo.svg" alt="Vuetify.js"/>
                <div class="subtitle-1 text-center mt-5"><h2>Creating the unicorns of tomorrow</h2></div>
            </div>
        </v-layout>
    </v-parallax>
</template>

<script>
    import {OrbitSpinner} from "epic-spinners";
    export default {
        name: "carousel",
        components: {
            OrbitSpinner
        },
        data: () => ({
            windowSize: {
                x : 0,
                y : 0
            }
        }),
        mounted () {
            this.onResize()
        },
        methods: {
            onResize () {
                this.windowSize = {
                    x: window.innerWidth,
                    y: window.innerHeight
                }
            }
        }
    };
</script>

<style scoped>
    .unicon-logo {
        z-index: 1;
        position: absolute;
        top: 43%;
    }
    .unicon-spinner {
        position: absolute;
    }
</style>