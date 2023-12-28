import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header =() =>{

    const [loginUser,setLoginUser] = useState("Login");

    const onlineStatus = useOnlineStatus()

    const {loggedInUser} = useContext(UserContext)
    return (
        <div className="bg-pink-100 flex justify-between shadow-lg sm:bg-yellow-100 lg:bg-blue-100">
            <div className="logo-container">
            <img 
            className="w-32"
            src={LOGO_URL}
            alt="burger-icon" />
            </div>
            <div className="flex items-center font-bold">
                Wingoo's Diary
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-2">Online Status:{onlineStatus? "✅" :"🛑"}</li>
                    <li className="px-2"><Link to="/home">Home</Link></li>
                    <li className="px-2"><Link to="/about">About Us</Link></li>
                    <li className="px-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-2">Cart</li>
                    <li className="px-2"><Link to="/grocery">Grocery</Link></li>
                    <button className="login" onClick={()=>{
                        loginUser === "Login"  ? setLoginUser("Logout"):setLoginUser("Login")
                        }}
                    ><Link to="/" >{loginUser}</Link></button>
                    <li className="px-2 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;