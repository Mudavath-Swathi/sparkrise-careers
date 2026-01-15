import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/heroImage.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen pt-24 overflow-hidden flex items-center">
      
      {/* LEFT TEXT SECTION */}
      <div className="relative z-10 w-full md:w-1/2 px-6 md:px-16 lg:px-24 xl:px-32">
        <h1
          className="font-Poppins font-extrabold text-[#FFE29A]
          text-[34px] leading-[40px]
          md:text-[56px] md:leading-[64px]"
        >
          Latest Jobs & <br /> Career Updates
        </h1>

        <p className="mt-4 text-[14px] md:text-[18px] text-[#EAEAEA] max-w-lg">
          Find new opportunities with our expert job consultancy — curated roles,
          employer connections and placement support.
        </p>

        {/* BUTTONS */}
        <div className="mt-6 flex gap-4 flex-wrap">
          <button
            onClick={() => navigate("/jobs")}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-500
            text-white font-medium rounded-lg shadow-md transition-all"
          >
            Browse Jobs →
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 border border-white/40
            text-white hover:bg-white/10
            font-medium rounded-lg transition-all"
          >
            Contact Us
          </button>
        </div>

        

      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute right-0 top-0 h-full w-full md:w-1/2">
        <img
          src={heroImage}
          alt="Hero"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* LEFT GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2149] via-[#0B2149]/80 to-transparent" />
    </section>
  );
};

export default Hero;
