import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from './ui/card';

export const GallerySection: React.FC = () => {
  const { t } = useLanguage();

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1599187469372-3f7b1becc340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZG9uYXRpb24lMjBoZWxwfGVufDF8fHx8MTc2NjYwMTk3NHww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: t('توزيع المساعدات', 'Distributing Aid'),
    },
    {
      url: 'https://images.unsplash.com/photo-1591845466152-62ab76b84fd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGhhcHBpbmVzcyUyMHNtaWxpbmd8ZW58MXx8fHwxNzY2NjAxOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: t('فرحة الأطفال', 'Children\'s Joy'),
    },
    {
      url: 'https://images.unsplash.com/photo-1580427170001-26757083fd50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmFza2V0JTIwY2hhcml0eXxlbnwxfHx8fDE3NjY2MDE5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: t('السلات الغذائية', 'Food Baskets'),
    },
    {
      url: 'https://images.unsplash.com/photo-1702509416519-176ac54b6fbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnBoYW4lMjBjaGlsZHJlbiUyMGNhcmV8ZW58MXx8fHwxNzY2NjAxOTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: t('رعاية الأيتام', 'Orphan Care'),
    },
    {
      url: 'https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjB0ZWFtJTIwd29ya2luZ3xlbnwxfHx8fDE3NjY2MDE5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: t('العمل الجماعي', 'Teamwork'),
    },
    {
      url: 'https://images.unsplash.com/photo-1761666508658-381c63e409fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjB5b3V0aCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjY2MDE5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: t('الفريق التطوعي', 'Volunteer Team'),
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('معرض الصور', 'Gallery')}
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                'لحظات من العطاء والعمل الإنساني لفريق شباب الخير',
                'Moments of giving and humanitarian work by Shabab Al-Khair'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-semibold p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
