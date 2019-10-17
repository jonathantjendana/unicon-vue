<template>
    <v-app id="app">
        <app-navigation></app-navigation>

        <v-content>
          <Home></Home>
          <router-view></router-view>
        </v-content>

        <Footer></Footer>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import Home from '@/components/Home';
import Footer from '@/components/Footer';

export default {
    name: 'App',
    components: {
        AppNavigation,
        Home,
        Footer
    }
};
</script>

<style></style>