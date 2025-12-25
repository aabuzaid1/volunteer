import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Target, Compass } from 'lucide-react';
import { Card } from './ui/card';

export const VisionSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('رؤيتنا ورسالتنا', 'Vision & Mission')}
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <Card className="p-8 bg-white hover:shadow-2xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                <Target className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('رؤيتنا', 'Our Vision')}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t(
                  'بناء مجتمع متكافل يسوده التعاون والخير.',
                  'Building a cohesive society governed by cooperation and goodness.'
                )}
              </p>
            </Card>

            {/* Mission */}
            <Card className="p-8 bg-white hover:shadow-2xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                <Compass className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('رسالتنا', 'Our Mission')}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t(
                  'تمكين الشباب لأداء دورهم الإنساني في خدمة المجتمع، وتنفيذ مبادرات تطوعية تُحدث أثرًا إيجابياً ومستدامًا.',
                  'Empowering youth to perform their humanitarian role in serving the community and implementing volunteer initiatives that create positive and sustainable impact.'
                )}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
