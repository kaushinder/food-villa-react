import { useState } from "react";
import ItemList from "./ItemList.jsx";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  if (!data) return null;

  const { title, itemCards } = data;

  if (!itemCards || itemCards.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-md mb-4 overflow-hidden">
      {/* Category Header */}
      <div
        className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50 transition"
        onClick={handleClick}
      >
        <h3 className="font-bold text-lg text-gray-800">
          {title} ({itemCards.length})
        </h3>
        {showItems ? (
          <FaChevronUp className="text-orange-500" />
        ) : (
          <FaChevronDown className="text-gray-400" />
        )}
      </div>

      {/* Category Items */}
      {showItems && (
        <div className="border-t border-gray-100">
          <ItemList items={itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;