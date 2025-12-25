import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <h3 className="font-bold text-xl">
                  {t('فريق شباب الخير', 'Shabab Al-Khair')}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {t(
                  'فريق تطوعي شبابي يسعى لخدمة المجتمع من خلال مبادرات إنسانية وخيرية',
                  'A youth volunteer team serving the community through humanitarian and charitable initiatives'
                )}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">
                {t('روابط سريعة', 'Quick Links')}
              </h3>
              <ul className="space-y-2">
                {[
                  { id: 'about', label: t('من نحن', 'About Us') },
                  { id: 'initiatives', label: t('مبادراتنا', 'Our Initiatives') },
                  { id: 'join', label: t('انضم إلينا', 'Join Us') },
                  { id: 'contact', label: t('تواصل معنا', 'Contact') },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">
                {t('معلومات التواصل', 'Contact Information')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-teal-400" />
                  <span>07XXXXXXXX</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-teal-400" />
                  <span>shababalkhair@gmail.com</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-teal-400" />
                  <span>{t('الأردن', 'Jordan')}</span>
                </li>
              </ul>
              <div className="flex gap-3 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 {t('فريق شباب الخير', 'Shabab Al-Khair')} • {t('جميع الحقوق محفوظة', 'All Rights Reserved')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
