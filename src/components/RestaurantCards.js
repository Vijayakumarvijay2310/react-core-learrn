import { CDN_URL } from "../utils/constants";

const RestaurantCards =(props)=> {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,lastMileTravel,costForTwo,deliveryTime} = resData?.info;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
                <img className="res-image" 
                src={CDN_URL+ cloudinaryImageId} alt="card-loading..."/>
                <h3>{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                <span>
                    <h4>{avgRating} Stars</h4>
                    <h4>{lastMileTravel}</h4>
                    <h4>{costForTwo}</h4>
                    </span>
                <h4>{deliveryTime}</h4>
            </div>
    )
}

export default RestaurantCards;