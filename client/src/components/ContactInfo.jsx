import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h2 className="font-serif text-[26px] font-semibold text-slate-900 mb-8">
        Contact Information
      </h2>

      <div className="space-y-6">
        

        <Info icon={Phone} title="Phone">
          +91 8885791260
        </Info>

        <Info icon={Mail} title="Email">
          sparkrise@gmail.com
        </Info>

        <Info icon={Clock} title="Business Hours">
          Monday – Friday: 9:00 AM – 6:00 PM<br />
          Saturday: 10:00 AM – 2:00 PM<br />
          Sunday: Closed
        </Info>
      </div>

      
    </div>
  );
};

const Info = ({ icon: Icon, title, children }) => (
  <div className="flex gap-4">
    <div className="w-10 h-10 bg-slate-100 rounded-lg flex
                    items-center justify-center">
      <Icon size={18} className="text-[#0B2149]" />
    </div>

    <div>
      <h4 className="font-medium text-slate-900">{title}</h4>
      <p className="text-slate-600 text-[15px]">{children}</p>
    </div>
  </div>
);

export default ContactInfo;
