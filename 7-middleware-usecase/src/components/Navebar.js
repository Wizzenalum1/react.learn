import { Component } from 'react';
import { handleMovieSearch,addMoviesToList, TOGGLE_SHOW_SEARCH} from '../actions';
// import {data} from '../data'



class Navebar extends Component {
    constructor(props){
        console.log("this is nav conse  props",props)
        super(props);
        this.state={
            searchText:'superman'
        };
    }
    handleAddToMovies = (movie)=>{
        // TODO: chalne data to movie
        this.props.dispatch(addMoviesToList(movie));
        this.handleToggle();
    }

    handleSearch = () =>{
        const {searchText} = this.state;
        const {dispatch} = this.props;
        dispatch(handleMovieSearch(searchText));
    };
    handleChange=(e)=>{
        console.log("handle text change", e.target.value)
        this.state.searchText = e.target.value
    };
    handleToggle=()=>{
        this.props.dispatch({type:TOGGLE_SHOW_SEARCH})
    }


    render(){
        const {searchList,showSearch} = this.props.search;
        // console.log("NAVEBAR",searchList,typeof searchList);
        
        return(
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id = "search-btn" onClick={this.handleSearch}>search</button>
                </div>
                <div className="search-list">
                    {showSearch && searchList && searchList.map((movie,index)=>(
                        <div className="movie-card" key={index}>
                            <div className="left"><img alt="movie-poster" src={movie.Poster}/></div>
                            <div className="title">{movie.Title}</div>
                            <button className="btn" onClick={()=>{this.handleAddToMovies(movie)}}>add to list</button>
                        </div>
                    ))}
                    {showSearch && searchList && <button onClick={this.handleToggle}>close</button>}
                </div>
            </div>
        )
    }
}

export default Navebar;
