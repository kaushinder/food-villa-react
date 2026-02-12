import { CDN_URL } from "../utils/constant.js";
import { FaStar } from "react-icons/fa";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="transform transition-all duration-300 hover:scale-105">
      <div className="overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={CDN_URL + cloudinaryImageId}
            alt={name}
          />
          {/* Delivery Time Badge */}
          <div className="absolute bottom-2 right-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow-md">
            {sla?.slaString || "30-35 mins"}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Restaurant Name */}
          <h3 className="mb-2 text-lg font-bold text-gray-800 line-clamp-1">
            {name}
          </h3>

          {/* Cuisines */}
          <p className="mb-3 text-sm text-gray-600 line-clamp-1">
            {cuisines?.join(", ")}
          </p>

          {/* Rating and Cost */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span className="text-sm font-semibold text-gray-800">
                {avgRating || "4.0"}
              </span>
            </div>
            <span className="text-sm font-semibold text-gray-800">
              {costForTwo || "₹300 for two"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component for Promoted Label
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        {/* Promoted Badge */}
        <div className="absolute -top-2 -left-2 z-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
          🔥 Offer
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;