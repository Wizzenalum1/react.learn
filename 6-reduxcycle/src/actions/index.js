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
export const TOGGLE_FAVOURITE_TAG = 'TOGGLE_FAVOURITE_TAG'


// these functions callled action creators
export const addMovies = function(data){
   const obj = {
        type :ADD_MOVIES,
        movies:data
    }
    console.log("add moierd")
    return obj  
}
// these functions callled action creators
export const addFavourite = function(movie){
    const obj = {
         type :ADD_FAVOURITE,
         movie
     }
     console.log("add fav")
     return obj   
 }

 // this function called as favourite or unfavourite button pressed
 export const toggleFavourite = function(movie){
     const obj = {
         type:TOGGLE_FAVOURITE,
         movie
     }
     console.log('toggle action creator favourite',obj)
     return obj
 }
 