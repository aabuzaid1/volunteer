import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Gift, ShoppingBasket, Baby, Hospital, BookOpen } from 'lucide-react';
import { Card } from './ui/card';

export const InitiativesSection: React.FC = () => {
  const { t } = useLanguage();

  const initiatives = [
    {
      icon: Gift,
      title: t('فرحة طفل', 'Child Happiness'),
      description: t(
        'إدخال البهجة والسرور على قلوب الأطفال من خلال توزيع الهدايا والألعاب',
        'Bringing joy and happiness to children through distributing gifts and toys'
      ),
      image: 'https://images.unsplash.com/photo-1591845466152-62ab76b84fd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGhhcHBpbmVzcyUyMHNtaWxpbmd8ZW58MXx8fHwxNzY2NjAxOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: ShoppingBasket,
      title: t('سلات غذائية', 'Food Baskets'),
      description: t(
        'توزيع سلات غذائية على الأسر المحتاجة لمساعدتهم في توفير احتياجاتهم الأساسية',
        'Distributing food baskets to needy families to help them meet their basic needs'
      ),
      image: 'https://images.unsplash.com/photo-1580427170001-26757083fd50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmFza2V0JTIwY2hhcml0eXxlbnwxfHx8fDE3NjY2MDE5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Baby,
      title: t('دعم الأيتام', 'Orphan Support'),
      description: t(
        'توفير الدعم المادي والمعنوي للأطفال الأيتام ورعايتهم',
        'Providing material and moral support to orphaned children and their care'
      ),
      image: 'https://images.unsplash.com/photo-1702509416519-176ac54b6fbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnBoYW4lMjBjaGlsZHJlbiUyMGNhcmV8ZW58MXx8fHwxNzY2NjAxOTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Hospital,
      title: t('زيارات إنسانية', 'Humanitarian Visits'),
      description: t(
        'زيارة المرضى ودور الأيتام ومساندة الفئات الضعيفة في المجتمع',
        'Visiting the sick and orphanages and supporting vulnerable groups in society'
      ),
      image: 'https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjB0ZWFtJTIwd29ya2luZ3xlbnwxfHx8fDE3NjY2MDE5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: BookOpen,
      title: t('مبادرات تعليمية وتوعوية', 'Educational & Awareness Initiatives'),
      description: t(
        'تنظيم ورش عمل تعليمية وحملات توعوية لخدمة المجتمع',
        'Organizing educational workshops and awareness campaigns to serve the community'
      ),
      image: 'https://images.unsplash.com/photo-1761666508658-381c63e409fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjB5b3V0aCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjY2MDE5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-blue-100 text-blue-600',
    },
  ];

  return (
    <section id="initiatives" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('مبادراتنا', 'Our Initiatives')}
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                'نفخر بتنفيذ العديد من المبادرات الإنسانية والخيرية التي تخدم المجتمع',
                'We are proud to implement many humanitarian and charitable initiatives that serve the community'
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${initiative.color} rounded-full mb-4`}>
                    <initiative.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {initiative.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
