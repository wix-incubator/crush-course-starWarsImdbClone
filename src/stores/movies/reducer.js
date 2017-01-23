import * as types from './action-types';
import moviesService from '../../services/movies'
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    movies: []
});

export default function reduce(state = initialState, action) {
    switch (action.type) {
        case types.MOVIES_FETCHED:
            return state.merge({
                movies: action.movies
            });
        default:
            return state;
    }
}

export async function getMoviesList() {
    return await moviesService.getDefaultMovies();
}