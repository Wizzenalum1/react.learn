import React, { Component } from 'react'
import ToolTip from './ToolTip';

export default class SearchCard extends Component {
    constructor(props){
        super(props);
        this.state={
            hover:false
        }
    }
    handelMouseOver = ()=>{
        this.setState({hover:true});
    }
    handelMouseOut = ()=>{
        this.setState({hover:false});
    }

    render() {
        // before using the HOC
        const {hover} = this.state;
        const {movie,handleAddToMovies} = this.props
        // // after using HOC
        // const {hover,handelMouseOut,handelMouseOver} = this.props;

        // const {movie, handleAddToMovies} = this.props
        return (
            <div className="movie-card"
                 style={{position:"relative"}} 
                 onMouseOver={this.handelMouseOver}
                 onMouseOut={this.handelMouseOut}
                 >
                {hover && <ToolTip  data={movie.Title}/>    }
                <div className="left">
                  <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="title">{movie.Title}</div>
                <button
                  className="btn"
                  onClick={() => {
                    handleAddToMovies(movie);
                  }}
                >
                  add to list
                </button>
              </div>
        )
    }
}

