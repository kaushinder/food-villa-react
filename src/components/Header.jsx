import { memo, useState } from "react";
import { LOGO_URL } from "../utils/constant.js";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useAuth } from "../utils/AuthContext.jsx";
import { useSelector } from "react-redux";
import {
  FaHome, FaInfoCircle, FaPhoneAlt, FaShoppingCart,
  FaStore, FaSignInAlt, FaSignOutAlt, FaUser,
} from "react-icons/fa";
import { MdOnlinePrediction } from "react-icons/md";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const onlineStatus   = useOnlineStatus();
  const { currentUser, logout } = useAuth();
  const navigate       = useNavigate();

  // Selector returns only the count — avoids re-render when item details change
  const cartCount = useSelector((store) => store.cart.items.length);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  const closeMobile = () => setMobileMenuOpen(false);

  const navLinks = [
    { to: "/",        icon: <FaHome />,        label: "Home" },
    { to: "/about",   icon: <FaInfoCircle />,  label: "About" },
    { to: "/contact", icon: <FaPhoneAlt />,    label: "Contact" },
    { to: "/grocery", icon: <FaStore />,       label: "Grocery" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="Food Villa Logo"
            className="h-12 w-12 rounded-full border-2 border-orange-500"
            width={48}
            height={48}
            loading="eager" /* logo is above the fold */
          />
          <span className="text-xl font-bold text-gray-800">
            Food<span className="text-orange-500">Villa</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav>
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <li className="flex items-center gap-1">
              <MdOnlinePrediction className={onlineStatus ? "text-green-500" : "text-red-500"} />
              {onlineStatus ? "Online" : "Offline"}
            </li>

            {navLinks.map(({ to, icon, label }) => (
              <li key={to}>
                <Link to={to} className="flex items-center gap-1 hover:text-orange-500">
                  {icon} {label}
                </Link>
              </li>
            ))}

            <li>
              <Link to="/cart" className="flex items-center gap-1 hover:text-orange-500">
                <FaShoppingCart /> Cart ({cartCount})
              </Link>
            </li>

            {currentUser ? (
              <>
                <li className="flex items-center gap-2">
                  <FaUser className="text-orange-500" />
                  <span className="font-semibold text-gray-800">
                    {currentUser.displayName || currentUser.email}
                  </span>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-white shadow hover:bg-orange-600 transition"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-white shadow hover:bg-orange-600 transition"
                >
                  <FaSignInAlt /> Login
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl cursor-pointer text-gray-700"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col gap-4 px-6 py-4 text-sm font-medium text-gray-700">
            <li className="flex items-center gap-2">
              <MdOnlinePrediction className={onlineStatus ? "text-green-500" : "text-red-500"} />
              {onlineStatus ? "Online" : "Offline"}
            </li>

            {navLinks.map(({ to, icon, label }) => (
              <li key={to}>
                <Link to={to} onClick={closeMobile} className="flex items-center gap-2 hover:text-orange-500">
                  {icon} {label}
                </Link>
              </li>
            ))}

            <li>
              <Link to="/cart" onClick={closeMobile} className="flex items-center gap-2 hover:text-orange-500">
                <FaShoppingCart /> Cart ({cartCount})
              </Link>
            </li>

            {currentUser ? (
              <>
                <li className="flex items-center gap-2 text-orange-500">
                  <FaUser />
                  <span className="font-semibold">
                    {currentUser.displayName || currentUser.email}
                  </span>
                </li>
                <li>
                  <button
                    onClick={() => { handleLogout(); closeMobile(); }}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-white shadow hover:bg-orange-600 transition"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  onClick={closeMobile}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-white shadow hover:bg-orange-600 transition"
                >
                  <FaSignInAlt /> Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default memo(Header);
