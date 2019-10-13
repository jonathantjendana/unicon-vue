<template>
    <v-app id="app">
        <app-navigation></app-navigation>

        <v-content>
          <Home></Home>
          <About></About>
          <current-event></current-event>
        </v-content>

        <Footer></Footer>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import Home from '@/components/Home';
import About from '@/components/About';
import CurrentEvent from '@/components/CurrentEvent';
import Footer from '@/components/Footer';

export default {
    name: 'App',
    components: {
        AppNavigation,
        Home,
        About,
        CurrentEvent,
        Footer
    }
};
</script>

<style></style>