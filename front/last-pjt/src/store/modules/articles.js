import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'

import _ from 'lodash'

export default {
  state: {
    articles: {},
    article: {},
  },
  getters: {
    articles: state => state.articles,
    article: state => state.article,
    isAuthor: (state, getters) => {
      return state.article.user?.username === getters.currentUser.username
    },
    isArticle: state => !_.isEmpty(state.article),
  },
  mutations: {
    SET_ARTICLES: (state, articles) => state.articles = articles,
    SET_ARTICLE: (state, article) => state.article = article,
    SET_ARTICLE_COMMENTS: (state, comments) => state.article.comments = comments
  },
  actions: {
    saveArticles({ commit }, articles) {
      commit('SET_ARTICLES', articles)
    },
    // 게시글
    fetchArticles({ dispatch, getters }) {
      
      axios({
        url: drf.articles.articles(),
        method: 'get',
        headers: getters.authHeader
      })
      .then(res => {
        const articles = res.data
        dispatch('saveArticles', articles)
      }) 
      .catch(err => {
        console.log(err)
      })
    },
    fetchArticle({ commit, getters }, articlePk) {
        
      axios({
        url: drf.articles.article(articlePk),
        method: 'get',
        headers: getters.authHeader
      })
      .then(res => {
        const article = res.data
        commit('SET_ARTICLE', article)
      }) 
      .catch(err => {
        console.log(err)
      })
    },
    createArticle({ commit, getters }, article) {
      console.log('create요청')
      axios({
        url: drf.articles.articles(),
        method: 'post',
        data: article,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_ARTICLE', res.data)
          router.push({
            name: 'article',
            params: { articlePk: getters.article.pk }
          })
        })
    },
    updateArticle({ commit, getters }, { pk, title, content}) {

      axios({
        url: drf.articles.article(pk),
        method: 'put',
        data: { title, content },
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_ARTICLE', res.data)
          router.push({
            name: 'article',
            params: { articlePk: getters.article.id }
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteArticle({ commit, getters }, articlePk) {

      if (confirm('정말 삭제하시겠습니까?')) {
        axios({
          url: drf.articles.article(articlePk),
          method: 'delete',
          headers: getters.authHeader,
        })
          .then(() => {
            commit('SET_ARTICLE', {})
            router.push({ name: 'community' })
          })
          .catch(err => console.error(err.response))
      }
    },
    likeArticle({ commit, getters }, articlePk) {

      axios({
        url: drf.articles.likeArticle(articlePk),
        method: 'post',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_ARTICLE', res.data))
        .catch(err => console.error(err.response))
    },

    // 댓글
    createComment({ commit, getters }, { articlePk, content }) {

      const comment = { content }
      console.log(drf.articles.comments(articlePk))
      axios({
        url: drf.articles.comments(articlePk),
        method: 'post',
        data: comment,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_ARTICLE_COMMENTS', res.data)
        })
        .catch(err => console.error(err.response))
    },
    updateComment({ commit, getters }, { articlePk, commentPk, content }) {

      const comment = { content }

      axios({
        url: drf.articles.comment(articlePk, commentPk),
        method: 'put',
        data: comment,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_ARTICLE_COMMENTS', res.data)
        })
        .catch(err => console.error(err.response))
    },

    deleteComment({ commit, getters }, { articlePk, commentPk }) {

        if (confirm('정말 삭제하시겠습니까?')) {
          axios({
            url: drf.articles.comment(articlePk, commentPk),
            method: 'delete',
            data: {},
            headers: getters.authHeader,
          })
            .then(res => {
              commit('SET_ARTICLE_COMMENTS', res.data)
            })
            .catch(err => console.error(err.response))
        }
      },
  },
} 
