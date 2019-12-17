<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="unicon-what mt-n3 py-9">
      <v-spacer></v-spacer>
      <v-col cols="12" md="5">
        <div class="display-2 font-weight-bold">
          What is
          <span class="unicon-headline">Unicon</span>?
        </div>

        <v-row align="center" justify="center">
          <v-col cols="12" md="6">
            <div class="text-center">
              <v-hover
                v-slot:default="{ hover }"
                :open-delay="openDelay"
                :close-delay="closeDelay"
                :disabled="disabled"
                :value="value"
              >
                <v-btn
                  x-large
                  class="mt-10 white--text"
                  :elevation="hover ? 12 : 2"
                  :loading="loading18"
                  :disabled="loading18"
                  color="#2D3C80"
                  @click="loader = 'loading18'"
                  href="https://drive.google.com/file/d/1mEfEjaRQDdPGyIjUHsT7ky7E6sDOX9-6/view?usp=sharing"
                >
                  <span class="mt-n3">
                    <b>
                      <span class="unicon">UNICON</span> 2018 Recap
                    </b>
                  </span>
                </v-btn>
              </v-hover>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="text-center">
              <v-hover
                v-slot:default="{ hover }"
                :open-delay="openDelay"
                :close-delay="closeDelay"
                :disabled="disabled"
                :value="value"
              >
                <v-btn
                  x-large
                  class="mt-10 white--text"
                  :elevation="hover ? 12 : 2"
                  :loading="loading19"
                  :disabled="loading19"
                  color="#283593"
                  @click="loader = 'loading19'"
                  href="https://drive.google.com/file/d/1bpPwWax9BIdUUHRr59aqiF59y3M0C1gy/view?usp=sharing"
                >
                  <span class="mt-n3">
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
        <div class="subtitle-1 text-justify text-left mx-5">
          In 2013, the first global entrepreneurship conference was launched in
          <br />National University of Singapore (NUS) with the goal of connecting student entrepreneurs all over the world to create a global network of innovators.
          <br />
          <br />Since then, we have connected thousands of students, partnered more than a dozen of universities, and helped to inspire students to solve
          <strong>real world problems</strong>.
        </div>
      </v-col>
      <v-spacer />
    </v-row>
    <br>
    <br>
    <v-row align="center" justify="center">
      <v-col class="image-box">
        <span class="venue-details">
          <v-img contain src="../assets/logo2.svg" height="175" />will be happening on
          <br />22 - 23 February 2020
          <br />@NUS University Town, Singapore
        </span>
      </v-col>
    </v-row>
    <!-- end of unicon 2020 -->

    <!-- start of unicon 2019 stats  -->
    <v-row align="center" justify="center" class="stats-header">
      <span class="unicon-headline indigo--text text--darken-2 underline--magical">unicon 2019</span>
    </v-row>
    <hr class="mt-9" />

    <v-row class="mt-12" align="center" justify="center">
      <v-spacer />
      <v-col cols="12" md="3">
        <div>
          <span class="display-4 font-weight-bold">20</span>
          <br />
          <span class="stats-title">Speakers</span>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div>
          <span class="display-4 font-weight-bold">500+</span>
          <br />
          <span class="stats-title mt-2">Tickets Sold</span>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div>
          <span class="display-4 font-weight-bold">19+</span>
          <br />
          <span class="stats-title">Partner Universities</span>
        </div>
      </v-col>
      <v-spacer />
    </v-row>

    <v-row align="center" justify="center" class="speakers">
      <v-btn
        class="ma-2"
        x-large
        outlined
        color="indigo"
        href="https://www.eventbrite.sg/e/unicon2020-tickets-74661820515?aff=ebdssbeac"
      >Get your UNICON 2020 tickets now!</v-btn>
    </v-row>
    <!-- end of unicon 2019 stats  -->
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
  data() {
    return {
      loader: null,
      loading18: false,
      loading19: false
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  }
};
</script>

<style scoped>
.unicon-what {
  /* background-color; */
  height: 85vh;
}

.unicon-headline {
  /* adapted from vuetify display-2*/
  font-family: "twitchy.tvregular";
  font-size: 3rem;
  margin-top: 3%;
  color: #303F9F;
}

.stats-title {
  font-size: 1.5rem !important;
  font-weight: 400;
  line-height: 5rem;
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
  font-size: 3rem !important;
  font-weight: bolder;
  line-height: 5rem;
  letter-spacing: normal !important;
  font-family: "Roboto", sans-serif !important;
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
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Add a transition, just for fun */
  /* transition: box-shadow 0.3s ease-out; */
}
/* .image-box:hover {
  box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, 0.2);
} */
</style>
