// these are actions/
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";


// these are action creators

export const addUser = function(user){
    return {
        type:ADD_USER,
        user}
}

