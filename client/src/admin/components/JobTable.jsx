import React from "react";
import JobRow from "./JobRow";

const JobTable = ({ jobs, onDelete, onEdit }) => {
  return (
    <div className="mt-10 border rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            <th className="px-6 py-4 text-left">Title</th>
            <th className="px-6 py-4 text-left">Company</th>
            <th className="px-6 py-4 text-left">Location</th>
            <th className="px-6 py-4 text-left">Salary</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <JobRow
            key={job._id}
            job={job}
            onDelete={onDelete}
            onEdit={onEdit}
            />

          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
