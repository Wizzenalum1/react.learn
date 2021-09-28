import { combineReducers } from 'redux';
import {
    ADD_MOVIES,
    ADD_FAVOURITE,
    TOGGLE_FAVOURITE,
    TOGGLE_FAVOURITE_TAG,
    ADD_MOVIE_TO_LIST,
    ADD_SEARCH_RESULT,
    TOGGLE_SHOW_SEARCH,
} from '../actions'

const initialMoviesState = {
    list: [],
    favourites: [],
    viewFavourite: false,
}
function movies(state = initialMoviesState, action) {
    console.log(action.type)
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case TOGGLE_FAVOURITE:
            let favs = [...state.favourites];
            const index = favs.indexOf(action.movie);
            if (index !== -1) favs.splice(index, 1);
            else favs.push(action.movie);
            return {
                ...state,
                favourites: favs
            }
        case TOGGLE_FAVOURITE_TAG:
            return {
                ...state,
                viewFavourite: !state.viewFavourite
            }
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                list:[action.movie,...state.list]
            }


        default:
            return state;
    }
}

const initialSearchState = {
    searchList: [],
    showSearch:false,
};
export function search(state = initialSearchState, action) {
    switch (action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                searchList:action.movies
            }
        case TOGGLE_SHOW_SEARCH:
            return{
                ...state,
                showSearch:!state.showSearch
            }

        default:
            return state;
    }
}

export default combineReducers({
    movie: movies,
    search: search
});
