import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import FloatingActions from '@/components/FloatingActions'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import PropertyWins from '@/components/PropertyWins'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <FloatingActions />
      <AboutSection />
      <ServicesSection />
      <PropertyWins />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  )
}
