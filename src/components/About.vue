<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="unicon-what mt-n3 py-9">
      <!-- <v-spacer></v-spacer> -->
      <v-col cols="12" md="6">
        <div>
          <span class="about font-weight-bold">About &nbsp;</span>
          <span class="unicon-headline">Unicon</span>
        </div>

        <v-row align="center" justify="center">
          <v-col cols="10" md="5">
            <div class="text-center">
              <v-hover v-slot:default="{ hover }" :value="value">
                <v-btn
                  x-large
                  class="mt-10 white--text"
                  :elevation="hover ? 12 : 2"
                  color="#283593"
                  href="https://drive.google.com/file/d/1mEfEjaRQDdPGyIjUHsT7ky7E6sDOX9-6/view?usp=sharing"
                  target="_blank"
                >
                  <span class="mt-n4">
                    <b>
                      <span class="unicon">UNICON</span> 2018 Recap
                    </b>
                  </span>
                </v-btn>
              </v-hover>
            </div>
          </v-col>

          <v-col cols="10" md="5">
            <div class="text-center recap2019Btn">
              <v-hover v-slot:default="{ hover }" :value="value">
                <v-btn
                  x-large
                  class="mt-10 white--text"
                  :elevation="hover ? 12 : 2"
                  color="#283593"
                  href="https://drive.google.com/file/d/1bpPwWax9BIdUUHRr59aqiF59y3M0C1gy/view?usp=sharing"
                  target="_blank"
                >
                  <span class="mt-n4">
                    <b>
                      <span class="unicon">UNICON</span> 2019 Recap
                    </b>
                  </span>
                </v-btn>
              </v-hover>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="5">
        <div class="subtitle-1 text-justify text-left mx-5" style="font-family: Graphik-Regular">
          In 2013, the first global entrepreneurship conference was launched in
          <br />National University of Singapore (NUS) with the goal of connecting student entrepreneurs all
          over the world to create a global network of innovators.
          <br />
          <br />Since then, we have connected thousands of students, partnered more than a dozen of
          universities, and helped to inspire students to solve
          <strong>real world problems</strong>.
        </div>
      </v-col>
      <v-spacer />
    </v-row>
    <br />
    <br />
    <v-row align="center" justify="center">
      <v-col class="image-box">
        <div class="venue-details">
          <v-img contain src="../assets/logo2.svg" aspect-ratio="4.5" />
          <br />
          <v-icon color="white" x-large>mdi-calendar</v-icon>&nbsp;
          22 - 23 February 2020
          <br />
          <span class="mt-5">
            <v-icon color="white" x-large>mdi-periscope</v-icon>&nbsp;NUS University Town, Singapore
          </span>
        </div>
      </v-col>
    </v-row>
    <!-- end of unicon 2020 -->

    <!-- start of unicon 2019 stats  -->
    <v-row align="center" justify="center" class="stats-header">
      <!--<span class="unicon-headline indigo&#45;&#45;text text&#45;&#45;darken-2 underline&#45;&#45;magical">unicon <span class="text&#45;&#45;primary" style="font-family: Graphik-Bold; font-size: 64px">2019</span></span>-->
      <v-img
        class="mt-12"
        src="../assets/unicon2019_logo.svg"
        contain
        :aspect-ratio="getAspectRatio"
      />
    </v-row>

    <v-row class="mt-12 stats" align="center" justify="center">
      <v-spacer />
      <v-col cols="12" md="3">
        <div>
          <span class="statsNo font-weight-bold">20</span>
          <br />
          <span class="stats-title">Speakers</span>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div>
          <span class="statsNo font-weight-bold">500+</span>
          <br />
          <span class="stats-title mt-2">Tickets Sold</span>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div>
          <span class="statsNo font-weight-bold">19+</span>
          <br />
          <span class="stats-title">Partner Universities</span>
        </div>
      </v-col>
      <v-spacer />
    </v-row>

    <v-row align="center" justify="center" class="speakers">
      <!-- <v-col cols="10"> -->
      <v-btn
        class="ma-2 no-text-transform"
        x-large
        outlined
        color="indigo"
        href="https://www.eventbrite.sg/e/unicon2020-tickets-74661820515?aff=ebdssbeac"
        target="_blank"
        max-width="80%"
      >
        <div class="getTixBtn" style="white-space: normal; font-family: Graphik-Bold;">
          <span>Get your UNICON 2020</span>
          <span>tickets now!</span>
        </div>
      </v-btn>
      <!-- </v-col> -->
    </v-row>
    <!-- end of unicon 2019 stats  -->
    <v-row align="center" class="my-12" justify="center">
      <div class="text-center">
        <h2 class="mb-8 mt-6 dark indigo--text" style="font-family: Graphik-Bold; font-size: 34px">
          <b>Our Partners</b>
        </h2>
      </div>
      <v-tabs class="mb-10" background-color="transparent" color="blue" centered fixed-tabs>
        <v-tab>
          <h2 class="partner-h2">Sponsors</h2>
        </v-tab>
        <v-tab>
          <h2 class="partner-h2">Universities</h2>
        </v-tab>
        <v-tab>
          <h2 class="partner-h2">Communities</h2>
        </v-tab>
        <v-tab-item background-color="transparent" eager>
          <v-container>
            <v-row class="fill-height" align="center" justify="center">
              <v-col class="px-7 ml-n2 mr-n4" :key="i" cols="6" sm="3" xl="2">
                <a href="https://www.imda.gov.sg/" target="_blank">
                  <v-img class="mx-7" src="../assets/Sponsors/imda.jpg" eager></v-img>
                </a>
              </v-col>
              <v-col class="px-7 ml-n2 mr-n4" :key="i" cols="6" sm="3" xl="2">
                <v-img
                  class="white--text align-end text-wrap mx-7"
                  src="../assets/Sponsors/tesa.jpg"
                  height="100%"
                  eager
                ></v-img>
              </v-col>
              <v-col class="px-7 ml-n2 mr-n4" :key="i" cols="6" sm="3" xl="2">
                <a href="https://ace.org.sg/" target="_blank">
                  <v-img class="mx-7" src="../assets/Communities/ace.png" eager></v-img>
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
                  <v-img
                    class="white--text align-end text-wrap mx-7"
                    :src="item.img"
                    height="100%"
                    eager
                  ></v-img>
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
                    <v-img
                      class="white--text align-end text-wrap mx-7"
                      :src="item.img"
                      height="100%"
                      eager
                    ></v-img>
                  </a>
                </v-col>
              </template>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",
  date: () => ({
    disabled: false,
    openDelay: "0",
    closeDelay: "0",
    value: false
  }),
  data: () => ({
    university_img: [
      {
        img: require("../assets/universities/nus.png")
      },
      {
        img: require("../assets/universities/ntu.png")
      },
      {
        img: require("../assets/universities/SMU.png")
      },
      {
        img: require("../assets/universities/SUTD.png")
      },
      {
        img: require("../assets/universities/SIM.png")
      },
      {
        img: require("../assets/universities/sit.png")
      },
      {
        img: require("../assets/universities/Curtin.png")
      },
      {
        img: require("../assets/universities/university_sydney.png")
      },
      {
        img: require("../assets/universities/hkust.png")
      },
      {
        img: require("../assets/universities/UPD.png")
      },
      {
        img: require("../assets/universities/UTM.png")
      },
      {
        img: require("../assets/universities/kaist.png")
      },
      {
        img: require("../assets/universities/UB.png")
      },
      {
        img: require("../assets/universities/tsinghua.png")
      },
      {
        img: require("../assets/universities/peking.png")
      },
      {
        img: require("../assets/universities/seoul.png")
      },
      {
        img: require("../assets/universities/tokyo.png")
      },
      {
        img: require("../assets/universities/nucb.png")
      },
      {
        img: require("../assets/universities/RJC.jpg")
      },
      {
        img: require("../assets/universities/tp.png")
      }
    ],
    community_img: [
      {
        img: require("../assets/Communities/enterprise.png"),
        link: "https://enterprise.nus.edu.sg/"
      },
      {
        img: require("../assets/Communities/innoway.png"),
        link: "http://en.z-innoway.com/pages/index.html"
      },
      {
        img: require("../assets/Communities/sja.png"),
        link: "https://startupjobs.asia/"
      },
      {
        img: require("../assets/Communities/geek.png"),
        link: "https://geekhunter.co/"
      },
      {
        img: require("../assets/Communities/lvl3.png"),
        link: "https://l3.work/"
      },
      {
        img: require("../assets/Communities/mox.png"),
        link: "https://www.themox.co/"
      },
      {
        img: require("../assets/Communities/raise.png"),
        link: "https://www.raise.sg/"
      },
      {
        img: require("../assets/Communities/thecompany.png"),
        link: "https://thecompany.jp/en/"
      },
      {
        img: require("../assets/Communities/reactor.png"),
        link: "https://www.reactor.school/"
      },
      {
        img: require("../assets/Communities/trive.png"),
        link: "https://www.trive.vc/"
      },
      {
        img: require("../assets/Communities/tribe.png"),
        link: "https://tribeaccelerator.co/"
      },
      {
        img: require("../assets/Communities/protege.jpg"),
        link: "https://protege.vc/"
      },
      {
        img: require("../assets/Communities/tie.png"),
        link: "https://singapore.tie.org/"
      }
    ]
  }),
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  },
  computed: {
    getAspectRatio: function() {
      if (this.$vuetify.breakpoint.name != "xs") {
        return 10;
      } else {
        return 5;
      }
    }
  }
};
</script>

