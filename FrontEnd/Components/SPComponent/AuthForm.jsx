// import PropTypes from "prop-types";
import { useState } from "react";

const AuthForm = ({ isSignUp }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        {isSignUp ? "Sign up" : "Sign in"}
      </h2>
      <div className="w-80 bg-gray-100 rounded-full flex items-center px-4 mb-3">
        <i className="fas fa-user text-gray-400"></i>
        <input
          type="text"
          placeholder="Username"
          className="bg-transparent p-2 flex-1 outline-none"
        />
      </div>
      {isSignUp && (
        <div className="w-80 bg-gray-100 rounded-full flex items-center px-4 mb-3">
          <i className="fas fa-envelope text-gray-400"></i>
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent p-2 flex-1 outline-none"
          />
        </div>
      )}
      <div className="w-80 bg-gray-100 rounded-full flex items-center px-4 mb-3">
        <i className="fas fa-lock text-gray-400"></i>
        <input
          type="password"
          placeholder="Password"
          className="bg-transparent p-2 flex-1 outline-none"
        />
      </div>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition">
        {isSignUp ? "Sign up" : "Login"}
      </button>
    </div>
  );
};

// AuthForm.prototype = {
//     isSignUp: PropTypes.string.isRequired
// }
export default AuthForm;
