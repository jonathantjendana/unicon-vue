<template>
    <v-layout column wrap class="my-12" align-center>
        <div class="text-center">
            <h2 class="mb-8 mt-6 dark indigo--text" style="font-family: Graphik-Bold; font-size: 34px"><b>UNICON Speakers</b></h2>
        </div>
        <v-tabs class="mb-10" background-color="transparent" color="blue" centered>
            <v-tab>
                <h2 class="headline text--blue"><b>2020</b></h2>
            </v-tab>
            <v-tab>
                <h2 class="headline text--black"><b>2019</b></h2>
            </v-tab>
            <v-tab>
                <h2 class="headline text--black"><b>2018</b></h2>
            </v-tab>
            <v-tab-item eager>
                <v-container>
                    <v-row class="fill-height" align="center" justify="center">
                        <template v-for="(item, i) in items_2020">
                            <v-col class="px-7 ml-n2 mr-n4" :key="i" cols="6" sm="3" xl="2">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card class="mx-auto" max-width="100%">
                                        <v-img class="white--text align-end text-wrap" :src="item.img"
                                               height="100%" eager>
                                            <v-card-text class="layout text-left">
                                                <div class="mb-n1 ml-n2 font-name--adjust text-wrap"><b>{{ item.name }}</b></div>
                                            </v-card-text>
                                        </v-img>
                                        <v-expand-transition>
                                            <div v-if="hover"
                                                 class="transition-fast-in-fast-out grey darken-3 headline v-card--reveal white--text text-left align-end"
                                                 style="height: 100%;">
                                                <div class="mt-3 ml-2 font-title-and-depart--adjust"> {{ item.title }}</div>
                                                <div class="ml-2 font-title-and-depart--adjust"><b>{{ item.department }}</b></div>
                                                <v-btn class="ml-2 mt-2" :href="item.linkedin" target="_blank" dark icon>
                                                    <v-icon size="40px">fab fa-linkedin</v-icon>
                                                </v-btn>
                                            </div>
                                        </v-expand-transition>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </template>
                    </v-row>
                </v-container>
            </v-tab-item>
            <v-tab-item eager>
                <v-container>
                    <v-row class="fill-height" align="center" justify="center">
                        <v-col class="px-7 ml-n2 mr-n4" cols="6" sm="3" xl="2">
                            <v-hover v-slot:default="{ hover }">
                                <v-card class="mx-auto">
                                    <v-img class="white--text align-end text-wrap" :src="require('../assets/speakers2019/Chee_Hong_Tat.png')" eager>
                                        <v-card-text class="layout text-left">
                                            <div class="ml-n2 mb-n1 text-wrap font-name--adjust"><b> Chee Hong Tat</b></div>
                                        </v-card-text>
                                    </v-img>
                                    <v-expand-transition>
                                        <div v-if="hover"
                                             class="transition-fast-in-fast-out grey darken-3 headline v-card--reveal white--text text-left align-end"
                                             style="height: 100%;">
                                            <div class="mt-3 ml-2 font-title-and-depart--adjust">Senior Minister of State</div>
                                            <div class="ml-2 font-title-and-depart--adjust"><b>MTI & MOE</b></div>
                                        </div>
                                    </v-expand-transition>
                                </v-card>
                            </v-hover>
                        </v-col>
                        <template v-for="(item, i) in items_2019">
                            <v-col class="px-7 ml-n2 mr-n4" :key="i" cols="6" sm="3" xl="2">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card class="mx-auto" max-width="100%">
                                        <v-img class="white--text align-end text-wrap" :src="item.img"
                                               height="100%" eager>
                                            <v-card-text class="layout text-left">
                                                <div class="mb-n1 ml-n2 font-name--adjust text-wrap"><b>{{ item.name }}</b></div>
                                            </v-card-text>
                                        </v-img>
                                        <v-expand-transition>
                                            <div v-if="hover"
                                                 class="transition-fast-in-fast-out grey darken-3 headline v-card--reveal white--text text-left align-end"
                                                 style="height: 100%;">
                                                <div class="mt-3 ml-2 font-title-and-depart--adjust"> {{ item.title }}</div>
                                                <div class="ml-2 font-title-and-depart--adjust"><b>{{ item.department }}</b></div>
                                                <v-btn class="ml-2 mt-2" :href="item.linkedin" target="_blank" dark icon>
                                                    <v-icon size="40px">fab fa-linkedin</v-icon>
                                                </v-btn>
                                            </div>
                                        </v-expand-transition>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </template>
                        <v-col class="px-7 ml-n2 mr-n4" cols="6" sm="3" xl="2">
                            <v-hover v-slot:default="{ hover }">
                                <v-card class="mx-auto">
                                    <v-img class="white--text align-end text-wrap" :src="require('../assets/speakers2019/zp_lee.png')" eager>
                                        <v-card-text class="layout text-left">
                                            <div class="mb-n1 ml-n2 font-name--adjust text-wrap"><b>ZP Lee</b></div>
                                        </v-card-text>
                                    </v-img>
                                    <v-expand-transition>
                                        <div v-if="hover"
                                             class="transition-fast-in-fast-out grey darken-3 headline v-card--reveal white--text text-left align-end"
                                             style="height: 100%;">
                                            <div class="mt-3 ml-2 font-title-and-depart--adjust">CEO & Founder</div>
                                            <div class="ml-2 font-title-and-depart--adjust"><b>UpCode Academy</b></div>
                                        </div>
                                    </v-expand-transition>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-container>
            </v-tab-item>
            <v-tab-item eager>
                <v-container>
                    <v-row class="fill-height" align="center" justify="center">
                        <v-col class="px-7 ml-n2 mr-n4" cols="6" sm="3" xl="2">
                            <v-hover v-slot:default="{ hover }">
                                <v-card class="mx-auto">
                                    <v-img class="white--text align-end text-wrap" :src="require('../assets/speakers2018/janil.png')" eager>
                                        <v-card-text class="layout text-left">
                                            <div class="mb-n1 ml-n2 font-name--adjust text-wrap"><b>Dr Janil Puthucheary</b></div>
                                        </v-card-text>
                                    </v-img>
                                    <v-expand-transition>
                                        <div v-if="hover"
                                             class="transition-fast-in-fast-out grey darken-3 headline v-card--reveal white--text text-left align-end"
                                             style="height: 100%;">
                                            <div class="mt-3 ml-2 font-title-and-depart--adjust">Senior Minister of State</div>
                                            <div class="ml-2 font-title-and-depart--adjust"><b>MCI & MOE</b></div>
                                        </div>
                                    </v-expand-transition>
                                </v-card>
                            </v-hover>
                        </v-col>
                        <template v-for="(item, i) in items_2018">
                            <v-col class="px-7 ml-n2 mr-n4" :key="i" cols="6" sm="3" xl="2">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card class="mx-auto" max-width="100%">
                                        <v-img class="white--text align-end text-wrap" :src="item.img"
                                               height="100%" eager>
                                            <v-card-text class="layout text-left">
                                                <div class="mb-n1 ml-n2 font-name--adjust text-wrap"><b>{{ item.name }}</b></div>
                                            </v-card-text>
                                        </v-img>
                                        <v-expand-transition>
                                            <div v-if="hover"
                                                 class="transition-fast-in-fast-out grey darken-3 headline v-card--reveal white--text text-left align-end"
                                                 style="height: 100%;">
                                                <div class="mt-3 ml-2 font-title-and-depart--adjust"> {{ item.title }} </div>
                                                <div class="ml-2 font-title-and-depart--adjust"><b>{{ item.department }}</b></div>
                                                <v-btn class="ml-2 mt-2" :href="item.linkedin" target="_blank" dark icon>
                                                    <v-icon size="40px">fab fa-linkedin</v-icon>
                                                </v-btn>
                                            </div>
                                        </v-expand-transition>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </template>
                    </v-row>
                </v-container>
            </v-tab-item>
        </v-tabs>
    </v-layout>