<style scoped>
.unicon-what {
  /* background-color; */
  height: 90vh;
}

.unicon-headline {
  /* adapted from vuetify display-2*/
  font-family: "twitchy.tvregular";
  font-size: 3rem;
  margin-top: 3%;
  color: #303f9f;
}

.about {
  font-size: calc(45px + (26-14) * ((100vw - 300px) / (1600 -300)));
  line-height: calc(1em + (1.5-1.2) * ((100vw - 300px) / (1600 -300)));
  font-weight: 400;
  letter-spacing: -0.02625em  !important;
  font-family: "Graphik-Regular";
}

.statsNo {
  font-size: calc(60px + (26-14) * ((100vw - 300px) / (1600 -300)));
  line-height: calc(1.2em + (1.5-1.2) * ((100vw - 300px) / (1600 -300)));
  font-weight: 300;
  letter-spacing: -0.015625em !important;
  font-family: "Graphik-Regular";
}

.stats-title {
  font-size: calc(16px + (26-14) * ((100vw - 300px) / (1600 -300)));
  line-height: calc(2em + (1.5-1.2) * ((100vw - 300px) / (1600 -300)));
  font-weight: 400;
  letter-spacing: normal !important;
  font-family: "Roboto", sans-serif !important;
}

.remark {
  opacity: 0.6;
}

