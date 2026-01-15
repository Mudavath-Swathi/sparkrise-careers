import React, { useState } from "react";
import api from "../configs/api";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/contact/send", {
        fullName,
        email,
        phone,
        subject,
        message,
      });

      alert("Message sent successfully");

      
      setFullName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    }
  };

  return (
    <div>
      <h2 className="font-serif text-[26px] font-semibold text-slate-900 mb-8">
        Send Us a Message
      </h2>

      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Full Name *" value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required className="w-full px-4 py-3 rounded-lg border border-slate-300
                       text-[15px] focus:outline-none focus:ring-2
                       focus:ring-[#0B2149]"/>

          <input type="email" placeholder="Email Address *" value={email}
            onChange={(e) => setEmail(e.target.value)}
            required className="w-full px-4 py-3 rounded-lg border border-slate-300
                       text-[15px] focus:outline-none focus:ring-2
                       focus:ring-[#0B2149]"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Phone Number" value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-300
                       text-[15px] focus:outline-none focus:ring-2
                       focus:ring-[#0B2149]"
          />

          <input type="text" placeholder="Subject *" value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required className="w-full px-4 py-3 rounded-lg border border-slate-300
                       text-[15px] focus:outline-none focus:ring-2
                       focus:ring-[#0B2149]"/>
        </div>

        <textarea rows="5" placeholder="Tell us more about your inquiry..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-300
                     text-[15px] focus:outline-none focus:ring-2
                     focus:ring-[#0B2149] resize-none"/>

        <button type="submit" className="bg-[#0B2149] text-white px-6 py-3 rounded-lg hover:bg-[#091C3D] transition-all">
             Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;