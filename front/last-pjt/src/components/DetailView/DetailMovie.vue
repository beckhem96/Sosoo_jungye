<template>
<div class="mx-auto">
  
  <div class="flex mx-md rounded overflow-hidden shadow-lg mt-md bg-violet50">
    <div>
      <img class="min-w-1/4 min-h-1/4" :src="`${movie.poster_path}`" alt="Sunset in the mountains">
    </div>

    <div>
      <div class="px-6 pt-4 font-bold text-2xl m-md ">
        {{ movie.title }}
      </div>
    <div class="px-6 pt-4 pb-2 text-sm font-semibold ml-md">
      <span>개봉일 | </span> <span>{{ movie.release_date }}</span>
    </div>
    <div class="px-6 pt-4 pb-2">
      <div class="font-bold text-xl m-md">장르</div>
      <div class="inline-block bg-violet900 text-violet50 rounded-full px-3 py-1 text-sm font-semibold mr-sm mb-sm"
        v-for="genre in movie.genres"
        :key="genre.id">
        <router-link :to="{name:'genresMovies', params: {genrePk: `${genre.id}`} }">      
        {{ genre.name }}
        </router-link></div>
    </div>

  <div class="px-6 pt-4 pb-2">
    <div class="font-bold text-xl m-md">출연</div>
    <p class="inline-block bg-violet900 text-violet50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-sm mb-sm"
      v-for="actor in movie.actors"
      :key="actor.id">
      <router-link :to="{name:'actorsMovies', params: {actorPk: `${actor.id}`} }">      
      {{ actor.name }}
      </router-link></p>
  </div>

  <div class="px-6 pt-4 pb-2">
    <div class="font-bold text-xl m-md">감독</div>
    <p class="inline-block bg-violet900 text-violet50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-sm mb-sm"
    v-for="director in movie.directors"
    :key="director.id">
    <router-link :to="{name:'directorsMovies', params: {directorPk: `${director.id}`} }">      
    {{ director.name }}
    </router-link></p>  
  </div>

  <div class="px-6 pt-4 pb-2 m-md">
    <p class="font-bold text-xl">평점</p>
    <p v-if="!getRating()" class="inline=block text-sm font-semibold mt-md">평가되지 않은 영화입니다! 평가를 남겨주세요</p>
    <p v-if="getRating()" class="inline=block text-sm font-semibold mt-md">{{ getRating() }}</p>
  </div>

  <div class="px-6 pt-4 pb-2 m-md">
    <p class="font-bold text-xl">보러가기</p>
    <div class="flex">
    <div v-if="movie.serieson[0]" class="w-20 h-20 mt-md mr-md">
      <a :href="movie.serieson[0].link">
        <img :src="require(`@/assets/ns.png`)" alt="">
      </a>
    </div>
    <div v-if="movie.google[0]" class="w-20 h-20 mt-md mr-md">
      <a :href="movie.google[0].link">
        <img :src="require(`@/assets/gg.png`)" alt="">
      </a>
    </div>
    </div>
  </div>


  <form v-if="currentUser.username === 'admin'" @click.prevent="onDelete" class="px-6 pt-4 pb-2 m-md">
    <button class="btn bg-violet900 text-violet50 font-bold py-2 px-4 rounded">
      삭제
    </button>
  </form>
  </div>
</div>
  <div class="mr-md py-10 bg-violet50">
  <p class="font-bold text-xl m-md">줄거리</p>
  <p class="text-md font-semibold tracking-wide m-md">
    {{ movie.overview}}
  </p>
  </div>
</div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'DetailMovie',
  props: {
    moviePk: String,
    movie: Object
  },
  // data() {
  //   return{
  //     serieson: 
  //   }
  // },
  methods: {
    ...mapActions([
      'deleteMovie',
      'fetchCurrentUser',
      // 'fetchMovie'
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
    },
  },
  created() {
    this.getRating()
    this.fetchCurrentUser()
    // this.fetchMovie(this.moviePk)
  },
  computed: {
    ...mapGetters([
      'currentUser',
      // 'movie'
    ])
  }
}
</script>

<style>
.poster {
  width: 25rem;
  height: 40rem;
}

</style>