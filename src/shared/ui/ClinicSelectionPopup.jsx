import { MapPin, X } from "lucide-react";
import { useTheme } from "../../core/createContext";

const ClinicSelectionPopup = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();

  const clinics = [
    {
      name: "عيادات قويسنا",
      whatsapp: "201227599182",
      available: true,
    },
    {
      name: "عيادات طه شبرا",
      whatsapp: "201040467770",
      available: true,
    },
    {
      name: "عيادات العجايزة",
      whatsapp: "201070103436",
      available: true,
    },
    {
      name: "عيادات شبين",
      whatsapp: "",
      available: false,
    },
  ];

  const handleClinicClick = (clinic) => {
    if (clinic.available) {
      const message = `مرحباً، أود حجز موعد في ${clinic.name}`;
      const url = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className={`relative w-full max-w-md mx-4 rounded-2xl shadow-2xl overflow-hidden ${
          isDark ? "bg-[#1a2332]" : "bg-white"
        }`}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-5">
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-all"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-2xl font-bold text-white text-center">
            اختر الفرع
          </h2>
          <p className="text-sm text-white/90 text-center mt-1">
            اختر العيادة الأقرب لك لحجز موعد
          </p>
        </div>

        {/* Clinics List */}
        <div className="p-6 space-y-3">
          {clinics.map((clinic, index) => (
            <button
              key={index}
              onClick={() => handleClinicClick(clinic)}
              disabled={!clinic.available}
              className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                clinic.available
                  ? isDark
                    ? "bg-gray-700/50 hover:bg-gray-700 hover:scale-105 cursor-pointer"
                    : "bg-gray-50 hover:bg-gray-100 hover:scale-105 cursor-pointer"
                  : isDark
                  ? "bg-gray-800/30 cursor-not-allowed opacity-60"
                  : "bg-gray-100/50 cursor-not-allowed opacity-60"
              }`}
            >
              <div
                className={`p-3 rounded-full ${
                  clinic.available
                    ? "bg-blue-500"
                    : isDark
                    ? "bg-gray-600"
                    : "bg-gray-300"
                }`}
              >
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-right">
                <h3
                  className={`text-lg font-bold ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  {clinic.name}
                </h3>
                {!clinic.available && (
                  <p className="text-sm text-yellow-500 font-medium">
                    قريباً
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicSelectionPopup;