<template>
    <v-layout column wrap class="my-12" align-center>
        <div class="text-center">
            <h2 class="display-1 mt-6 dark blue--text"><b>Ticket Pricing</b></h2>
        </div>
        <v-row class="fill-height" align="center" justify="center">
            <v-col>
                <v-hover v-slot:default="{ hover }" open-delay="200">
                    <v-card :elevation="hover ? 16 : 2" class="mx-auto" height="350" width="400">
                        <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
                            Open Delay (Mouse enter)
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col>
                <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card :elevation="hover ? 16 : 2" class="mx-auto" height="350" width="400">
                        <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
                            Close Delay (Mouse leave)
                        </v-card-text>
                    </v-card>
                </v-hover>
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

</style>