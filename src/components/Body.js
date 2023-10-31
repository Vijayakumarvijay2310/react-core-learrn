import RestaurantCards from "./RestaurantCards";
import {restaurants} from "../utils/mockData"
import { useState } from "react";

const Body =()=>{

    const [listOfRestaurants,setListOfRestaurants] = useState(restaurants);

    return (
        <div className="body">
        <div className="btn">
        <button className="filter-btn" onClick={()=>{
            const filteredRestaurant = listOfRestaurants.filter(
                (res)=>res.info.avgRating > 4 
                );
            setListOfRestaurants(filteredRestaurant)
            }}>filter high rated restaurant</button>
        </div>
        <div className="res-container">  
        {listOfRestaurants.map((restaurant)=>{
            return(
                <RestaurantCards key={restaurant.info.id} resData={restaurant}/>
            )
        })}
        </div>
        </div>
    )
}

export default Body;