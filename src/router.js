import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import AboutOne from './components/AboutOne.vue'
import AboutTwo from './components/AboutTwo.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about/:id',
      component: About,
      props: true,
      children: [
        { path: 'one', component: AboutOne },
        { path: 'two', component: AboutTwo }
      ]
    }
  ]
})
