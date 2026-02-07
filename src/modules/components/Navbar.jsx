import { useState } from "react";
import { Sun, Moon, Phone, Menu, X } from "lucide-react";
import MainLogo from "../../assets/images/main/MainLogo.png";
import { useTheme } from "../../core/createContext";
import ClinicSelectionPopup from "../../shared/ui/ClinicSelectionPopup";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showClinicPopup, setShowClinicPopup] = useState(false);

  const navLinks = [
    { label: "الرئيسية", href: "#" },
    { label: "عن الطبيب", href: "#about" },
    { label: "الخدمات", href: "#services" },
    { label: "الفريق", href: "#team" },
    { label: "الفيديوهات", href: "#videos" },
    { label: "النتائج", href: "#results" },
    { label: "الفروع", href: "#locations" },
    { label: "تواصل معنا", href: "#footer" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
          isDark
            ? "bg-gray-900/95 border-gray-800"
            : "bg-white/95 border-gray-200"
        } border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Title - Right Side (Arabic) */}
            <div className="flex items-center gap-3">
              <img src={MainLogo} alt="Logo" className="h-12 w-12 object-contain" />
              <div className="flex flex-col">
                <span
                  className={`text-lg font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {/* Tooth Icon */}
                  عيادات أبو النجا
                </span>
                <span
                  className={`text-xs ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  لتقويم وزراعة الأسنان
                </span>
              </div>
            </div>

            {/* Navigation Links - Center (Desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Actions - Left Side */}
            <div className="flex items-center gap-4">
              {/* Phone Number */}
              <a
                href="tel:01227599182"
                className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isDark
                    ? "text-gray-300 hover:bg-gray-700/50"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">01227599182</span>
              </a>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-lg transition-all duration-300 ${
                  isDark
                    ? "text-gray-300 hover:bg-gray-700/50"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* CTA Button */}
              <button
                onClick={() => setShowClinicPopup(true)}
                className={`hidden sm:flex px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  isDark
                    ? "bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30"
                    : "bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20"
                }`}
              >
                احجز موعد
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 ${
                  isDark
                    ? "text-gray-300 hover:bg-gray-700/50"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden border-t ${
              isDark
                ? "border-gray-800 bg-gray-900"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isDark
                      ? "text-gray-300 hover:text-white hover:bg-gray-700/50"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setShowClinicPopup(true);
                  setMobileMenuOpen(false);
                }}
                className={`w-full px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isDark
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                احجز موعد
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Clinic Selection Popup */}
      <ClinicSelectionPopup
        isOpen={showClinicPopup}
        onClose={() => setShowClinicPopup(false)}
      />
    </>
  );
};

export default Navbar;
