import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signupform from "./components/Signupform";
import Checkout from "./components/Checkout";
import Dataprovider from "./context/Dataprovider";


import "./styles/app.scss";

function App() {
    return (

        <
        BrowserRouter >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/cart"
        element = { < Cart / > }
        /> <
        Route path = "/Login"
        element = { < Login / > }
        /> <
        Route path = "/Signup"
        element = { < Signupform / > }
        /> <
        Route path = "/Checkout/:id"
        element = { < Checkout / > }
        /> <
        /Routes> <
        Toaster / >
        <
        /BrowserRouter>

    );
}

export default App;