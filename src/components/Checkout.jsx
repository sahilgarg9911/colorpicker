import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Checkout.css';
import Stars from './Stars';
import toast from "react-hot-toast";

function Checkout() {
   const dispatch = useDispatch();
   let id = window.location.pathname.split("/");
//  console.log(id[1])
 if(id[1] === "Checkout"){
    id = id[2];
  }else{
    id = id[3]
  }
    let [ itm, setitm] = useState({});
    
    const param = useParams();
    // console.log(param)

    let data = async() => {
      const datajson = await fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products');

      const data = await datajson.json();
      setitm(data[id-1]);
     
      
  }
 

 const buyhandle = () => {
  
  toast('This functionality is still in progress');
 }


  useEffect(() => {
      if(param?.id) {
          data();
      }
      // console.log(param?.id);
      // console.log(itm);
  }, [param?.id])
  // console.log(itm)

const addToCartHandler = (options) => {
  dispatch({ type: "addToCart", payload: options });
  dispatch({ type: "calculatePrice" });
  toast.success("Added To Cart");
};

  return (
    <>
       <div className='Checkout' >
        <h1 className='CheckoutTag' >Checkout </h1>
        <div className='CheckoutContainer' >
          <img className='ImageContainer'src={itm.image} alt="" />
          <div className='ContentContainer' >
            <div className='ProductName' >
              <h1>{itm.title}</h1>
              <p>Visit to store</p>
              <h4>Rating 3.6/5.0</h4>
              {/* <h4>{itm["rating"]["rate"]}</h4> */}
              <Stars stars={3}/>

            </div>

            <div className='ProductPrice'>
              <p>Special Sale</p>
              {/* <h1><span>$</span>{itm.price * count}</h1> */}
            
            {/* <div className='ProdcutQuantity' >
              <h3>Quantity</h3>
              <button onClick={()=>{handleIncrement(1)}}>+</button>
            <button>{count}</button>
            <button onClick={()=>{handleDecrement(1)}}>-</button>
            </div> */}
            </div>
            <div className='ProdcutDescription' >
              <h3>About this Item</h3>
              <p>{itm.description}</p>
            </div>



          </div>
      
          <div className='BuyContainer' >

          <p>Free Delivery</p>
            <h3>In Stock</h3>
            <div className='buttonsContainer' >
            {/* <button className='addtocart'  onClick={()=>handleAdd(itm)} >Add to Cart</button><br/> */}
            <button className='buynow' onClick={buyhandle} >Buy Now</button>
            {/* <button onClick={(ele)=>addToCartHandler({ele.image })} className='buynow addtocartfromcart'>Add to Cart</button> */}
            </div>
          </div>

        </div>
      </div> 

    </>
  )
}

export default Checkout
