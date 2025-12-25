import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Languages, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "figma:asset/c6eba517bf99e0f310b2099ab2fc926c4c4ceea6.png";

export const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: t("الرئيسية", "Home") },
    { id: "about", label: t("من نحن", "About Us") },
    { id: "vision", label: t("رؤيتنا", "Vision") },
    {
      id: "initiatives",
      label: t("مبادراتنا", "Our Initiatives"),
    },
    { id: "join", label: t("انضم إلينا", "Join Us") },
    { id: "gallery", label: t("معرض الصور", "Gallery") },
    { id: "contact", label: t("تواصل معنا", "Contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Shabab Al-Khair Logo"
              className="h-12 w-12 object-cover rounded-full"
            />
            <div>
              <h1 className="font-bold text-teal-700">
                {language === "ar"
                  ? "فريق شباب الخير"
                  : "Shabab Al-Khair"}
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2"
            >
              <Languages className="w-4 h-4" />
              {language === "ar" ? "EN" : "AR"}
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-start py-2 px-4 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};