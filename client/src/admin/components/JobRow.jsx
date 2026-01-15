import { Pencil, Trash2, Star } from "lucide-react";

const JobRow = ({ job, onDelete, onEdit }) => {
  return (
    <tr className="border-t border-slate-200 hover:bg-slate-50 transition">
      
      <td className="px-6 py-4 flex items-center gap-3">
        {job.featured && (
          <Star size={16} className="text-amber-400 fill-amber-400" />
        )}
        <span className="font-medium text-slate-800">
          {job.title}
        </span>
      </td>

      <td className="px-6 py-4 text-slate-700">{job.company}</td>
      <td className="px-6 py-4 text-slate-700">{job.location}</td>
      <td className="px-6 py-4 text-slate-700">
        {job.salary && job.salary !== "Not specified" ? job.salary : "Not specified"}
      </td>

      <td className="px-6 py-4">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0B2149] text-white">
          Active
        </span>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-5">
          <button
            onClick={() => onEdit(job)}
            className="text-slate-600 hover:text-blue-600 transition"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(job._id)}
            className="text-slate-600 hover:text-red-600 transition"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default JobRow;
