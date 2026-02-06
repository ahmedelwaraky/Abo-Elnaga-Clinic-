import { useState } from "react";
import { Sun, Moon, Phone, Menu, X } from "lucide-react";

import Logo from "../../assets/images/main/Logo-1.png";
import { useTheme } from "../../core/createContext";
import ClinicSelectionPopup from "../../shared/ui/ClinicSelectionPopup";
// import ClinicSelectionPopup from "./ClinicSelectionPopup";

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
    { label: "تواصل معنا", href: "#branches" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isDark
            ? "bg-[#1a2332] border-b border-gray-700/50"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Title - Right Side (Arabic) */}
            <div className="flex items-center gap-3">
              <div className="relative">
                {/* Tooth Icon */}
                <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                  <img
                    src={Logo}
                    alt="Abo Elnaga Clinic Logo"
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <h1
                  className={`text-xl font-bold tracking-tight ${
                    isDark ? "text-white" : "text-gray-700"
                  }`}
                  style={{ fontFamily: '"Cairo", sans-serif' }}
                >
                  عيادات أبو النجا
                </h1>
                <p
                  className={`text-xs ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                  style={{ fontFamily: '"Cairo", sans-serif' }}
                >
                  لتقويم وزراعة الأسنان
                </p>
              </div>
            </div>

            {/* Navigation Links - Center (Desktop) */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative group ${
                    isDark
                      ? "text-gray-300 hover:text-white hover:bg-gray-700/50"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  style={{ fontFamily: '"Cairo", sans-serif' }}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                      isDark ? "bg-blue-400" : "bg-blue-500"
                    } transition-all duration-300 group-hover:w-full`}
                  ></span>
                </a>
              ))}
            </div>

            {/* Actions - Left Side */}
            <div className="flex items-center gap-3">
              {/* Phone Number */}
              <a
                href="tel:01227599182"
                className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isDark
                    ? "text-gray-300 hover:bg-gray-700/50"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span
                  className="text-sm font-medium"
                  style={{ fontFamily: '"Cairo", sans-serif' }}
                >
                  01227599182
                </span>
              </a>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-lg transition-all duration-300 ${
                  isDark
                    ? "bg-gray-700/50 text-yellow-300 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 transition-transform duration-300 rotate-0 hover:rotate-180" />
                ) : (
                  <Moon className="w-5 h-5 transition-transform duration-300 rotate-0 hover:-rotate-12" />
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
                style={{ fontFamily: '"Cairo", sans-serif' }}
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
              isDark ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="px-4 py-3 space-y-1">
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
                  style={{ fontFamily: '"Cairo", sans-serif' }}
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
                style={{ fontFamily: '"Cairo", sans-serif' }}
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