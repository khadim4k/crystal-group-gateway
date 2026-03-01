import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import SubsidiariesSection from "@/components/SubsidiariesSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ContactForm from "@/components/ContactForm";

const Index = () => (
  <main>
    <TopBar />
    <Navbar />
    <HeroSlider />
    <AboutSection />
    <SubsidiariesSection />
    <StatsSection />
    <ContactForm />
    <Footer />
    <WhatsAppWidget />
  </main>
);

export default Index;