</template>

<script>
    export default {
        name: "Speakers",
        data: () => ({
            items_2020: [
                {
                    img:require('../assets/speakers2020/arne.png'),
                    name: 'Dr. Arne Jeroschewski',
                    title: 'Founder & CEO',
                    department: 'Parcel Perform',
                    linkedin: 'https://www.linkedin.com/in/arnejero/'
                },
                {
                    img:require('../assets/speakers2020/billy.png'),
                    name: 'Billy Naveed',
                    title: 'Head of Strategy',
                    department: 'Zilingo',
                    linkedin: 'https://www.linkedin.com/in/billynaveed/'
                },
                {
                    img:require('../assets/speakers2020/julian.png'),
                    name: 'Julian Koo',
                    title: 'Co-Founder & CEO',
                    department: 'Jaga Me',
                    linkedin: 'https://www.linkedin.com/in/juliankoo/'
                },
                {
                    img:require('../assets/speakers2020/khorqianyi.jpg'),
                    name: 'Khor Qianyi',
                    title: 'CEO',
                    department: 'Enactus SG',
                    linkedin: 'https://www.linkedin.com/in/khorqianyi/'
                },
                {
                    img:require('../assets/speakers2020/michele.jpg'),
                    name: 'Michele Ferrario',
                    title: 'Co-Founder & CEO',
                    department: 'StashAway',
                    linkedin: 'https://www.linkedin.com/in/michele-ferrario-a464211/'
                },
                {
                    img:require('../assets/speakers2020/rayner.jpg'),
                    name: 'Rayner Loi',
                    title: 'Co-Founder & CEO',
                    department: 'Good For Food',
                    linkedin: 'https://www.linkedin.com/in/raynerloi/'
                },
                {
                    img:require('../assets/speakers2020/roshni.png'),
                    name: 'Roshni Mahtani',
                    title: 'Founder & Group CEO ',
                    department: 'theAsianparent',
                    linkedin: 'https://www.linkedin.com/in/roshnimahtani/'
                },
                {
                    img:require('../assets/speakers2020/sun.png'),
                    name: 'Pocket Sun',
                    title: 'Co-Founder & Managing Partner',
                    department: 'SoGal Ventures',
                    linkedin: 'https://www.linkedin.com/in/pocketsun/'
                },
                {
                    img:require('../assets/speakers2020/vishal.jpeg'),
                    name: 'Vishal Harnal',
                    title: 'General Partner',
                    department: '500 Startups',
                    linkedin: 'https://www.linkedin.com/in/vishalharnal/'
                },
                {
                    img:require('../assets/speakers2020/yang.png'),
                    name: 'Virginia Yang',
                    title: 'Director of Developer Partnerships & Programs',
                    department: 'APAC, Facebook',
                    linkedin: 'https://www.linkedin.com/in/virginia-yang-05096a/'
                }
            ],

            items_2019: [
                {
                    img: require('../assets/speakers2019/Ajey_Gore.png'),
                    name: 'Ajey Gore',
                    title: 'Group CTO',
                    department: 'Go-Jek',
                    linkedin: 'https://www.linkedin.com/in/ajeygore/'
                },
                {
                    img: require('../assets/speakers2019/Aik_Phong_Ng.png'),
                    name: 'Ng Aik Phong',
                    title: 'Managing Director',
                    department: 'Fave',
                    linkedin: 'https://www.linkedin.com/in/aik-phong-ng-8b3560/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2019/Arrif_Ziaudeen.png'),
                    name: 'Arrif Ziaudeen',
                    title: 'CEO & Founder',
                    department: 'Chope',
                    linkedin: 'https://www.linkedin.com/in/arrif-ziaudeen-a72449a/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2019/Shanru_Lai.png'),
                    name: 'Shanru Lai',
                    title: 'Co-Founder',
                    department: 'Shopback',
                    linkedin: 'https://www.linkedin.com/in/shanru-lai-b671a268/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2019/Jeffery_Chua.png'),
                    name: 'Jeffery Chua',
                    title: 'Associate',
                    department: 'Golden Gate Ventures',
                    linkedin: 'https://www.linkedin.com/in/jeffrey-chua-029206107/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2019/Teck_Yong_Lim.png'),
                    name: 'Lim Teck Yong',
                    title: 'Head of Operations',
                    department: 'Shopee',
                    linkedin: 'https://www.linkedin.com/in/teck-yong-lim-62141032/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2019/sakhee_dheer.png'),
                    name: 'Sakhee Dheer',
                    title: 'Head of Digital, Global Business Marketing',
                    department: 'Facebook',
                    linkedin: 'https://www.linkedin.com/in/sakhee/'
                },
                {
                    img: require('../assets/speakers2019/Hyungbin_Danny_kim.png'),
                    name: 'Danny Kim',
                    title: 'APAC Central Strategy Planning Principal',
                    department: 'Google',
                    linkedin: 'https://www.linkedin.com/in/hyungbinkim/'
                },
                {
                    img: require('../assets/speakers2019/Kelvin_Chua.png'),
                    name: 'Kelvin Chua',
                    title: 'Head of Product R&D and Infrastructure',
                    department: 'Circles.Life',
                    linkedin: 'https://www.linkedin.com/in/chuakelvin/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2019/Sagar_Sarbhai.png'),
                    name: 'Sagar Sarbhai',
                    title: 'Head of Government & Regulatory Affairs',
                    department: 'Ripple',
                    linkedin: 'https://www.linkedin.com/in/sagarsarbhai/'
                },
                {
                    img: require('../assets/speakers2019/Jupe_Tan.png'),
                    name: 'Jupe Tan',
                    title: 'Managing Partner Asia Pacific',
                    department: 'Plug and Play',
                    linkedin: 'https://www.linkedin.com/in/jupetan/'
                },
                {
                    img: require('../assets/speakers2019/Yan_Phun.png'),
                    name: 'Yan Phun',
                    title: 'COO',
                    department: '99.co',
                    linkedin: 'https://www.linkedin.com/in/yanphun/'
                },
                {
                    img: require('../assets/speakers2019/David_Fowler.png'),
                    name: 'Yan Phun',
                    title: 'Director',
                    department: 'PwC Singapore\'s Venture Hub',
                    linkedin: 'https://www.linkedin.com/in/david-fowler-b8b32268/'
                },
                {
                    img: require('../assets/speakers2019/Kelvin_Teo.png'),
                    name: 'Kelvin Teo',
                    title: 'CEO & Co-Founder',
                    department: 'Funding Societies',
                    linkedin: 'https://www.linkedin.com/in/tkelvin/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2019/mohan_belani.png'),
                    name: 'Mohan Belani',
                    title: 'CEO & Co-Founder',
                    department: 'e27',
                    linkedin: 'https://www.linkedin.com/in/mohanbelani/'
                },
                {
                    img: require('../assets/speakers2019/doug_parker.png'),
                    name: 'Doug Parker\n',
                    title: 'COO',
                    department: 'nuTonomy',
                    linkedin: 'https://www.linkedin.com/in/doug-parker-949ab81/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2019/sarveen_ chester.png'),
                    name: 'Sarveen Chester',
                    title: 'Growth Launcher',
                    department: 'Revolut',
                    linkedin: 'https://www.linkedin.com/in/sarveenchester/'
                },
                {
                    img: require('../assets/speakers2019/tj_tham.png'),
                    name: 'Tj Tham',
                    title: 'CEO',
                    department: 'GrabWheels',
                    linkedin: 'https://www.linkedin.com/in/tj-tham-88987448/?originalSubdomain=id'
                }
            ],
            items_2018: [
                {
                    img: require('../assets/speakers2018/chatri.png'),
                    name: 'Chatri Sityodtong',
                    title: 'Founder, CEO',
                    department: 'ONE Championship',
                    linkedin: 'https://www.linkedin.com/in/yodchatri/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2018/oliver.png'),
                    name: 'Oliver Tan',
                    title: 'Co-Founder, CEO',
                    department: 'Visenze',
                    linkedin: 'https://www.linkedin.com/in/oliver-tan-277b0127/'
                },
                {
                    img: require('../assets/speakers2018/karl.png'),
                    name: 'Karl Mak',
                    title: 'Co-Founder, CEO',
                    department: 'Hepmil (SGAG & MGAG)',
                    linkedin: 'https://www.linkedin.com/in/karlmaks/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2018/rachel.png'),
                    name: 'Rachel Lim',
                    title: 'Co-Founder, CEO',
                    department: 'Love, Bonito',
                    linkedin: 'https://www.linkedin.com/in/rachel-lim-25b3b262/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2018/dione.png'),
                    name: 'Dione Song',
                    title: 'Chief Commercial Officer',
                    department: 'Love, Bonito',
                    linkedin: 'https://www.linkedin.com/in/dionesong/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2018/ozi.png'),
                    name: 'Ozi Amanat',
                    title: 'Founding Partner',
                    department: 'K2 Global VC',
                    linkedin: 'https://www.linkedin.com/in/oziamanat/'
                },
                {
                    img: require('../assets/speakers2018/james.png'),
                    name: 'James Tan',
                    title: 'Managing Partner',
                    department: 'Quest Ventures',
                    linkedin: 'https://www.linkedin.com/in/sgjames/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2018/vinnie.png'),
                    name: 'Vinnie Lauria',
                    title: 'Founding Partner',
                    department: 'Golden Gate Ventures',
                    linkedin: 'https://www.linkedin.com/in/vincentlauria/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2018/saemin.png'),
                    name: 'Saemin Ahn',
                    title: 'Managing Partner',
                    department: 'Rakuten Ventures',
                    linkedin: 'https://www.linkedin.com/in/saeminahn/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2018/albert.png'),
                    name: 'Albert Shyy',
                    title: 'Principal',
                    department: 'Burda Principal Investments',
                    linkedin: 'https://www.linkedin.com/in/albertshyy/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2018/praveen.png'),
                    name: 'Praveen Velu',
                    title: 'Co-founder, CEO',
                    department: 'Evie.ai',
                    linkedin: 'https://www.linkedin.com/in/praveenvelu/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2018/pankaj.png'),
                    name: 'Pankaj khushani',
                    title: 'Head of Analytics & Platform Partnership SEA',
                    department: 'Google',
                    linkedin: 'https://www.linkedin.com/in/pkhushani/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2018/david.png'),
                    name: 'David Fallarme',
                    title: 'Senior Marketing Manager',
                    department: 'Hubspot',
                    linkedin: 'https://www.linkedin.com/in/dfallarme/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2018/abhil.png'),
                    name: 'Abhilash Murthy',
                    title: 'Founder,CEO',
                    department: 'Bus Uncle',
                    linkedin: 'https://www.linkedin.com/in/abhilashmurthy/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2018/kenneth.png'),
                    name: 'Kenneth Lou',
                    title: 'Co-founder, CEO',
                    department: 'Seedly',
                    linkedin: 'https://www.linkedin.com/in/kenneth-lou/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2018/shaun.png'),
                    name: 'Shaun Djie',
                    title: 'Co-founder',
                    department: 'DigixGlobal',
                    linkedin: 'https://www.linkedin.com/in/shaundjie/'
                },
                {
                    img: require('../assets/speakers2018/bjorn.png'),
                    name: 'Bjorn Lee',
                    title: 'Founder & CEO',
                    department: 'MindFi',
                    linkedin: 'https://www.linkedin.com/in/bjornlee/?originalSubdomain=sg'
                },
                {
                    img: require('../assets/speakers2018/jacopo.png'),
                    name: 'Jacopo Daeli',
                    title: 'Senior Software Engineer',
                    department: 'GoDaddy',
                    linkedin: 'https://www.linkedin.com/in/jacopodaeli/'
                },
                {
                    img: require('../assets/speakers2018/anna.png'),
                    name: 'Anna Rehermann',
                    title: 'Founder',
                    department: 'Growth Hacking Asia',
                    linkedin: 'https://www.linkedin.com/in/anna-rehermann-a1599529/'
                }
            ]
        })
    }
</script>

<style scoped>
    @media only screen and (min-width: 240px) {
        .font-name--adjust {
            font-size: 18px;
        }

        .font-title-and-depart--adjust {
            font-size: 16px;
            line-height: 1;
        }
    }

    @media only screen and (min-width: 960px) {
        .font-name--adjust {
            font-size: 23px;
        }

        .font-title-and-depart--adjust {
            line-height: 1.5;
            font-size: 20px;
            margin-bottom: 0px;
        }
    }

    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: 0.8;
        position: absolute;
        width: 100%;
    }
</style>