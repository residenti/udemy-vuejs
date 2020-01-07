import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 全てのページ遷移前に特定の処理をする.
router.beforeEach((to, from, next) => {
  console.log("[main.js] global-beforeEach")
  next()
})

new Vue({
  store,  // store: store の省略系 es6.
  router, // router: router の省略系 es6.
  render: h => h(App),
}).$mount('#app')
