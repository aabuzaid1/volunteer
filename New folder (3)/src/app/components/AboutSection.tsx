import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, Users, Shield, Eye, Award } from 'lucide-react';
import { Card } from './ui/card';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t('العطاء دون مقابل', 'Giving Without Return'),
    },
    {
      icon: Users,
      title: t('العمل بروح الفريق', 'Teamwork Spirit'),
    },
    {
      icon: Shield,
      title: t('المسؤولية المجتمعية', 'Social Responsibility'),
    },
    {
      icon: Eye,
      title: t('الشفافية', 'Transparency'),
    },
    {
      icon: Award,
      title: t('الإخلاص', 'Sincerity'),
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('من نحن', 'About Us')}
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1599187469372-3f7b1becc340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZG9uYXRpb24lMjBoZWxwfGVufDF8fHx8MTc2NjYwMTk3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>

            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t(
                  'فريق شباب الخير هو فريق تطوعي شبابي غير ربحي، يضم مجموعة من الشباب الذين يؤمنون بأن العمل التطوعي رسالة وحياة. نحن نعمل بروح الفريق الواحد وننفذ مبادرات إنسانية واجتماعية تهدف إلى خدمة مختلف فئات المجتمع، خاصة الأطفال والأسر المحتاجة.',
                  'Shabab Al-Khair is a non-profit youth volunteer team composed of young people who believe that volunteering is a message and a way of life. We work as a united team implementing humanitarian and social initiatives serving various community groups, especially children and needy families.'
                )}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('قيم الفريق', 'Team Values')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-teal-100 hover:border-teal-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                    <value.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <p className="font-semibold text-gray-900">{value.title}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
