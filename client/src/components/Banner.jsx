import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-[#0B2149] via-[#1b355d] to-[#2f5563]
                   px-6 md:px-16 py-20 text-center">
        {/* HEADING */}
        <h2 className="font-serif text-white text-[34px] md:text-[44px] font-semibold">
          Ready to Take the Next Step?
        </h2>

        {/* SUBTEXT */}
        <p className="mt-5 max-w-3xl mx-auto text-[15px] md:text-[17px] text-slate-200 leading-relaxed">
          Whether you're looking for your dream job or seeking top talent for
          your organization, we're here to help you succeed.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          
          <Link to="/jobs" className="px-8 py-4 bg-orange-500 text-[#0B2149] font-medium
                       rounded-xl shadow-md hover:bg-orange transition-all flex items-center gap-2">
            Find Your Dream Job
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="px-8 py-4 border border-white/30 text-white font-medium rounded-xl
                       hover:bg-white/10 transition-all">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
