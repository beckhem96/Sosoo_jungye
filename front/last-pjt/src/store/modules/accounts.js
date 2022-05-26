import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'

export default {
  // namespaced: true,

  state: {
    token: localStorage.getItem('token') || '' ,
    currentUser: {},
    profile: {},
    authError: null,
    recommendation: {}
  },

  getters: {
    isLoggedIn: state => !!state.token,
    currentUser: state => state.currentUser,
    profile: state => state.profile,
    authError: state => state.authError,
    authHeader: state => ({ Authorization: `Token ${state.token}`}),
    recommendation: state => state.recommendation,
  },

  mutations: {
    SET_TOKEN: (state, token) => state.token = token,
    SET_CURRENT_USER: (state, user) => state.currentUser = user,
    SET_PROFILE: (state, profile) => state.profile = profile,
    SET_AUTH_ERROR: (state, error) => state.authError = error,
    SET_RECOMMENDATION: (state, recommendation) => state.recommendation = recommendation
  },

  actions: {
    saveToken({ commit }, token) {
      commit('SET_TOKEN', token)
      localStorage.setItem('token', token)
    },

    removeToken({ commit }) {
      commit('SET_TOKEN', '')
      localStorage.setItem('token', '')
    },

    login({ commit, dispatch }, credentials) {

      axios({
        url: drf.accounts.login(),
        method: 'post',
        data: credentials
      })
        .then(res => {
          const token = res.data.key
          dispatch('saveToken', token)
          dispatch('fetchCurrentUser')
          router.push({ name: 'home' })
        })
        .catch(err => {
          console.error(err.response.data)
          commit('SET_AUTH_ERROR', err.response.data)
        })
    },

    signup({ commit, dispatch }, credentials) {

     axios({
       url: drf.accounts.signup(),
       method: 'post',
       data: credentials
     })
     .then(res => {
       const token = res.data.key
       dispatch('saveToken', token)
       dispatch('fetchCurrentUser')
       router.push({ name: 'home' })

     })
     .catch(err => {
        console.error(err.response.data)
        commit('SET_AUTH_ERROR', err.response.data)
     })
    },

    logout({ getters, dispatch }) {

     axios({
       url: drf.accounts.logout(),
       method: 'post',
       headers: getters.authHeader,
     })
     .then(() => {
      dispatch('removeToken')
      alert('로그아웃 됐습니다.')
      router.push({ name: 'home' })
     })
     .catch(err => {
       console.log(err.response)
     })
    },

    fetchCurrentUser({ commit, getters, dispatch }) {
      
      if (getters.isLoggedIn) {
        axios({
          url: drf.accounts.currentUserInfo(),
          method: 'get',
          headers: getters.authHeader,
        })
          .then(res => commit('SET_CURRENT_USER', res.data))
          .catch(err => {
            if (err.response.status === 401) {
              dispatch('removeToken')
              router.push({ name: 'login' })
            }
          })
      }
    },
    fetchProfile({ commit, getters, dispatch }, username) {
      if (getters.isLoggedIn) {
        axios({
          url: drf.accounts.profile(username),
          method: 'get',
          headers: getters.authHeader,
        })
          .then(res => {
            commit('SET_PROFILE', res.data)
          }
            )
          .catch(err => {
            if (err.response.status === 401) {
              dispatch('removeToken')
              router.push({ name: 'login' })
            }
          })
      }
    },
    fetchRecommendForm({ commit, getters }) {

      axios({
        url: drf.accounts.recommend(),
        method: 'get',
        headers: getters.authHeader,
      })
      .then(res => {
        commit('SET_RECOMMENDATION', res.data)
      }
        )
      .catch(err => {
        console.log(err.response)
      })
    },
    likeGenres({ commit, getters }, recommendationPk ) {
      axios({
        url: drf.accounts.likeRecommend(recommendationPk),
        method: 'post',
        headers: getters.authHeader,
      })
      .then(res => commit('SET_RECOMMENDATION', res.data))
      .catch(err => console.error(err.response))
    },
  }
}