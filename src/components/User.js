import { useEffect } from "react";

const User = (props) =>{
    const {name ,age} = props;

    useEffect(()=>{
        // const timer = setInterval(()=>{
        //     console.log("second interval called");
        // })

        // return ()=>{
        //     clearInterval(timer)
        // }
    })
    
    return(
        <div className="user">
        <h1>User</h1>
        <h2>{name}</h2>
        <h3>{age}</h3>
        </div>
    )
}

export default User;