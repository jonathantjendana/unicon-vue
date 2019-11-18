<template>
  <v-container fluid class="lighten-4">
    <v-container grid-list-lg>
      <v-row
        justify="center"
        class="display-1 font-weight-black black--text text-xs-center mt-10"
      >LISTEN TO THE BEST MINDS</v-row>
      <v-row justify="center">
        <div
          class="black--text mt-3"
        >Hear from these inspiring speakers. Check back as we continue to add more</div>
      </v-row>
      <v-col class="sections">
        <v-row justify="center">
          <v-col cols="12" sm="12" lg="3">
            <div
              class="topic startup font-weight-bold title"
              rounded
              color="primary"
              height="100%"
              width="100%"
              dark
            >STARTUPS</div>
          </v-col>
          <v-col cols="12" sm="12" lg="3">
            <div
              class="topic growth font-weight-bold title"
              rounded
              color="primary"
              height="100%"
              dark
            >GROWTH</div>
          </v-col>
          <v-col cols="12" sm="12" lg="3">
            <div
              class="topic tech font-weight-bold title"
              rounded
              color="primary"
              height="100%"
              dark
            >TECH</div>
          </v-col>
          <v-col cols="12" sm="12" lg="3">
            <div
              class="topic diversity font-weight-bold title"
              rounded
              color="primary"
              height="100%"
              dark
            >DIVERSITY</div>
          </v-col>
        </v-row>
      </v-col>

      <v-row>
        <template v-for="(person, index) in personsPromo">
          <v-col :key="index">
            <v-card class="d-inline-block profile" :class="{profile2: index == 1}">
              <v-container>
                <v-row>
                  <v-col cols="4">
                    <v-img height="200" width="300" src="../assets/foto-sushi-1.png"></v-img>
                  </v-col>

                  <v-col cols="6" class="text-left">
                    <v-row class="fill-height" justify="start">
                      <v-col class="white--text font-weight-bold title" col="10">
                        {{ person.name}}
                        <br />
                        {{person.Designation}}
                        <br />
                        <span class="body-2">{{person.details}}</span>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-responsive v-if="index === 2" :key="`width-${index}`" width="100%"></v-responsive>
        </template>
      </v-row>

      <v-row>
        <template v-for="(person, index) in persons">
          <v-col :key="index" sm="12" md="6" lg="3">
            <v-flex>
              <v-card
                class="profile mx-auto"
                :class="{profile2: index%4 == 1, profile3:index%4 ==2, profile4: index%4 == 3}"
              >
                <v-img
                  height="250"
                  src="../assets/foto-sushi-1.png"
                  class="white--text align-end text-left"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                >
                  <v-card-title class="font-weight-bold">
                    {{person.name}}
                    <br />
                    {{person.Designation}}
                  </v-card-title>
                </v-img>
              </v-card>
            </v-flex>
          </v-col>
          <v-responsive v-if="n === 4" :key="`width-${person}`" width="100%"></v-responsive>
        </template>
      </v-row>

      <v-row
        justify="center"
        class="display-1 font-weight-black black--text text-xs-center pricing font-weight-bold"
      >2 DAYS OF JAM-PACKED INSIGHTS</v-row>
      <v-row justify="center">
        <v-col :key="index" sm="12" md="6" lg="3">
          <v-flex>
            <v-card class="pricing1 mx-auto">
              <div class="pricing-detail">
                <v-card-text>
                  <p class="headline text--primary font-weight-bold">STUDENTS*</p>

                  <div class="text--primary display-3 font-weight-bold">S$39</div>
                  <v-btn
                    class="mt-8 font-weight-bold"
                    rounded
                    color="#26c1bf"
                    dark
                    min-width="40%"
                    height="40px"
                  >REGISTER NOW</v-btn>
                </v-card-text>
              </div>
            </v-card>
          </v-flex>
        </v-col>
        <v-responsive v-if="index === 4" :key="`width-${index}`" width="100%"></v-responsive>
        <v-col :key="index" sm="12" md="6" lg="3">
          <v-flex>
            <v-card class="pricing2 mx-auto">
              <div class="pricing-detail">
                <v-card-text>
                  <p class="headline text--primary font-weight-bold">PUBLIC</p>

                  <div class="text--primary display-3 font-weight-bold">S$59</div>
                  <v-btn
                    class="mt-8 font-weight-bold"
                    rounded
                    color="orange"
                    dark
                    min-width="40%"
                    height="40px"
                  >REGISTER NOW</v-btn>
                </v-card-text>
              </div>
            </v-card>
          </v-flex>
        </v-col>
        <v-responsive v-if="index === 4" :key="`width-${index}`" width="100%"></v-responsive>
      </v-row>
      <v-row
        justify="center"
        class="subtitle-1 font-weight-black black--text text-xs-center mt-8"
      >*A valid student ID must be presented during registration</v-row>

      <v-row
        justify="center"
        class="display-1 font-weight-black black--text text-xs-center font-weight-bold network"
      >NETWORK WITH THE BEST PEOPLE</v-row>

      <v-row
        justify="center"
        class="title black--text text-xs-center mt-5  mb-12"
      >Hear from these inspiring speakers. Check back as we continue to add more</v-row>

      <v-row justify="space-around">
        <template v-for="(company, index) in companies">
          <v-col :key="index" sm="12" md="6" lg="2">
            <v-flex>
              <v-card
                class="company d-flex align-center"
                height="100"
                max-height="250"
                max-width="250"
              >
                <v-img
                  height="70"
                  max-height="250"
                  contain
                  v-bind:src="require('../assets/company/' + company.img)"
                ></v-img>
              </v-card>
            </v-flex>
          </v-col>
          <v-responsive v-if="n === 4" :key="`width-${index}`" width="100%"></v-responsive>
        </template>
      </v-row>

      <v-row
        justify="center"
        class="display-1 font-weight-black black--text text-xs-center font-weight-bold register"
      >READY TO REGISTER?</v-row>

      <v-row
        justify="center"
        class="title black--text text-xs-center mt-2 mb-6"
      >Book before 30 November and enjoy a 20% discount on ticket prices</v-row>

      <v-row justify="center">
        <v-btn
          class="font-weight-bold"
          rounded
          color="#303f9f"
          dark
          min-width="20%"
          height="60px"
        >REGISTER NOW</v-btn>
      </v-row>
        <v-row align="end"  class="footer black--text">

        </v-row>

    </v-container>
  </v-container>
