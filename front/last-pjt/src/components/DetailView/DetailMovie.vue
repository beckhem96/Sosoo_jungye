<template>
  <div>
    <h1>Detail</h1>
    <div>
      <img class="poster" :src="`${movie.poster_path}`" alt="">
    </div>
    <div>
      <h3>장르</h3>
      <p 
      v-for="genre in movie.genres"
      :key="genre.id">
      <router-link :to="{name:'genresMovies', params: {genrePk: `${genre.id}`} }">      
      {{ genre.name }}
      </router-link></p>
    </div>
    <div>
      <h3>출연</h3>
      <p v-for="actor in movie.actors"
      :key="actor.id">
      <router-link :to="{name:'actorsMovies', params: {actorPk: `${actor.id}`} }">      
      {{ actor.name }}
      </router-link></p>
    </div>
    <div>
      <h3>감독</h3>
      <p v-for="director in movie.directors"
      :key="director.id">
      <router-link :to="{name:'directorsMovies', params: {directorPk: `${director.id}`} }">      
      {{ director.name }}
      </router-link></p>
    </div>
    <div>platforms Link</div>
    <div>
      <h3>Overview</h3>
      <p>{{ getRating() }}</p>
    </div>
    <form @click.prevent="onDelete">
      <button>삭제</button>
    </form>
    <router-link :to="{ name: 'updateMovie', params: {moviePk: `${movie.id}`} }">
      <button>수정</button>
    </router-link>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

export default {
  name: 'DetailMovie',
  props: {
    moviePk: String,
    movie: Object
  },
  methods: {
    ...mapActions([
      'deleteMovie'
    ]),
    getRating() {
      let head = 0
      let i = 0
      for(let review of this.movie.reviews) {
        head = review.star_rating + head
        i ++
      }
      return head/i
    },
    onDelete() {
      this.deleteMovie(this.moviePk)
      this.$router.back()
    }
  },
  created() {
    this.getRating()
  }
}

</script>

<style>
.poster {
  width: 25rem;
  height: 40rem;
}
</style>