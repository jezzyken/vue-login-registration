import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import 'bulma/css/bulma.css'
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(VueResource)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
