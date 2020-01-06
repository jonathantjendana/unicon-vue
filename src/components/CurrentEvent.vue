<!--<template>-->
    <!--&lt;!&ndash;<v-bottom-sheet v-model="sheet" inset eager>&ndash;&gt;-->
    <!--&lt;!&ndash;<template v-slot:activator="{ on }">&ndash;&gt;-->
    <!--<v-layout column wrap class="my-12" align-center>-->
        <!--<div class="text-center">-->
            <!--<h2 class="mb-8 mt-6 dark indigo&#45;&#45;text" style="font-family: Graphik-Bold; font-size: 34px"><b>Agenda</b></h2>-->
        <!--</div>-->
        <!--<v-tabs class="mb-10" background-color="transparent" color="blue" centered>-->
            <!--<v-tab>-->
                <!--<h2 class="text&#45;&#45;blue"><b>Day 1</b></h2>-->
            <!--</v-tab>-->
            <!--<v-tab>-->
                <!--<h2 class="text&#45;&#45;blue"><b>Day 2</b></h2>-->
            <!--</v-tab>-->
            <!--<v-tab-item>-->
                <!--<v-container>-->
                    <!--<v-timeline :dense="$vuetify.breakpoint.smAndDown">-->
                        <!--<v-timeline-item-->
                                <!--v-for="(item, i) in items_day1"-->
                                <!--:key="i"-->
                                <!--:color="item.color"-->
                                <!--:icon="item.icon"-->
                                <!--fill-dot-->
                                <!--class="mt-12"-->
                        <!--&gt;-->
                            <!--<template v-slot:opposite>-->
                                <!--<span class="event-time indigo&#45;&#45;text" v-text="item.time"></span>-->
                            <!--</template>-->
                            <!--<v-card :color="item.color" dark style="font-family: Graphik-Regular;">-->
                                <!--<v-card-text class="text-left white&#45;&#45;text event-title">-->
                                    <!--<span class="hidden-sm-and-up text-right" style="font-family: Graphik-Bold; font-size: 21px;">-->
                                        <!--{{item.time}} :-->
                                    <!--</span>-->
                                    <!--<span>-->
                                        <!--<b>{{item.title}}</b>-->
                                    <!--</span>-->
                                <!--</v-card-text>-->
                                <!--<v-card-text v-if="item.description !== ''" class="white text-left text&#45;&#45;primary event-text">-->
                                    <!--{{item.description}}-->
                                <!--</v-card-text>-->
                            <!--</v-card>-->
                        <!--</v-timeline-item>-->
                    <!--</v-timeline>-->
                <!--</v-container>-->
            <!--</v-tab-item>-->
            <!--<v-tab-item>-->
                <!--<v-container>-->
                    <!--<v-timeline :dense="$vuetify.breakpoint.smAndDown">-->
                        <!--<v-timeline-item-->
                                <!--v-for="(item, i) in items_day2"-->
                                <!--:key="i"-->
                                <!--:color="item.color"-->
                                <!--:icon="item.icon"-->
                                <!--fill-dot-->
                                <!--class="mt-12"-->
                        <!--&gt;-->
                            <!--<template v-slot:opposite>-->
                                <!--<span class="event-time indigo&#45;&#45;text" v-text="item.time"></span>-->
                            <!--</template>-->
                            <!--<v-card :color="item.color" dark style="font-family: Graphik-Regular;">-->
                                <!--<v-card-text class="text-left white&#45;&#45;text event-title">-->
                                    <!--<span class="hidden-sm-and-up text-right" style="font-family: Graphik-Bold; font-size: 21px;">-->
                                        <!--{{item.time}} :-->
                                    <!--</span>-->
                                    <!--<span>-->
                                        <!--<b>{{item.title}}</b>-->
                                    <!--</span>-->
                                <!--</v-card-text>-->
                                <!--<v-card-text v-if="item.description !== ''" class="white text-left text&#45;&#45;primary event-text">-->
                                    <!--{{item.description}}-->
                                <!--</v-card-text>-->
                            <!--</v-card>-->
                        <!--</v-timeline-item>-->
                    <!--</v-timeline>-->
                <!--</v-container>-->
            <!--</v-tab-item>-->
        <!--</v-tabs>-->
    <!--</v-layout>-->
