// // method 1 

// // simple LikedButton class which uses react components
// class LikedButton extends React.Component{
//     constructor(prop){
//         super(prop);
//         this.state = { liked: false };
//     }
//     render(){
//         if(this.state.liked){
//             return "yeh, you like me"
//         }
//         return React.createElement(
//             'button',
//             {onClick:()=> this.setState({liked:true})},
//             'Like'
            
//             )

//     }
// }
// const app = document.getElementById('app');
// // here react DOM rendering LikedButton in the app div.
// ReactDOM.render(React.createElement(LikedButton),app);

// method 2  using JsX

// using createElement method for creating nested div file can be messy.
// to help here JsX came into the picture.

class LikedButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {like:false};
    }
    render(){
        if(this.state.like){
            return "hey, hit me hard say sorry"
        }
        return(
            <button onClick = {() =>
            this.setState({like:true})}>
                Like
            </button>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<LikedButton/>,app);

// here is two problems 
// 1. browser dont understand JsX :: inbuild bable compiler do this for us
// 2. how this import statement:: 
// wont run the file in 



