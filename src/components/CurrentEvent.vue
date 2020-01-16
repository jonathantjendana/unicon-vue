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
                                <span :class="`event-time ${item.tcolor}--text`" v-text="item.time"></span>
                            </template>
                            <v-card :color="item.color" dark style="font-family: Graphik-Regular;">
                                <v-card-text class="text-left white--text event-title mb-n1">
                                    <div class="hidden-sm-and-up text-right" style="font-family: Graphik-Bold; font-size: 21px;">
                                        {{item.time}}
                                    </div>
                                    <div>
                                        <b>{{item.title}}</b>
                                    </div>
                                </v-card-text>
                                <v-card-text v-if="item.type === 'panel'" class="white text-left text--primary event-text">
                                    <div class="mb-4">{{item.description}}</div>
                                    <template v-for="(speaker, j) in item.speakers">
                                        <div :key="j" class="text-left mb-3">
                                            <v-avatar size="48px">
                                                <img :src="speaker.img">
                                            </v-avatar>
                                            <span class="speaker-name-font-adjust">
                                                <b>&nbsp; {{speaker.name}}&nbsp;</b>
                                            </span>
                                            <v-chip style="font-family: Graphik-Bold;" color="blue darken-3" class="white--text">
                                                <span class="speaker-company-adjust">{{speaker.company}}</span>
                                            </v-chip>
                                        </div>
                                    </template>
                                </v-card-text>
                                <v-card-text v-if="item.type === 'speaker'" class="white text-left text--primary event-text">
                                    <v-avatar size="72px">
                                        <img :src="item.img">
                                    </v-avatar>
                                    <span class="speaker-only-name-font-adjust">
                                                <b>&nbsp; {{item.name}}&nbsp;</b>
                                            </span>
                                    <v-chip style="font-family: Graphik-Bold;" color="black" class="white--text">
                                        <span class="speaker-only-company-adjust">{{item.company}}</span>
                                    </v-chip>
                                </v-card-text>
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
                                <span :class="`event-time ${item.tcolor}--text`" v-text="item.time"></span>
                            </template>
                            <v-card :color="item.color" dark style="font-family: Graphik-Regular;">
                                <v-card-text class="text-left white--text event-title mb-n1">
                                    <div class="hidden-sm-and-up text-right" style="font-family: Graphik-Bold; font-size: 21px;">
                                        {{item.time}}
                                    </div>
                                    <div>
                                        <b>{{item.title}}</b>
                                    </div>
                                </v-card-text>
                                <v-card-text v-if="item.type === 'panel'" class="white text-left text--primary event-text">
                                    <div class="mb-4">{{item.description}}</div>
                                    <template v-for="(speaker, j) in item.speakers">
                                        <div :key="j" class="text-left mb-3">
                                            <v-avatar size="48px">
                                                <img :src="speaker.img">
                                            </v-avatar>
                                            <span class="speaker-name-font-adjust">
                                                <b>&nbsp; {{speaker.name}}&nbsp;</b>
                                            </span>
                                            <v-chip style="font-family: Graphik-Bold;" color="blue darken-3" class="white--text">
                                                <span class="speaker-company-adjust">{{speaker.company}}</span>
                                            </v-chip>
                                        </div>
                                    </template>
                                </v-card-text>
                                <v-card-text v-if="item.type === 'speaker'" class="white text-left text--primary event-text">
                                    <v-avatar size="100px">
                                        <img :src="item.img">
                                    </v-avatar>
                                    <span class="speaker-only-name-font-adjust">
                                                <b>&nbsp; {{item.name}}&nbsp;</b>
                                            </span>
                                    <v-chip style="font-family: Graphik-Bold;" color="black" class="white--text">
                                        <span class="speaker-only-company-adjust">{{item.company}}</span>
                                    </v-chip>
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-container>
            </v-tab-item>
        </v-tabs>
    </v-layout>
