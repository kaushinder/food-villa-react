import { memo } from "react";
import { CDN_URL } from "../utils/constant.js";
import { FaStar } from "react-icons/fa";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="transform transition-all duration-300 hover:scale-105">
      <div className="overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl">
        {/* Image — lazy loaded so off-screen cards don't block network */}
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <img
            className="h-full w-full object-cover"
            src={CDN_URL + cloudinaryImageId}
            alt={name}
            loading="lazy"
            decoding="async"
            width={660}
            height={192}
          />
          <div className="absolute bottom-2 right-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow-md">
            {sla?.slaString || "30-35 mins"}
          </div>
        </div>

        <div className="p-4">
          <h3 className="mb-2 text-lg font-bold text-gray-800 line-clamp-1">
            {name}
          </h3>
          <p className="mb-3 text-sm text-gray-600 line-clamp-1">
            {cuisines?.join(", ")}
          </p>
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

// HOC for promoted label — memoized separately
export const withPromotedLabel = (WrappedCard) => {
  const PromotedCard = (props) => (
    <div className="relative">
      <div className="absolute -top-2 -left-2 z-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
        🔥 Offer
      </div>
      <WrappedCard {...props} />
    </div>
  );
  PromotedCard.displayName = "PromotedCard";
  return PromotedCard;
};

// memo: re-render only when resData actually changes
export default memo(RestaurantCard);
