import React from "react";
import {
  Linkedin,
  Twitter,
  Facebook,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#0B2149] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
             <div>
              <div className="flex items-center gap-3">
                  <Link to="/" className="inline-flex items-center">
                    <img src={assets.logo} alt="SparkRise Careers" className="h-17 w-auto object-contain"/>
                  </Link>
              </div>
            
            <p className="mt-5 text-[15px] text-slate-300 leading-relaxed">
              Your trusted partner in finding the perfect career opportunity.
              We connect talented professionals with leading companies.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                <Linkedin size={18} />
              </a>
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                <Twitter size={18} />
              </a>
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-[18px] font-serif font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-[15px] text-slate-300">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Job Listings</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-[18px] font-serif font-semibold mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-[15px] text-slate-300">
              <li>Executive Search</li>
              <li>Recruitment Services</li>
              <li>Career Consulting</li>
              <li>Resume Building</li>
              <li>Interview Coaching</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-[18px] font-serif font-semibold mb-5">
              Contact Us
            </h4>

            <div className="space-y-4 text-[15px] text-slate-300">
              

              <div className="flex gap-3">
                <Phone size={18} />
                <span>+91 8885791260</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <span>sparkrise@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-14 pt-6 text-center text-[14px] text-slate-400">
          © 2026 SparkRise Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