</template>
<!--<template>-->
    <!--&lt;!&ndash;<v-bottom-sheet v-model="sheet" inset eager>&ndash;&gt;-->
    <!--&lt;!&ndash;<template v-slot:activator="{ on }">&ndash;&gt;-->
    <!--<v-layout column wrap class="my-12" align-center>-->
        <!--<div class="text-center">-->
            <!--<h2 class="mb-8 mt-6 dark indigo&#45;&#45;text" style="font-family: Graphik-Bold; font-size: 34px"><b>Agenda</b></h2>-->
        <!--</div>-->
        <!--<div class="text-center" justify="center" style="top: 50%">-->
            <!--<h2 class="dark black&#45;&#45;text" style="font-family: Graphik-Bold; font-size: 48px"><b>Coming Soon!</b></h2>-->
        <!--</div>-->
    <!--</v-layout>-->
<!--</template>-->

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
            font-size: 17px;
        }

        .event-text {
            font-size: 16px;
            font-weight: bold;
        }

        .speaker-name-font-adjust {
            font-size: 10px;
        }

        .speaker-only-name-font-adjust {
            font-size: 15px;
        }

        .speaker-company-adjust {
            font-size: 8px;
        }

        .speaker-only-company-adjust {
            font-size: 14px;
            margin-top: 0%;
        }
    }

    @media only screen and (min-width: 960px) {
        .event-title {
            font-size: 22px;
            line-height: 1.2;
        }

        .event-text {
            font-size: 20px;
            font-weight: bold;
        }

        .speaker-name-font-adjust {
            font-size: 18px;
        }

        .speaker-only-name-font-adjust {
            font-size: 22px;
        }

        .speaker-company-adjust {
            font-size: 14px;
        }

        .speaker-only-company-adjust {
            font-size: 18px;
            margin-bottom: 1%;
        }
    }

    .item pre {
        white-space: pre-wrap;
        word-wrap: break-word;
        font-family: inherit;
    }

    .border-adjust {
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    }

    .just-rounding {
        border-radius: 50%;
    }

</style>

