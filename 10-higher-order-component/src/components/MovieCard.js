import { Component } from 'react';
import { toggleFavourite } from '../actions';
import ToolTip from './ToolTip';
import HocCreator from './HigherOrderComponent'


class MovieCard extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         hover:false
    //     }
    // }
    // handelMouseOver = ()=>{
    //     this.setState({hover:true});
    // }
    // handelMouseOut = ()=>{
    //     this.setState({hover:false});
    // }

    handleFavouriteClick=()=>{
        const {movie} = this.props;        
        this.props.dispatch(toggleFavourite(movie));
    }

    handleFavouriteClick=()=>{
        const {movie} = this.props;        
        this.props.dispatch(toggleFavourite(movie));
    }
    
    render(){
        // before using the HOC
        // const {hover} = this.state;
        // const {movie,isMovieFavourite} = this.props
        // after using HOC
        const {hover} = this.props;

        const {movie, isMovieFavourite} = this.props
        return(
            
            <div className="movie-card" 
            style={{position:"relative"}}>
                    {/* <div 
                         className="movie-card" 
                         style={{position:"relative"}}
                         onMouseOver={this.handelMouseOver}
                          onMouseOut={this.handelMouseOut}
                         ><div className="movie-card" 
                         style={{position:"relative"}}
                 > */}
                
                {hover && <ToolTip  data={movie.Title}/>    }
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



  export default HocCreator(MovieCard);
