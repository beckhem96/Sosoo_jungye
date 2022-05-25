<template>
  <div>
    <h1>영화 추가하기</h1>
    <form @submit.prevent="createMovie(credentials)">
      <div>
        <label for="title">title: </label>
        <input type="text" id="title" v-model="title" required>
        <label for="overview">overview: </label>
        <input type="text" id="overview" v-model="overview" required>
        <button>추가하기</button>
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
      credentials: {
        username: 'admin',
        password: '1234',
    },
    }
  },
  methods: {
    ...mapActions([
      'createMovie'
    ]),
    onSubmit() {
      this.createMovie()
      //{ content: this.content, title: this.title}
      this.content = '',
      this.title = ''
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