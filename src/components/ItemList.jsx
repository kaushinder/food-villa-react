import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";
import { CDN_URL } from "../utils/constant.js";
import { FaStar, FaPlus } from "react-icons/fa";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  if (!items || items.length === 0) return null;

  // Base64 fallback image - always works, no network needed
  const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23f5f5f5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='60' fill='%23ff6b35'%3E%F0%9F%8D%BD%EF%B8%8F%3C/text%3E%3C/svg%3E";

  return (
    <div className="divide-y divide-gray-100">
      {items.map((item) => {
        const { id, name, price, defaultPrice, description, imageId, ratings, isVeg } =
          item?.card?.info || {};

        const finalPrice = price || defaultPrice || 0;
        const rating = ratings?.aggregatedRating?.rating;

        return (
          <div key={id} className="p-5 flex gap-4 hover:bg-gray-50 transition">
            {/* Item Info */}
            <div className="flex-1">
              {/* Veg/Non-veg indicator */}
              {isVeg !== undefined && (
                <div className="mb-2">
                  {isVeg === 1 ? (
                    <div className="inline-flex items-center gap-1">
                      <div className="w-5 h-5 border-2 border-green-600 p-0.5 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                      </div>
                      <span className="text-xs font-semibold text-green-600">VEG</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1">
                      <div className="w-5 h-5 border-2 border-red-600 p-0.5 flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-red-600"></div>
                      </div>
                      <span className="text-xs font-semibold text-red-600">NON-VEG</span>
                    </div>
                  )}
                </div>
              )}

              {/* Item Name */}
              <h4 className="font-semibold text-gray-800 mb-1 text-lg">{name}</h4>

              {/* Price */}
              <p className="font-bold text-gray-900 mb-2 text-lg">
                ₹{(finalPrice / 100).toFixed(2)}
              </p>

              {/* Rating */}
              {rating && (
                <div className="flex items-center gap-1 mb-2">
                  <FaStar className="text-yellow-500 text-xs" />
                  <span className="text-sm font-semibold text-gray-700">
                    {rating}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({ratings?.aggregatedRating?.ratingCount || "0"})
                  </span>
                </div>
              )}

              {/* Description */}
              {description && (
                <p className="text-sm text-gray-600 line-clamp-2">
                  {description}
                </p>
              )}
            </div>

            {/* Item Image & Add Button */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="relative w-32 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200">
                {imageId ? (
                  <img
                    src={CDN_URL + imageId}
                    alt={name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = FALLBACK_IMAGE;
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    🍽️
                  </div>
                )}
              </div>
              
              <button
                onClick={() => handleAddItem(item)}
                className="flex items-center gap-2 bg-orange-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-orange-600 transition shadow-md hover:shadow-lg active:scale-95"
              >
                <FaPlus className="text-xs" />
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;