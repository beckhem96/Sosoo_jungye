<template>
  <!-- <div class="">
    <movie-item
    v-for="movie in movies"
    :key="movie.id"
    :movie="movie"
    ></movie-item> -->
    <!-- <pagination
      :pageSetting="pageDataSetting(total, limit, block, this.page)"
      @paging="pagingMethod"
      />
    <div class="order-none" v-if="paymentInfo === []">거래내역이 없습니다.</div> -->
  <!-- </div> -->
<div class="col-sm-12">
    <div v-for="p in displayedMovies" :key="p.id">
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
      <router-link
      :to="{ name: 'detail', params: { moviePk: `${p.id}`} }">
        <img class="w-60 h-80" :src="`${p.poster_path}`" alt="">
      </router-link>
    </div>
    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">{{ p.title }}</div>
          <p class="text-gray-700 text-base">{{ p.overview }}</p>
        </div>
      </div>
  </div>
    </div>
    <nav>
			<ul class="pagination">
				<li class="page-item">
					<button type="button" class="page-link" v-if="page != 1" @click="page--"> Previous </button>
				</li>
				<li class="page-item">
					<button type="button" class="page-link" v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber" @click="page = pageNumber"> {{pageNumber}} </button>
				</li>
				<li class="page-item">
					<button type="button" @click="page++" v-if="page < pages.length" class="page-link"> Next </button>
				</li>
			</ul>
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
    color: #29b3ed;
    font-weight: 500;
}
</style>