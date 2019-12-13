import about from './components/About';
import currentevent from './components/CurrentEvent';
import speakers from './components/Speakers';
import landingpagehero from './components/LandingPageHero';
import pricing from './components/Pricing';
import partner from './components/Partners';

const routes = [
    { path: '/', component: about },
    { path: '/currentevent', component: currentevent },
    { path: '/speakers', component: speakers },
    { path: '/landingpage', component: landingpagehero},
    { path: '/pricing', component: pricing},
    { path: '/partners', component: partner}
];

export default routes;