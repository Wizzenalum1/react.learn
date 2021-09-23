import { Component } from 'react';


class Navebar extends Component {
    render(){
        return(
            <div className="nav">
                <div className="search-container">
                    <input/>
                    <button id = "search-btn">
                        search
                    </button>
                </div>
            </div>
        )
    }
}

export default Navebar;
