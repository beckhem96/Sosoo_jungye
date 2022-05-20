import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import AllMovies from '../views/AllMovies.vue'
import LogIn from '../views/LogIn.vue'
import LogOut from '../views/LogOut.vue'
import SignUp from '../views/SignUp.vue'
import CommunityBoard from '../views/CommunityBoard.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import NotFound404 from '../views/NotFound404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/detail_id',
    name: 'detail',
    component: DetailView
  },
  {
    path: '/allmovies',
    name: 'allmovies',
    component: AllMovies
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },  
  {
    path: '/logout',
    name: 'logout',
    component: LogOut
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/community',
    name: 'community',
    component: CommunityBoard
  },
  {
    path: '/article_id',
    name: 'article_id',
    component: ArticleDetail
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '/*',
    redirect: '/404',
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
