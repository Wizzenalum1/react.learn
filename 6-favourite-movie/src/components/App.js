import {data} from '../data'
import Navbar from './Navebar';
import MovieCard from './MovieCard';
import React from 'react';
import {addMovies, TOGGLE_FAVOURITE_TAG} from '../actions'


class  App extends React.Component {



  componentDidMount(){
    // make api call to collect the data
    console.log("app js component did mount")
    // then dispatch the data to store
    const {store} = this.props;
    // useing object as parameter
    // store.dispatch({
    //   type:'ADD_MOVIES',
    //   movies:data
    // })
    // here we asubscriving the data
    store.subscribe(()=>{
      console.log("UPDATED");
      this.forceUpdate();
    })

    // but we can also use the function which will send this data
    console.log("this data is dispatched", data);
    store.dispatch(addMovies(data))
/// this will casue infinite loop.
    console.log("component is updated")
    const unsubscribe = store.subscribe(() => {
      store.dispatch({
          type: "",
      });
    });
  }
    

  isMovieFavourite = (movie)=>{
    const {favourites} = this.props.store.getState();
    const index = favourites.indexOf(movie);

    if(index!==-1){
      //found movie
      return true
    }else{
      return false
    }
  }
  handleView = (event)=>{
    console.log(event.target.innerHTML);
    const {viewFavourite} = this.props.store.getState();
    const html = event.target.innerHTML
    if((html==="Favourites" && !viewFavourite)||
        (html==="Movies" && viewFavourite)){
          console.log("here value is toggled")
          this.props.store.dispatch({type:TOGGLE_FAVOURITE_TAG});
    }
  }
  render(){
    const {list,viewFavourite,favourites} = this.props.store.getState();
    const moviesList = viewFavourite? favourites:list
    console.log("render AAP.js",this.props.store.getState())
    return (
      <div className="App">
          <Navbar />
          <div className="main">
            <div className="tabs">
              <div className="tab" onClick={this.handleView}>Movies</div>
              <div className="tab" onClick={this.handleView}>Favourites</div>
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
            </div>
          </div>
        </div>
      );
    }
  }

export default App;
