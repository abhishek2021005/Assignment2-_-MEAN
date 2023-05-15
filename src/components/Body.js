import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, listOfRestaurants) {
  filteredRestaurants = listOfRestaurants.filter((res) =>
    res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filteredRestaurants;
}

function filterResult(filteredListOfRestaurants) {
  if (filteredListOfRestaurants?.length === 0)
    return <h1>No Restaurant Found</h1>;
}
const Body = () => {
  console.log("render");
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  // const [searchText, setSearchText] = useState("";)
  // destructuring of array
  //   const arr = useState(resObj);

  // const [listOfRestaurants , setlistOfRestaurants]=arr; //or in more simpler way
  // listOfRestaurants=arr[0];
  // setlistOfRestaurants=arr[1];

  useEffect(() => {
    //API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=28.7040592&lng=77.10249019999999#"
    );
    const json = await data.json();
    console.log(json);
    //optional chaining data.success.cards[5].gridWidget.gridElements.infoWithStyle.restaurants
    setlistOfRestaurants(
      json?.data?.success?.cards[5]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListOfRestaurants(
      json?.data?.success?.cards[5]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  // data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants
  // Conditional rendering
  // if listOfRestaurants is empty => shimmer UI
  // if listOfRestaurant has data => actual data UI

  // not render Component  (early return)
  if (!listOfRestaurants) return null;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            // setSearchText ("avhi");
            console.log(searchText);
            console.log(e.target.value);
            setSearchText(e.target.value);
          }}
        />
        {/* {setSearchText("avjo")} */}

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, listOfRestaurants);
            // setlistOfRestaurants(data);
            setFilteredListOfRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredRestaurants = filteredListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.1
            );
            setFilteredListOfRestaurants(filteredRestaurants);
            // console.log( listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resObj[0]}/>
          <RestaurantCard resData={resObj[1]}/>
          <RestaurantCard resData={resObj[2]}/> */}

        {/* not using keys(not acceptable) <<< index as key <<<<<<< unique id (best practice) */}
        {filterResult(filteredListOfRestaurants)}
        {filteredListOfRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}

        {/* // resName="Bikaner Foods"
            // cuisine="Biryani, North Indian, Asian" */}
        {/* /> */}
        {/* <RestaurantCard resName="KFC" cuisine="Burger,Chicken" /> */}
      </div>
    </div>
  );
};

export default Body;
