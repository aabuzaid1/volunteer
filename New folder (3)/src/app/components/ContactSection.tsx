import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { Card } from './ui/card';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: t('الهاتف', 'Phone'),
      value: '07XXXXXXXX',
      href: 'tel:07XXXXXXXX',
    },
    {
      icon: Mail,
      title: t('البريد الإلكتروني', 'Email'),
      value: 'shababalkhair@gmail.com',
      href: 'mailto:shababalkhair@gmail.com',
    },
    {
      icon: MapPin,
      title: t('الموقع', 'Location'),
      value: t('الأردن', 'Jordan'),
      href: '#',
    },
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: 'Facebook',
      href: '#',
      color: 'hover:text-blue-600 hover:bg-blue-50',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      href: '#',
      color: 'hover:text-pink-600 hover:bg-pink-50',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('تواصل معنا', 'Contact Us')}
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">
              {t(
                'نسعد بتواصلكم معنا في أي وقت',
                'We are happy to hear from you at any time'
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-shadow bg-white"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-100 rounded-full mb-4">
                  <info.icon className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                <a
                  href={info.href}
                  className="text-gray-600 hover:text-teal-600 transition-colors"
                >
                  {info.value}
                </a>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-white text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {t('تابعنا على وسائل التواصل الاجتماعي', 'Follow Us on Social Media')}
            </h3>
            <div className="flex justify-center gap-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-300 text-gray-600 transition-all ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
