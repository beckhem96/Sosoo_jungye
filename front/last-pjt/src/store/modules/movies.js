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
    directors: {},

    actorMovies: {},
    directorMovies: {},
    genreMovies: {}
  },
  getters: {
    movies: state => state.movies,
    movie: state => state.movie,
    popularMovies: state => state.popularMovies,
    genres: state => state.genres,
    actors: state => state.actors,
    directors: state => state.directors,
    
    actorMovies: state => state.actorMovies,
    directorMovies: state => state.directorMovies,
    genreMovies: state => state.genreMovies,
  },
  mutations: {
    SET_MOVIES: (state, movies) => state.movies = movies,
    SET_MOVIE: (state, movie) => state.movie = movie,
    SET_POPULAR_MOVIES: (state, popularMovies) => state.popularMovies = popularMovies,
    SET_GENRES: (state, genres) => state.genres = genres,
    SET_ACTORS: (state, actors) => state.actors = actors,
    SET_DIRECTORS: (state, directors) => state.directors = directors,

    ACTOR_MOVIES: (state, actorMovies) => state.actorMovies = actorMovies,
    DIRECTOR_MOVIES: (state, directorMovies) => state.directorMovies = directorMovies,
    GENRE_MOVIES: (state, genreMovies) => state.genreMovies = genreMovies,

    SET_MOVIE_REVIEWS: (state, reviews) => state.movie.reviews = reviews,

    CREATE_MOVIE: (state, movies) => state.movies = movies
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
    getGenreMovies({ commit }, genrePk) {
      axios({
        url: drf.movies.getGenreMovies(genrePk),
        method: 'get'
      })
      .then(res => {
        const genreMovies = res.data
        commit('GENRE_MOVIES', genreMovies)
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
    getActorMovies({ commit }, actorPk) {
      axios({
        url: drf.movies.getActorMovies(actorPk),
        method: 'get'
      })
      .then(res => {
        const actorMovies = res.data
        commit('ACTOR_MOVIES', actorMovies)
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
    getDirectorMovies({ commit }, directorPk) {
      axios({
        url: drf.movies.getDirectorMovies(directorPk),
        method: 'get'
      })
      .then(res => {
        const directorMovies = res.data
        commit('DIRECTOR_MOVIES', directorMovies)
      })
      .catch(err => {
        console.log(err)
      })
    },
    //리뷰
    createReview({ commit, getters }, { moviePk, content, title, star_rating }) {

      const review = { content, title, star_rating }
      console.log(star_rating)
      axios({
        url: drf.movies.reviews(moviePk),
        method: 'post',
        data: review,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_MOVIE_REVIEWS', res.data)
        })
        .catch(err => {
          if(err.response.status === 401){
            alert('로그인 후 이용해주세요!')
          }
          console.error(err.response)
        })
    },
    updateReview({ commit, getters }, { moviePk, reviewPk, content, title }) {

      const review = { content, title }

      axios({
        url: drf.movies.reviews(moviePk, reviewPk),
        method: 'put',
        data: review,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_MOVIE_REVIEWS', res.data)
        })
        .catch(err => console.error(err.response))
    },

    deleteReview({ commit, getters }, { moviePk, reviewPk }) {

        if (confirm('정말 삭제하시겠습니까?')) {
          axios({
            url: drf.movies.review(moviePk, reviewPk),
            method: 'delete',
            data: {},
            headers: getters.authHeader,
          })
            .then(res => {
              commit('SET_MOVIE_REVIEWS', res.data)
            })
            .catch(err => console.error(err.response))
        }
      },

  // createMovie({ commit, getters }, credentials) {
  //   axios({
  //     url: 'http://127.0.0.1:8000/admin/movies/movie/add/',
  //     method: 'post',
  //     data: credentials,
  //     headers: getters.authHeader
  //   })
  //     .then(res => {
  //       console.log('여기;')
  //       console.log(res.data)
  //       commit('SET_MOVIE_REVIEW', res.data)
  //     })
  //     .catch(err => console.error(err.response))
  // }
  }
}