import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants"


const useRestaurantMenu =(resId)=>{

    const[resMenuInfo,setResMenuInfo] = useState(null);
   
    useEffect(()=>{
        fetchMenu()
    },[])
    

    const fetchMenu = async () => {
        const data = await fetch(
            MENU_API + resId );

        const jsonData = await data.json();
        setResMenuInfo(jsonData.data);
        
    }

    return resMenuInfo;
}

export default useRestaurantMenu;