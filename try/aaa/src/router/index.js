import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/detail",
    component: () => import("../views/detail/detail.vue")
  }, {
    path: "/login",
    component: () => import("../views/login/login.vue")
  },
  {
    path: "/index",
    component: () => import("../views/index/index.vue"),
    children: [
      {
        path: "/index/movie",
        component: () => import("../views/index/movie/movie.vue"),
        children: [
          {
            path: "/index/movie/now",
            component: () => import("../views/index/movie/now/now.vue")
          }, {
            path: "/index/movie/hot",
            component: () => import("../views/index/movie/hot/hot.vue")
          }, {
            path: "/index/movie",
            redirect: "/index/movie/now"
          }
        ]
      }, {
        path: "/index/ciname",
        component: () => import("../views/index/ciname/ciname.vue")
      }, {
        path: "/index/my",
        component: () => import("../views/index/my/my.vue")
      }, {
        path: "/index",
        redirect: "/index/movie"
      }
    ]
  }
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
