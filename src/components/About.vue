<template>
    <v-layout column wrap class="my-12" align-center>
        <v-flex xs12 sm4 class="my-4">
            <div class="text-center">
                <h2 class="display-1 mb-8 mt-6 dark blue--text"><b>Student Conference on Tech and Entrepreneurship</b></h2>
                <span class="headline mt-4 black--text">
                    <b>Feb 22-23, 2020 </b>
                </span>
            </div>
            <div class="text-center mt-7">
                <span class="headline mt-4 black--text">
                    <b>@NUS, Singapore</b>
                </span>
            </div>
        </v-flex>
        <v-flex>
            <v-container grid-list>
                <v-layout row wrap align-center>
                    <v-flex xs12 md12>
                        <v-card flat class="transparent">
                            <v-card-text class="subtitle-1 black--text">
                                UNICON 2019 was a two–day conference that serves to unite international student
                                entrepreneurs, prominent founders, industry experts and venture capitalists.
                                Each year, outstanding young entrepreneurs from across Asia are gathered, challenged and
                                inspired through our activities line-up.
                                Stay tuned for UNICON 2020!
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
        <div class="text-center headline">
            <v-hover v-slot:default="{ hover }" :open-delay="openDelay" :close-delay="closeDelay" :disabled="disabled" :value="value">
                <v-btn x-large class="mt-10" :elevation="hover ? 12 : 2" :loading="loading19" :disabled="loading19" color="light-blue" @click="loader = 'loading19'" href="https://drive.google.com/file/d/1bpPwWax9BIdUUHRr59aqiF59y3M0C1gy/view?usp=sharing">
                    <b>UNICON 2019 Video</b>
                </v-btn>
            </v-hover>
        </div>
        <div class="text-center headline">
            <v-hover v-slot:default="{ hover }" :open-delay="openDelay" :close-delay="closeDelay" :disabled="disabled" :value="value">
                <v-btn x-large class="mt-10" :elevation="hover ? 12 : 2" :loading="loading18" :disabled="loading18" color="blue" @click="loader = 'loading18'" href="https://drive.google.com/file/d/1mEfEjaRQDdPGyIjUHsT7ky7E6sDOX9-6/view?usp=sharing">
                    <b>UNICON 2018 Video</b>
                </v-btn>
            </v-hover>
        </div>
    </v-layout>
</template>

<script>
    export default {
        name: "About",
        date: () => ({
            disabled: false,
            openDelay: '0',
            closeDelay: '0',
            value: false,
        }),
        data() {
            return {
                loader: null,
                loading18: false,
                loading19: false
            }
        },
        watch: {
            loader() {
                const l = this.loader
                this[l] = !this[l]

                setTimeout(() => (this[l] = false), 3000)

                this.loader = null
            }
        }
    }
</script>

<style>
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
</style>