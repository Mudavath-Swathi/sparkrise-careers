import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloating = () => {
  return (
    <a
      href="https://whatsapp.com/channel/0029Vb7E16iDJ6Gv2W7W7X2G"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50
                 bg-green-500 hover:bg-green-600
                 text-white rounded-full
                 p-4 shadow-lg transition"
    >
      <FaWhatsapp size={26} />
    </a>
  );
};

export default WhatsAppFloating;
