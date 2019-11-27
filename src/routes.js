import Registration from './components/Registration.vue';
import Login from './components/Login.vue';
import Main from './components/Main.vue';

export default[
    { path: '/', component: Main},
    { path: '/register', component: Registration},
    { path: '/login', component: Login}
]

