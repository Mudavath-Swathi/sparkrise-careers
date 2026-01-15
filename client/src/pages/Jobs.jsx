import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import JobCard from "../components/JobCard";
import api from "../configs/api";

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);

  //  FETCH JOBS FROM BACKEND
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("/jobs");
        setJobs(res.data);
      } catch (error) {
        console.error("Failed to fetch jobs", error);
      }
    };

    fetchJobs();
  }, []);

  // simple search filter (UNCHANGED)
  const filteredJobs = jobs.filter((job) =>
    `${job.title} ${job.company} ${job.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#0B2149] to-[#143A63] pt-[120px] pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-serif text-white text-[42px] md:text-[52px] font-semibold">
            Find Your Next Opportunity
          </h1>

          <p className="mt-3 text-slate-200 text-[17px] max-w-2xl">
            Explore hundreds of job opportunities from top employers
          </p>

          {/* SEARCH BAR */}
          <div className="mt-8 max-w-3xl">
            <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-lg">
              <Search size={20} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search by title, company, or location..."
                className=" w-full bg-transparent text-[15px] text-slate-700 outline-none border-none ring-0 focus:ring-0
                focus:outline-none focus-visible:outline-none focus-visible:ring-0 appearance-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* JOB LIST SECTION */}
      <section className="bg-[#F8FAFC] py-14">
        <div className="max-w-7xl mx-auto px-6">

          {/* FILTER ROW */}
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex gap-4">
              <select className="px-4 pr-10 py-2 rounded-lg border border-slate-300 text-sm appearance-none bg-white">
                <option>All Categories</option>
                <option>Technology</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Mapping</option>
                <option>Content Moderation</option>
              </select>

              <select className="px-4 pr-10 py-2 rounded-lg border border-slate-300 text-sm appearance-none bg-white">
                <option>All Types</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Remote</option>
              </select>
            </div>

            <p className="text-sm text-slate-600">
              {filteredJobs.length} jobs found
            </p>
          </div>

          {/* JOB CARDS */}
          <div className="mt-10 space-y-6">
            {filteredJobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>

          {/* EMPTY STATE */}
          {filteredJobs.length === 0 && (
            <p className="mt-10 text-center text-slate-500">
              No jobs match your search.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Jobs;
