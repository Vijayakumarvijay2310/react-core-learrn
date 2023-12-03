import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
            user:{
                name:"default",
                company:"undefined",
                location:"native"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Vijayakumarvijay2310")
        const userData = await data.json()
        this.setState({
         user: userData
        })
    }

    

    render(){
        const {name,company,location} = this.state.user;
        


        return(  
            <div className="UserClass">
            <img src="https://avatars.githubusercontent.com/u/93508681?v=4" alt="userImage"></img>
            <h2>{name}</h2>
            <h3>{company}</h3>
            <h4>{location}</h4>
            <div>{this.state.count}</div>
            </div>
        )
    }
}

export default UserClass;