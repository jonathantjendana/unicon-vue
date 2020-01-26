<template>
    <v-layout column wrap class="my-12" align-center>
        <div class="text-center">
            <h2 class="mt-6 dark indigo--text" style="font-family: Graphik-Bold; font-size: 34px"><b>Ticket Pricing</b></h2>
        </div>
        <v-row class="fill-height mb-10" align="center" justify="center">
            <v-col cols="10" md="6">
                <v-card class="mx-auto mt-10" color="grey lighten-4" height="350" width="400">
                    <v-card-text
                            class="d-flex v-card--price font-weight-bold display-3 text-center blue darken-2 white--text"
                            style="opacity: .7">
                        <div class="adjust--top">S$39.00</div><div class="deal--text">Buy 2 at &nbsp;<span class="yellow--text" style="font-size: 30px;">
                        <b>S$74!</b></span>
                    </div>
                    </v-card-text>
                    <v-card-text class="black--text title" style="position: relative">
                        <v-btn absolute color="dark blue" class="white--text" fab large right top href="https://www.eventbrite.sg/e/unicon2020-tickets-89211033603" target="_blank">
                            <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <div class="font-weight-bold black--text mb-2" style="font-family: Graphik-Bold">Students</div>
                        <div class="font-weight-light black--text mb-2" style="font-family: Graphik-Regular">Open to all universities</div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="10" md="6">
                <v-card class="mx-auto mt-10" color="grey lighten-4" height="350" width="400">
                    <v-card-text
                            class="d-flex v-card--price font-weight-bold display-3 text-center blue darken-2 white--text"
                            style="opacity: .7">
                        <div class="adjust--top">S$49.00</div><div class="deal--text">Buy 2 at &nbsp;<span class="yellow--text" style="font-size: 30px;">
                        <b>S$93!</b></span>
                    </div>
                    </v-card-text>
                    <v-card-text class="black--text title" style="position: relative">
                        <v-btn absolute color="dark blue" class="white--text" fab large right top href="https://www.eventbrite.sg/e/unicon2020-tickets-89211033603" target="_blank">
                            <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <div class="font-weight-bold black--text mb-2" style="font-family: Graphik-Bold">Public</div>
                        <div class="font-weight-light black--text mb-2" style="font-family: Graphik-Regular">Open to all working adults</div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-layout>
</template>

<script>
    export default {
        name: "Pricing"
    }
</script>

<style scoped>
    .v-card--price {
        align-items: center;
        top: 0;
        justify-content: center;
        opacity: .5;
        width: 100%;
        height: 72%;
    }

    .adjust--top {
        position: absolute;
        top: 25%;
    }

    .deal--text {
        position: absolute;
        font-size: 24px;
        top: 45%;
    }
</style>