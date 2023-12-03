import React from "react";
import UserClass from "./UserClass.Js";
import User from "./User.js";
import { json } from "react-router-dom";

class About extends React.Component {
    constructor(){
        super()
        this.state={
            count:0     
        }
    }

   

componentDidUpdate (){
    console.log("parent did update");
}
  
    render(){
        return(
            <>
            <h1>About</h1>
            <div>{this.state.count}</div>
            <div onClick={()=>{
                this.setState({
                    count:this.state.count -1
                })
            }}>decrease</div>
            <UserClass/>
            <User name={"Karthi"} age={21}/>
            </>
        )
    }
}

export default About;