import React from 'react';

const styles = {
  image: {
    height: 110,
    width: 110,
    border: 4,
    backgroundColor: '#ccc',
  },
};

// class based componetne
class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: 'phone',
      qty: 1,
      img: '',
    };
    this.decreaseQuntity = this.decreaseQuntity.bind(this); // second way to bind function once for all
  }
  // updateQuntity = ()=>{
  //     if(this.state.qty<0) this.state.qty = 0;
  //     let quantity = document.querySelector("#first-item .quantity")
  //     quantity.innerHTML = `Qty:${this.state.qty}`
  // }
  increaseQuntity() {
    // this.state.qty++;
    // this.updateQuntity();

    this.setState({ qty: this.state.qty + 1 });
    console.log('increase', this.state);
  }
  decreaseQuntity() {
    // the abobve function no need because set state is used in the react.
    const { qty } = this.state;
    if (qty <= 0) return;
    this.setState(
      (prevState) => {
        return { qty: prevState.qty - 1 };
      },
      () => {
        /// call back function to do stuff at the end of the set state
        console.log('statuts from the call back', this.state.qty);
      }
    );
    console.log('proving that set state is asyncronous', this.state.qty);
  }
  // way 3 to bind  as we know arrow function defalut binded to refrenced object.
  deleteItem = () => {
    console.log('deleted add action', this.state.qty);
    this.setState({ qty: this.state.qty + 1 });
    console.log('deleted after action', this.state.qty);
  };
  testing = () => {
    //this proves that set state behave like syncronous in case of promises and ajax request.
    let { qty } = this.state;
    // // case 1 if object setState is used then due to bacthing effect ony last value is effective.
    // console.log("before 1 set",qty);
    // this.setState({qty:11})
    // console.log("before second",qty);
    // this.setState({qty:21})
    // console.log("before third",qty);
    // this.setState({qty:9})
    // console.log("at last",qty);
    // // case 2 if a function is used then batching solves new value from all the functions then callback functions runs.
    // console.log("first",qty);
    // this.setState(prevState=>{ return {qty:prevState.qty+5}},()=>{console.log("first callback",this.state.qty)});
    // console.log("second",qty);
    // this.setState(prevState=>{ return {qty:prevState.qty+3}},()=>{console.log("secnd callback",this.state.qty)});
    // console.log("third",qty);
    // this.setState(prevState=>{ return {qty:prevState.qty+7}},()=>{console.log("third callback",this.state.qty)});
    // console.log("last",qty);

    //case 3 if setStete done in sitde the setstate in object and function boths.
    // console.log("start ",this.state.qty)

    // this.setState(prevState=>{return {qty:40}},()=>{
    //     console.log("from before in call back",this.state.qty)
    //     this.setState({qty:10})
    //     console.log("after in call back",this.state.qty)
    // })
    // console.log("end ",this.state.qty)
    // case 4 if functional setstate is provided as callback in setstate fucntion.
    // console.log("start ",this.state.qty)

    // this.setState(prevState=>{return {qty:40}},()=>{
    //     console.log("from before in call back",this.state.qty)
    //     this.setState(()=>{return {qty:10}},()=>console.log("from depest call back ", this.state.qty))
    //     console.log("after in call back",this.state.qty)
    // })
    // console.log("end ",this.state.qty)
    // find differenct in case 4 ad this
    // console.log("start ",this.state.qty)

    // this.setState(prevState=>{return {qty:40}},()=>{
    //     console.log("from before in call back",this.state.qty)
    //     this.setState(()=>{return {qty:10}},console.log("from depest call back ", this.state.qty))
    //     console.log("after in call back",this.state.qty)
    // })
    // console.log("end ",this.state.qty)
    // what happens if use statndard function callback instead of the arrow:: binding issues.
    // console.log("first",this.state.qty);
    // this.setState(function (prevState){ return {qty:prevState.qty+5}},function(){console.log("first callback",this.state.qty)});
    // console.log("last",this.state.qty);
    // console.log('start ', this.state.qty);

    // this.setState(
    //   function (prevState) {
    //     return { qty: 40 };
    //   },
    //   function () {
    //     console.log('from before in call back', this.state.qty);
    //     this.setState(
    //       function () {
    //         return { qty: 10 };
    //       },
    //       function () {
    //         console.log('from depest call back ', this.state.qty);
    //       }
    //     );
    //     console.log('after in call back', this.state.qty);
    //   }
    // );
    // console.log('end ', this.state.qty);

    // // in promises this.setState() work like synchronous ad batching is not occures
    // const promise = new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve('done');
    //     },5000)
    // })
    // promise.then(()=>{
    //     this.setState({qty:this.state.qty+10});
    //     this.setState({qty:this.state.qty+10});
    //     this.setState({qty:this.state.qty+10});
    //     console.log('state',this.state)
    // })
  };
  render() {
    console.log('render');
    const { price, title, qty } = this.state;
    return (
      <div id="first-item" className="cart-item">
        <div className="left-block">
          <img style={styles.image} alt="./logo.png" />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: '#777' }}>price: {price}</div>
          <div className="quantity" style={{ color: '#777' }}>
            Qty: {qty}
          </div>
          <div className="cart-item-actions">
            <img
              alt="increse"
              className="action-icons"
              src="https://image.flaticon.com/icons/png/512/1828/1828926.png"
              onClick={this.increaseQuntity.bind(this)}
            />
            <img
              alt="decrese"
              className="action-icons"
              src="https://image.flaticon.com/icons/png/512/1828/1828906.png"
              onClick={this.decreaseQuntity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
              onClick={this.testing}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
