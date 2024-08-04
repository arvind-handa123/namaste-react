import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log("dynamic passed resturant id is : " + resId);

  // we have pass empty dependency array hence it will call only once after every time
  // component is render
  useEffect(() => {
    console.log("ResturantMenu component useEffect() is called");
    fetchMenu();
  }, []);

  console.log("ResturantMenu component is called");

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);

    const jsonData = await data.json();
    //console.log(jsonData);
    setResInfo(jsonData.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, cloudinaryImageId, city } =
    resInfo?.cards[2]?.card?.card?.info;
  console.log(resInfo?.cards[2]?.card?.card?.info);

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <h3>{city}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs. "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
