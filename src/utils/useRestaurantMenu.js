import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(MENU_API + resId);
        console.log(data);
        const json = await data.json();
        setResInfo(json.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchData(); // Call fetchData here to fetch data on mount
  }, [resId]); // Include resId in the dependency array to fetch data when it changes

  return resInfo;
};

export default useRestaurantMenu;
