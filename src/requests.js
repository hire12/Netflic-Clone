// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "d5aaf136b35d5734285f4d3ff30a9631";
const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&certification=PG-13&certification_country=US`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&certification=PG-13&certification_country=US`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&certification=PG-13&certification_country=US`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&certification=PG-13&certification_country=US`,
};

export default requests;
