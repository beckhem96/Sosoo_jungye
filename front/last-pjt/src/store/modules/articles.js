// import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'

export default {
  state: {
    articles: {},
    article: {}
  },
  getters: {
    articles: state => state.articles,
    article: state => state.article
  },
  mutations: {
    SET_ARTICLES: (state, articles) => state.articles = articles,
    SET_ARTICLE: (state, article) => state.article = article,
  },
  actions: {
    saveArticles({ commit }, articles) {
      commit('SET_ARTICLES', articles)
    },
    fetchArticles({ dispatch }) {
      
      axios({
        url: drf.articles.articles(),
        method: 'get'
      })
      .then(res => {
        const articles = res.data
        dispatch('saveArticles', articles)
      }) 
      .catch(err => {
        console.log(err)
      })
    },
    fetchArticle({ commit }, aritlcePk) {
        
      axios({
        url: drf.articles.article(articlePk),
        method: 'get'
      })
      .then(res => {
        const article = res.data
        commit('SET_ARTICLE', article)
      }) 
      .catch(err => {
        console.log(err)
      })
    }
  } 
}