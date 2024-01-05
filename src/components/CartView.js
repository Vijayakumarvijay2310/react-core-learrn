import { useDispatch, useSelector } from "react-redux";
import RestaurantItems from "./RestaurantItems";
import { clearCart } from "../utils/cartSlice";




const CartView = () =>{

    const cartItem = useSelector((store)=>store.cart.item)
    const dispatch = useDispatch()

    const handleClick = () =>{
        dispatch(clearCart())
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={handleClick}>Clear Cart</button>
                {cartItem.length === 0 && <h1 className="text-bold">Cart is empty. Add Items to the cart!</h1>}
                <RestaurantItems foodItems={cartItem}/>
            </div>
        </div>

    )
}

export default CartView;