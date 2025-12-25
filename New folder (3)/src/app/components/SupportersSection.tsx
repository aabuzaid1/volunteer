import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { HandHelping, Building2, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export const SupportersSection: React.FC = () => {
  const { t } = useLanguage();

  const partnerTypes = [
    {
      icon: Building2,
      title: t('شراكات المؤسسات', 'Institutional Partnerships'),
      description: t(
        'نرحب بالشراكة مع المؤسسات والشركات لتنفيذ مبادرات إنسانية مستدامة',
        'We welcome partnerships with institutions and companies to implement sustainable humanitarian initiatives'
      ),
    },
    {
      icon: Users,
      title: t('الدعم الفردي', 'Individual Support'),
      description: t(
        'كل مساهمة فردية تُحدث فرقاً في حياة المحتاجين',
        'Every individual contribution makes a difference in the lives of those in need'
      ),
    },
    {
      icon: HandHelping,
      title: t('التطوع المؤسسي', 'Corporate Volunteering'),
      description: t(
        'نوفر فرص تطوع جماعي للمؤسسات والشركات',
        'We provide group volunteering opportunities for institutions and companies'
      ),
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="supporters" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('للداعمين والشركاء', 'Supporters & Partners')}
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                'نؤمن بأن الشراكات الفعالة تُحدث أثراً إنسانياً مستداماً',
                'We believe that effective partnerships create sustainable humanitarian impact'
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-2 hover:border-teal-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                  <type.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {type.description}
                </p>
              </Card>
            ))}
          </div>

          <Card className="p-10 bg-gradient-to-br from-teal-600 to-emerald-600 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('كن شريكاً في الخير', 'Be a Partner in Good')}
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
              {t(
                'انضم إلينا في رحلة العطاء وساهم في بناء مجتمع أفضل',
                'Join us on the journey of giving and contribute to building a better society'
              )}
            </p>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-6 text-lg font-bold"
            >
              {t('تواصل معنا', 'Contact Us')}
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