<script>
    export default {
        name: "CurrentEvent",
        data: () => ({
            sheet: false,
            items_day1: [
                {
                    type: '',
                    color: "indigo",
                    tcolor: 'indigo',
                    icon: "mdi-laptop",
                    time: "09:00",
                    title: "Registration",
                    description: ''
                },
                {
                    type: '',
                    color: "indigo",
                    tcolor: 'indigo',
                    icon: "mdi-microphone",
                    time: "09:45",
                    title: "Opening Address",
                    description: ''
                },
                {
                    type: '',
                    color: "indigo",
                    tcolor: 'indigo',
                    icon: "mdi-microphone",
                    time: "10:00",
                    title: "Minster Speech",
                    description: ''

                },
                {
                    type: 'speaker',
                    color: "black",
                    tcolor: 'black',
                    icon: "mdi-microphone-variant",
                    time: "10:30",
                    title: "Sponsor Opening Speech",
                    description: '',
                    img:require('../assets/speakers2020/albert.jpg'),
                    name: 'Albert Lucius',
                    company: 'OVO'
                },
                {
                    type: 'panel',
                    color: "blue darken-3",
                    tcolor: 'blue',
                    icon: "mdi-account-group",
                    time: "11:00",
                    title: "Building a Startup Dream Team",
                    description: 'Panel Discussion by',
                    speakers: [
                        {
                            img:require('../assets/speakers2020/samantha.jpg'),
                            name: 'Samantha Soh',
                            company: 'ShopBack'
                        },
                        {
                            img:require('../assets/speakers2020/oliver.png'),
                            name: 'Oliver Tan',
                            company: 'Visenze'
                        }

                    ]
                },
                {
                    type: '',
                    color: "indigo",
                    tcolor: 'indigo',
                    icon: "mdi-food",
                    time: "11:50",
                    title: "Lunch",
                    description: ''
                },
                {
                    type: 'panel',
                    color: "blue darken-3",
                    tcolor: 'blue',
                    icon: "mdi-account-group",
                    time: "13:20",
                    title: "Social Entrepreneurship",
                    description: 'Panel Discussion by',
                    speakers: [
                        {
                            img:require('../assets/speakers2020/rayner.jpg'),
                            name: 'Rayner Loi',
                            company: 'Good for Food'
                        },
                        {
                            img:require('../assets/speakers2020/Suen.jpg'),
                            name: 'Sing-Suen Soon',
                            company: 'Sonder Social'
                        },
                        {
                            img:require('../assets/speakers2020/julian.png'),
                            name: 'Julian Koo',
                            company: 'Jaga Me'
                        }
                    ]
                },
                {
                    type: '',
                    color: "black",
                    tcolor: 'black',
                    icon: "mdi-microphone-variant",
                    time: "14:10",
                    title: "Speaker Session 2 (TBC)",
                    description: ' ',
                    img:require('../assets/speakers2020/rayner.jpg'),
                    name: 'Rayner Loi',
                    company: 'Good for Food'
                },
                {
                    type: 'panel',
                    color: "blue darken-3",
                    tcolor: 'blue',
                    icon: "mdi-account-group",
                    time: "14:40",
                    title: "Startup Funding 101",
                    description: 'Panel Discussion by',
                    speakers: [
                        {
                            img:require('../assets/speakers2020/jerrytso.png'),
                            name: 'Jerry Tso',
                            company: 'PayPal'
                        },
                        {
                            img:require('../assets/speakers2020/piyush.jpg'),
                            name: 'Piyush Gupta',
                            company: 'Sequoia Capital'
                        },
                        {
                            img:require('../assets/speakers2020/vishal.jpeg'),
                            name: 'Vishal Harnal',
                            company: '500 Startups'
                        },
                        {
                            img:require('../assets/speakers2020/jeffrey.jpg'),
                            name: 'Jeffrey Paine',
                            company: 'Golden Gate Ventures'
                        }
                    ]
                },
                {
                    color: "indigo",
                    tcolor: 'indigo',
                    icon: "mdi-coffee",
                    time: "15:30",
                    title: "Break",
                    description: ''
                },
                {
                    type: 'speaker',
                    color: "black",
                    tcolor: 'black',
                    icon: "mdi-microphone-variant",
                    time: "15:45",
                    title: "Speaker Session 3",
                    description: '',
                    img:require('../assets/speakers2020/joel.png'),
                    name: 'Joel Bar-El',
                    company: 'Trax'
                },
                {
                    type: 'panel',
                    color: "blue darken-3",
                    tcolor: 'blue',
                    icon: "mdi-account-group",
                    time: "16:15",
                    title: "Redefining Fintech Revolution",
                    description: 'Panel Discussion by',
                    speakers: [
                        {
                            img:require('../assets/speakers2020/prajit_nanu.png'),
                            name: 'Prajit Nanu',
                            company: 'NIUM'

                        },
                        {
                            img:require('../assets/speakers2019/Kelvin_Teo.png'),
                            name: 'Kelvin Teo',
                            company: 'Funding Societies'
                        },
                        {
                            img:require('../assets/speakers2020/kelvin_lam.jpg'),
                            name: 'Kelvin Lam',
                            company: 'YouTrip'
                        },
                        {
                            img:require('../assets/speakers2020/michele.jpg'),
                            name: 'Michele Ferrario',
                            company: 'StashAway'
                        }
                    ]
                },
                {
                    type: '',
                    color: "indigo",
                    tcolor: 'indigo',
                    icon: "",
                    time: "17:05",
                    title: "End of Day 1",
                    description: ''
                },
            ],
            items_day2: [
                {
                    type: '',
                    color: "indigo",
                    tcolor: 'indigo',
                    icon: "",
                    time: "09:30",
                    title: "Start of Day 2",
                    description: ''
                },
                {
                    type: 'speaker',
                    color: "black",
                    tcolor: 'black',
                    icon: "mdi-microphone-variant",
                    time: "10:00",
                    title: "Speaker Session 4",
                    description: '',
                    img:require('../assets/speakers2020/lcl.jpg'),
                    name: 'Choong Luen Lien',
                    company: 'GOJEK'
                },
                {
                    type: 'panel',
                    color: "blue darken-3",
                    tcolor: 'blue',
                    icon: "mdi-account-group",
                    time: "10:30",
                    title: "Breaking the Stereotype : Women in Entrepreneurship",
                    description: 'Panel Discussion by',
                    speakers: [
                        {
                            img:require('../assets/speakers2020/yang.png'),
                            name: 'Virginia Yang',
                            company: 'Facebook'

                        },
                        {
                            img:require('../assets/speakers2020/sun.png'),
                            name: 'Pocket Sun',
                            company: 'SoGal Ventures'
                        },
                        {
                            img:require('../assets/speakers2020/roshni.png'),
                            name: 'Roshni Mahtani',
                            company: 'theAsianparent'
                        }
                    ]
                },
                {
                    type: "panel",
                    color: "blue darken-3",
                    tcolor: "blue",
                    icon: "mdi-account-group",
                    time: "11:20",
                    title: "Future of eCommerce & Globalisation",
                    description: 'Panel Discussion by',
                    speakers: [
                        {
                            img:require('../assets/speakers2020/billy.png'),
                            name: 'Billy Naveed',
                            company: 'Zilingo'
                        },
                        {
                            img:require('../assets/speakers2020/sam_too.jpg'),
                            name: 'Sam Too',
                            company: 'Qoo10'
                        },
                        {
                            img:require('../assets/speakers2020/arne.png'),
                            name: 'Dr. Arne Jeroschewski',
                            company: 'Parcel Perform'

                        }
                    ]
                },
                {
                    type: '',
                    color: "indigo",
                    tcolor: 'indigo',
                    icon: "mdi-food",
                    time: "12:10",
                    title: "Lunch",
                    description: ''
                },
                {
                    type: 'panel',
                    color: "blue darken-3",
                    tcolor: 'blue',
                    icon: "mdi-account-group",
                    time: "13:25",
                    title: "Growth Hacking Strategies for Start-ups",
                    description: 'Panel Discussion by',
                    speakers: [
                        {
                            img:require('../assets/speakers2020/Manisha.jpg'),
                            name: 'Manisha Seewal',
                            company: 'Carro'
                        },
                        {
                            img:require('../assets/speakers2020/Wai Teng.jpg'),
                            name: 'Wai Teng Yong',
                            company: 'Insider'
                        }

                    ]
                },
                {
                    type: '',
                    color: "black",
                    tcolor: 'black',
                    icon: "mdi-microphone-variant",
                    time: "14:15",
                    title: "Speaking Session 5 (TBC)",
                    description: ''
                },
                {
                    type: '',
                    color: "blue darken-3",
                    tcolor: 'blue',
                    icon: "mdi-account-group",
                    time: "14:50",
                    title: "Student Entrepreneurs, Youth & Change (TBC)",
                    description: 'Panel Discussion 8',
                    speakers: [
                        {
                            img: '',
                            name: '',
                            company: 'TBC'
                        }
                    ]
                },
                {
                    type: '',
                    color: "indigo",
                    tcolor: 'indigo',
                    icon: "mdi-coffee",
                    time: "15:20",
                    title: "Break",
                    description: ''
                },
                {
                    type: '',
                    color: "indigo",
                    tcolor: 'indigo',
                    icon: "mdi-stadium-variant",
                    time: "15:40",
                    title: "UNICON Arena",
                    description: ''
                },
                {
                    type: '',
                    color: "indigo",
                    tcolor: 'indigo',
                    icon: "mdi-trophy",
                    time: "17:00",
                    title: "Prize Awards",
                    description: ''
                },
                {
                    type: '',
                    color: "indigo",
                    tcolor: 'indigo',
                    icon: "",
                    time: "17:15",
                    title: "End of UNICON2020",
                    description: ''
                },
            ]
        })
    };
</script>