</template>

<script>

export default {
  name: "LandingPageDetails",
  data() {
    return {
      personsPromo: [
        {
          name: "John Doe",
          Designation: "CEO, Facebook",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus hendrerit molestie. "
        },
        {
          name: "John Doe",
          Designation: "CEO, Microsoft",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus hendrerit molestie. "
        }
      ],
      persons: [
        { name: "John Doe", Designation: "CEO, Facebook" },
        { name: "John Doe", Designation: "CEO, Facebook" },
        { name: "John Doe", Designation: "CEO, Facebook" },
        { name: "John Doe", Designation: "CEO, Facebook" },
        { name: "John Doe", Designation: "CEO, Facebook" },
        { name: "John Doe", Designation: "CEO, Facebook" },
        { name: "John Doe", Designation: "CEO, Facebook" },
        { name: "John Doe", Designation: "CEO, Facebook" }
      ],
      companies: [
        { name: "Amazon", img: "Amazon.png" },
        { name: "Apple", img: "Apple.png" },
        { name: "Carrousell", img: "Carrousell.png" },
        { name: "Facebook", img: "Facebook.png" },
        { name: "Gojek", img: "Gojek.png" },
        { name: "Amazon", img: "Google.png" },
        { name: "Apple", img: "Grab.png" },
        { name: "Carrousell", img: "Visa.png" },
        { name: "Facebook", img: "Facebook.png" },
        { name: "Gojek", img: "Gojek.png" },
        { name: "Facebook", img: "Facebook.png" },
        { name: "Gojek", img: "Gojek.png" },
        { name: "Amazon", img: "Amazon.png" },
        { name: "Apple", img: "Apple.png" },
        { name: "Carrousell", img: "Carrousell.png" },
        { name: "Facebook", img: "Facebook.png" },
        { name: "Gojek", img: "Gojek.png" },
        { name: "Amazon", img: "Google.png" }
      ]
    };
  }
};
</script>

<style scoped>
.root {
  color: black;
}
.topic {
  width: 100%;
  height: 100%;
  border-radius: 50px;
  padding: 20px;
}

.startup {
  background: darkblue;
}

.growth {
  background: orange;
}

.tech {
  background: #26c1bf;
}

.diversity {
  background: #3f51b5;
}

.sections {
  margin-top: 5%;
}

.profile {
  width: 100%;
  padding-bottom: 5%;
  background: #303f9f;
}

.profile2 {
  padding-bottom: 5%;

  background: #26c1bf;
}

.profile3 {
  padding-bottom: 5%;

  background: orange;
}

.profile4 {
  padding-bottom: 5%;
  background: #3f51b5;
}

.pricing {
  margin-top: 8%;
  margin-bottom: 5%;
}

.pricing-detail {
  background: white;
}

.pricing1 {
  padding: 5% 0;
  background: #26c1bf;
}

.pricing2 {
  padding: 5% 0;
  background: orange;
}

.network {
  margin-top: 7%;
}

.company {
  width: 100%;
  height: 100%;
}

.register {
  margin-top: 10%;
}

.footer {
    margin-top: 14%;
}

</style>