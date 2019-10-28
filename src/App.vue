<template>
    <v-app id="app">
        <app-navigation></app-navigation>
        <Home></Home>
        <v-content id="scroll-with-options">
            <transition name="router-animate">
                <router-view></router-view>
            </transition>
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

<style>

    #app {
        width: auto;
    }
    .router-animate-enter-active {
        animation: coming 1s;
        animation-delay: 1s;
        opacity: 0;
    }

    .router-animate-leave-active {
        animation: going 1s;
    }

    @keyframes going {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-50px);
            opacity: 0;
        }
    }

    @keyframes coming {
        from {
            transform: translateY(50px);
            opacity: 0;
        }
        to {
            transform: translateY(0px);
            opacity: 1;
        }
    }
</style>