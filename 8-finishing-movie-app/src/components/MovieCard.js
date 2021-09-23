import { Component } from 'react';
import { toggleFavourite } from '../actions';


class MovieCard extends Component {

    handleFavouriteClick=()=>{
        const {movie} = this.props;        
        this.props.dispatch(toggleFavourite(movie));
    }
    
    render(){
        const {movie,isMovieFavourite} = this.props
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster}/>
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                            isMovieFavourite
                            ? <button className="favourite-btn unfavourite-btn" onClick={this.handleFavouriteClick}>Un-favourite</button>
                            :<button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}


  export default MovieCard;
