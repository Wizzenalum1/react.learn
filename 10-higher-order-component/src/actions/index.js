
// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
export const TOGGLE_FAVOURITE_TAG = 'TOGGLE_FAVOURITE_TAG';
export const ADD_MOVIE_TO_LIST="ADD_MOVIE_TO_LIST";
export const HANDLE_MOVIE_SEARCH = "HANDLE_MOVIE_SEARCH";
export const ADD_SEARCH_RESULT="ADD_SEARCH_RESULT";
export const TOGGLE_SHOW_SEARCH = "TOGGLE_SHOW_SEARCH"
// these functions callled action creators
export const addMovies = function(data){
   const obj = {
        type :ADD_MOVIES,
        movies:data
    }
    return obj
    
}
export const addFavourite = function(movie){
    const obj = {
         type :ADD_FAVOURITE,
         movie
     }
     return obj   
 }

 export const toggleFavourite = function(movie){
     const obj = {
         type:TOGGLE_FAVOURITE,
         movie
     }
     return obj
 }
 
 export function addMoviesToList(movie){
     return{
         type:ADD_MOVIE_TO_LIST,
         movie
     };
 }

 export function handleMovieSearch(searchText){
     const url = `http://www.omdbapi.com/?s=${searchText}&apikey=b3b5e51f`
     return function (dispatch){
        fetch(url)
        .then(response=>response.json())
        .then(movies=>{
            console.log('movie',movies.Search,movies.Response);
            //dispatch an action by middleware

            if(movies.Response){
                dispatch(addMovieSearchResult(movies.Search)); 
                dispatch({type:TOGGLE_SHOW_SEARCH})
            }

        })


     }
 }

 export const addMovieSearchResult = function (movies){
     return {type:"ADD_SEARCH_RESULT",movies}
 }