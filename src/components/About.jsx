import React from "react";
import UserClass from "./UserClass.jsx";
import UserContext from "../utils/UserContext.jsx";
import { useAuth } from "../utils/AuthContext.jsx";

const About = () => {
  const { currentUser } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="mb-10 rounded-3xl bg-white p-8 shadow-xl">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-800">
            About FoodVilla 🍕
          </h1>
          
          <div className="mb-4">
            <UserContext.Consumer>
              {({ loggedInUser }) => (
                <div className="text-lg">
                  <span className="text-gray-600">Current User: </span>
                  <span className="font-semibold text-orange-500">
                    {currentUser ? currentUser.displayName || currentUser.email : loggedInUser}
                  </span>
                </div>
              )}
            </UserContext.Consumer>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to <span className="font-semibold text-orange-500">FoodVilla</span>, 
            your ultimate food delivery companion! This application is built with modern 
            React technologies, featuring real-time restaurant data, secure Firebase authentication, 
            and a beautiful user interface.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-10 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            🎯 What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔐</span>
              <div>
                <h3 className="font-semibold text-gray-800">Secure Authentication</h3>
                <p className="text-sm text-gray-600">Firebase-powered login and signup</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🍽️</span>
              <div>
                <h3 className="font-semibold text-gray-800">Live Restaurant Data</h3>
                <p className="text-sm text-gray-600">Real-time menu and pricing updates</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🛒</span>
              <div>
                <h3 className="font-semibold text-gray-800">Smart Cart System</h3>
                <p className="text-sm text-gray-600">Redux-powered state management</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📱</span>
              <div>
                <h3 className="font-semibold text-gray-800">Responsive Design</h3>
                <p className="text-sm text-gray-600">Works seamlessly on all devices</p>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Info */}
        <div className="mb-10 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            👨‍💻 Developer Information
          </h2>
          <UserClass name={"Kaushinder Singh Raghav"} location={"Greater Noida, India"} />
        </div>

        {/* Tech Stack */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg hover:scale-105">
            <h3 className="mb-2 text-xl font-semibold text-orange-600">
              ⚛️ React 18
            </h3>
            <p className="text-sm text-gray-600">
              Modern hooks, lazy loading, code splitting, and optimized rendering
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg hover:scale-105">
            <h3 className="mb-2 text-xl font-semibold text-orange-600">
              🎨 Tailwind CSS
            </h3>
            <p className="text-sm text-gray-600">
              Utility-first CSS framework for beautiful, responsive design
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg hover:scale-105">
            <h3 className="mb-2 text-xl font-semibold text-orange-600">
              🔥 Firebase
            </h3>
            <p className="text-sm text-gray-600">
              Secure authentication and real-time database integration
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg hover:scale-105">
            <h3 className="mb-2 text-xl font-semibold text-orange-600">
              🔄 Redux Toolkit
            </h3>
            <p className="text-sm text-gray-600">
              Efficient state management for cart and user data
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg hover:scale-105">
            <h3 className="mb-2 text-xl font-semibold text-orange-600">
              🛣️ React Router
            </h3>
            <p className="text-sm text-gray-600">
              Seamless navigation and dynamic routing
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg hover:scale-105">
            <h3 className="mb-2 text-xl font-semibold text-orange-600">
              📦 Parcel
            </h3>
            <p className="text-sm text-gray-600">
              Zero-config bundler for fast development
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            Built with ❤️ using React, Firebase, Redux & Tailwind CSS
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Learning Project - Namaste React Series
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;