import { useState, useEffect } from "react";
import { MENU_URL } from "./constant";

const useResturantMenu = (resId) => {
  //fetch resturant menu data

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  /* in above useEffect hook we have pass [] empty dependency array hence 
  it will call only once after every time component is render */

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);

    const jsonData = await data.json();
    setResInfo(jsonData.data);
  };

  return resInfo;
};

export default useResturantMenu;
