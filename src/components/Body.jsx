import { useEffect, useState, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard.jsx";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { FaSearch, FaStar, FaUndo } from "react-icons/fa";
import { MdWifiOff } from "react-icons/md";
import UserContext from "../utils/UserContext.jsx";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { loggedInUser, setUserName } = useContext(UserContext);
  const RestaurantCardWithPromoted = withPromotedLabel(RestaurantCard);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      setIsLoading(true);
      
      // Using CORS proxy to avoid CORS issues
      const CORS_PROXY = "https://corsproxy.io/?";
      const API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
      
      const res = await fetch(CORS_PROXY + encodeURIComponent(API_URL));
      const json = await res.json();

      // Extract restaurants from Swiggy API response
      const restaurants =
        json?.data?.cards?.find(
          (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      // Fallback to mock data if API fails
      setListOfRestaurants([]);
      setFilteredRestaurants([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const handleTopRated = () => {
    const filtered = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4.3
    );
    setFilteredRestaurants(filtered);
  };

  const handleReset = () => {
    setFilteredRestaurants(listOfRestaurants);
    setSearchText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Offline UI
  if (!onlineStatus) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <MdWifiOff className="mb-4 text-7xl text-orange-500" />
        <h1 className="text-2xl font-bold text-gray-800">You're Offline</h1>
        <p className="mt-2 text-gray-500">
          Please check your internet connection and try again
        </p>
      </div>
    );
  }

  // Loading
  if (isLoading) return <Shimmer />;

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* SEARCH + FILTERS */}
        <div className="mb-8 bg-white rounded-xl shadow-md p-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="flex-1 min-w-[250px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for restaurants..."
                  className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition shadow-md hover:shadow-lg"
            >
              <FaSearch /> Search
            </button>

            <button
              onClick={handleTopRated}
              className="flex items-center gap-2 rounded-lg border-2 border-orange-500 px-6 py-3 text-sm font-semibold text-orange-500 hover:bg-orange-50 transition"
            >
              <FaStar /> Top Rated
            </button>

            <button
              onClick={handleReset}
              className="flex items-center gap-2 rounded-lg border-2 border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              <FaUndo /> Reset
            </button>
          </div>

          {/* USERNAME SECTION */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
            <label className="text-sm font-medium text-gray-600">
              Display Name:
            </label>
            <input
              type="text"
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition"
              value={loggedInUser || ""}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600 font-medium">
            Showing {filteredRestaurants.length} restaurant
            {filteredRestaurants.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* RESTAURANT GRID */}
        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={`/restaurants/${restaurant.info.id}`}
                className="transform transition hover:scale-105"
              >
                {restaurant.info.aggregatedDiscountInfoV3 ? (
                  <RestaurantCardWithPromoted resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              No restaurants found
            </h2>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;