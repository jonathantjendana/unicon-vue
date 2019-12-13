import about from './components/About';
import currentevent from './components/CurrentEvent';
import speakers from './components/Speakers';
import landingpagehero from './components/LandingPageHero';
import contactus from './components/ContactUs';

const routes = [
    { path: '/', component: about },
    { path: '/currentevent', component: currentevent },
    { path: '/speakers', component: speakers },
    { path: '/landingpage', component: landingpagehero },
    { path: '/contact-us', component: contactus }
];

export default routes;