import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Briefcase, IndianRupee, Calendar } from "lucide-react";
import JobSidebar from "../components/JobSidebar";
import api from "../configs/api";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await api.get(`/jobs/${id}`);
        setJob(res.data);
      } catch (error) {
        setJob(null);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-slate-600">Loading...</p>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-slate-600">Job not found.</p>
        <Link to="/jobs" className="text-blue-600 underline">
          Back to Jobs
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[#F8FAFC] pt-[120px] pb-24">
      <div className="max-w-7xl mx-auto px-6">

        <Link to="/jobs" className="text-sm text-slate-600">
          ← Back to Jobs
        </Link>

        <div className="mt-6 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <h1 className="font-serif text-[36px] font-semibold text-slate-900">
              {job.title}
            </h1>

            {job.featured && (
              <span className="text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-700">
                Featured
              </span>
            )}
          </div>

          <p className="mt-2 text-slate-600">{job.company}</p>

          <div className="mt-4 flex flex-wrap gap-6 text-sm text-slate-600">
            <span className="flex items-center gap-1">
              <MapPin size={15} /> {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase size={15} /> {job.type}
            </span>
            <span className="flex items-center gap-1">
              <IndianRupee size={15} /> {job.salary}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={15} /> Posted recently
            </span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-serif text-[22px] font-semibold">
                About This Role
              </h2>
              <p className="mt-4 text-slate-600">
                {job.description}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[22px] font-semibold">
                Requirements
              </h2>
              <p className="mt-4 text-slate-600">
                {job.requirements}
              </p>
            </div>
          </div>

          <JobSidebar job={job} />
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
