import React, { Suspense, lazy, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Login from "./src/components/Login";
import {useState,useEffect} from "react";
import UserContext from "./src/utils/UserContext";



const Grocery = lazy(()=> import('./src/components/Grocery'));
const About = lazy(()=>import('./src/components/About'));

const AppLayout = ()=>{

  const [userName,setUserName] = useState("default")

  //Authentication
  useEffect(()=>{
    //Make an API call and send username and password
    const data = {
      name:"guru"
    }
    setUserName(data.name)
  },[])

    return (
    <UserContext.Provider value={{loggedInUser:userName, setUserName}} >
      <div className="App">
      <UserContext.Provider value={{loggedInUser:"elon musk"}}>
      <Header/>
      </UserContext.Provider>
      <Outlet/>
    </div>
    </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Login/>
  },
  {     
    element: <AppLayout/>,
    children:[
    {
        path:"/home",
        element:<Body/>
    },
    {
      path:"/about",
      element: <Suspense fallback="loading..."><About/></Suspense>
    },
    {
      path:"/contact",
      element: <Contact/>
    },
    {
      path:"/grocery",
      element:<Suspense fallback="loading..."><Grocery/></Suspense>
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    },
    
  ],
  errorElement:<Error/>
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);
