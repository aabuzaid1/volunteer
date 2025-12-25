import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Heart } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[600px] flex items-center bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1761666508658-381c63e409fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjB5b3V0aCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjY2MDE5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-600 rounded-full mb-6">
            <Heart className="w-10 h-10 text-white fill-white" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t('فريق شباب الخير', 'Shabab Al-Khair')}
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            {t(
              'لأن الخير رسالة، ولأن الشباب هم صُنّاع الأمل',
              'Because goodness is a message, and youth are the creators of hope'
            )}
          </p>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t(
              'نحن فريق تطوعي شبابي نسعى لخدمة المجتمع من خلال مبادرات إنسانية وخيرية تهدف إلى دعم المحتاجين، ونشر روح التكافل والتعاون.',
              'We are a youth volunteer team working to serve the community through humanitarian and charitable initiatives aimed at supporting those in need and promoting solidarity.'
            )}
          </p>

          <div className="inline-flex items-center justify-center px-6 py-3 bg-amber-100 border border-amber-300 rounded-lg mb-8">
            <p className="text-xl font-bold text-amber-900">
              {t('معاً نزرع الأمل ونصنع الفرق!', 'Together we plant hope and make a difference!')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg"
              onClick={() => scrollToSection('join')}
            >
              {t('انضم إلينا', 'Join Us')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-teal-600 text-teal-700 hover:bg-teal-50 px-8 py-6 text-lg"
              onClick={() => scrollToSection('initiatives')}
            >
              {t('مبادراتنا', 'Our Initiatives')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
