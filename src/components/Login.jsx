import React from 'react';
import { useState } from 'react';
import { json, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import toast from "react-hot-toast";

function Login() {
    const navigate = useNavigate();
    const [currentlogin , setcurrentlogin] = useState();

    const [input, setInput] = useState({
        "email": "",
        "password": "",
        // "isLogin" : true
        // "isLogin" : true

    });

    // const [userDetail , setUserrDetail] = useState([]);
    const handlelogin=(e) => {
        e.preventDefault();
        const singleloggeduser = JSON.parse( localStorage.getItem("user"));
        if(input.email == singleloggeduser.email && input.password == singleloggeduser.password) {
            // singleloggeduser[id].isLogin= true;
            // // setcurrentlogin(loggeduser);
            // // console.log(loggeduser);

            // return ele;    
            localStorage.setItem("isloggedin",true);
            toast.success("successfully login");
            navigate("/");
        }else {
            toast.error("Invalid login details");
        }

//---------------------------------------------------------
// localStorage.setItem("singleuserlogin",JSON.stringify(input));

// localStorage.setItem("isloggedin",true);



// --------------------------------------------------------

// let singledata = localStorage.getItem("singleuserlogin");

// if(singledata == null){

//     singledata = [];

//     singledata.push(input);

// localStorage.setItem("singleuserlogin",JSON.stringify(singledata));

// }else{

// let singlelogindata = JSON.parse(singledata);

// singlelogindata.push(input);

// localStorage.setItem("singleuserlogin",JSON.stringify(singlelogindata));

// }

// -------------------------------------------------------------


        // const loggeduser = JSON.parse( localStorage.getItem("loginDetails"));
        

        // if(loggeduser) {
            // const user  = loggeduser.filter((ele, id) => {
            //     if(input.email == ele.email && input.password == ele.password) {
            //         loggeduser[id].isLogin= true;
            //         // setcurrentlogin(loggeduser);
            //         // console.log(loggeduser);

            //         return ele;    
            //     }

            // })
            //dispatch details form here

            // if(user.length == 1 ) {
            //     toast.success("successfully login");
            //     localStorage.setItem("loginDetails" , JSON.stringify(loggeduser));
            //     console.log(user);
            //     setcurrentlogin(loggeduser);
            //     navigate("/");
            // }
            // else {
            //     toast.error("Invalid login details");
            // }
        // }

    };
  return (
    <>
        <div className='Login' >
            <Link to="/" >
                <img  className='LoginLogo' src='https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Flipkart_logo.svg/1280px-Flipkart_logo.svg.png' alt='' />
            </Link>

            {/*Login Form start */}
            <div  className='LoginContainer' >
                <h1>Login</h1>
                <form>
                    <h3>Email</h3>
                    <input name='email' type="email" placeholder='Your Email' required onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}></input>
                    <h3 >Password</h3>
                    <input name='password' type="password" placeholder='Your Password' required onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}  ></input>
                    <button className='LoginButton' onClick={handlelogin}>Login</button>
                </form>
                <p>By continuing, you agree to Flipkart's conditons of Use Privacy</p>
                <Link to="/Signup" className='headerLink' >
                <button className='LoginButton' >Create Your Flipkart Account</button>
                </Link>
                
            </div>
        </div>
    </>
  )
}

export default Login
