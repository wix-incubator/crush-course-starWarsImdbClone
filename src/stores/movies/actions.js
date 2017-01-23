import * as types from './action-types';
import * as moviesSelectors from './reducer';

export function fetchMovieList() {
    return async(dispatch) => {
        try {
            const movieList = await moviesSelectors.getMoviesList();
            dispatch({type: types.MOVIES_FETCHED, movies:movieList});
        } catch (error) {
            console.error(error);
        }
    };
}