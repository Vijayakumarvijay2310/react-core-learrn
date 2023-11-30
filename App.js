import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantDetails from "./src/components/RestaurantDetails";
import Login from "./src/components/Login";





const AppLayout = ()=>{
    return <>
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
    </>
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
      element: <About/>
    },
    {
      path:"/contact",
      element: <Contact/>
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantDetails/>
    },
    
  ],
  errorElement:<Error/>
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);
