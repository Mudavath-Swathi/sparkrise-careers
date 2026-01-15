import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import JobTable from "../components/JobTable";
import JobFormModal from "../components/JobFormModal";
import api from "../../configs/api";

const AdminDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  //  FETCH JOBS FROM BACKEND
  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await api.get("/jobs");
      setJobs(res.data);
    } catch (error) {
      console.error("Failed to fetch jobs");
    } finally {
      setLoading(false);
    }
  };

  // load jobs on page load
  useEffect(() => {
    fetchJobs();
  }, []);

  // CREATE JOB (ADMIN)
  const addJob = async (jobData) => {
  try {
    let res;

    if (editingJob) {
      // UPDATE
      res = await api.put(`/jobs/${editingJob._id}`, jobData);

      setJobs((prev) =>
        prev.map((job) =>
          job._id === editingJob._id ? res.data : job
        )
      );
    } else {
      // CREATE
      res = await api.post("/jobs", jobData);
      setJobs((prev) => [res.data, ...prev]);
    }

    setShowModal(false);
    setEditingJob(null);
  } catch (error) {
    alert("Failed to save job");
  }
};

  //  DELETE JOB
  const deleteJob = async (id) => {
    try {
      await api.delete(`/jobs/${id}`);
      setJobs((prev) => prev.filter((job) => job._id !== id));
    } catch (error) {
      alert("Failed to delete job");
    }
  };

  //  EDIT JOB 
  const editJob = (job) => {
    setEditingJob(job);
    setShowModal(true);
    
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <AdminHeader onAdd={() => setShowModal(true)} />

      {loading ? (
        <p className="text-center text-slate-500 mt-10">Loading jobs...</p>
      ) : (
        <JobTable jobs={jobs} onDelete={deleteJob} onEdit={editJob} />
      )}

      {showModal && (
      <JobFormModal onClose={() => {
      setShowModal(false);
      setEditingJob(null);
    }}
    onCreate={addJob}
    editingJob={editingJob}
  />
)}
    </div>
  );
};

export default AdminDashboard;
