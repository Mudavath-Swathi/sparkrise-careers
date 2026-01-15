import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon: Icon, title, description, actionLink, actionText }) => {
  return (
    <div
      className="bg-white rounded-2xl border border-slate-200
                 px-8 py-10 shadow-sm hover:shadow-lg
                 transition-all duration-300 flex flex-col"
    >
      {/* ICON */}
      <div className="w-12 h-12 rounded-xl bg-slate-100
                      flex items-center justify-center mb-6">
        <Icon className="text-[#0B2149]" size={22} />
      </div>

      {/* TITLE */}
      <h3 className="font-serif text-[20px] font-semibold text-slate-900">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-3 text-[15px] text-slate-600 leading-relaxed flex-grow">
        {description}
      </p>

      {/* BUTTON (ONLY IF PROVIDED) */}
      {actionLink && (
        <Link
          to={actionLink}
          className="mt-6 inline-flex items-center justify-center
                     px-5 py-3 rounded-xl
                     bg-[#0B2149] text-white text-[14px]
                     font-medium hover:bg-[#0e2b5f]
                     transition-all"
        >
          {actionText} →
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
