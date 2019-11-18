<template>
  <span>
    <v-navigation-drawer app v-model="drawer" class="indigo" dark disable-resize-watcher>
      <v-list-item>
        <v-list-item-content>
          <v-btn text to="/" @click="$vuetify.goTo(target, options)">About</v-btn>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-btn text to="/currentevent" @click="$vuetify.goTo(target, options)">Agenda</v-btn>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-btn text to="/speakers" @click="$vuetify.goTo(target, options)">Past Speakers</v-btn>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Details</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Contact</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </v-navigation-drawer>
    <v-app-bar color="indigo" dark fixed>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-spacer class="hidden-md-and-up"></v-spacer>
    <img src="../assets/logo2.svg" height="80%">
    <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-toolbar-items>
        <v-btn text class="hidden-sm-and-down" to="/" @click="$vuetify.goTo(target, options)">About</v-btn>
        <v-btn text class="hidden-sm-and-down" to="/currentevent" @click="$vuetify.goTo(target, options)">Agenda</v-btn>
        <v-btn text class="hidden-sm-and-down" to="/speakers" @click="$vuetify.goTo(target, options)">Past Speakers</v-btn>
        <v-btn text class="hidden-sm-and-down">Details</v-btn>
        <v-btn text class="hidden-sm-and-down">Contact</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </span>

</template>

<script>

  import * as easings from 'vuetify/lib/services/goto/easing-patterns'

export default {
    name: "AppNavigation",
    data() {
        return {
            show: true,
            drawer: false,
            type: 'selector',
            selector: '#scroll-with-options',
            duration: 1500,
            delayTime: 1000,
            offset: 50,
            easing: 'easeInOutCubic',
            easings: Object.keys(easings),
        };
    },
    computed: {
        target () {
            const value = this[this.type]
            if (!isNaN(value)) return Number(value)
            else return value
        },
        options () {
            return {
                duration: this.duration,
                offset: this.offset,
                easing: this.easing,
            }
        }
    }
};
</script>

