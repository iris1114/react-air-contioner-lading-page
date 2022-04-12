import HeroSlider from "../../components/slider/HeroSlider";
import { heroBannerList } from "../../utils/data.js";
import AboutSection from "./AboutSection";
import ContactSection from "./AdressSection";
import BlogSection from "./BlogSection";
import ConsultSection from "./ConsultSection";
import GallerySection from "./GallerySection";
import PricingSection from "./PricingSection";
import ServiceSection from "./ServicesSection";
import TeamSection from "./TeamSection";
import TestinonailsSection from "./TestimonialsSection";

const HomePage = () => {
  return (
    <main>
      <HeroSlider meta={heroBannerList} />
      <AboutSection />
      <ServiceSection />
      <GallerySection />
      <TeamSection />
      <PricingSection />
      <ConsultSection />
      <TestinonailsSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
