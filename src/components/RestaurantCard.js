import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // console.log(props.resData.resData.info.cloudinaryImageId);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  // console.log(costForTwo);
  return (
    <div className="m-4 p-4 w-[300px] rounded-lg bg-white hover:bg-gray-100 shadow-md">
      <img
        className="rounded-lg w-full h-[250px] object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant"
      />
      <h3 className="font-bold text-xl my-2 text-gray-900">{name}</h3>
      <p className="text-gray-600 truncate">{cuisines.join(", ")}</p>
      <div className="flex items-center my-2">
        <span className="text-yellow-500">
          {[...Array(Math.floor(avgRating))].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-current"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0L13.09 6.45 20 7.35l-4.55 5.03L17.64 20 10 16.18 2.36 20l1.19-7.62L0 7.35l6.91-0.9L10 0z"
              />
            </svg>
          ))}
        </span>
        <span className="ml-1">{avgRating} stars</span>
      </div>
      <p className="text-gray-800 font-semibold">Cost for Two: {costForTwo}</p>
      <p className="text-gray-800">Delivery Time: {deliveryTime} minutes</p>
    </div>
  );
};
//Higher order components

//input Restaurant Card==>output will be restaurant card promoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          {props.resData.info.aggregatedDiscountInfoV3.subHeader}
        </label>
        <RestaurantCard resData={props.resData} />
      </div>
    );
  };
};
export default RestaurantCard;
