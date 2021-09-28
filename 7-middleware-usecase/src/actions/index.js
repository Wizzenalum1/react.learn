// action is just js object
// user login, successful, createpost,signout all are actions during user AuthenticatorAssertionResponse.


// {
//     type:ADD_MOVIES;
// }
// {
//     type:'DECREASE_COUNT'
// }

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
    // console.log("add moierd")
    return obj
    
}
// these functions callled action creators
export const addFavourite = function(movie){
    const obj = {
         type :ADD_FAVOURITE,
         movie
     }
    //  console.log("add fav")
     return obj   
 }

 // this function called as favourite or unfavourite button pressed
 export const toggleFavourite = function(movie){
     const obj = {
         type:TOGGLE_FAVOURITE,
         movie
     }
    //  console.log('toggle action creator favourite',obj)
     return obj
 }
 
 export function addMoviesToList(movie){
     return{
         type:ADD_MOVIE_TO_LIST,
         movie
     };
 }

 export function handleMovieSearch(searchText){

    // this function have two things first fetch and then add to the list;
    // we cant call here dispatch. so return function and used middle ware.
     const url = `http://www.omdbapi.com/?s=${searchText}&apikey=b3b5e51f`
    console.log("search text is ",searchText, url);
     return function (dispatch){
        fetch(url)
        .then(response=>response.json())
        .then(movies=>{
            console.log('movie',movies.Search,movies.Response);
            //dispatch an action

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