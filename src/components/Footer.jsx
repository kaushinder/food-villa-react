import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              Food<span className="text-orange-500">Villa</span> 🍔
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your favorite food delivery app. Order from the best restaurants 
              and get it delivered to your doorstep.
            </p>
            {/* Social Media */}
            <div className="mt-4 flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition"
                aria-label="Twitter"
              >
                <FaTwitter className="text-sm" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition"
                aria-label="Instagram"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition"
                aria-label="GitHub"
              >
                <FaGithub className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-orange-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-orange-500 transition">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/grocery" className="hover:text-orange-500 transition">
                  Grocery
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-3 font-semibold text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-500">📧</span>
                <a 
                  href="mailto:kaushindersinghraghav@gmail.com"
                  className="hover:text-orange-500 transition"
                >
                  kaushindersinghraghav@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">📞</span>
                <a 
                  href="tel:+916395004998"
                  className="hover:text-orange-500 transition"
                >
                  +91 6395004998
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">📍</span>
                <span>Greater Noida, UP, India</span>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-white mb-2">Stay Updated</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-1.5 text-sm rounded bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none"
                />
                <button className="px-3 py-1.5 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <p className="text-gray-400">
            © {new Date().getFullYear()} FoodVilla. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-orange-500 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              Cookie Policy
            </a>
          </div>

          <p className="text-gray-400">
            Made with ❤️ using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;