// these are actions/
import {ADD_USER,REMOVE_USER} from '../action';

const initialState = [{name:"hello"},{name:"bye"}]
export const product = function(state=initialState,action){
    switch(action.type){
        case ADD_USER:
            return state.concat({...action.user})
    }
    return state;
}