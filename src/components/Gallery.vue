<template>
    <v-container fluid>
        <v-row align="center" justify="center" class="stats-header">
            <v-img class="my-5" src="../assets/unicon2019_logo.svg" contain :aspect-ratio="getAspectRatio"/>
        </v-row>
        <v-row class="mb-10">
            <v-col cols="12" sm="10" offset-sm="1">
                <v-card>
                    <v-container fluid>
                        <v-row>
                            <v-col v-for="(item, i) in photos" :key="i"
                                    class="d-flex child-flex"
                                    cols="12" sm="2" md="6" xl="3">
                                <v-card flat tile class="d-flex mt-n3">
                                    <v-img
                                            :src="item.img"
                                            :lazy-src="item.img"
                                            aspect-ratio="1.5"
                                            class="grey lighten-2"
                                    >
                                        <template v-slot:placeholder>
                                            <v-row
                                                    class="fill-height ma-0"
                                                    align="center"
                                                    justify="center"
                                            >
                                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>
                                </v-card>
                            </v-col>
                            <v-col class="d-flex child-flex" cols="12" sm="2" md="6" xl="3">
                                <v-card flat tile class="d-flex mt-n3">
                                    <v-img
                                            :src="require('../assets/gallery/15.jpg')"
                                            :lazy-src="require('../assets/gallery/15.jpg')"
                                            aspect-ratio="1.5"
                                            class="grey lighten-2"
                                    >
                                        <template v-slot:placeholder>
                                            <v-row
                                                    class="fill-height ma-0"
                                                    align="center"
                                                    justify="center"
                                            >
                                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>
                                </v-card>
                            </v-col>
                            <v-col class="d-flex child-flex" cols="12" sm="2" md="6" xl="3">
                                <v-card flat tile class="d-flex mt-n3">
                                    <v-img
                                            :src="require('../assets/gallery/16.jpg')"
                                            :lazy-src="require('../assets/gallery/16.jpg')"
                                            aspect-ratio="1.5"
                                            class="grey lighten-2"
                                    >
                                        <template v-slot:placeholder>
                                            <v-row
                                                    class="fill-height ma-0"
                                                    align="center"
                                                    justify="center"
                                            >
                                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Gallery",
        data: () => ({
            photos: [
                {
                    img:require('../assets/gallery/1.png')
                },
                {
                    img:require('../assets/gallery/2.png')
                },
                {
                    img:require('../assets/gallery/3.jpg')
                },
                {
                    img:require('../assets/gallery/4.jpg')
                },
                {
                    img:require('../assets/gallery/5.jpg')
                },
                {
                    img:require('../assets/gallery/6.jpg')
                },
                {
                    img:require('../assets/gallery/7.jpg')
                },
                {
                    img:require('../assets/gallery/8.jpg')
                },
                {
                    img:require('../assets/gallery/9.jpg')
                },
                {
                    img:require('../assets/gallery/10.jpg')
                },
                {
                    img:require('../assets/gallery/11.jpg')
                },
                {
                    img:require('../assets/gallery/12.jpg')
                },
                {
                    img:require('../assets/gallery/13.jpg')
                },
                {
                    img:require('../assets/gallery/14.jpg')
                }
            ]
        }),
        computed: {
            getAspectRatio: function () {
                if (this.$vuetify.breakpoint.name != "xs") {
                    return 10;
                } else {
                    return 5;
                }
            }
        },

    };
</script>

<style scoped>
</style>