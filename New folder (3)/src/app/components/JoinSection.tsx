import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { UserPlus, CircleCheck } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card } from './ui/card';

export const JoinSection: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    phone: '',
    city: '',
    email: '',
    experience: '',
    reason: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        age: '',
        phone: '',
        city: '',
        email: '',
        experience: '',
        reason: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const requirements = [
    t('الالتزام', 'Commitment'),
    t('الجدية', 'Seriousness'),
    t('العمل بروح الفريق', 'Teamwork Spirit'),
  ];

  return (
    <section id="join" className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 rounded-full mb-4">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('انضم إلينا', 'Join Us')}
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 mb-8">
              {t('كن جزءًا من الخير', 'Be Part of Goodness')}
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                'إذا كنت تمتلك روح العطاء وحب العمل التطوعي، يسعدنا انضمامك لفريقنا',
                'If you have a spirit of giving and love volunteer work, we would be happy for you to join our team'
              )}
            </p>
          </div>

          {/* Requirements */}
          <Card className="p-6 mb-8 bg-white">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t('شروط الانضمام', 'Membership Requirements')}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-teal-50 rounded-lg">
                  <CircleCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="font-semibold text-gray-900">{req}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Registration Form */}
          <Card className="p-8 bg-white shadow-xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                  <CircleCheck className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('شكراً لك!', 'Thank You!')}
                </h3>
                <p className="text-gray-600">
                  {t(
                    'تم إرسال طلبك بنجاح. سنتواصل معك قريباً',
                    'Your application has been submitted successfully. We will contact you soon'
                  )}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">
                      {t('الاسم الكامل', 'Full Name')} *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="age">
                      {t('العمر', 'Age')} *
                    </Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">
                      {t('رقم الهاتف', 'Phone Number')} *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="city">
                      {t('المدينة', 'City')} *
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">
                    {t('البريد الإلكتروني', 'Email')} *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="experience">
                    {t('خبرة تطوعية سابقة', 'Previous Volunteer Experience')}
                  </Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows={3}
                    className="mt-2"
                    placeholder={t('اختياري', 'Optional')}
                  />
                </div>

                <div>
                  <Label htmlFor="reason">
                    {t('سبب الانضمام', 'Reason for Joining')} *
                  </Label>
                  <Textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                >
                  {t('إرسال الطلب', 'Submit Application')}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};