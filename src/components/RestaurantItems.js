import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";


const RestaurantItems = ({foodItems})=>{

  const dispatch = useDispatch()

  const handleClick = (foodItem)=>{
    dispatch(addItem(foodItem))
  }
 
    return (
        <div>
        {foodItems.map((foodItem) => (
          <div
          key={foodItem?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 my-6 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{ foodItem?.card?.info?.name}</span>
                <span>-₹{foodItem?.card?.info?.price/100}</span>
              </div>
              <p className="text-xs">{foodItem?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
               <button 
               className="p-2 mx-16 font-bold bg-black text-white shadow-lg rounded-lg " 
               onClick={()=>handleClick(foodItem)}
               >
                 ADD +
               </button>
              </div>
              <img src={CDN_URL+foodItem?.card?.info?.imageId} className="w-full" />
            </div> 
          </div>
        ))}
    </div>
    )
}

export default RestaurantItems;