<template>
  <v-container fluid class="home-hero">
    <v-row class="mb-7" justify="center" no-gutters>
      <v-col cols="auto" lg="auto">
        <v-row justify="center" class="pa-2">
          <img class="logo" src="../assets/big_logo.svg" alt="Vuetify.js" />
        </v-row>
        <v-row justify="end">
          <h2 class="font-weight-bold white--text logo-year">2020</h2>
        </v-row>
        <v-row justify="center">
          <h4 class="font-weight-bold white--text tagline">INNOVATORS OF TOMORROW</h4>
        </v-row>
      </v-col>
    </v-row>

    <v-layout column wrap class="my-12" align-center>
      <v-row align="center" justify="center">
        <v-col class="white--text subtitle-1" cols="12" md="8" sm="12">
        <span class="font-weight-bold unicon">
          TECH.
          <br />ENTREPRENUERSHIP.
          <br />BUSINESS.
        </span>
          <br />

          <br />This year, UNICON 2020 is excited
          <br />to organise a stellar line-up of
          <br />notable speakers, startup
          <br />founders and industry experts to
          <br />share their insights on emerging
          <br />trends and best practices.
          <br />
          <br />
          <span class="font-weight-bold">
          22-23 February 2020
          <br />UTOWN, NUS
            <v-btn rounded color="#303f9f" dark min-width="40%" height="40px">FIND OUT MORE</v-btn>
        </span>
        </v-col>

        <v-col cols="12" md="8" sm="12">
          <v-form ref="form" v-model="valid" :lazy-validation="lazy">
            <span class="white--text text-left">I am a</span>
            <v-text-field
                    v-model="designation"
                    :rules="designationRules"
                    label="Student"
                    solo
                    required
            ></v-text-field>
            <span class="white--text">Full Name</span>
            <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="John Doe"
                    solo
                    required
            ></v-text-field>
            <span class="white--text">Email Address</span>
            <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="example@example.com"
                    solo
                    required
            ></v-text-field>


            <v-btn rounded color="#303f9f" dark min-width="30%" height="40px" @click="submit"><bold>REGISTER NOW</bold></v-btn>

          </v-form>

          <div class="font-weight-bold">
            EARLY BIRD 20% DISCOUNT UNTIL 30
            <br/>
            NOVEMBER 2019. GRAB YOUR TICKETS TODAY!
          </div>
        </v-col>
      </v-row>

    </v-layout>


  </v-container>
</template>

<script>
export default {
  name: "LandingPageHero",
  data: () => ({
    valid: true,
    designation: "",
    designationRules: [v => !!v || "Designation is required"],
    name: "",
    nameRules: [v => !!v || "Name is required"],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    lazy: false
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // console.log("Valid info");
      }
    }
  }
};
</script>

<style scoped>
.home-hero {

  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("../assets/landingBg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  /* height: 100vh; */
}

@media only screen and (min-width: 960px) {
  .home-hero {
    height: 100vh;
  }

  .right-details {
    justify-content: center;
  }
}

.logo {
  height: 60px;
}

.v-text-field {
  width: 65%;
}

.tagline {
  font-family: "twitchy.tvregular";
}

.logo-year {
  font-family: "twitchy.tvregular";
  margin-top: -8%;
  margin-right: 8%;
}
</style>