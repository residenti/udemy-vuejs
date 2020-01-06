import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Users from './components/Users.vue'
import UsersProfile from './components/UsersProfile.vue'
import UsersPosts from './components/UsersPosts.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/users/:id',
      component: Users,
      props: true,
      children: [
        { path: 'profile', component: UsersProfile, name: "user-id-profile" },
        { path: 'posts', component: UsersPosts }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 100 }
      }
    } else if (savedPosition) {
      return savedPosition
    }

    // return { x: 0, y: 500 }
  }
})
