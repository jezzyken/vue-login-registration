import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import 'bulma/css/bulma.css'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

Vue.config.productionTip = false
Vue.use(VueResource);

new Vue({

  render: h => h(App),
}).$mount('#app')