<!--</template>-->
<template>
    <!--<v-bottom-sheet v-model="sheet" inset eager>-->
    <!--<template v-slot:activator="{ on }">-->
    <v-layout column wrap class="my-12" align-center>
        <div class="text-center">
            <h2 class="mb-8 mt-6 dark indigo--text" style="font-family: Graphik-Bold; font-size: 34px"><b>Agenda</b></h2>
        </div>
        <div class="text-center" justify="center" style="top: 50%">
            <h2 class="dark black--text" style="font-family: Graphik-Bold; font-size: 48px"><b>Coming Soon!</b></h2>
        </div>
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

        .event-title {
            font-size: 19px;
        }

        .event-text {
            font-size: 18px;
            font-weight: bold;
        }
    }

    @media only screen and (min-width: 960px) {
        .event-title {
            font-size: 22px;
        }

        .event-text {
            font-size: 17px;
            font-weight: bold;
        }
    }

    .item pre {
        white-space: pre-wrap;
        word-wrap: break-word;
        font-family: inherit;
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
                    title: "Registration",
                    description: ''
                },
                {
                    color: "indigo",
                    icon: "mdi-microphone",
                    time: "09:45",
                    title: "Opening Address",
                    description: ''
                },
                {
                    color: "indigo",
                    icon: "mdi-microphone",
                    time: "10:00",
                    title: "Minster Speech",
                    description: ''

                },
                {
                    color: "indigo",
                    icon: "mdi-microphone",
                    time: "10:30",
                    title: "Sponsor Opening Speech",
                    description: ''
                },
                {
                    color: "indigo",
                    icon: "mdi-account-group",
                    time: "11:00",
                    title: "Panel Discussion 1",
                    description: 'Startup Dream Team'
                },
                {
                    color: "indigo",
                    icon: "mdi-food",
                    time: "11:50",
                    title: "Lunch",
                    description: ''
                },
                {
                    color: "indigo",
                    icon: "mdi-account-group",
                    time: "13:20",
                    title: "Panel Discussion 2",
                    description: 'Social Entrepreneurship'
                },
                {
                    color: "indigo",
                    icon: "mdi-microphone-variant",
                    time: "14:10",
                    title: "Speaking slot 2",
                    description: ''

                },
                {
                    color: "indigo",
                    icon: "mdi-account-group",
                    time: "14:40",
                    title: "Panel Discussion 3",
                    description: 'VC and Accelerator'
                },
                {
                    color: "indigo",
                    icon: "mdi-coffee",
                    time: "15:30",
                    title: "Break",
                    description: ''
                },
                {
                    color: "indigo",
                    icon: "mdi-microphone-variant",
                    time: "15:45",
                    title: "Speaking slot 3",
                    description: ''
                },
                {
                    color: "indigo",
                    icon: "mdi-account-group",
                    time: "16:15",
                    title: "Panel Discussion 4",
                    description: 'Redefining Fintech Revolution'
                },
                {
                    color: "indigo",
                    icon: "",
                    time: "17:05",
                    title: "Day 1 Ends",
                    description: ''
                },
            ],
            items_day2: [
                {
                    color: "indigo",
                    icon: "mdi-laptop",
                    time: "09:00",
                    title: "Registration",
                    description: ''
                },
                {
                    color: "indigo",
                    icon: "mdi-microphone-variant",
                    time: "10:00",
                    title: "Speaking Slot 4",
                    description: ''
                },
                {
                    color: "indigo",
                    icon: "mdi-account-group",
                    time: "10:30",
                    title: "Panel Discussion 5",
                    description: 'Women In Entrepreneurship'
                },
                {
                    color: "indigo",
                    icon: "mdi-account-group",
                    time: "11:20",
                    title: "Panel Discussion 6",
                    description: 'Future of eCommerce & Globalisation'
                },
                {
                    color: "indigo",
                    icon: "mdi-food",
                    time: "12:10",
                    title: "Lunch",
                    description: ''
                },
                {
                    color: "indigo",
                    icon: "mdi-account-group",
                    time: "13:25",
                    title: "Panel Discussion 7",
                    description: 'Growth for B2C, B2B, C2C'
                },
                {
                    color: "indigo",
                    icon: "mdi-microphone-variant",
                    time: "14:15",
                    title: "Speaking slot 5",
                    description: ''
                },
                {
                    color: "indigo",
                    icon: "mdi-account-group",
                    time: "14:50",
                    title: "Panel Discussion 8",
                    description: 'Student Entrepreneurs, Youth & Change'
                },
                {
                    color: "indigo",
                    icon: "mdi-coffee",
                    time: "15:20",
                    title: "Break",
                    description: ''
                },
                {
                    color: "indigo",
                    icon: "mdi-stadium-variant",
                    time: "15:40",
                    title: "UNICON Arena",
                    description: ''
                },
                {
                    color: "indigo",
                    icon: "mdi-trophy",
                    time: "17:00",
                    title: "Prize Awards",
                    description: ''
                },
                {
                    color: "indigo",
                    icon: "",
                    time: "17:15",
                    title: "End of UNICON2020",
                    description: ''
                },
            ]
        })
    };
</script>