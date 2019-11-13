import about from './components/About';
import currentevent from './components/CurrentEvent';
import landingpagehero from './components/LandingPageHero';

const routes = [
    { path: '/', component: about },
    { path: '/currentevent', component: currentevent },
    { path: '/landingpage', component: landingpagehero}
];

export default routes;