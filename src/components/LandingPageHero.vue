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

    <v-row align="center" class="details" justify="center">
      <v-col cols="2" md="2"></v-col>
      <v-col class="left-details white--text subtitle-1 text-start" cols="8" md="3">
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
            <v-btn
              class="font-weight-bold subtitle-1 findOut"
              rounded
              color="#303f9f"
              dark
              min-width="70%"
              height="40px"
              href="/"
            >FIND OUT MORE</v-btn>
          </div>
        </span>
      </v-col>

    <v-spacer/>
      <v-col cols=8 class="right-details" md="4">
        <v-form ref="form" v-model="valid" :lazy-validation="lazy" class="reg-form">
          <div class="white--text title mb-4">Sign Up to Our Newsletter Today!</div>
          <span class="white--text">I am a</span>
          <v-text-field
            v-model="designation"
            :rules="designationRules"
            label="Student"
            solo
            required
            class="textfield"
          ></v-text-field>
          <span class="white--text">Full Name</span>
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="John Doe"
            solo
            required
            class="textfield"
          ></v-text-field>
          <span class="white--text">Email Address</span>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="example@example.com"
            solo
            required
            class="textfield"
          ></v-text-field>

          <v-btn
            id="submit"
            class="font-weight-bold subtitle-1 submit"
            rounded
            color="#303f9f"
            dark
            min-width="50%"
            height="40px"
            @click="submit"
            :loading="loading"
          >SUBSCRIBE</v-btn>
        </v-form>

        <div class="disc-text font-weight-bold white--text">
          EARLY BIRD 20% DISCOUNT UNTIL 30
          <br />NOVEMBER 2019. GRAB YOUR TICKETS TODAY!
        </div>
      </v-col>
        <v-col cols=0 md="2"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import JQuery from "jquery";

let $ = JQuery;

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
    lazy: false,
    loading: false
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        let inthis = this;
        let url =
          "https://script.google.com/macros/s/AKfycbwdnxPgbIkSD6ITLbchRysHuX-b_EzbcusWfzF-hBnAbVruXDEy/exec";
        var jqxhr = $.ajax({
          url: url,
          method: "GET",
          dataType: "json",
          data: {
            Name: this.name,
            Designation: this.designation,
            Email: this.email
          },
          complete: function(d) {
            inthis.loading = false;
            inthis.$refs.form.reset();
          }
        });
      }
    },

    handleSuccess(data) {
      console.log(data);
    }
  }
};
</script>

<style scoped>
.home-hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/landingBg.jpg");
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

@media only screen and (max-width: 600px) {

    .left-details {
        margin-top: 5%;
    }

    .right-details {
        margin-top: 5%;
    }
    .submit {
        margin-bottom: 10%;
        width: 100%;
    }

    .findOut {
        margin-top: 5%;
        width: 100%;
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

/* .left-details {
  text-align: start;
  padding-left: 15%;
} */

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
  text-align: left;
}

.disc-text {
  margin-top: 5%;
}

.tagline {
  font-family: "twitchy.tvregular";
  margin-top: 1%;
}

.logo-year {
  font-family: "twitchy.tvregular";
  margin-top: -8%;
  margin-right: 8%;
}

.textfield {
  width: 100%;
}
</style>