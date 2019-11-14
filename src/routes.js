import about from './components/About';
import currentevent from './components/CurrentEvent';
import speakers from './components/Speakers';

const routes = [
    { path: '/', component: about },
    { path: '/currentevent', component: currentevent },
    { path: '/speakers', component: speakers },
];

export default routes;