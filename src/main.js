import Vue from 'vue'
import App from './App.vue'
import vueresource from 'vue-resource'
import {store} from './store'
Vue.use(vueresource);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
