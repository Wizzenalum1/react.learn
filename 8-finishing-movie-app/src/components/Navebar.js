import { Component } from 'react';
import {
  handleMovieSearch,
  addMoviesToList,
  TOGGLE_SHOW_SEARCH,
} from '../actions';
import { StoreContext, connect } from '../index';

class Navebar extends Component {
  constructor(props) {
    console.log('this is nav conse  props', props);
    super(props);
    this.state = {
      searchText: '',
    };
  }
  handleAddToMovies = (movie) => {
    this.props.dispatch(addMoviesToList(movie));
    this.handleToggle();
  };

  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };
  handleChange = (e) => {
    console.log('handle text change', e.target.value);
    this.state.searchText = e.target.value;
  };

  componentDidMount() {
    const handleSearchResult = () => {
      if (this.props.search.showSearch) {
        this.handleToggle();
      }
    };
    const doc = document.body.addEventListener('click', handleSearchResult);
  }

  handleToggle = () => {
    this.props.dispatch({ type: TOGGLE_SHOW_SEARCH });
  };
  render() {
    console.log('rener', this.props.search);
    const { searchList, showSearch } = this.props.search;

    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            search
          </button>
        </div>
        <div className="search-list">
          {showSearch &&
            searchList &&
            searchList.map((movie, index) => (
              <div className="movie-card" key={index}>
                <div className="left">
                  <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="title">{movie.Title}</div>
                <button
                  className="btn"
                  onClick={() => {
                    this.handleAddToMovies(movie);
                  }}
                >
                  add to list
                </button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

// this wrapper class is removed by a centrally written function connect that retrun function containing this class
// for each call and which we call here and things run smoothly
class NavbarWrapper extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => {
          return <Navebar store={store} />;
        }}
      </StoreContext.Consumer>
    );
  }
}
//   export default NavbarWrapper;
// const ConnectedAppComponent = connect(mapStateToProps)(Navebar);

function mapStateToProps(state) {
  return {
    search: state.search,
  };
}
// console.log(connect(mapStateToProps)(Navebar))

export default connect(mapStateToProps)(Navebar);
