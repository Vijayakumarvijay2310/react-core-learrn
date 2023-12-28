import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCards =(props)=> {
    const {loggedInUser} = useContext(UserContext)
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,lastMileTravel,costForTwo,deliveryTime} = resData?.info;
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
                <img 
                  className="w-50 rounded-lg" 
                  src={CDN_URL+ cloudinaryImageId}
                  alt="card-loading..."
                />
                <h3 className="font-bold">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <span>
                    <h4>{avgRating} Stars</h4>
                    <h4>{lastMileTravel}</h4>
                    <h4>{costForTwo}</h4>
                    </span>
                <h4>{deliveryTime}</h4>
                <h4>User : {loggedInUser}</h4>
            </div>
    )
}

export const OfferedRestaurants = (RestaurantCards)=>{

    return (props)=>{
        return(
            <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">opened</label>
            <RestaurantCards {...props}/>
            </div>
        )
        
    }

}

export default RestaurantCards;