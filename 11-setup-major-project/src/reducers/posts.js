import { UPdATE_POSTS } from "../actions/actionTypes";
export default function posts(state = [],action) {
  switch (action.type) {
    case UPdATE_POSTS:
      return action.posts;  
    default:
      return state;
  }
  
}
