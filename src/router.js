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
        { path: 'profile', component: UsersProfile },
        { path: 'posts', component: UsersPosts }
      ]
    }
  ]
})
