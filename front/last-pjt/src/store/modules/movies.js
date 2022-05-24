import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'
import Vue from 'vue'

Vue.prototype.$http = axios; 

export default {
  state: {
    movies: {},
    movie: {},
    popularMovies: {},
    genres: {},
    actors: {},
    directors: {}
  },
  getters: {
    movies: state => state.movies,
    movie: state => state.movie,
    popularMovies: state => state.popularMovies,
    genres: state => state.genres,
    actors: state => state.actors,
    directors: state => state.directors
  },
  mutations: {
    SET_MOVIES: (state, movies) => state.movies = movies,
    SET_MOVIE: (state, movie) => state.movie = movie,
    SET_POPULAR_MOVIES: (state, popularMovies) => state.popularMovies = popularMovies,
    SET_GENRES: (state, genres) => state.genres = genres,
    SET_ACTORS: (state, actors) => state.actors = actors,
    SET_DIRECTORS: (state, directors) => state.directors = directors
  },
  actions: {
    saveMovies({ commit }, movies) {
      commit('SET_MOVIES', movies)
    },
    savePopularMovies({ commit }, popularMovies) {
      commit('SET_POPULAR_MOVIES', popularMovies)
    },
    saveGenres({ commit }, genres) {
      commit('SET_GENRES', genres)
    },
    saveActors({ commit }, actors) {
      commit('SET_ACTORS', actors)
    },
    saveDirectors({ commit }, directors) {
      commit('SET_DIRECTORS', directors)
    },
    fetchMovies({ dispatch }) {
      
      axios({
        url: drf.movies.movies(),
        method: 'get',
      })
      .then(res => {
        const movies = res.data
        dispatch('saveMovies', movies)
      })
      .catch(err => {
        console.log(err)
      })
    },
    // MovieDetail에서 쓸 데이터 요청
    fetchMovie({ commit }, moviePk) {

      axios({
        url: drf.movies.movie(moviePk),
        method: 'get',
      })
      .then(res => {
        commit('SET_MOVIE', res.data)
      })
      .catch(err => {
        console.error(err)
        if (err.response.status === 404) {
          router.push({ name: 'NotFound404' })
        }
      })
    },
    // PoPularMovie.vue의 MovieCard에 뿌려줄 데이터 요청
    popularMovies({ dispatch }) {
      
      axios({
        url: drf.movies.popularMovies(),
        method: 'get',
      })
      .then(res => {
        const popularMovies = res.data
        dispatch('savePopularMovies', popularMovies)
      })
      .catch(err => {
        console.log(err)
      })
    },

    //장르 데이터 요청
    fetchGenres({ dispatch }) {

      axios({
        url: drf.movies.genres(),
        method: 'get',
      })
      .then(res => {
        const genres = res.data
        dispatch('saveGenres', genres)
      })
      .catch(err => {
        console.log(err)
      })
    },
    
    //배우 데이터 요청
    fetchActors({ dispatch }) {

      axios({
        url: drf.movies.actors(),
        method: 'get',
      })
      .then(res => {
        const actors = res.data
        dispatch('saveActors', actors)
      })
      .catch(err => {
        console.log(err)
      })
    },

    //감독 데이터 요청
    fetchDirectors({ dispatch }) {

      axios({
        url: drf.movies.directors(),
        method: 'get',
      })
      .then(res => {
        const directors = res.data
        dispatch('saveDirectors', directors)
      })
      .catch(err => {
        console.log(err)
      })
    },
  }
}