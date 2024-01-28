import Home from '../pages/Home/Home';
import BookTicket from '../pages/BookTicket/BookTicket';

const publicRoute = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/booking',
        component: BookTicket,
    },
];

export { publicRoute };
