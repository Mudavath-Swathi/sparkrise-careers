import React from "react";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const JobSidebar = ({ job }) => {
  if (!job) return null;

  return (
    <aside
      className="bg-white border border-slate-200 rounded-2xl
                 p-6 shadow-sm sticky top-28">
      
      <h3 className="font-serif text-[20px] font-semibold text-slate-900">
        Interested in this role?
      </h3>

      
      <p className="mt-3 text-[15px] text-slate-600 leading-relaxed">
        Contact us to learn more about this opportunity or to submit
        your application.
      </p>

      
      <div className="mt-5 space-y-3 text-sm text-slate-700">
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-slate-500" />
          <span>{job.applyEmail || "sparkrise@gmail.com"}</span>
        </div>

        <div className="flex items-center gap-2">
          <Phone size={16} className="text-slate-500" />
          <span>{job.applyPhone || "+91 8885791260"}</span>
        </div>
      </div>

      
      <Link to="/contact"
        className="block mt-6 text-center bg-[#0B2149] text-white py-3 rounded-xl text-sm
                   font-medium hover:bg-[#143A63] transition-all">
        Contact Us to Apply
      </Link>

      
      <hr className="my-6 border-slate-200" />

      
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-500">Category:</span>
          <span
            className="px-3 py-1 rounded-full text-xs
                       bg-slate-100 text-slate-700">
            {job.category}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Job Type:</span>
          <span className="font-medium text-slate-800">
            {job.type}
          </span>
        </div>
      </div>
    </aside>
  );
};

export default JobSidebar;
