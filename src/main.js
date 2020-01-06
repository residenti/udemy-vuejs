import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 全てのページ遷移前に特定の処理をする.
router.beforeEach((to, from, next) => {
  console.log("global-beforeEach")
  next()
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
