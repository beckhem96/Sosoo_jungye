<template>
  <div class=" h-screen">
    <h1 class="text-center text-7xl text-violet50">Create Movie</h1>
    <form id='sedForm' @submit.prevent="onSubmit">

        <div class="flex flex-wrap mx-bigrem mb-xl">
        <div class="px-6 pt-4 pb-2 w-full">
          <label for="title"  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-sm text-violet50">title: </label>
          <input type="text" id="title" name="title" v-model="title" required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
        </div>
      </div>        
        <div class="flex flex-wrap mx-bigrem mb-xl">
        <div class="px-6 pt-4 pb-2 w-full">
          <label for="overview"  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-sm text-violet50">overview: </label>
          <input type="text" id="overview" name="overview" v-model="overview" required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
        </div>
      </div>
        <div class="flex flex-wrap mx-bigrem mb-xl">
        <div class="px-6 pt-4 pb-2 w-full">
          <label for="release_date"  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-sm text-violet50">release_date: </label>
          <input type="date" id="release_date" name="release_date" v-model="release_date" required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
        </div>
      </div>
        <div class="flex flex-wrap mx-bigrem mb-xl">
        <div class="px-6 pt-4 pb-2 w-full" >
          <label for="poster_path" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-sm text-violet50">poster_path: </label>
          <input type="text" id="poster_path" name="poster_path" v-model="poster_path" required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
        </div>
      </div>
        <div class="flex flex-wrap mx-bigrem mb-xl">
        <div class="px-6 pt-4 pb-2 w-full" >
          <label for="directors" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-sm text-violet50">directors: </label>
          <input type="number" id="directors" name="directors" v-model="directors" required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
        </div>
      </div>
        <div class="flex flex-wrap mx-bigrem mb-xl">
        <div class="px-6 pt-4 pb-2 w-full">
          <label for="actors" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-sm text-violet50">actors: </label>
          <input type="number" id="actors" name="actors" v-model="actors" required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
        </div>
      </div>
        <div class="flex flex-wrap mx-bigrem mb-xl">
        <div class="px-6 pt-4 pb-2 w-full">
          <label for="genres" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-sm text-violet50">genres: </label>
          <input type="number" id="genres" name="genres" v-model="genres" required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
        </div>
      </div>          
        
      <div class="flex flex-wrap ml-bigrem mb-xl">
      <div class="px-6 pt-4 pb-2">
        <button class="btn bg-violet900 text-violet50 font-bold py-2 px-4 rounded">Create</button>
      </div>
      </div>
    </form>
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