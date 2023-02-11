import React from "react";

import { useDispatch, useSelector } from "react-redux";
// import { removeAll } from "../redux/reducers";
// import { removeAll } from "../redux/cartSlice";
import '../styles/cart.css';
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const isloggedin = JSON.parse(localStorage.getItem("isloggedin"));
  console.log(isloggedin);
  const paymenthandle = () => {
    if(!isloggedin) {
      toast.error("Please Login");
    }
    if(isloggedin) {
      toast.success("Payment Successful");
      
    }
    
  };

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });

    dispatch({ type: "calculatePrice" });
  };
  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };

  function handleRemoveAll(){
    // console.log(product)
  // dispatch(removeAll())
  dispatch({
    type: "removeAll"
  });
  // dispatch({ type: "calculatePrice" });
  }

  return (
    <div className="cart">
      <main>
      {/* <button type='button' className='Removeall' onClick={handleRemoveAll} >Remove All</button> */}
      {/* {cartItems?.length > 0 ? ( <button type='button' className='Removeall' onClick={handleRemoveAll} >Remove All</button>) : ( "" )} */}
        {cartItems?.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        )  : (
          <h1 className="empty">Your Cart is Empty</h1>
          
        )}
               <Link to="/" className='logolink'>
            
            {cartItems?.length > 0 ? ("") :  ( <button type='button' className='shopnow' onClick={handleRemoveAll} >Shop Now</button>)}
            

        </Link>
       
      </main>

      <aside className="amounts">
        <h2>Subtotal Amount: ${ subTotal ?  Math.trunc( subTotal ) : 0}</h2>
        <h2>Shipping: ${ shipping ? Math.trunc( shipping ) : 0 }</h2>
        <h2>Tax: ${tax ? Math.trunc( tax ) : 0 }</h2>
        <h2>Total Amount: ${  total ?  Math.trunc( total ) : 0 }</h2>
        {cartItems?.length > 0 ? ( <button type='button' className='Removeall' onClick={handleRemoveAll} >Remove All</button>) : ( "" )}
        {cartItems?.length > 0 ? ( <button type='button' className='paybtn' onClick={paymenthandle} >Proceed to Pay</button>) : ( "" )}
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div>
  <div className="Products">
    <img className="productimgcart" src={imgSrc} alt="Item" />
    <article className="nameandprice">
      <h3>{name}</h3>
      <p>${price}</p>
    </article>

    <div className="quantitybtn">
      <button className="dec" onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button className="inc" onClick={() => increment(id)}>+</button>
    </div>
    

    {/* <AiFillDelete onClick={() => deleteHandler(id)} /> */}
    <button className="removeitem" onClick={() => deleteHandler(id)}>Remove Item</button>
  </div>
  </div>
);

export default Cart;
