import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from'./Navbar';
import firebase from 'firebase';

class App extends React.Component {
  constructor(){
    super();
    this.state= { 
        products:[],
        productCount:0,
        loading:true,  
      }
      this.db = firebase.firestore();
  }
  componentDidMount(){
    // // method 1 for fetching the data from fire base but it will not listen the changes in firebase.
    // firebase.firestore().collection('products')
    // .get()
    // .then((snapshot)=>{
    //   // console.log("snapshot",snapshot);
    //   const products = snapshot.docs.map((doc)=>{
    //     const data = doc.data();
    //     data["id"] = doc.id;
    //     return data;
    //   });
    //   console.log(products);
    //   this.setState({products,loading:false})
    // })
    // method 2 to fetch in real time to update data as data changes in firebase we will going to use onsnapshot
    firebase.firestore().collection('products')
    // .where('price','<=',10000)
    // .where('price','>',3000)
    .orderBy('price','desc')
    .onSnapshot((snapshot)=>{
      const products = snapshot.docs.map((doc)=>{
        const data = doc.data();
        data.id = doc.id
        return data;
      });
      console.log("fetchied products are",products)
      this.setState({products,loading:false})

    })

  }
  productCount = (num)=>{
    if(num){
      this.setState((prevState)=>{
        return {productCount:prevState.productCount+1}
      })
    }
  }
  // performing increase decrease delte directly in firebase
  handleIncreaseQuantity = (product)=>{
    //Q is following two lines are extra.
    // const {products} = this.state;
    // const index = products.indexOf(product);
    const docRef = this.db.collection('products')
    .doc(product.id);
    docRef.update({
      qty:product.qty+1
    }).then(()=>{
      console.log("updated increased successufully")
    }).catch((err)=>{
      console.log("error",err);
    })
    
  }
  handleDecreaseQuantity = (product)=>{
    this.db.collection('products')
    .doc(product.id)
    .update({qty:product.qty-1})
    .then(()=>{console.log("incresed successfully")})
    .catch((err)=>{console.log("increase error",err)});    
  }
  handleDeleteItem = (product)=>{
    // console.log("deleteing ",product);
    // this.setState({qty:this.state.qty+1});
    // const {products} = this.state;
    // const index = products.indexOf(product);
    // products.splice(index,1);
    // this.setState({products:products});
    this.db.collection('products')
    .doc(product.id)
    .delete()
    .then((product)=>{console.log("product is deleted",product)})
    .catch((err)=>{console.log("error in deleteing",err)});

    
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
  // adding the cart item
  addProduct = ()=>{
    this.db
    .collection("products")
    .add({
      img:"",
      price:900,
      qty:3,
      title:'wash'
    }).then((docRef)=>{
      console.log('Product is added',docRef);
    }).catch((err)=>{
      console.log('error',err);
    })
  }

  render() {  
    console.log("render app")
    const {products,loading} = this.state;
    return (
      <div className="App">
        <Navbar getCartCount={this.getCartCount}/>
        <button onClick={this.addProduct}>Add a product</button>
        <Cart 
          products={products}
          handleIncreaseQuantity = {this.handleIncreaseQuantity}
          handleDecreaseQuantity = {this.handleDecreaseQuantity}
          handleDeleteItem = {this.handleDeleteItem}
        />
        <div style={style.footer}>
                <span style={style.price}> Total price ::{this.getTotalPrice()} </span>
        </div>
        {loading && <h1>Loading porducts....</h1>}
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
