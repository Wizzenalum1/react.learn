import React from 'react';
import Cart from './Cart';
import Navbar from'./Navbar'

class App extends React.Component {
  constructor(){
    super();
    this.state= { products:[
        {price:999990, title:'swift', qty:0, img:"https://source.unsplash.com/random/400x400/?car", id:0},
        {price:9990, title:'phone', qty:5, img:"https://source.unsplash.com/random/400x400/?phone", id:1},
        {price:1000, title:'girl', qty:6, img:"https://source.unsplash.com/random/400x400/?hot,sexy,girl",id:2},
        {price:10001, title:'laptop', qty:0, img:"https://source.unsplash.com/random/400x400/?laptop",id:3},
        {price:999, title:'watch', qty:1, img:"https://source.unsplash.com/random/400x400/?watch",id:4},   
        ],
        productCount:0  
      }
  }
  productCount = (num)=>{
    if(num){
      this.setState((prevState)=>{
        return {productCount:prevState.productCount+1}
      })
    }
  }
  handleIncreaseQuantity = (product)=>{
    // this.setState({qty:this.state.qty+1});
    console.log("increase",product,product.id);
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty +=1;
    this.setState({
        products:products
    })
    
  }
  handleDecreaseQuantity = (product)=>{
    console.log("decrease",product)
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty>0){
        products[index].qty-=1;
        this.setState({
            // products:products // because key value and index is same.
            products
        })
    }
    
  }
  handleDeleteItem = (product)=>{
    console.log("deleteing ",product);
    // this.setState({qty:this.state.qty+1});
    const {products} = this.state;
    const index = products.indexOf(product);
    products.splice(index,1);
    this.setState({products:products});
    
  }
  getCartCount = ()=>{
    const {products} = this.state;
    let count = 0;
    products.forEach(product => {
      count +=product.qty
    });
    return count
  }
  getTotalPrice = ()=>{
    const {products} = this.state;
    let totalPrice = 0;
    products.forEach(product => {
      totalPrice +=(product.price)*(product.qty)
      console.log("prot",((product.price)*(product.qty)),product.title)
    });
    return totalPrice
  }

  render() {  
    console.log("render app")
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar getCartCount={this.getCartCount}/>
        <Cart 
          products={products}
          handleIncreaseQuantity = {this.handleIncreaseQuantity}
          handleDecreaseQuantity = {this.handleDecreaseQuantity}
          handleDeleteItem = {this.handleDeleteItem}
        />
        <div style={style.footer}>
                <span style={style.price}> Total price ::{this.getTotalPrice()} </span>
        </div>
      </div>
    );
  }
}
const style = {
  footer:{
    backgroundColor: 'deepskyblue',
    width: '100%',
    height: '100px',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems:'center'
  },
  price:{
      fontSize:'1.5em',
      marginRight:'30px',
  },
}

export default App;
