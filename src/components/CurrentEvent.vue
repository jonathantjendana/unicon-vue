<template>
    <!--<v-bottom-sheet v-model="sheet" inset eager>-->
    <!--<template v-slot:activator="{ on }">-->
    <v-layout column wrap class="my-12" align-center>
        <div class="text-center">
            <h2 class="mb-8 mt-6 dark indigo--text" style="font-family: Graphik-Bold; font-size: 34px"><b>Agenda</b></h2>
        </div>
        <v-tabs class="mb-10" background-color="transparent" color="blue" centered>
            <v-tab>
                <h2 class="text--blue"><b>Day 1</b></h2>
            </v-tab>
            <v-tab>
                <h2 class="text--blue"><b>Day 2</b></h2>
            </v-tab>
            <v-tab-item>
                <v-container>
                    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                        <v-timeline-item
                                v-for="(item, i) in items_day1"
                                :key="i"
                                :color="item.color"
                                :icon="item.icon"
                                fill-dot
                                class="mt-12"
                        >
                            <template v-slot:opposite>
                                <span class="event-time indigo--text" v-text="item.time"></span>
                            </template>
                            <v-card :color="item.color" dark>
                                <v-card-text class="text-left white--text event-text" style="font-family: Graphik-Regular;"><div class="hidden-sm-and-up text-right" style="font-family: Graphik-Bold; font-size: 18px;">{{item.time}}<br></div><span>{{item.title}}</span></v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-container>
            </v-tab-item>
            <v-tab-item>
                <v-container>
                    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                        <v-timeline-item
                                v-for="(item, i) in items_day2"
                                :key="i"
                                :color="item.color"
                                :icon="item.icon"
                                fill-dot
                                class="mt-12"
                        >
                            <template v-slot:opposite>
                                <span class="event-time indigo--text" v-text="item.time"></span>
                            </template>
                            <v-card :color="item.color" dark>
                                <v-card-text class="text-left white--text event-text" style="font-family: Graphik-Regular;"><div class="hidden-sm-and-up text-right" style="font-family: Graphik-Bold; font-size: 18px;">{{item.time}}<br></div><span>{{item.title}}</span></v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-container>
            </v-tab-item>
        </v-tabs>
    </v-layout>
</template>

<style scoped>
    h2 {
        font-family: Graphik-Bold;
        font-size: 28px;
    }

    .event-time {
        font-family: Graphik-Bold;
        font-size: 24px;
    }

    @media only screen and (min-width: 240px) {
        .event-text {
            font-size: 18px;
        }
    }

    @media only screen and (min-width: 960px) {
        .event-text {
            font-size: 22px;
        }
    }

</style>

<script>
    export default {
        name: "CurrentEvent",
        data: () => ({
            sheet: false,
            items_day1: [
                {
                    color: "indigo",
                    icon: "mdi-laptop",
                    time: "09:00",
                    title: "Registration"
                },
                {
                    color: "indigo",
                    icon: "mdi-microphone",
                    time: "09:45",
                    title: "Opening Address"
                },
                {
                    color: "indigo",
                    icon: "mdi-microphone",
                    time: "10:00",
                    title: "Minster Speech"
                },
                {
                    color: "indigo",
                    icon: "mdi-microphone",
                    time: "10:30",
                    title: "Sponsor Opening Speech"
                },
                {
                    color: "indigo",
                    icon: "mdi-account-group",
                    time: "11:00",
                    title: "Panel Discussion 1 : Startup Dream Team"
                },
                {
                    color: "indigo",
                    icon: "mdi-food",
                    time: "11:50",
                    title: "Lunch"
                },
                {
                    color: "indigo",
                    icon: "mdi-account-group",
                    time: "13:20",
                    title: "Panel Discussion 2 : Social Entrepreneurship"
                },
                {
                    color: "indigo",
                    icon: "mdi-microphone-variant",
                    time: "14:10",
                    title: "Speaking slot 2"
                },
                {
                    color: "indigo",
                    icon: "mdi-account-group",
                    time: "14:40",
                    title: "Panel Discussion 3 :  VC and Accelerator"
                },
                {
                    color: "indigo",
                    icon: "mdi-coffee",
                    time: "15:30",
                    title: "Break"
                },
                {
                    color: "indigo",
                    icon: "mdi-microphone-variant",
                    time: "15:45",
                    title: "Speaking slot 3"
                },
                {
                    color: "indigo",
                    icon: "mdi-account-group",
                    time: "16:15",
                    title: "Panel Discussion 4: Redefining fintech revolution"
                },
                {
                    color: "indigo",
                    icon: "",
                    time: "17:05",
                    title: "Day 1 Ends"
                },
            ],
            items_day2: [
                {
                    color: "indigo",
                    icon: "mdi-laptop",
                    time: "09:00",
                    title: "Registration"
                },
                {
                    color: "indigo",
                    icon: "mdi-microphone",
                    time: "09:45",
                    title: "Opening Address"
                },
                {
                    color: "indigo",
                    icon: "mdi-microphone",
                    time: "10:00",
                    title: "Minster Speech"
                },
                {
                    color: "indigo",
                    icon: "mdi-microphone",
                    time: "10:30",
                    title: "Sponsor Opening Speech"
                },
                {
                    color: "indigo",
                    icon: "mdi-account-group",
                    time: "11:00",
                    title: "Panel Discussion 1 : Startup Dream Team"
                },
                {
                    color: "indigo",
                    icon: "mdi-food",
                    time: "11:50",
                    title: "Lunch"
                },
                {
                    color: "indigo",
                    icon: "mdi-account-group",
                    time: "13:20",
                    title: "Panel Discussion 2 : Social Entrepreneurship"
                },
                {
                    color: "indigo",
                    icon: "mdi-microphone-variant",
                    time: "14:10",
                    title: "Speaking slot 2"
                },
                {
                    color: "indigo",
                    icon: "mdi-account-group",
                    time: "14:40",
                    title: "Panel Discussion 3 :  VC and Accelerator"
                },
                {
                    color: "indigo",
                    icon: "mdi-coffee",
                    time: "15:30",
                    title: "Break"
                },
                {
                    color: "indigo",
                    icon: "mdi-microphone-variant",
                    time: "15:45",
                    title: "Speaking slot 3"
                },
                {
                    color: "indigo",
                    icon: "mdi-account-group",
                    time: "16:15",
                    title: "Panel Discussion 4: Redefining fintech revolution"
                },
                {
                    color: "indigo",
                    icon: "",
                    time: "17:05",
                    title: "Day 1 Ends"
                },
            ]
        })
    };
</script>