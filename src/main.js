import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
})
