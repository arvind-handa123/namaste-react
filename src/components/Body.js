import ResturantCard from "./ResturantCard";
//import resturantList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable - scope will be limited to this component only - Super Powerfull Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect Callback Function is called....");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.18880&lng=72.82930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    //console.log(jsonData);

    // ? = Optional Chaining
    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Conditional Rendering or we can use ternary operator as below.
  /*if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }*/

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              //console.log(searchText);
              //console.log(listOfRestaurants);

              const filteredResturant = listOfRestaurants.filter((res) =>
                //console.log(res.info.name);
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              //console.log(filteredResturant);
              setFilteredRestaurants(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              console.log("Button is clicked");
              const filteredList = (listOfRestaurants =
                listOfRestaurants.filter((res) => res.info.avgRating > 4));
              console.log(listOfRestaurants);
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((resturant) => (
          <ResturantCard key={resturant.info.id} resturantData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
