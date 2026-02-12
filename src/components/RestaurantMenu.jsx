import { useParams } from "react-router-dom";
import { CompleteMenuShimmer } from "./Shimmer.jsx";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.jsx";
import { useState } from "react";
import { FaStar, FaMotorcycle, FaRupeeSign } from "react-icons/fa";
import { CDN_URL } from "../utils/constant.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, loading, error } = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  // console.log("Restaurant ID:", resId);
  // console.log("Restaurant Info:", resInfo);

  if (loading) {
    return <CompleteMenuShimmer />;
  }

  // Safely extract restaurant info
  let restaurantInfo = {};
  
  try {
    if (resInfo?.cards && Array.isArray(resInfo.cards)) {
      // Find restaurant info card
      const infoCard = resInfo.cards.find(
        (card) => card?.card?.card?.info
      );
      
      if (infoCard?.card?.card?.info) {
        restaurantInfo = infoCard.card.card.info;
      }
    }
  } catch (err) {
    console.error("Error extracting restaurant info:", err);
  }

  const {
    name = "Restaurant",
    cuisines = ["Indian", "Chinese"],
    avgRating = "4.2",
    costForTwoMessage = "₹300 for two",
    sla = { slaString: "30-35 mins" },
    cloudinaryImageId = "",
    areaName = "",
    locality = ""
  } = restaurantInfo;

  // Safely extract menu categories
  let categories = [];
  
  try {
    if (resInfo?.cards && Array.isArray(resInfo.cards)) {
      const groupedCard = resInfo.cards.find((card) => card?.groupedCard);
      
      if (groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards) {
        categories = groupedCard.groupedCard.cardGroupMap.REGULAR.cards.filter(
          (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    }
  } catch (err) {
    console.error("Error extracting categories:", err);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Restaurant Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Restaurant Image */}
            {cloudinaryImageId && (
              <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={CDN_URL + cloudinaryImageId}
                  alt={name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}
            
            {/* Restaurant Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
              <p className="text-gray-600 mb-2">
                {Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}
              </p>
              
              {(areaName || locality) && (
                <p className="text-sm text-gray-500 mb-3">
                  {locality ? `${locality}, ` : ""}{areaName}
                </p>
              )}
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <span className="font-semibold">{avgRating}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <FaRupeeSign className="text-green-600" />
                  <span className="font-semibold">{costForTwoMessage}</span>
                </div>
                
                {sla?.slaString && (
                  <div className="flex items-center gap-1">
                    <FaMotorcycle className="text-orange-500" />
                    <span className="font-semibold">{sla.slaString}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Menu</h2>
          <p className="text-gray-600 text-sm">
            {categories.length > 0 
              ? `${categories.length} categories available` 
              : "Browse our delicious offerings"}
          </p>
        </div>

        {categories.length > 0 ? (
          <div className="space-y-4">
            {categories.map((category, index) => {
              try {
                return (
                  <RestaurantCategory
                    key={category?.card?.card?.title || `category-${index}`}
                    data={category?.card?.card}
                    showItems={index === showIndex}
                    setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                  />
                );
              } catch (err) {
                console.error("Error rendering category:", err);
                return null;
              }
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Menu Available
            </h3>
            <p className="text-gray-600 mb-4">
              Browse our delicious menu items below
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;