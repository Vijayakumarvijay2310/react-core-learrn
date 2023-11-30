import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body =()=>{

    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [searchFood,setSearchFood] =useState("");
    const [reSearchFood,setReSearchFood] = useState([])
    console.log(useState());

    
    useEffect(()=>{
        fetchData();
    },[])


// I have used CORS proxy.io before api in fetching data for solving CORS bypassing issue

    const fetchData= async ()=>{
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.129011&lng=77.349661&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setReSearchFood(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)    
    }
 
   
    return listOfRestaurants.length === 0 ? (
    <Shimmer/>) :(
        <div className="body">
        <div className="filters">
        <div className="search">
        <input type="text" value={searchFood} onChange={(e)=>{
            setSearchFood(e.target.value);
            let typeSearchValue =listOfRestaurants.filter(
                (value)=>value.info.name.toLowerCase().includes(e.target.value));
                setReSearchFood(typeSearchValue)  
        }}
            placeholder="Search Item..."/>
        <button className="search-button" onClick={()=>{
            let searchedRestaurant = listOfRestaurants.filter(
                (restaurantName)=>restaurantName.info.name.toLowerCase().includes(searchFood.toLowerCase())
                );
                setReSearchFood(searchedRestaurant)
        }}>Search</button>
        </div>
        
        <button className="filter-btn" onClick={()=>{
            const filteredRestaurant = listOfRestaurants.filter(
                (res)=>res.info.avgRating > 4 
                );
            setReSearchFood(filteredRestaurant)
            }}>filter high rated restaurant</button>
        </div>
        <div className="res-container">  
        {reSearchFood.map((restaurant)=>{
            return(
                <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCards  resData={restaurant}/></Link>
            )
        })}
        </div>
        </div>
    )
}

export default Body;