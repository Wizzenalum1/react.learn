import {data} from '../data'
import Navbar from './Navebar';
import MovieCard from './MovieCard';
import React from 'react';
import {addMovies, TOGGLE_FAVOURITE_TAG} from '../actions'
import {StoreContext} from '../index';

class  App extends React.Component {



  componentDidMount(){
    // make api call to collect the data
    // then dispatch the data to store
    const {store} = this.props;
    // useing object as parameter
    // store.dispatch({
    //   type:'ADD_MOVIES',
    //   movies:data
    // })
    // here we asubscriving the data
    store.subscribe(()=>{
      this.forceUpdate();
    })

    // but we can also use the function which will send this data
    // console.log("this data is dispatched", data);
    store.dispatch(addMovies(data))
  }
    

  isMovieFavourite = (movie)=>{
    const {favourites} = this.props.store.getState().movie;
    const index = favourites.indexOf(movie);

    if(index!==-1){
      //found movie
      return true
    }else{
      return false
    }
  }
  handleView = (event)=>{
    const {viewFavourite} = this.props.store.getState().movie;
    const html = event.target.innerHTML
    if((html==="Favourites" && !viewFavourite)||
        (html==="Movies" && viewFavourite)){
          this.props.store.dispatch({type:TOGGLE_FAVOURITE_TAG});
    }
  }
  render(){
    const {movie} = this.props.store.getState();
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
                dispatch = {this.props.store.dispatch} 
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

class AppWrapper extends React.Component{
  render(){
    return (
      <StoreContext.Consumer>
          {(store) =>{
            return  <App store ={store}/>
          }}
        </StoreContext.Consumer>
    )
  }
}
export default AppWrapper;
