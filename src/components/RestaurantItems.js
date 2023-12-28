import { CDN_URL } from "../utils/constants";


const RestaurantItems = ({foodItems})=>{
    
    return (
        <div>
        {foodItems.map((foodItems) => (
          <div
          key={foodItems?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 my-6 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{ foodItems?.card?.info?.name}</span>
                <span>-₹{foodItems?.card?.info?.price/100}</span>
              </div>
              <p className="text-xs">{foodItems?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
               <button className="p-2 mx-16 font-bold bg-black text-white shadow-lg rounded-lg ">
                 ADD +
               </button>
              </div>
              <img src={CDN_URL+foodItems?.card?.info?.imageId} className="w-full" />
            </div> 
          </div>
        ))}
    </div>
    )
}

export default RestaurantItems;