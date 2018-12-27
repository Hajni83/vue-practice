import Vue from 'vue'


Vue.config.productionTip = false

new Vue({
  el: "app",
  data: {
    money: 1000
  }
}).$mount('#app')
