import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantDetails =()=>{

    const [resDetailData,setResDetailData] =useState(null)
    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu()
    },[])


    const fetchMenu = async()=>{
        const data = await fetch(
            MENU_API + resId );

        const jsonData = await data.json();
        setResDetailData(jsonData.data);
        
    }

if(resDetailData === null){
    return <Shimmer/>
}

const {name,cuisines,areaName,costForTwoMessage,avgRating} = resDetailData?.cards[0]?.card?.card?.info;

const {itemCards} = resDetailData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
console.log(resDetailData);


    return (
        <div className="menu">
        <h1>{name}</h1>
        <p>{cuisines.join(",")}</p>
        <h3>{areaName}</h3>
        <h4>{costForTwoMessage}</h4>
        <h4>{avgRating}</h4>
        <ul>
            {itemCards.map((items) => ( 
              <li key={items?.card?.info?.id}>{items?.card?.info?.name} - ₹{items?.card?.info?.price/100}</li>
        ))} 
        </ul>
        </div>
    );
};

export default RestaurantDetails;