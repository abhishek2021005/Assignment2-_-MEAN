import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { LOGO_URL } from "../utils/constants";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  //  read a dynamic url params
  const params = useParams();
  const { resid } = params;

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  //   data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants;
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" +
        resid
    );
    const json = await data.json();
    // console.log(json?.data?.cards[0]?.card?.card);
    console.log(json?.data);

    // setRestaurant(json?.data?.cards[0]?.card?.card);
    setRestaurant(json?.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        {/* cards[3].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name */}
        <h1>Restaurant id: {resid}</h1>
        <h2>Namaste</h2>
        <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
        <img
          src={
            CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        {console.log(
          Object.values(
            restaurant?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards || {}
          )
        )}
        <ul>
          {Object.values(
            restaurant?.cards[3].groupedCard.cardGroupMap.REGULAR.cards[2].card
              .card.itemCards || {}
          ).map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// [0].card.info.name;
// cards[3].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card
//   .info.name;
export default RestaurantMenu;
