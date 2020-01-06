import Vue from 'vue'
import Router from 'vue-router'
// import Home from './components/Home.vue'
// import Users from './components/Users.vue'
// import UsersProfile from './components/UsersProfile.vue'
// import UsersPosts from './components/UsersPosts.vue'

// 遅延ローディング (webpack 動的 import).
// 必要になるまでファイルを取得しない.
// 実際はインターネットに通信していない暇な時に取得している. prefetch
const Home = () => import('./components/Home.vue')
const Users = () => import('./components/Users.vue')
const UsersProfile = () => import('./components/UsersProfile.vue')
const UsersPosts = () => import('./components/UsersPosts.vue')

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Home,
      beforeEnter(to, from, next) {
        next()
      }
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
