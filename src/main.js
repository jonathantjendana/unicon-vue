import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import * as VueGoogleMaps from 'vue2-google-maps'

import routes from './routes';


Vue.use(VueRouter);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCqWtxeZ7ffilrlXfCQYXVU80u2ddp22dM'
    },
});
Vue.config.productionTip = false

const router = new VueRouter({routes});

new Vue({
    vuetify,
    router,
  render: h => h(App)
}).$mount('#app')
