import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   try {
  //     console.log(resId, "resid");
  //     const data = await fetch(MENU_API + resId);

  //     const json = await data.json();
  //     console.log(json.data, "abc");
  //     setResInfo(json.data);
  //   } catch (error) {
  //     console.error("Error fetching menu:", error);
  //   }
  // };
  if (resInfo === null) return <Shimmer />;
  //This one i am asking

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards[2].card.card.itemCards.filter(
      (c) =>
        c.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Dish"
    );

  // console.log("categories", categories);
  return (
    <div className="text-center">
      <br />
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <br />
      <h3 className="font-bold text-lg">
        {cuisines.join(" ,")} - {costForTwoMessage}
      </h3>
      <br />
      <div>
        {categories.map((category) => (
          <RestaurantCategory data={category?.card?.card} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
