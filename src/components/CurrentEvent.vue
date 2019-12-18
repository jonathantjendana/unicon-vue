<template>
    <v-bottom-sheet v-model="sheet" inset eager>
        <template v-slot:activator="{ on }">
            <v-layout column wrap class="my-12" align-center>
                <div class="text-center">
                    <h2 class="display-1 mb-8 mt-6 dark indigo--text"><b>Agenda</b></h2>
                </div>
                <v-tabs class="mb-10" background-color="transparent" color="blue" centered>
                    <v-tab>
                        <h2 class="headline text--blue"><b>Day 1</b></h2>
                    </v-tab>
                    <v-tab>
                        <h2 class="headline text--blue"><b>Day 2</b></h2>
                    </v-tab>
                    <v-tab-item>
                        <v-container>
                            <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                                <v-timeline-item
                                        v-for="(item, i) in items"
                                        :key="i"
                                        :color="item.color"
                                        :icon="item.icon"
                                        fill-dot
                                >
                                    <template v-slot:opposite>
                                        <span :class="`headline font-weight-bold ${item.color}--text`" v-text="item.time"></span>
                                    </template>
                                    <v-card :color="item.color" dark>
                                        <v-card-title class="title"><span class="hidden-sm-and-up">{{item.time}}: &nbsp</span>Lorem Ipsum Dolor</v-card-title>
                                        <v-card-text class="white text--primary">
                                            <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                                nec
                                                ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim
                                                zril
                                                disputando voluptatibus, vix an salutandi sententiae.</p>
                                            <v-btn :color="item.color" class="mx-0" outlined v-on="on">Button</v-btn>
                                        </v-card-text>
                                    </v-card>
                                </v-timeline-item>
                            </v-timeline>
                        </v-container>
                    </v-tab-item>
                    <v-tab-item>
                        <v-container>
                            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                                <v-timeline-item
                                        v-for="(item, i) in items"
                                        :key="i"
                                        :color="item.color"
                                        :icon="item.icon"
                                        fill-dot
                                >
                                    <template v-slot:opposite>
                                        <span :class="`headline font-weight-bold ${year.color}--text`" v-text="item.time()"></span>
                                    </template>
                                    <v-card :color="item.color" dark>
                                        <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
                                        <v-card-text class="white text--primary">
                                            <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                                nec
                                                ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim
                                                zril
                                                disputando voluptatibus, vix an salutandi sententiae.</p>
                                            <v-btn :color="item.color" class="mx-0" outlined v-on="on">Button</v-btn>
                                        </v-card-text>
                                    </v-card>
                                </v-timeline-item>
                            </v-timeline>
                        </v-container>
                    </v-tab-item>
                </v-tabs>
                <div class="text-center mt-n11">
                    <h2 class="display-1 mb-8 dark indigo--text"><b>End</b></h2>
                </div>
            </v-layout>
        </template>
        <v-sheet class="text-center" height="200px">
            <v-btn
                    class="mt-6"
                    text
                    color="error"
                    @click="sheet = !sheet"
            >close</v-btn>
            <div class="my-3">This is a bottom sheet using the inset prop</div>
        </v-sheet>
    </v-bottom-sheet>
</template>

<script>
    export default {
        name: "CurrentEvent",
        data: () => ({
            sheet: false,
            items: [
                {
                    color: "indigo",
                    icon: "mdi-microphone-outline",
                    time: "08:00"
                },
                {
                    color: "indigo",
                    icon: "mdi-account-outline",
                    time: "09:00"
                },
                {
                    color: "indigo",
                    icon: "mdi-airballoon",
                    time: "10:00"
                },
                {
                    color: "indigo",
                    icon: "mdi-buffer",
                    time: "11:00"
                }
            ]
        })
    };
</script>