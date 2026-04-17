import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BLUR BACKGROUND */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* MODAL */}
      <div className="relative w-[90%] max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 animate-fadeIn">

        {/* HEADER */}
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
        </h2>

        {/* FORM */}
        <form className="space-y-4">

          {!isLogin && (
            <>
              {/* First Name */}
              <div className="relative">
                <FaUser className="absolute top-3 left-3 text-gray-300" />
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full pl-10 pr-3 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none"
                />
              </div>

              {/* Last Name */}
              <div className="relative">
                <FaUser className="absolute top-3 left-3 text-gray-300" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full pl-10 pr-3 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none"
                />
              </div>
            </>
          )}

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-300" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-3 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-300" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-3 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          {!isLogin && (
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-300" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full pl-10 pr-3 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none"
              />
            </div>
          )}

          {/* BUTTON */}
          <button className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg">
            {isLogin ? "Login" : "Register"}
          </button>

        </form>

        {/* SWITCH */}
        <p className="text-sm text-center text-gray-300 mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-blue-400 cursor-pointer hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-lg hover:scale-110"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default AuthModal;