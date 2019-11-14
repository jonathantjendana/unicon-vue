<template>
  <v-container fluid class="home-hero">
    <v-row justify="center" no-gutters>
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

    <v-row align="center" class="details" justify-center>
      <v-col class="left-details white--text subtitle-1" cols="12" md="6">
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
          <div class="fom-button">
            <v-btn rounded color="#303f9f" dark min-width="40%" height="40px">FIND OUT MORE</v-btn>
          </div>
        </span>
      </v-col>

      <v-col cols="12" class="right-details" md="6" >
        <v-form ref="form" v-model="valid" :lazy-validation="lazy" class="reg-form">
          <span class="white--text">I am a</span>
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

        <div class="disc-text font-weight-bold">
          EARLY BIRD 20% DISCOUNT UNTIL 30 
          <br/>
          NOVEMBER 2019. GRAB YOUR TICKETS TODAY!
        </div>
      </v-col>
    </v-row>
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

.year-logo {
  height: 18px;
  padding-right: 5%;
}

.logo {
  height: 60px;
}

.details {
  margin-top: 4%;
}

.left-details {
  text-align: start;
  padding-left: 15%;
}

.fom-button {
  margin-top: 3%;
}

.v-text-field {
  width: 65%;
}

.reg-form {
  text-align: left;
}

.right-details {
  text-align:left;
}

.disc-text {
  margin-top: 5%;
}

.tagline {
  font-family: "twitchy.tvregular";
  margin-top:1%;
}

.logo-year {
  font-family: "twitchy.tvregular";
  margin-top: -8%;
  margin-right: 8%;
}
</style>