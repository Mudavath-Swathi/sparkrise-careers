import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import UserLogin from "./pages/UserLogin";
import About from "./pages/About";

import WhatsAppFloating from "./components/WhatsAppFloating";


// Admin
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminLogin from "./admin/pages/AdminLogin";
import AdminProtectedRoute from "./admin/AdminProtectedRoute";

// Resume Builder
import ResumeBuilder from "./resume/pages/ResumeBuilder";
import ResumeEditor from "./resume/pages/ResumeEditor";


const App = () => {
  const location = useLocation();

  // Routes where navbar & footer should be hidden
  const hideLayoutRoutes = ["/admin", "/resume-builder", "/app/builder/:id"];

  const shouldHideLayout =
  location.pathname.startsWith("/login") ||
  location.pathname.startsWith("/admin") ||
  location.pathname.startsWith("/resume-builder") ||
  location.pathname.startsWith("/app/builder");


  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      {!shouldHideLayout && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/about" element={<About/>}/>

          {/* Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <AdminProtectedRoute role="admin">
                <AdminDashboard />
              </AdminProtectedRoute>
            }
          />

          {/* Resume Builder */}
          <Route path="/resume-builder" element={<ResumeBuilder />} />

          {/* Resume Editor */}
          <Route path="/app/builder/:resumeId" element={<ResumeEditor />} />

        </Routes>

        <WhatsAppFloating />
      </main>

      {/* Footer */}
      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default App;
