import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAuth } from "../../context/AuthContext";

const ResumeNavbar = () => {
  const navigate = useNavigate();
  const {user, logout} = useAuth()

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
      <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6 md:px-10">
        {/* LEFT – LOGO */}
        <div className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={assets.logo}
            alt="SparkRise Careers"
            className="h-8 w-auto object-contain"
          />
          
        </div>

        {/* RIGHT – USER INFO */}
        <div className="flex items-center gap-6">
          <span className="text-[14px] text-slate-700">
            Hi,{" "} <span className="font-semibold">{user?.name || user?.email}</span>
          </span>

          <button
            onClick={handleLogout}
            className="px-5 py-2 text-[14px] rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 transition-all">
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default ResumeNavbar;

