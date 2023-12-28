// import { useState } from "react";
import RestaurantItems from "./RestaurantItems";

const RestaurantCategories = ({data,showItem,setShowItem}) =>{
    const handleClick =()=>{
        setShowItem()
    }
    return (
        <div>
            {/* Header */}
        <div className="w-6/12 border-b-2  bg-gray-50 mx-auto my-4 p-4 shadow-lg">
            <div 
            className=" flex justify-between cursor-pointer" 
            onClick={handleClick}
            >
            <span className="font-bold text-lg">
              {data.title}({data?.itemCards.length})
            </span>
            <span>⬇</span>
            </div>
           {showItem && <RestaurantItems foodItems={data.itemCards}/>}
           </div>
        </div>
        
        
    )
}

export default RestaurantCategories;