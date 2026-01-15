import React from "react";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#0B2149] to-[#1E3A5F] pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="font-serif text-white text-[42px] md:text-[52px] font-semibold">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-xl text-[17px] text-slate-200">
            Have questions about our services or ready to start your career journey?
            We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </>
  );
};

export default Contact;
