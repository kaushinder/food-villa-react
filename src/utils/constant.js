// CORS Proxy
export const CORS_PROXY = "https://corsproxy.io/?";

// CDN for images
export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// Logo
export const LOGO_URL =
  "https://t3.ftcdn.net/jpg/08/29/90/88/360_F_829908823_kYsRKdQcIaYEAhHRAZTIXuSKvuVPif8w.jpg";

// Restaurant List API (using Swiggy's actual API with coordinates for Greater Noida)
export const RESTAURANT_LIST_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// Menu API
export const MENU_API_BASE = 
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=";

// Helper function to get menu API with restaurant ID
export const getMenuAPI = (restaurantId) => {
  return MENU_API_BASE + restaurantId;
};