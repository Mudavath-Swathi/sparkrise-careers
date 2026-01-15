import React from "react";
import { MapPin, Briefcase, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  if (!job) return null;

  return (
    <Link
      to={`/jobs/${job._id}`}   
      className="block bg-white rounded-2xl border border-slate-200
                 px-8 py-6 hover:shadow-lg transition-all"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {job.title}
          </h3>
          <p className="text-slate-600 mt-1">{job.company}</p>
        </div>

        {job.featured && (
          <span className="text-xs px-3 py-1 rounded-full
                           bg-amber-100 text-amber-700">
            Featured
          </span>
        )}
      </div>

      <p className="mt-3 text-sm text-slate-600 line-clamp-2">
        {job.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
        <span className="flex items-center gap-1">
          <MapPin size={14} /> {job.location}
        </span>
        <span className="flex items-center gap-1">
          <Briefcase size={14} /> {job.type}
        </span>
        <span className="flex items-center gap-1">
          <IndianRupee size={14} /> {job.salary}
        </span>
      </div>
    </Link>
  );
};

export default JobCard;
