import Axios from 'axios';

const API_KEY = '6f02fc19c98b10ba11c7d95a3ac0ea7a';

const makeRequest = (path: string, params: {}) =>
	Axios.get(`https://api.themoviedb.org/3/${path}`, {
		params: {
			...params,
			api_key: API_KEY
		}
	});

const getAnything = async (path: string, params = {}) => {
	try {
		const { data: { results }, data } = await makeRequest(path, params);
		return [ results || data, null ];
	} catch (error) {
		return [ null, error ];
	}
};

export const moviesAPI = {
	nowPlaying: () => getAnything('movie/now_playing', { language: 'ja-JP' }),
	popular: () => getAnything('movie/popular', { language: 'ja-JP' }),
	upComing: () => getAnything('movie/upcoming', { language: 'ja-JP', region: 'jp' }),
	search: (query: string) => getAnything(`search/movie`, { query, language: 'ja-JP' }),
	movieDetail: (id: number) => getAnything(`movie/${id}`, { language: 'ja-JP' }),
	discover: () => getAnything('discover/movie', { language: 'ja-JP' })
};

export const tvAPI = {
	today: () => getAnything('tv/airing_today', { language: 'ja-JP' }),
	onAirWeek: () => getAnything('tv/on_the_air', { language: 'ja-JP' }),
	topRated: () => getAnything('tv/top_rated', { language: 'ja-JP' }),
	popular: () => getAnything('tv/popular', { language: 'ja-JP' }),
	search: (query: string) => getAnything('search/tv', { query, language: 'ja-JP' }),
	tvDetail: (id: number) => getAnything(`tv/${id}`, { language: 'ja-JP' })
};
