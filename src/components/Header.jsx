import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import '../styles/header.css';
import { useNavigate } from "react-router-dom";


const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

        const username = JSON.parse(localStorage.getItem("user"));
        const isloggedin = JSON.parse(localStorage.getItem("isloggedin"));

        const navigate = useNavigate();
        const handlelogout = () => {
            localStorage.setItem("isloggedin",false);
            navigate("/Login");
        }
        


  return (
    <>

<nav className="header">
            
    <div className='headerTop' >
        <Link to="/" className='logolink'>
            <img src='https://image.pitchbook.com/IIZvz8HxGpxmd4nnI5Irsnm0JAx1666857561209_200x200' alt='' className='logo' />
            

        </Link>
  

        <div className='headerSearch'>
    
            <div className="search">


                
                        <input type="text" placeholder="Search for products brands and more" />
                       <i className="fa-solid fa-magnifying-glass" type="submit"></i>
                    </div>

        </div>
        
        <div className='headerNavbar' >


            {
        isloggedin ? <button className='searchbtn logoutbtn' onClick={handlelogout}>Logout</button> : <Link to="/Login" className='headerLink' ><button className='searchbtn'>Login</button></Link>
    }
       

            <h5 className="username">{isloggedin ?  username.name : " "}</h5>
            

     
            <Link to="/Orders" className='headerLink' >
                <div className='headerOptions' >
                    <span className='headerOption_One'>Return</span>
                    <span className='headerOption_Two'>Order</span>
                    
                </div>
            </Link>

             <Link to="/cart" className='headerLink' >
                <div className='headerOptions_Basket' >
                    <span className='headerOption_Two basketCount'>Cart : {cartItems?cartItems.length:0}</span>
                </div>
            </Link>
        </div>

     </div>


    </nav>
    </>
  );
};





export default Header;
