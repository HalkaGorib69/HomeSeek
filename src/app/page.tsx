import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import HeroQuickAccess from '@/components/HeroQuickAccess'
import FloatingActions from '@/components/FloatingActions'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import PropertyWins from '@/components/PropertyWins'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <svg className="h-8" style={{ marginLeft: '25rem', marginRight: '25rem' }} viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M400,10 Q720,50 1340,10 L1440,0 L0,0 L100,10" fill="white" />
      </svg>
      <Header />
      <HeroSlider />
      <HeroQuickAccess />
      <FloatingActions />
      <AboutSection />
      <ServicesSection />
      <PropertyWins />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  )
}
