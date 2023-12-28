import RestaurantCards from "./RestaurantCards";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { OfferedRestaurants } from "./RestaurantCards";
import UserContext from "../utils/UserContext";

const Body =()=>{

    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [searchFood,setSearchFood] =useState("");
    const [reSearchFood,setReSearchFood] = useState([])

    const {loggedInUser,setUserName} = useContext(UserContext)

    useEffect(()=>{
        fetchData();
    },[])

    const PromotedRestaurant = OfferedRestaurants(RestaurantCards)

// I have used CORS proxy.io before api in fetching data for solving CORS bypassing issue

    const fetchData= async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.129011&lng=77.349661&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setReSearchFood(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)    
    }

    const onlineStatus = useOnlineStatus()
    if(onlineStatus === false){
        return <h1>Looks like you're offline!! Please check the internet connection ;</h1>
    }
 
    return listOfRestaurants.length === 0 ? (
    <Shimmer/>) :(
        <div className="body">
        <div className="filters flex">
        <div className="search p-4 m-4">
        <input 
         type="text"
         className="border border-solid border-black focus:outline-none"
         value={searchFood} 
         onChange={(e)=>{
            setSearchFood(e.target.value);
            let typeSearchValue =listOfRestaurants.filter(
                (value)=>value.info.name.toLowerCase().includes(e.target.value));
                setReSearchFood(typeSearchValue)  
            }}
            placeholder="Search Item..."/>
        <button className="px-4 py-2 bg-green-100 m-4 rounded-lg hover:bg-green-200" 
          onClick={()=>{
            let searchedRestaurant = listOfRestaurants.filter(
                (restaurantName)=>restaurantName.info.name.toLowerCase().includes(searchFood.toLowerCase())
            );
            setReSearchFood(searchedRestaurant)
        }}>Search</button>
        </div>
        <div className="search p-4 m-4 flex items-center ">
        <button className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200" onClick={()=>{
            const filteredRestaurant = listOfRestaurants.filter(
                (res)=>res.info.avgRating > 4 
                );
            setReSearchFood(filteredRestaurant)
            }}>filter high rated restaurant</button>
        </div>
        <div className="m-4 p-4 flex items-center">
            <label>UserName :</label>
            <input value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} 
            className="p-4 m-4 border border-black" />
        </div>
        
        </div>
        <div className="flex flex-wrap">  
        {reSearchFood.map((restaurant)=>{
            return(
                <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
                    {restaurant.info.availability.opened ?
                     <PromotedRestaurant resData={restaurant} /> 
                     : <RestaurantCards  resData={restaurant}/>
                    }
                </Link>
            )
        })}
        </div>
        </div>
    )
}

export default Body;