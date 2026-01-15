import React from "react";
import { Search, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminHeader = ({ onAdd }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="font-serif text-4xl font-semibold">
            Admin Dashboard
          </h1>
          <p className="text-slate-500 mt-1">
            Manage job listings
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3">
          {/* VIEW SITE */}
          <button
            onClick={() => window.open("/", "_blank")}
            className="px-4 py-2 border rounded-lg
                       hover:bg-slate-100 transition"
          >
            View Site
          </button>

          {/* LOGOUT */}
          <button
            onClick={() => {
              logout();
              navigate("/admin/login");
            }}
            className="px-4 py-2 border rounded-lg
                       hover:bg-red-50 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* SEARCH + ADD */}
      <div className="mt-8 flex justify-between items-center">
        {/* SEARCH */}
        <div className="flex items-center gap-2 border rounded-xl px-4 py-3 w-96">
          <Search size={18} className="text-slate-400" />
          <input
            placeholder="Search jobs..."
            className="w-full bg-transparent text-[15px] text-slate-700
                       outline-none border-none ring-0
                       focus:outline-none focus:ring-0"
          />
        </div>

        {/* ADD JOB */}
        <button
          onClick={onAdd}
          className="bg-[#0B2149] text-white
                     px-5 py-3 rounded-xl
                     flex items-center gap-2
                     hover:bg-[#091a3a] transition"
        >
          <Plus size={18} /> Add Job
        </button>
      </div>
    </>
  );
};

export default AdminHeader;
