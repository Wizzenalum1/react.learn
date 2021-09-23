import {ADD_MOVIES,ADD_FAVOURITE, TOGGLE_FAVOURITE, TOGGLE_FAVOURITE_TAG} from '../actions'

const initialMoviesState={
    list:[],
    favourites:[],
    viewFavourite:false,
}
export default function movies(state=initialMoviesState,action){
    console.log("in reducer")
    // if(action.type===ADD_MOVIES){
    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // return state
    console.log(action.type)
    switch (action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list:action.movies
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case TOGGLE_FAVOURITE:
            let favs = [...state.favourites];
            const index = favs.indexOf(action.movie);
            console.log('in case toggel',favs,index);
            if(index!==-1) favs.splice(index,1);
            else favs.push(action.movie);
            return{
                ...state,
                favourites:favs
            }
        case TOGGLE_FAVOURITE_TAG:
            return{
                ...state,
                viewFavourite:!state.viewFavourite
            }
            
            
        default:
            return state;
    }
}

