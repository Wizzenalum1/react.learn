import React from 'react'

// // this the function which will return a HOC component after taking an component
// // 

// HOC creator.
export default function HocCreator(Component){
    class HigherOrderComponent extends React.Component {
        constructor(props){
            super(props);
            this.state={
                hover:false
            }
        }
        handelMouseOver = ()=> this.setState({hover:true});
        handelMouseOut = ()=> this.setState({hover:false});
        render() {
            return (
                <div onMouseOver={this.handelMouseOver}
                onMouseOut={this.handelMouseOut}>
                    <Component hover={this.state.hover} {...this.props}/>
                </div>
            )
        }
    }
    return HigherOrderComponent;
}





