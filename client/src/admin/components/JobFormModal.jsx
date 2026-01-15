import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const JobFormModal = ({ onClose, onCreate, editingJob }) => {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    category: "Other",
    type: "Full Time",
    minSalary: "",
    maxSalary: "",
    description: "",
    requirements: "",
    featured: false,
    active: true,
  });

  
  useEffect(() => {
    if (editingJob) {
      setForm({
        title: editingJob.title || "",
        company: editingJob.company || "",
        location: editingJob.location || "",
        category: editingJob.category || "Other",
        type: editingJob.type || "Full Time",
        minSalary: "",
        maxSalary: "",
        description: editingJob.description || "",
        requirements: editingJob.requirements || "",
        featured: editingJob.featured || false,
        active: editingJob.active ?? true,
      });
    }
  }, [editingJob]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  
  const submit = () => {
    if (!form.title || !form.company || !form.location) {
      alert("Title, Company and Location are required");
      return;
    }

    if (!form.description || !form.requirements) {
      alert("Description and Requirements are required");
      return;
    }

    const jobData = {
      ...editingJob,
      title: form.title,
      company: form.company,
      location: form.location,
      category: form.category,
      type: form.type,
      description: form.description,
      requirements: form.requirements,
      salary:
        form.minSalary.trim() !== "" && form.maxSalary.trim() !==""
          ? `${form.minSalary.trim()} - ${form.maxSalary.trim()}` : editingJob?.salary || "Not specified",
      featured: form.featured,
      active: form.active,
    };

    console.log("JOB DATA SENT:", jobData)

    onCreate(jobData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-2xl p-8 relative max-h-[90vh] overflow-y-auto">
        
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-700"
        >
          <X />
        </button>

        {/* TITLE */}
        <h2 className="font-serif text-2xl font-semibold mb-8">
          {editingJob ? "Edit Job" : "Create New Job"}
        </h2>

        {/* FORM */}
        <div className="grid grid-cols-2 gap-6">
          <input
            name="title"
            placeholder="Job Title"
            value={form.title}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3"
          />

          <input
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3"
          />

          <input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3 col-span-2"
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3"
          >
            <option>Other</option>
            <option>Technology</option>
            <option>Marketing</option>
          </select>

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3"
          >
            <option>Full Time</option>
            <option>Part Time</option>
          </select>

          
          <input
            name="minSalary"
            placeholder="Min Salary "
            value={form.minSalary}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3"
          />

          <input
            name="maxSalary"
            placeholder="Max Salary "
            value={form.maxSalary}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3"
          />
        </div>

        {/* DESCRIPTION */}
        <div className="mt-6">
          <label className="text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            className="mt-2 w-full border rounded-xl px-4 py-3 resize-none"
          />
        </div>

        {/* REQUIREMENTS */}
        <div className="mt-6">
          <label className="text-sm font-medium">Requirements</label>
          <textarea
            name="requirements"
            value={form.requirements}
            onChange={handleChange}
            rows="4"
            className="mt-2 w-full border rounded-xl px-4 py-3 resize-none"
          />
        </div>

        {/* TOGGLES */}
        <div className="flex items-center gap-10 mt-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Featured</span>
            <button
              type="button"
              onClick={() =>
                setForm((prev) => ({ ...prev, featured: !prev.featured }))
              }
              className={`w-12 h-6 rounded-full relative transition ${
                form.featured ? "bg-[#0B2149]" : "bg-slate-300"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
                  form.featured ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Active</span>
            <button
              type="button"
              onClick={() =>
                setForm((prev) => ({ ...prev, active: !prev.active }))
              }
              className={`w-12 h-6 rounded-full relative transition ${
                form.active ? "bg-[#0B2149]" : "bg-slate-300"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
                  form.active ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* SUBMIT */}
        <button
          onClick={submit}
          className="mt-8 w-full bg-[#0B2149] text-white py-4 rounded-xl font-medium"
        >
          {editingJob ? "Update Job" : "Create Job"}
        </button>
      </div>
    </div>
  );
};

export default JobFormModal;