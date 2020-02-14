<template>
    <div>
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
                        <v-img src="../assets/big_logo.svg" alt="UNICON" contain height="125" eager/>
                        <div class="tagline-1 font-weight-bold text-center mt-3">Creating the unicorns of tomorrow</div>
                        <v-spacer/>
                    </v-col>
                </v-row>

                <v-row align="end" justify="center">
                    <div
                            class="font-weight-bold tagline-2"
                    >Southeast Asia's Largest &amp; Craziest Student Led Conference
                    </div>
                </v-row>
            </v-container>
        </v-parallax>
        Popup section
        <v-dialog class="popup-bg" v-model="dialog" max-width="500px" eager persistent>
            <v-card class="mx-auto" align-content="center" eager>
                <v-card-text>
                    <v-img src="../assets/sorry.png" eager>
                    </v-img>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
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
                x: 0,
                y: 0
            },
            dialog: false,
            countDown : 1
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
            },
            countDownTimer() {
                if(this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        this.dialog = true;
                        this.countDownTimer()
                    }, 1000)
                }
            }
        },

        created() {
            this.countDownTimer()
        }
    };
</script>

<style scoped>

    .popup-bg {
    }

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
        font-size: calc(20px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
        line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
        font-weight: 400;

        letter-spacing: 0.0073529412em !important;
        font-family: "Graphik-Bold";
    }

    .happy-CNY {
        font-family: Graphik-Bold;
        font-size: 20px;
        position: absolute;
        top: 40%;
        left: 0%;
        right: 0%
    }

    .all-ticket-price {
        font-family: Graphik-Bold;
        font-size: 16px;
        position: absolute;
        top: 55%;
        left: 0%;
        right: 0%

    }

    .promotion {
        font-family: Graphik-Bold;
        font-size: 35px;
        position: absolute;
        top: 70%;
        left: 0%;
        right: 0%
    }

    .btn-position {
        top: 82%;
    }

    @media only screen and (min-width: 375px) {
        .happy-CNY {
            font-family: Graphik-Bold;
            font-size: 20px;
            position: absolute;
            top: 40%;
            left: 0%;
            right: 0%
        }

        .all-ticket-price {
            font-family: Graphik-Bold;
            font-size: 13px;
            position: absolute;
            top: 55%;
            left: 0%;
            right: 0%

        }

        .promotion {
            font-family: Graphik-Bold;
            font-size: 35px;
            position: absolute;
            top: 70%;
            left: 0%;
            right: 0%
        }

        .btn-position {
            top: 85%;
        }
    }

    @media only screen and (min-width: 414px) {
        .happy-CNY {
            font-family: Graphik-Bold;
            font-size: 20px;
            position: absolute;
            top: 40%;
            left: 0%;
            right: 0%
        }

        .all-ticket-price {
            font-family: Graphik-Bold;
            font-size: 16px;
            position: absolute;
            top: 55%;
            left: 0%;
            right: 0%

        }

        .promotion {
            font-family: Graphik-Bold;
            font-size: 35px;
            position: absolute;
            top: 70%;
            left: 0%;
            right: 0%
        }
    }

    @media only screen and (min-width: 768px) {
        .happy-CNY {
            font-family: Graphik-Bold;
            font-size: 35px;
            position: absolute;
            top: 40%;
            left: 0%;
            right: 0%
        }

        .all-ticket-price {
            font-family: Graphik-Bold;
            font-size: 20px;
            position: absolute;
            top: 55%;
            left: 0%;
            right: 0%

        }

        .promotion {
            font-family: Graphik-Bold;
            font-size: 50px;
            position: absolute;
            top: 70%;
            left: 0%;
            right: 0%
        }
    }


</style>