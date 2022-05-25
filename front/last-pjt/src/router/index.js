import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import AllMovies from '../views/AllMovies.vue'
import ActorsMoviesView from '../views/ActorsMoviesView.vue'
import DirectorsMoviesView from '../views/DirectorsMoviesView.vue'
import GenresMoviesView from '../views/GenresMoviesView.vue'

import LogIn from '../views/LogIn.vue'
import LogOut from '../views/LogOut.vue'
import SignUp from '../views/SignUp.vue'

import CommunityBoard from '../views/CommunityBoard.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import ArticleNewView from '../views/ArticleNewView.vue'
import ArticleEditView from '../views/ArticleEditView.vue'

import NotFound404 from '../views/NotFound404.vue'
import AdminMovieAdd from '../views/AdminMovieAdd.vue'
import ProfileView from '../views/ProfileView.vue'
import AdminUpdateMovie from '../views/AdminUpdateMovie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  //영화
  {
    path: '/movies/:moviePk',
    name: 'detail',
    component: DetailView
  },
  {
    path: '/allmovies',
    name: 'allmovies',
    component: AllMovies
  },
  {
    path: '/movies/actors/:actorPk',
    name: 'actorsMovies',
    component: ActorsMoviesView
  },
  {
    path: '/movies/directors/:directorPk',
    name: 'directorsMovies',
    component: DirectorsMoviesView
  },
  {
    path: '/movies/genres/:genrePk',
    name: 'genresMovies',
    component: GenresMoviesView
  },
  // 로그인, 가입
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
  // 커뮤니티
  {
    path: '/community',
    name: 'community',
    component: CommunityBoard
  },
  {
    path: '/articles/:articlePk',
    name: 'article',
    component: ArticleDetail
  },
  {
    path: '/articles/new',
    name: 'articleNew',
    component: ArticleNewView
  },
  {
    path: '/articles/:articlePk/edit',
    name: 'articleEdit',
    component: ArticleEditView
  },
  // 관리자 페이지
  {
    path: '/admin',
    name: 'admin',
    component: AdminMovieAdd
  },
  {
    path: '/update/:moviePk',
    name: 'updateMovie',
    component: AdminUpdateMovie
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
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
