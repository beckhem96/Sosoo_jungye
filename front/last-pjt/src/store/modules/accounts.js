import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'

export default {
  // namespaced: true,

  state: {
    token: '',
    currentUser: {},
    profile: {},
    authError: null,
  },

  getters: {
    isLoggedIn: state => !!state.token,
    currentUser: state => state.currentUser,
    profile: state => state.profile,
    authError: state => state.authError
  },

  mutations: {
    SET_TOKEN: (state, token) => state.token = token,
    SET_CURRENT_USER: (state, user) => state.currentUser = user,
    SET_PROFILE: (state, profile) => state.profile = profile,
    SET_AUTH_ERROR: (state, error) => state.authError = error
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

    // login({ commit, dispatch }, credentials) {
    //   /* 
    //   POST: 사용자 입력정보를 login URL로 보내기
    //     성공하면
    //       응답 토큰 저장
    //       현재 사용자 정보 받기
    //       메인 페이지(ArticleListView)로 이동
    //     실패하면
    //       에러 메시지 표시
    //   */
    // },

    signup({ dispatch }, credentials) {
      /* 
      POST: 사용자 입력정보를 signup URL로 보내기
        성공하면
          응답 토큰 저장
          현재 사용자 정보 받기
          메인 페이지(ArticleListView)로 이동
        실패하면
          에러 메시지 표시
      */
     axios({
       url: drf.accounts.signup(),
       method: 'post',
       data: credentials
     })
     .then(res => {
       const token = res.data.key
       dispatch('saveToken', token)
       router.push({ name: 'home' })

     })
     .catch(err => {
       console.log(err)
     })
    },

    // logout({ getters, dispatch }) {
    //   /* 
    //   POST: token을 logout URL로 보내기
    //     성공하면
    //       토큰 삭제
    //       사용자 알람
    //       LoginView로 이동
    //     실패하면
    //       에러 메시지 표시
    //   */
    // },

    // fetchCurrentUser({ commit, getters, dispatch }) {
    //   /*
    //   GET: 사용자가 로그인 했다면(토큰이 있다면)
    //     currentUserInfo URL로 요청보내기
    //       성공하면
    //         state.cuurentUser에 저장
    //       실패하면(토큰이 잘못되었다면)
    //         기존 토큰 삭제
    //         LoginView로 이동
    //   */
    // },

    // fetchProfile({ commit, getters }, { username }) {
    //   /*
    //   GET: profile URL로 요청보내기
    //     성공하면
    //       state.profile에 저장
    //   */
    // },
  },
}
