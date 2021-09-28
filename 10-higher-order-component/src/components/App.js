import {data} from '../data'
import Navbar from './Navebar';
import MovieCard from './MovieCard';
import React from 'react';
import {addMovies, TOGGLE_FAVOURITE_TAG} from '../actions'
// import {StoreContext,connect} from '../index';
import {connect} from 'react-redux';

class  App extends React.Component {
  componentDidMount(){
    this.props.dispatch(addMovies(data))
  }
    

  isMovieFavourite = (movie)=>{
    const {favourites} = this.props.movie;
    const index = favourites.indexOf(movie);
    if(index!==-1){
      //found movie
      return true
    }else{
      return false
    }
  }
  handleView = (event)=>{
    const {viewFavourite} = this.props.movie;
    const html = event.target.innerHTML
    if((html==="Favourites" && !viewFavourite)||
        (html==="Movies" && viewFavourite)){
          this.props.dispatch({type:TOGGLE_FAVOURITE_TAG});
    }
  }

  // way 2 to use consumer here we create a wrapper parent arround this class. to access the store in child lifecycle methods.
  render(){
    const {movie} = this.props;
    const {list,viewFavourite,favourites} =movie; 
    const moviesList = viewFavourite? favourites:list;
    return (
      <div className="App">
          <Navbar/>
          <div className="main">
            <div className="tabs">
              <div className={viewFavourite?"tab":"tab active-tab"}  onClick={this.handleView}>Movies</div>
              <div className={viewFavourite?"tab active-tab":"tab"} onClick={this.handleView}>Favourites</div>
            </div>
            <div className="list">
              {moviesList && moviesList.map((movie,index)=>(
                <MovieCard 
                movie={movie} 
                dispatch = {this.props.dispatch} 
                key={`movies-${index}`}
                isMovieFavourite={this.isMovieFavourite(movie)}
                />
              ))}
              {moviesList.length===0 && <h2>No playlist to show </h2>}
            </div>
          </div>
        </div>
      );
    }
  }

const mapStateToProps=({movie})=>{
  return{
    movie
  }
}
const AppConnectedWrapper = connect(mapStateToProps)(App);
export default AppConnectedWrapper;
