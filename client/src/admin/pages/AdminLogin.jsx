import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../configs/api";
import { Eye, EyeOff } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/admin/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      navigate("/admin");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white w-[380px] p-8 rounded-2xl shadow-lg">

        <h2 className="text-center text-2xl font-semibold text-orange-600 mb-6">
          Admin Login
        </h2>

        {/* EMAIL */}
        <div className="mb-4">
          <label className="block text-sm text-slate-600 mb-1">
            Email
          </label>
          <input
            type="email"
            autoComplete="off"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            placeholder="Enter admin email"
            className="w-full border border-orange-400 px-4 py-2 rounded-md focus:outline-none"
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-4 relative">
          <label className="block text-sm text-slate-600 mb-1">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            placeholder="Enter password"
            className="w-full border border-slate-300 px-4 py-2 rounded-md pr-10 focus:outline-none"
          />

          <span
            className="absolute right-3 top-9 cursor-pointer text-slate-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        {/* LOGIN BUTTON */}
        <button
          type="button"
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white py-2 rounded-md font-medium transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
