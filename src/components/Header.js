import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header =() =>{

    const [loginUser,setLoginUser] = useState("Login");

    


    return (
        <div className="header">
            <div className="logo-container">
            <img 
            className="logo"
            src={LOGO_URL}
            alt="burger-icon" />
            </div>
            <div className="app-name">
                Wingoo's Diary
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        loginUser === "Login"  ? setLoginUser("Logout"):setLoginUser("Login")
                        }}
                    ><Link to="/" >{loginUser}</Link></button>
                </ul>
            </div>
        </div>
    )
}

export default Header;