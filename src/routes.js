import about from './components/About';
import currentevent from './components/CurrentEvent';
import speakers from './components/Speakers';
import landingpagehero from './components/LandingPageHero';
import contactus from './components/ContactUs';
import pricing from './components/Pricing';
import gallery from './components/Gallery';
import arena from './components/Arena';

const routes = [
    { path: '/', component: about },
    { path: '/agenda', component: currentevent },
    { path: '/speakers', component: speakers },
    { path: '/landingpage', component: landingpagehero },
    { path: '/contact-us', component: contactus },
    { path: '/pricing', component: pricing },
    { path: '/gallery', component: gallery },
    { path: '/arena', component: arena }
];

export default routes;