.venue {
  width: 100vw;
  position: relative;
  overflow: auto;
  background: grey;
}

.venue::before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.4;
  background: url("../assets/utown.jpeg") no-repeat center center;
  background-size: cover;
  -ms-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
}

.venue-details {
  /* font-size: 3rem !important; */
  font-size: calc(20px + (26-14) * ((100vw - 300px) / (1600 -300)));
  line-height: calc(1.3em + (1.5-1.2) * ((100vw - 300px) / (1600 -300)));
  font-weight: bolder;
  letter-spacing: normal !important;
  font-family: "Graphik-Bold";
}

hr {
  width: 0%;
  min-width: 15%;
  max-width: 100%;
  margin: 0 auto;
  border: none;
  border-bottom: 4px solid #666;
  position: relative;
  transition: box-shadow 200ms ease-in-out;
  box-shadow: 0px 0px 0px 0px #f9f9f9;
}

.speakers {
  height: 20vh;
  margin-bottom: 3%;
}

.image-box {
  /* Here's the trick */
  box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, 0.35);

  /* Basic background styles */
  background: url("../assets/utown.jpeg") center center;
  background-size: cover;

  /* Here's the same styles we applied to our content-div earlier */
  color: white;
  min-height: 95vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stats {
  margin-bottom: 1%;
}

@media only screen and (min-width: 240px) {
  .image-box {
    margin-top: 20%;
  }

  .partner-h2 {
    font-size: 14px;
    color: black;
  }
}

@media only screen and (min-width: 960px) {
  .image-box {
    margin-top: 0;
  }

  .partner-h2 {
    font-size: 23px;
    color: black;
  }
}

@media only screen and (max-width: 600px) {
  .unicon-what {
    height: auto;
    margin-bottom: -10%;
  }

  .getTixBtn span:last-of-type {
    display: block;
  }

  .recap2019Btn {
    margin-top: -8%;
  }
}
</style>