<template>
  <div>
    <h1>영화 추가하기</h1>
    <form id='sedForm' @submit.prevent="onSubmit">
      <div>
        <label for="title">title: </label>
        <input type="text" id="title" name="title" v-model="title" required>
        <label for="overview">overview: </label>
        <input type="text" id="overview" name="overview" v-model="overview" required>
        <label for="release_date">release_date: </label>
        <input type="date" id="release_date" name="release_date" v-model="release_date" required>
        <label for="poster_path">poster_path: </label>
        <input type="text" id="poster_path" name="poster_path" v-model="poster_path" required>
        <label for="directors">directors: </label>
        <input type="number" id="directors" name="directors" v-model="directors" required>
        <label for="actors">actors: </label>
        <input type="number" id="actors" name="actors" v-model="actors" required>
        <label for="genres">genres: </label>
        <input type="number" id="genres" name="genres" v-model="genres" required>
        <button>추가하기</button>
      </div>
    </form>
    <p>{{ this.title }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AdminMovieAdd',
  data(){
    return{
      title: [],
      overview: [],
      release_date: [],
      poster_path: [],
      directors: [],
      actors: [],
      genres: [],
  }
},
  methods: {
    ...mapActions([
      'createMovie'
    ]),
    onSubmit() {
      var data = {
        title: this.title,
        overview: this.overview,
        release_date: this.release_date,
        poster_path: this.poster_path,
        directors: [this.directors],
        actors: [this.actors],
        genres: [this.genres]
      }
      this.createMovie(data)
    }
  },
  computed: {
    ...mapGetters([
      'movies'
    ])
  }
}
</script>

<style>

</style>