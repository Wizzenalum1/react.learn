import {UPdATE_POSTS} from './actionTypes.js';

export function fetchPosts(){
    return (dispatch)=>{
        const url = `http://192.168.68.52:8000/api/v1/post/index`
        fetch(url)
        .then(response=>{
            return response.json();
        }).then(data=>{
            dispatch(updatePosts(data.posts));
        }).catch(err=>{
            console.log("error in fetch posts",err)
        })
    }
}

export function updatePosts(posts){
    return{
        type:UPdATE_POSTS,
        posts
    }
}