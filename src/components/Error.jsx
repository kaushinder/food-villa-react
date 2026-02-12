import { useRouteError, Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const Error = () => {
  const error = useRouteError();
  console.error("Route Error:", error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 px-4">
      <div className="text-center">
        {/* Error Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl">
            <FaExclamationTriangle className="text-5xl text-orange-500" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Oops!</h1>
        <p className="mb-2 text-xl text-gray-600">Something went wrong</p>
        
        {/* Error Details */}
        <div className="mb-6 rounded-lg bg-white px-6 py-3 shadow-md inline-block">
          <p className="text-sm text-gray-500">
            {error?.status && `Error ${error.status}: `}
            {error?.statusText || error?.message || "Unexpected Error"}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-3 text-white font-semibold shadow-lg hover:bg-orange-600 transition"
          >
            <FaHome /> Go Back Home
          </Link>
          
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 rounded-full border-2 border-orange-500 px-8 py-3 text-orange-500 font-semibold hover:bg-orange-50 transition"
          >
            Reload Page
          </button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} FoodVilla • Built with ❤️ using React
        </p>
      </div>
    </div>
  );
};

export default Error;