import ResturantCard from "./ResturantCard";
import resturantList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  // Local State Variable - scope will be limited to this component only - Super Powerfull Variable
  let [listOfRestaurants, setListOfRestaurants] = useState(resturantList);

  return (
    <div className="body">
      <div className="search-container">Search Component</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button is clicked");
            const filteredList = (listOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            ));
            console.log(listOfRestaurants);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resturant) => (
          <ResturantCard key={resturant.info.id} resturantData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
