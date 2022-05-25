const HOST = 'http://localhost:8000/api/v1/'

const ACCOUNTS = 'accounts/'
const ARTICLES = 'articles/'
const COMMENTS = 'comments/'
const MOVIES = 'movies/'

export default {
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    logout: () => HOST + ACCOUNTS + 'logout/',
    signup: () => HOST + ACCOUNTS + 'signup/',
    // Token 으로 현재 user 판단
    currentUserInfo: () => HOST + ACCOUNTS + 'user/',
    // username으로 프로필 제공
    profile: username => HOST + ACCOUNTS + 'profile/' + `${username}/`,
    recommend: () => HOST + ACCOUNTS + 'recommendation/',
    likeRecommend: recommendationPk => HOST + ACCOUNTS + 'recommendation/' + `${recommendationPk}/` + 'like/'
  },
  articles: {
    articles: () => HOST + ARTICLES,
    article: articlePk => HOST + ARTICLES + `${articlePk}/`,
    likeArticle: articlePk => HOST + ARTICLES + `${articlePk}/` + 'like/',
    comments: articlePk => HOST + ARTICLES + `${articlePk}/` + COMMENTS,
    comment: (articlePk, commentPk) =>
      HOST + ARTICLES + `${articlePk}/` + COMMENTS + `${commentPk}/`,
  },

  movies: {
    movies: () => HOST + MOVIES,
    popularMovies: () => HOST + MOVIES + 'popular/',
    movie: moviePk => HOST + MOVIES + `${moviePk}/`,
    genres: () => HOST + MOVIES + 'genres/',
    actors: () => HOST + MOVIES + 'actors/',
    directors: () => HOST + MOVIES + 'directors/',

    getActorMovies: actorPk => HOST + MOVIES + 'actors/' + `${actorPk}/`,
    getDirectorMovies: directorPk => HOST + MOVIES + 'directors/' + `${directorPk}/`,
    getGenreMovies: genrePk => HOST + MOVIES + 'genres/' + `${genrePk}/`,

    reviews: moviePk => HOST + MOVIES + `${moviePk}/` + 'reviews/',
    review: (moviePk, reviewPk) => HOST + MOVIES + `${moviePk}/` + 'reviews/' + `${reviewPk}/`,

    preferMovies: username => HOST + MOVIES + 'recommended/' + `${username}/`,
  },
}
