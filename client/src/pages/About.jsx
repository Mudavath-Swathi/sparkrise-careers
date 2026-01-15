import React from "react";

const About = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#0B2149] to-[#1E3A5F] pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="font-serif text-white text-[42px] md:text-[52px] font-semibold">
            About SparkRise
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] text-slate-200">
            Empowering careers by connecting talent with opportunity through
            modern, user-friendly career solutions.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">

          {/* WHAT IS SPARKRISE */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-[30px] font-semibold text-[#0B2149] mb-4">
                What is SparkRise?
              </h2>
              <p className="text-slate-700 leading-relaxed">
                SparkRise Careers is a career-focused platform built to support
                job seekers at every stage of their professional journey.
                Whether you are a student, a fresh graduate, or an experienced
                professional, SparkRise provides the tools and guidance needed
                to move forward with confidence.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <ul className="space-y-4 text-slate-700">
                <li>✔ Resume building made simple and modern</li>
                <li>✔ Easy access to job opportunities</li>
                <li>✔ Clean, user-friendly experience</li>
                <li>✔ Built for students and professionals alike</li>
              </ul>
            </div>
          </div>

          {/* OUR MISSION */}
          <div className="bg-white rounded-xl p-10 shadow-sm border border-slate-200">
            <h2 className="font-serif text-[30px] font-semibold text-[#0B2149] mb-4">
              Our Mission
            </h2>
            <p className="text-slate-700 leading-relaxed max-w-4xl">
              Our mission is to simplify the career journey by offering reliable,
              accessible, and modern career tools. We believe everyone deserves
              clarity, confidence, and the right opportunities to grow.
            </p>
          </div>

          {/* WHO IT IS FOR */}
          <div>
            <h2 className="font-serif text-[30px] font-semibold text-[#0B2149] mb-8">
              Who SparkRise is For?
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  Students
                </h3>
                <p className="text-slate-600 text-sm">
                  Build your first professional resume and explore career paths
                  with confidence.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  Professionals
                </h3>
                <p className="text-slate-600 text-sm">
                  Upgrade your resume, switch careers, and discover better
                  opportunities.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  Recruiters
                </h3>
                <p className="text-slate-600 text-sm">
                  Access structured candidate profiles and connect with skilled
                  talent.
                </p>
              </div>
            </div>
          </div>

          {/* FUTURE VISION */}
          <div className="bg-gradient-to-r from-[#0B2149] to-[#1E3A5F] rounded-xl p-10 text-white">
            <h2 className="font-serif text-[30px] font-semibold mb-4">
              Our Vision
            </h2>
            <p className="text-slate-200 max-w-4xl leading-relaxed">
              SparkRise aims to continuously evolve by introducing smart career
              technologies such as personalized resume suggestions, skill-gap
              insights, and intelligent job recommendations — helping users make
              informed career decisions with ease.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;