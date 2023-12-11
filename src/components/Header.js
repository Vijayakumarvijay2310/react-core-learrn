import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =() =>{

    const [loginUser,setLoginUser] = useState("Login");

    const onlineStatus = useOnlineStatus()
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
                    <li>Online Status:{onlineStatus? "✅" :"🛑"}</li>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li><Link to="/grocery">Grocery</Link></li>
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