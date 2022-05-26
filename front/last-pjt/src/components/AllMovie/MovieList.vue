<template>
<div class="col-sm-12">
  <div v-for="p in displayedMovies" :key="p.id" class="">
    <div class="flex my-md rounded-xl mx-xl w-auto shadow-2xl rounded-lg bg-violet50">
      <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden">
        <router-link
          :to="{ name: 'detail', params: { moviePk: `${p.id}`} }">
          <img class="w-60 h-80 rounded-lg" :src="`${p.poster_path}`" alt="">
        </router-link>
      </div>
      <div class="my-md rounded-xl">
      <div class="text-gray-900 font-bold text-xl m-md ">{{ p.title }}</div>
      <div class="text-gray-700 text-base m-md font-semibold">{{ p.overview }}</div>
      </div>
  </div>
    </div>
    <nav class="flex justify-center py-20">
      <div class="shadow-2xl">
        <button type="button" class="page-link  bg-violet900 border w-20 mr-md rounded" v-if="page != 1" @click="page--"> Previous </button>
        </div>
			<div class="shadow-2xl">
        <button type="button" class="page-link bg-violet900 border w-10 rounded" v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber" @click="page = pageNumber"> {{ pageNumber }} </button>
        </div>
			<div class="shadow-2xl">
        <button type="button" @click="page++" v-if="page < pages.length" class="page-link bg-violet900 border w-20 ml-md rounded"> Next </button>
        </div>
		</nav>
</div>
</template>

<script>
// import MovieItem  from './MovieItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'MovieList',
  components: {
    // MovieItem,
  },
    data () {
		return {
			page: 1,
			perPage: 5,
			pages: [],		
		}
	},
	methods:{
		setPages () {
			let numberOfPages = Math.ceil(this.movies.length / this.perPage);
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
      let page = 2
      console.log(this.pages.slice(page-1, page+5))
		},
		paginate () {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  this.movies.slice(from, to);
		},
    // pageNumbers(){
    //   return this.pages.slice(this.page-1, page+5)
    // }
	},
	computed: {
    ...mapGetters([
      'movies'
    ]),
		displayedMovies () {
			return this.paginate();
		}
	},
	created() {
			this.setPages()
	},
	filters: {
		trimWords(value){
			return value.split(" ").splice(0,20).join(" ") + '...';
		}
	}
}
</script>

<style>
button.page-link {
	display: inline-block;
}
button.page-link {
    font-size: 20px;
    color: white;
    font-weight: 500;
}
</style>