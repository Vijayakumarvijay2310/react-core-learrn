import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantDetails from "./src/components/RestaurantDetails";
import Login from "./src/components/Login";




const Grocery = lazy(()=> import('./src/components/Grocery'));
const About = lazy(()=>import('./src/components/About'));

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
      element:<RestaurantDetails/>
    },
    
  ],
  errorElement:<Error/>
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);
