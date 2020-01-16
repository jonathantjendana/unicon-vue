<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="arena-register">
      <v-col md="6" cols="12">
        <v-img src="../assets/arena_hero.jpg" contain eager aspect-ratio="1.6" eager></v-img>
      </v-col>
      <v-col md="auto" cols="12">
        <div>
          <span class="arena unicon-headline unicon">Unicon <span class="black--text">Arena 2020</span></span>
          <br />
          <div class="text-center graphik-bold arena-theme">"For Students By Students"</div>
          <div class="arena-register-details graphik-reg">
            <br />1<sup>st</sup> Round: 6th February 2020
            <br />Final Round: 23rd February 2020
            <br/>
            <br />2 College Ave West, Stephen Riady Centre, Singapore 138607
          </div>
          <br />
          <v-hover v-slot:default="{ hover }" :value="value">
            <v-btn
              class="ma-2 no-text-transform white--text"
              x-large
              :elevation="hover ? 12 : 2"
              color="#283593"
              href="https://www.eventbrite.sg/e/unicon-arena-registration-81945145135?utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&aff=escb&utm-source=cp&utm-term=listing"
              target="_blank"
              max-width="80%"
            >
              <div class="graphik-bold">
                <span>Sign Up Now!</span>
              </div>
            </v-btn>
          </v-hover>
        </div>
      </v-col>
      <v-spacer />
    </v-row>
    <v-row justify="center" align="center" class="arena-what" style="background:#F6F6F6;">
      <v-col>
        <div>
          <!-- <span class="arena graphik-reg">
            What is
            <span class>
              <span class="unicon-headline unicon">Unicon</span> Arena?
            </span>
          </span>-->
          <span class="arena indigo--text graphik-bold"><b>About</b></span><span class="arena graphik-bold black--text"><b> ARENA</b></span>
        </div>
        <div class="graphik-reg arena-details">
          <p>UNICON ARENA is an annual pitching contest run by students.</p>

          <p>We aim to create an opportunity for young entrepreneurs to share their innovative business ideas.</p>

          <p>There will be a total of 16 startups in the first round and 8 of them will be chosen to enter the final round.</p>
        </div>
      </v-col>
    </v-row>
    <!-- <v-container style="height:80vh;"> -->
      <v-row justify="center" align="start" class="mb-10 mt-10">
        <div>
          <span class="arena graphik-bold indigo--text"><b>Prizes</b></span>
        </div>
      </v-row>
      <v-row justify="space-around" align="start">
        <v-col cols="auto" class="d-sm-none">
          <v-img contain src="../assets/first.svg" aspect-ratio="1" />
          <div class="graphik-reg">
            1<sup>st</sup> Prize
            <br />
            <br />
            <ul class="text-left">
              <li>$2,000 cash prize</li>
              <li>$5,000 AWS credits</li>
            </ul>
          </div>
        </v-col>
        <v-col cols="auto">
          <v-img contain src="../assets/second.svg" aspect-ratio="1" />
          <div class="graphik-reg">
            2<sup>nd</sup> Prize
            <br />
            <br />
            <ul class="text-left">
              <li>$1,000 cash prize</li>
              <li>$5,000 AWS credits</li>
            </ul>
          </div>
        </v-col>

        <v-col cols="auto" class="d-none d-sm-block">
          <v-img contain src="../assets/first.svg" aspect-ratio="1" />
          <div class="graphik-reg">
            1<sup>st</sup> Prize
            <br />
            <br />
            <ul class="text-left">
              <li>$2,000 cash prize</li>
              <li>$5,000 AWS credits</li>
            </ul>
          </div>
        </v-col>

        <v-col cols="auto">
          <v-img contain src="../assets/third.svg" aspect-ratio="1" />
          <div class="graphik-reg">
            3<sup>rd</sup> Prize
            <br />
            <br />
            <ul class="text-left">
              <li>$500 cash prize</li>
              <li>$5,000 AWS credits</li>
            </ul>
          </div>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="mt-8 mb-10"><div class="prize-8 graphik-reg">^Top 8 teams to walk away with<span> $5,000 Amazon Web Services (AWS) credits.</span></div></v-row>
    <!-- </v-container> -->
  </v-container>
</template>

<script>
export default {
  name: "Arena"
};
</script>

<style scoped>
/* .arena-register {
  height: 80vh;
} */

.arena-register-details {
  margin-left: 1.5%;
  line-height: 1.8;
  text-align: center;
}



.arena-theme {
  margin-top: 1%;
  font-size: calc(8px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(1em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));

  letter-spacing: -0.02625em !important;
}
.arena-what {
  height: 60vh;
}

.arena-details {
  margin-top: 3%;
}
.unicon-headline {
  /* adapted from vuetify display-2*/
  color: #303f9f;
}
.arena {
  font-size: calc(40px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(1em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 400;
  letter-spacing: -0.02625em !important;
text-align: left;
}

/* SMALL SCREEN */
@media only screen and (max-width: 600px) {
    
    .arena-register-details {
        text-align: center;
    }
    .arena-theme {
        margin-top: 3%;
        font-size: 16px;
    }
    .arena-details {
        margin-top: 10%;
    }
    .arena-details p:nth-last-of-type(2) {
        /* background: red; */
    }
    .prize-8 span:last-of-type {
        display: block;
    }
}
</style>