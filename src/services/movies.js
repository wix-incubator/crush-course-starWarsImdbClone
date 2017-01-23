const MOVIES_ENDPOINT = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '?api_key=8f0e871b28e400378a4c28cb69d27d7d';
const DEFAULT_QUERY = '&query=Star+Wars';

class MoviesService {
    async getDefaultMovies() {
        const url = `${MOVIES_ENDPOINT}${API_KEY}${DEFAULT_QUERY}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });
        const data = await response.json();
        return data.results;
    }
}

export default new MoviesService();
