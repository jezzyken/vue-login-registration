import Registration from './components/Registration.vue';
import Login from './components/Login.vue';
import Main from './components/Main.vue';
import Sample from './components/Sample.vue';
import Page1 from './components/Page1.vue';
import Page2 from './components/Page2.vue';
import Update from './components/Update.vue';
import Upload from './components/Upload.vue';
import Reg from './components/Reg.vue';
import Signin from './components/Signin.vue';

export default[
    { path: '/', component: Main},
    { path: '/register', component: Registration},
    { path: '/login', component: Login},
    // { path: '/sample/:name', component: Sample}

    { path: '/sample/:id/:name', component: Sample, props: true },
    { path: '/page1', component: Page1, props: true },
    { path: '/page2/:id/:name', component: Page2, props: true },
    { path: '/update/:id', component: Update, props: true },
    { path: '/upload', component: Upload, props: true },
    { path: '/registration', component: Reg, props: true },
    { path: '/signin', component: Signin, props: true }

]

