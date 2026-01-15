import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import api from "../configs/api"; 

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchFeaturedJobs = async () => {
      try {
        const res = await api.get("/jobs");
        const featuredJobs = res.data.filter((job) => job.featured);
        setJobs(featuredJobs);
      } catch (error) {
        console.error("Failed to fetch featured jobs", error);
      }
    };

    fetchFeaturedJobs();
  }, []);

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-semibold text-center">
          Featured Opportunities
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>

        {jobs.length === 0 && (
          <p className="text-center text-slate-500 mt-10">
            No featured jobs available
          </p>
        )}
      </div>
    </section>
  );
};

export default FeaturedJobs;
