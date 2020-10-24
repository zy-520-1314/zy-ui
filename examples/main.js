import Vue from 'vue'
import App from './App.vue'
import zyUi from "../packages/index.js"
Vue.config.productionTip = false
Vue.use(zyUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
