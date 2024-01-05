import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu =()=>{

   const {resId} = useParams();
   const resDetailData =  useRestaurantMenu(resId)
   const [showItem,setShowItem] = useState(null)

if(resDetailData === null){
    return <Shimmer/>
}

const {name,cuisines,costForTwoMessage} = resDetailData?.cards[0]?.card?.card?.info;

// const {itemCards} = resDetailData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


const itemCategory = resDetailData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (value)=>
     value?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
)

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 p-3 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            {/* Categories Accordian */}
                {itemCategory.map((category,index)=> (
                    <RestaurantCategories 
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItem={index === showItem ? true : false }
                    index = {index}
                    setShowItem = {() => setShowItem(showItem === index ? null : index)}
                    />
               ))}     
        </div>
    );
};

export default RestaurantMenu;