// import { useState } from "react";
import { Link } from "react-router-dom";
import nav_logo from "../assets/nav-logo.png";
import AuthModal from "./AuthModal";

export default function Navbar() {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="z-50 backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg px-6 py-3 flex justify-between items-center max-w-[1100px] mx-auto rounded-2xl">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-blue-200 to-green-200 p-2 rounded-xl shadow-md">
            <img
              src={nav_logo}
              alt="logo"
              className="h-[40px] w-[40px] max-sm:h-[25px] max-sm:w-[25px] object-contain"
            />
          </div>
          <h2 className="max-sm:text-xl  text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            CareerIQ AI
          </h2>
        </div>

        {/* Button */}
        <button
          // onClick={() => setOpen(true)}
          className="px-5 py-2 max-sm:px-2 max-sm:text-sm rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          {/* Log In */}
          <Link to="/upload-resume">Upload Resume</Link>
        </button>
      </nav>
      {/* <AuthModal isOpen={open} onClose={() => setOpen(false)} /> */}
    </>
  );
}
