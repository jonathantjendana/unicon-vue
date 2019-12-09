<template>
    <v-layout column wrap class="my-12" align-center>
        <div class="text-center">
            <h2 class="display-1 mt-6 dark blue--text"><b>Ticket Pricing</b></h2>
        </div>
        <v-row class="fill-height mb-10" align="center" justify="center">
            <v-col>
                <v-card class="mx-auto mt-10" color="grey lighten-4" height="400" width="400">
                    <v-card-text
                            class="d-flex v-card--price font-weight-bold display-3 text-center blue darken-2 white--text"
                            style="opacity: .7">
                        S$31.20
                    </v-card-text>
                    <v-card-text class="black--text title" style="position: relative">
                        <v-btn absolute color="dark blue" class="white--text" fab large right top href="https://www.eventbrite.sg/e/unicon2020-tickets-74661820515?aff=ebdssbeac">
                            <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <div class="font-weight-light black--text title mb-2">Students</div>
                        <div class="font-weight-bold black--text headlines mb-2">Early Bird 20% Off</div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="mx-auto mt-10" color="grey lighten-4" height="400" width="400">
                    <v-card-text
                            class="d-flex v-card--price font-weight-bold display-3 text-center blue darken-2 white--text"
                            style="opacity: .7">
                        S$49.00
                    </v-card-text>
                    <v-card-text class="black--text title" style="position: relative">
                        <v-btn absolute color="dark blue" class="white--text" fab large left top href="https://www.eventbrite.sg/e/unicon2020-tickets-74661820515?aff=ebdssbeac">
                            <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <div class="font-weight-light black--text title mb-2">Public</div>
                        <div class="font-weight-bold black--text headlines mb-2">Open to all working adults</div>
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
</style>