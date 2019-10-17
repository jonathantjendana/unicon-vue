<template>
  <span>
    <v-navigation-drawer app v-model="drawer" class="indigo" dark disable-resize-watcher>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">About</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Speakers</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Partner</v-list-item-title>
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
        <v-btn text class="hidden-sm-and-down" to="/">About</v-btn>
        <v-btn text class="hidden-sm-and-down" to="/currentevent">Speakers</v-btn>
        <v-btn text class="hidden-sm-and-down">Partner</v-btn>
        <v-btn text class="hidden-sm-and-down">Details</v-btn>
        <v-btn text class="hidden-sm-and-down">Contact</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </span>

</template>

<script>
export default {
    name: "AppNavigation",
    data() {
        return {
            drawer: false
        };
    }
};
</script>

