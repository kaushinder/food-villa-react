import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice.js";
import { FaShoppingCart, FaTrash, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constant.js";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      dispatch(clearCart());
    }
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  // Calculate total
  const totalPrice = cartItems.reduce((total, item) => {
    const price = item?.card?.info?.price || item?.card?.info?.defaultPrice || 0;
    return total + price;
  }, 0);

  // Fallback image
  const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23f5f5f5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='60' fill='%23ff6b35'%3E%F0%9F%8D%BD%EF%B8%8F%3C/text%3E%3C/svg%3E";

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <div className="text-8xl mb-6">🛒</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Add some delicious items to get started!</p>
        <Link
          to="/"
          className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition shadow-lg"
        >
          Browse Restaurants
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <FaShoppingCart className="text-3xl text-orange-500" />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
                <p className="text-gray-600">
                  {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
                </p>
              </div>
            </div>
            
            <button
              onClick={handleClearCart}
              className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition shadow-md"
            >
              <FaTrash />
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Items</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {cartItems.map((item, index) => {
              const { id, name, price, defaultPrice, description, imageId, isVeg } =
                item?.card?.info || {};
              
              const finalPrice = price || defaultPrice || 0;
              const uniqueKey = `cart-item-${id}-${index}`;

              return (
                <div key={uniqueKey} className="p-5 flex gap-4 hover:bg-gray-50 transition">
                  {/* Item Image */}
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200">
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
                      <div className="w-full h-full flex items-center justify-center text-4xl">
                        🍽️
                      </div>
                    )}
                  </div>

                  {/* Item Info */}
                  <div className="flex-1">
                    {/* Veg/Non-veg indicator */}
                    {isVeg !== undefined && (
                      <div className="mb-1">
                        {isVeg === 1 ? (
                          <span className="inline-flex items-center gap-1">
                            <div className="w-4 h-4 border-2 border-green-600 p-0.5">
                              <div className="w-full h-full rounded-full bg-green-600"></div>
                            </div>
                            <span className="text-xs font-semibold text-green-600">VEG</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1">
                            <div className="w-4 h-4 border-2 border-red-600 p-0.5 flex items-center justify-center">
                              <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[5px] border-b-red-600"></div>
                            </div>
                            <span className="text-xs font-semibold text-red-600">NON-VEG</span>
                          </span>
                        )}
                      </div>
                    )}

                    <h4 className="font-semibold text-gray-800 mb-1">{name}</h4>
                    <p className="font-bold text-gray-900 mb-1">
                      ₹{(finalPrice / 100).toFixed(2)}
                    </p>
                    {description && (
                      <p className="text-sm text-gray-600 line-clamp-1">{description}</p>
                    )}
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-200 transition h-fit"
                  >
                    <FaMinus className="text-xs" />
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal ({cartItems.length} items)</span>
              <span>₹{(totalPrice / 100).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Fee</span>
              <span>₹40.00</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Taxes & Fees (5%)</span>
              <span>₹{((totalPrice / 100) * 0.05).toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between text-xl font-bold text-gray-800">
                <span>Total</span>
                <span>₹{((totalPrice / 100) * 1.05 + 40).toFixed(2)}</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition shadow-lg hover:shadow-xl">
            Proceed to Checkout
          </button>
          
          <p className="text-center text-xs text-gray-500 mt-4">
            💾 Your cart is saved and will persist after refresh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;