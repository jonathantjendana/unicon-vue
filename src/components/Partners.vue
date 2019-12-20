<template>
    <v-layout column wrap class="my-12" align-center>
        <div class="text-center">
            <h2 class="mb-8 mt-6 dark indigo--text" style="font-family: Graphik-Bold; font-size: 34px"><b>UNICON Partners</b></h2>
        </div>
        <v-tabs class="mb-10" background-color="transparent" color="blue" centered>
            <v-tab>
                <h2>Sponsors</h2>
            </v-tab>
            <v-tab>
                <h2>Universities</h2>
            </v-tab>
            <v-tab>
                <h2>Communities</h2>
            </v-tab>
            <v-tab-item background-color="transparent" eager>
                <v-container>
                    <v-row class="fill-height" align="center" justify="center">
                        <v-col class="px-7 ml-n2 mr-n4" :key="i" cols="6" sm="3" xl="2">
                            <a href="https://www.imda.gov.sg/" target="_blank">
                                <v-img class="mx-7" src="../assets/Sponsors/imda.jpg" eager>
                                </v-img>
                            </a>
                        </v-col>
                        <v-col class="px-7 ml-n2 mr-n4" :key="i" cols="6" sm="3" xl="2">
                            <v-img class="white--text align-end text-wrap mx-7" src="../assets/Sponsors/tesa.jpg"
                                   height="100%" eager>
                            </v-img>
                        </v-col>
                        <v-col class="px-7 ml-n2 mr-n4" :key="i" cols="6" sm="3" xl="2">
                            <a href="https://ace.org.sg/" target="_blank">
                                <v-img class="mx-7" src="../assets/Communities/ace.png" eager>
                                </v-img>
                            </a>
                        </v-col>
                    </v-row>
                </v-container>
            </v-tab-item>
            <v-tab-item eager>
                <v-container>
                    <v-row class="fill-height" align="center" justify="center">
                        <template v-for="(item, i) in university_img">
                            <v-col class="px-7 ml-n2 mr-n4" :key="i" cols="6" sm="3" xl="2">
                                <v-img class="white--text align-end text-wrap mx-7" :src="item.img"
                                       height="100%" eager>
                                </v-img>
                            </v-col>
                        </template>
                    </v-row>
                </v-container>
            </v-tab-item>
            <v-tab-item eager>
                <v-container>
                    <v-row class="fill-height" align="center" justify="center">
                        <template v-for="(item, i) in community_img">
                            <v-col class="px-7 ml-n2 mr-n4" :key="i" cols="6" sm="3" xl="2">
                                <a :href="item.link" target="_blank">
                                    <v-img class="white--text align-end text-wrap mx-7" :src="item.img"
                                           height="100%" eager>
                                    </v-img>
                                </a>
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
        name: "Partners",
        data: () => ({
            university_img: [
                {
                    img: require('../assets/universities/nus.png'),
                },
                {
                    img: require('../assets/universities/ntu.png'),
                },
                {
                    img: require('../assets/universities/SMU.png'),
                },
                {
                    img: require('../assets/universities/SUTD.png'),
                },
                {
                    img: require('../assets/universities/SIM.png'),
                },
                {
                    img: require('../assets/universities/sit.png'),
                },
                {
                    img: require('../assets/universities/Curtin.png'),
                },
                {
                    img: require('../assets/universities/university_sydney.png'),
                },
                {
                    img: require('../assets/universities/hkust.png'),
                },
                {
                    img: require('../assets/universities/UPD.png'),
                },
                {
                    img: require('../assets/universities/UTM.png'),
                },
                {
                    img: require('../assets/universities/kaist.png'),
                },
                {
                    img: require('../assets/universities/UB.png'),
                },
                {
                    img: require('../assets/universities/tsinghua.png'),
                },
                {
                    img: require('../assets/universities/peking.png'),
                },
                {
                    img: require('../assets/universities/seoul.png'),
                },
                {
                    img: require('../assets/universities/tokyo.png'),
                },
                {
                    img: require('../assets/universities/nucb.png'),
                },
                {
                    img: require('../assets/universities/RJC.jpg'),
                },
                {
                    img: require('../assets/universities/tp.png'),
                },
            ],
            community_img: [
                {
                    img: require('../assets/Communities/enterprise.png'),
                    link: 'https://enterprise.nus.edu.sg/'
                },
                {
                    img: require('../assets/Communities/innoway.png'),
                    link: 'http://en.z-innoway.com/pages/index.html'
                },
                {
                    img: require('../assets/Communities/sja.png'),
                    link: 'https://startupjobs.asia/'
                },
                {
                    img: require('../assets/Communities/geek.png'),
                    link: 'https://geekhunter.co/'
                },
                {
                    img: require('../assets/Communities/lvl3.png'),
                    link: 'https://l3.work/'
                },
                {
                    img: require('../assets/Communities/mox.png'),
                    link: 'https://www.themox.co/'
                },
                {
                    img: require('../assets/Communities/raise.png'),
                    link: 'https://www.raise.sg/'
                },
                {
                    img: require('../assets/Communities/thecompany.png'),
                    link: 'https://thecompany.jp/en/'
                },
                {
                    img: require('../assets/Communities/reactor.png'),
                    link: 'https://www.reactor.school/'
                },
                {
                    img: require('../assets/Communities/trive.png'),
                    link: 'https://www.trive.vc/'
                },
                {
                    img: require('../assets/Communities/tribe.png'),
                    link: 'https://tribeaccelerator.co/'
                },
                {
                    img: require('../assets/Communities/protege.jpg'),
                    link: 'https://protege.vc/'
                },
                {
                    img: require('../assets/Communities/tie.png'),
                    link: 'https://singapore.tie.org/'
                },
            ]
        })
    }
</script>

<style scoped>
    @media only screen and (min-width: 240px) {
        h2 {
            font-size: 14px;
            color: black;
        }
    }

    @media only screen and (min-width: 960px) {
        h2 {
            font-size: 23px;
            color: black;
        }
    }

</style>