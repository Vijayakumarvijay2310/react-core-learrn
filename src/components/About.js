import React from "react";
import UserClass from "./UserClass.Js";
import User from "./User.js";
import UserContext from "../utils/UserContext.js";

class About extends React.Component {
    constructor(){
        super()
        this.state={
            count:0     
        }
    }

   


  
    render(){
        return(
            <>
            <h1>About Class component</h1>
            <div>{this.state.count}</div>
            <div onClick={()=>{
                this.setState({
                    count:this.state.count -1
                })
            }}>decrease</div>
            <UserContext.Consumer>
                {({loggedInUser})=><div>{loggedInUser}</div>}
            </UserContext.Consumer>
            <UserClass/>
            <User name={"Karthi"} age={21}/>
            </>
        )
    }
}

export default About;