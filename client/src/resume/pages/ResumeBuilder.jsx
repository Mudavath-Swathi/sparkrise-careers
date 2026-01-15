import React, { useEffect, useState } from "react";
import {
  PlusIcon,
  UploadCloudIcon,
  FilePenLineIcon,
  TrashIcon,
  PencilIcon,
  XIcon,
  
} from "lucide-react";
import ResumeNavbar from "../components/ResumeNavbar";
import { useNavigate } from "react-router-dom";
import api from "../../configs/api";

const ResumeBuilder = () => {
  const colors = [
    "#9333ea",
    "#d97706",
    "#dc2626",
    "#0284c7",
    "#ef4444",
    "#16a34a",
  ];

  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeId, setEditResumeId] = useState("");

  const navigate = useNavigate();

  // ================= LOAD RESUMES =================
  const loadAllResumes = async () => {
    try {
      const res = await api.get("/resumes/my", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      setAllResumes(res.data.resumes || []);
    } catch (err) {
      console.error(err);
    }
  };

  // ================= CREATE RESUME =================
  const createResume = async (event) => {
    event.preventDefault();

    try {
      const res = await api.post(
        "/resumes/create",
        { title },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      setShowCreateResume(false);
      setTitle("");
      navigate("/app/builder/" + res.data.resume._id);
    } catch (err) {
      alert("Failed to create resume");
    }
  };

  // ================= UPLOAD RESUME (UI ONLY) =================
  const uploadResume = async (event) => {
    event.preventDefault();
    setShowUploadResume(false);
    navigate("/app/builder/new");
  };

  // ================= DELETE RESUME =================
  const deleteResume = async (resumeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete("/resumes/delete/" + resumeId, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      setAllResumes((prev) =>
        prev.filter((resume) => resume._id !== resumeId)
      );
    } catch (err) {
      alert("Failed to delete resume");
    }
  };

  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <>
      <ResumeNavbar />

      <div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex gap-4">
            <button
              onClick={() => setShowCreateResume(true)}
              className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center 
              rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <PlusIcon className="size-11 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full" />
              <p className="text-sm group-hover:text-indigo-600">
                Create Resume
              </p>
            </button>

            <button
              onClick={() => setShowUploadResume(true)}
              className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center 
              rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <UploadCloudIcon className="size-11 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full" />
              <p className="text-sm group-hover:text-indigo-600">
                Upload Existing
              </p>
            </button>
          </div>

          <hr className="border-slate-300 my-6 sm:w-[350px]" />

          {/* ================= RESUME LIST ================= */}
          <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
            {allResumes.map((resumeItem, index) => {
              const baseColor = colors[index % colors.length];

              return (
                <button
                  key={resumeItem._id}
                  onClick={() =>
                    navigate("/app/builder/" + resumeItem._id)
                  }
                  className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center
                  rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(135deg," +
                      baseColor +
                      "10," +
                      baseColor +
                      "40)",
                    borderColor: baseColor + "40",
                  }}
                >
                  <FilePenLineIcon
                    className="size-7"
                    style={{ color: baseColor }}
                  />

                  <p
                    className="text-sm px-2 text-center"
                    style={{ color: baseColor }}
                  >
                    {resumeItem.title}
                  </p>

                  <p
                    className="absolute bottom-1 text-[11px] px-2 text-center"
                    style={{ color: baseColor + "90" }}
                  >
                    Updated on{" "}
                    {new Date(resumeItem.updatedAt).toLocaleDateString()}
                  </p>

                  {/*  MOBILE ACTIONS — ALWAYS VISIBLE */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-1 right-1 flex md:hidden gap-1"
                  >
                    <button
                      onClick={() =>
                        navigate("/app/builder/" + resumeItem._id)
                      }
                      className="p-1.5  rounded"
                    >
                      <PencilIcon
                        className="size-6"
                        style={{ color: baseColor }}
                      />
                    </button>

                    <button
                      onClick={() => deleteResume(resumeItem._id)}
                      className="p-1.5  rounded"
                    >
                      <TrashIcon className="size-6 text-red-500" />
                    </button>
                  </div>

                  {/* DESKTOP ACTIONS — HOVER */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-1 right-1 hidden md:group-hover:flex gap-1"
                  >
                    <button
                      onClick={() =>
                        navigate("/app/builder/" + resumeItem._id)
                      }
                      className="p-1.5 hover:bg-white/50 rounded"
                    >
                      <PencilIcon
                        className="size-6"
                        style={{ color: baseColor }}
                      />
                    </button>

                    <button
                      onClick={() => deleteResume(resumeItem._id)}
                      className="p-1.5 hover:bg-white/50 rounded"
                    >
                      <TrashIcon className="size-6 text-red-500" />
                    </button>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ================= CREATE MODAL ================= */}
          {showCreateResume && (
            <form
              onSubmit={createResume}
              onClick={() => setShowCreateResume(false)}
              className="fixed inset-0 bg-black/70 z-10 flex items-center justify-center"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative bg-slate-50 rounded-lg w-full max-w-sm p-6"
              >
                <h2 className="text-xl font-bold mb-4">
                  Create a Resume
                </h2>

                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter resume title"
                  className="w-full px-4 py-2 mb-4"
                  required
                />

                <button className="w-full py-2 bg-blue-600 text-white rounded">
                  Create Resume
                </button>

                <XIcon
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={() => setShowCreateResume(false)}
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ResumeBuilder;