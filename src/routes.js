import about from './components/About';
import currentevent from './components/CurrentEvent';
import speakers from './components/Speakers';
import landingpagehero from './components/LandingPageHero';
import pricing from './components/Pricing';

const routes = [
    { path: '/', component: about },
    { path: '/currentevent', component: currentevent },
    { path: '/speakers', component: speakers },
    { path: '/landingpage', component: landingpagehero},
    { path: '/pricing', component: pricing}
];

export default routes;