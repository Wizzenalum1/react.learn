import CartItem from './CartItem';

function Testprop(props){
  console.log(props.a,props.cat,props.dog,props.ele,props.comp);
  
  return(
    <div>
      <h2>if props property not found then value {props.a}</h2>
      <h2>if props name without value  {props.cat}</h2>
      <h2>if props name with value {props.dog}</h2>
      {/* <h2>if props name with value {...props.ele}</h2> */}
      {/* <h2>if props name with value {...props.lion}</h2> */}
    {props.comp}
    </div>
  )
}
// you can pass any thing in props like component, elements, fucntion even can change the name of prop in spread. 

function App() {
  return (
    <div className="App">
      <h1>Cart</h1>
      <CartItem/>
      <Testprop cat dog={"hello dogs"} ele={{a:1}} comp={<CartItem/>}/>


    </div>
  );
}



export default App;
