<template>
  <div>
    <h1>영화 수정하는 곳</h1>
      <label for="title">title: </label>
      <input type="text" id="title" name="title" v-model="adminMovie.title" required>
      <label for="overview">overview: </label>
      <input type="text" id="overview" name="overview" v-model="adminMovie.overview" required>
      <label for="release_date">release_date: </label>
      <input type="date" id="release_date" name="release_date" v-model="adminMovie.release_date" required>
      <label for="poster_path">poster_path: </label>
      <input type="text" id="poster_path" name="poster_path" v-model="adminMovie.poster_path" required>
      <label for="directors">directors: </label>
      <input type="number" id="directors" name="directors" v-model="adminMovie.directors" required>
      <label for="actors">actors: </label>
      <input type="number" id="actors" name="actors" v-model="adminMovie.actors" required>
      <label for="genres">genres: </label>
      <input type="number" id="genres" name="genres" v-model="adminMovie.genres" required>
      <!-- <label for="title">title: </label>
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
      <input type="number" id="genres" name="genres" v-model="adminMovie.genres" required> -->
    <form @click.prevent="onUpdate">  
      <button>수정하기</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'AdminUpdateMovie',
  data() {
    return{
      moviePk: this.$route.params.moviePk,
      // title: [],
      // overview: [],
      // release_date: [],
      // poster_path: [],
      // directors: [],
      // actors: [],
      // genres: [],
      title: this.adminMovie.title,
      overview: this.adminMovie.overview,
      release_date: this.adminMovie.release_date,
      poster_path: this.adminMovie.poster_path,
      directors: this.adminMovie.directors,
      actors: this.adminMovie.actors,
      genres: this.adminMovie.genres,
    }
  },
  methods: {
    ...mapActions([
      'detailMovie',
      'updateMovie'
    ]),
    onUpdate() {
      var data = {
        title: this.title,
        overview: this.overview,
        release_date: this.release_date,
        poster_path: this.poster_path,
        directors: [this.directors],
        actors: [this.actors],
        genres: [this.genres]
      }
      this.updateMovie(this.moviePk, data)
    }
  },
  created() {
    this.detailMovie(this.moviePk)
  },
  computed: {
    ...mapGetters([
      'adminMovie'
    ])
  }
}
</script>

<style>

</style>