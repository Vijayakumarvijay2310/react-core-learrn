import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        loginUser === "Login"  ? setLoginUser("Logout"):setLoginUser("Login")
                        }}
                    >{loginUser}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;