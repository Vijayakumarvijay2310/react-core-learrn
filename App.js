import React from "react";
import ReactDOM from "react-dom/client";



const Header =() =>{
    return (
        <div className="header">
            <div className="logo-container">
            <img 
            className="logo"
            src="https://media.istockphoto.com/id/1015634654/vector/burger-colorful-vector-cartoon-fast-food-burger-vector-clipart-icon.jpg?s=1024x1024&w=is&k=20&c=4TbuEzz5w2QQCQH5xwWWU1orVDfLAMxMrM1x0N2ULfQ="
            alt="burger-icon" />
            </div>
            <div className="app-name">
                Wingoo's Diary
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const RestaurantCards =(props)=> {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,lastMileTravel,costForTwo,deliveryTime} = resData?.info;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
                <img className="res-image" 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} alt="card-loading..."/>
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

const restaurants = [
    {
        "info": {
        "id": "168103",
        "name": "Dindigul Thalappakatti",
        "cloudinaryImageId": "pot3r7msxqbwftzf3jqj",
        "locality": "Valipalayam",
        "areaName": "Tiruppur",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Biryani",
        "Barbecue",
        "South Indian",
        "Chinese",
        "North Indian"
        ],
        "avgRating": 3.9,
        "feeDetails": {
        "restaurantId": "168103",
        "fees": [
        {
        "name": "BASE_TIME"
        },
        {
        "name": "BASE_DISTANCE",
        "fee": 2100
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2100
        },
        "parentId": "332",
        "avgRatingString": "3.9",
        "totalRatingsString": "5K+",
        "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-10-27 00:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
        },
        "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/dindigul-thalappakatti-valipalayam-tiruppur-tirupur-168103",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "72853",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "zhhcakpykqj1nirqoqvk",
        "locality": "Valliammai Nagar",
        "areaName": "Tiruppur",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
        ],
        "avgRating": 4.1,
        "feeDetails": {
        "restaurantId": "72853",
        "fees": [
        {
        "name": "BASE_TIME"
        },
        {
        "name": "BASE_DISTANCE",
        "fee": 2100
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2100
        },
        "parentId": "2456",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 30,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-10-27 02:55:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-valliammai-nagar-tiruppur-tirupur-72853",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "227090",
        "name": "The Good Bowl",
        "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
        "locality": "Valipalayam",
        "areaName": "Tiruppur",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4.2,
        "feeDetails": {
        "restaurantId": "227090",
        "fees": [
        {
        "name": "BASE_TIME"
        },
        {
        "name": "BASE_DISTANCE",
        "fee": 2100
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2100
        },
        "parentId": "7918",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-10-26 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/the-good-bowl-valipalayam-tiruppur-tirupur-227090",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "440678",
        "name": "KFC",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "locality": "Kumar Nagar",
        "areaName": "Tiruppur",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
        ],
        "avgRating": 3.9,
        "feeDetails": {
        "restaurantId": "440678",
        "fees": [
        {
        "name": "BASE_DISTANCE",
        "fee": 2000
        },
        {
        "name": "BASE_TIME"
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2000
        },
        "parentId": "547",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-10-26 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "EVERY ITEM",
        "subHeader": "@ ₹179"
        },
        "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-kumar-nagar-tiruppur-tirupur-440678",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "89578",
        "name": "UBQ by Barbeque Nation",
        "cloudinaryImageId": "socq1wqohuess9twd3mo",
        "locality": "Valipalayam",
        "areaName": "Tiruppur",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
        ],
        "avgRating": 3.7,
        "feeDetails": {
        "restaurantId": "89578",
        "fees": [
        {
        "name": "BASE_TIME"
        },
        {
        "name": "BASE_DISTANCE",
        "fee": 2100
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2100
        },
        "parentId": "10804",
        "avgRatingString": "3.7",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "19 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-10-26 23:30:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-valipalayam-tiruppur-tirupur-89578",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "350171",
        "name": "A1 Biriyani Godown",
        "cloudinaryImageId": "xggsklayjvtncso3kyfn",
        "locality": "Rayapuram",
        "areaName": "Odakkadu",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "Biryani",
        "Chinese",
        "Grill",
        "Continental"
        ],
        "avgRating": 4,
        "feeDetails": {
        "restaurantId": "350171",
        "fees": [
        {
        "name": "BASE_TIME"
        },
        {
        "name": "BASE_DISTANCE",
        "fee": 2100
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2100
        },
        "parentId": "25035",
        "avgRatingString": "4.0",
        "totalRatingsString": "5K+",
        "sla": {
        "deliveryTime": 13,
        "lastMileTravel": 1,
        "serviceability": "SERVICEABLE",
        "slaString": "13 mins",
        "lastMileTravelString": "1.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-10-26 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/a1-biriyani-godown-rayapuram-odakkadu-tirupur-350171",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "227089",
        "name": "Sweet Truth - Cake and Desserts",
        "cloudinaryImageId": "4a3b48488e3aa9bda13efd8cfcd95284",
        "locality": "Valipalayam",
        "areaName": "Tiruppur",
        "costForTwo": "₹450 for two",
        "cuisines": [
        "Snacks",
        "Bakery",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4.2,
        "veg": true,
        "feeDetails": {
        "restaurantId": "227089",
        "fees": [
        {
        "name": "BASE_TIME"
        },
        {
        "name": "BASE_DISTANCE",
        "fee": 2100
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2100
        },
        "parentId": "4444",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 13,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "13 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-10-26 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-valipalayam-tiruppur-tirupur-227089",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "227085",
        "name": "Faasos - Wraps & Rolls",
        "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
        "locality": "Valipalayam",
        "areaName": "Tiruppur",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4.2,
        "feeDetails": {
        "restaurantId": "227085",
        "fees": [
        {
        "name": "BASE_TIME"
        },
        {
        "name": "BASE_DISTANCE",
        "fee": 2100
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2100
        },
        "parentId": "21809",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-10-26 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-valipalayam-tiruppur-tirupur-227085",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "579698",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "8cb220fa3997a3b928d2ffb6c098acaf",
        "locality": "Velampalayam",
        "areaName": "Tiruppur",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Waffle",
        "Desserts",
        "Ice Cream",
        "Beverages"
        ],
        "avgRating": 4.4,
        "veg": true,
        "feeDetails": {
        "restaurantId": "579698",
        "fees": [
        {
        "name": "BASE_TIME"
        },
        {
        "name": "BASE_DISTANCE",
        "fee": 2600
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2600
        },
        "parentId": "2233",
        "avgRatingString": "4.4",
        "totalRatingsString": "500+",
        "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 4.6,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "4.6 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-10-27 01:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-velampalayam-tiruppur-tirupur-579698",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "227088",
        "name": "Firangi Bake",
        "cloudinaryImageId": "yrg4uci0lsiova7izbch",
        "locality": "Court Street",
        "areaName": "Valipalayam",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Mexican",
        "Healthy Food",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4.2,
        "feeDetails": {
        "restaurantId": "227088",
        "fees": [
        {
        "name": "BASE_TIME"
        },
        {
        "name": "BASE_DISTANCE",
        "fee": 2100
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2100
        },
        "parentId": "3952",
        "avgRatingString": "4.2",
        "totalRatingsString": "500+",
        "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-10-26 23:59:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "description": "",
        "fontColor": "#7E808C",
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/firangi-bake-court-street-valipalayam-tirupur-227088",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "89895",
        "name": "Bismi Biriyani Center",
        "cloudinaryImageId": "rhpefjaehvcwnfzgu199",
        "locality": "Valliammai Nagar",
        "areaName": "Kangayam Cross Road",
        "costForTwo": "₹150 for two",
        "cuisines": [
        "Chinese",
        "North Indian",
        "Biryani"
        ],
        "avgRating": 4.1,
        "feeDetails": {
        "restaurantId": "89895",
        "fees": [
        {
        "name": "BASE_TIME"
        },
        {
        "name": "BASE_DISTANCE",
        "fee": 2100
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2100
        },
        "parentId": "6963",
        "avgRatingString": "4.1",
        "totalRatingsString": "5K+",
        "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "15 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-10-26 23:58:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/bismi-biriyani-center-valliammai-nagar-kangayam-cross-road-tirupur-89895",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "227087",
        "name": "Oven Story Pizza - Standout Toppings",
        "cloudinaryImageId": "ab979bffbd658e74de650a15ca0092a3",
        "locality": "Valipalayam",
        "areaName": "Tiruppur",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4.1,
        "feeDetails": {
        "restaurantId": "227087",
        "fees": [
        {
        "name": "BASE_TIME"
        },
        {
        "name": "BASE_DISTANCE",
        "fee": 2100
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2100
        },
        "parentId": "3534",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-10-26 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-valipalayam-tiruppur-tirupur-227087",
        "type": "WEBLINK"
        }
        },
        
]

const Body =()=>{
    return (
        <div className="body">
        <div className="search">Search</div>
        <div className="res-container">  
        
        {restaurants.map((restaurant)=>{
            return(
                <RestaurantCards key={restaurant.info.id} resData={restaurant}/>
            )
        })}  
          
        </div>
        </div>
    )
}


const AppLayout = ()=>{
    return <>
    <div className="App">
      <Header/>
      <Body/>
    </div>
    </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);
