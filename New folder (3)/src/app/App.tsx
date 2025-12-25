import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { VisionSection } from './components/VisionSection';
import { InitiativesSection } from './components/InitiativesSection';
import { JoinSection } from './components/JoinSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { SupportersSection } from './components/SupportersSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <VisionSection />
          <InitiativesSection />
          <JoinSection />
          <GallerySection />
          <ContactSection />
          <SupportersSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}

export default App;