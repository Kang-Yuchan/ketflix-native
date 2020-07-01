import Axios from 'axios';

const API_KEY = '6f02fc19c98b10ba11c7d95a3ac0ea7a';

const makeRequest = (path: string, param: {}) =>
	Axios.get(`https://api.themoviedb.org/3/${path}`, {
		params: {
			...param,
			api_key: API_KEY
		}
	});

export const moviesAPI = {
	nowPlaying: () => makeRequest('/movie/now_playing', { language: 'ja-JP' }),
	popular: () => makeRequest('/movie/popular', { language: 'ja-JP' }),
	upComing: () => makeRequest('/movie/upcoming', { language: 'ja-JP', region: 'jp' }),
	search: (query: string) => makeRequest(`/search/movie`, { query, language: 'ja-JP' }),
	movieDetail: (id: number) => makeRequest(`/movie/${id}`, { language: 'ja-JP' }),
	discover: () => makeRequest('/discover/movie', { language: 'ja-JP' })
};

export const tvAPI = {
	today: () => makeRequest('/tv/airing_today', { language: 'ja-JP' }),
	onAirWeek: () => makeRequest('/tv/on_the_air', { language: 'ja-JP' }),
	topRated: () => makeRequest('/tv/top_rated', { language: 'ja-JP' }),
	popular: () => makeRequest('/tv/popular', { language: 'ja-JP' }),
	search: (query: string) => makeRequest('/search/tv', { query, language: 'ja-JP' }),
	tvDetail: (id: number) => makeRequest(`/tv/${id}`, { language: 'ja-JP' })
};
