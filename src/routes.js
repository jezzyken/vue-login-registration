import Registration from './components/Registration.vue';
import Login from './components/Login.vue';
import HelloWorld from './components/HelloWorld.vue';

export default[
    { path: '/', component: HelloWorld},
    { path: '/register', component: Registration},
    { path: '/login', component: Login}
]

