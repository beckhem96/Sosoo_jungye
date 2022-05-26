<template>
<div>
  <div class="mx-auto rounded overflow-hidden shadow-lg mt-6">
    <img class="w-full" :src="`${movie.poster_path}`" alt="Sunset in the mountains">
    <div class="px-6 pt-4">
      <div class="font-bold text-2xl mb-2">{{ movie.title }}</div>
    </div>
  <div class="px-6 pt-4 pb-2 text-sm font-semibold">
    <span>개봉일 | </span> <span>{{ movie.release_date }}</span>
  </div>
  <div class="px-6 pt-4 pb-2">
    <div class="font-bold text-xl mb-2">장르</div>
    <p class="inline-block bg-violet50 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
      v-for="genre in movie.genres"
      :key="genre.id">
      <router-link :to="{name:'genresMovies', params: {genrePk: `${genre.id}`} }">      
      {{ genre.name }}
      </router-link></p>
  </div>

  <div class="px-6 pt-4 pb-2">
    <div class="font-bold text-xl mb-2">출연</div>
    <p class="inline-block bg-violet50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      v-for="actor in movie.actors"
      :key="actor.id">
      <router-link :to="{name:'actorsMovies', params: {actorPk: `${actor.id}`} }">      
      {{ actor.name }}
      </router-link></p>
  </div>

  <div class="px-6 pt-4 pb-2">
    <div class="font-bold text-xl mb-2">감독</div>
    <p class="inline-block bg-violet50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
    v-for="director in movie.directors"
    :key="director.id">
    <router-link :to="{name:'directorsMovies', params: {directorPk: `${director.id}`} }">      
    {{ director.name }}
    </router-link></p>  
  </div>

  <!-- <div>platforms Link</div> -->
  <div class="px-6 pt-4 pb-2">
    <!-- <h3>Overview</h3> -->
    <p class="inline=block text-sm font-semibold">{{ getRating() }}</p>
  </div>
  <form @click.prevent="onDelete" class="px-6 pt-4 pb-2">
    <button class="btn bg-violet900 text-violet50 font-bold py-2 px-4 rounded">
      삭제
    </button>
    <!-- <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
      삭제
    </button> -->
  </form>
  <!-- <router-link :to="{ name: 'updateMovie', params: {moviePk: `${movie.id}`} }">
    <button>수정</button>
  </router-link> -->
</div>
  <div class="mx-auto px-2 pt-4">
  <p class="font-bold text-xl mb-2">줄거리</p>
  <p class="text-md font-semibold tracking-wide">
    {{ movie.overview}}
  </p>
  </div>

</div>
    <!-- <div>
    <h1>Detail</h1>
    <div class="">
      <div class="card-body">
        <h2 class="text-center">{{ movie.title }}</h2>
        <img class="flex poster justify-center" :src="`${movie.poster_path}`" alt="">
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
    </div>
  </div> -->
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