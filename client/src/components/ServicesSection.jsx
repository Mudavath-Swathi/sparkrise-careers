import React from "react";
import { Search, Users, FileText, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-[38px] md:text-[46px] font-semibold text-slate-900">
            Our Services
          </h2>
          <p className="mt-4 text-[16px] text-slate-600">
            Comprehensive recruitment and career services tailored to your needs
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={Search}
            title="Executive Search"
            description="We identify and recruit top-tier executives for leadership positions across industries."
          />

          <ServiceCard
            icon={Users}
            title="Recruitment Services"
            description="Full-cycle recruitment solutions from sourcing to placement for all organizational levels."
          />

          <ServiceCard
            icon={FileText}
            title="Resume Building"
            description="Professional resume crafting services to help you stand out in competitive job markets."
            actionLink="/resume-builder"
            actionText="Build Your Resume"
          />


          <ServiceCard
            icon={Handshake}
            title="Career Consulting"
            description="Personalized career guidance and strategy sessions to help you achieve your goals."
          />
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/contact"
            className="px-8 py-4 border border-slate-300
                       rounded-xl text-[15px] font-medium
                       text-slate-800 hover:bg-slate-100
                       transition-all"
          >
            Learn More About Our Services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
