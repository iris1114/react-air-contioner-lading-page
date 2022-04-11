import HeroSlider from "../../components/slider/HeroSlider";
import { heroBannerList } from "../../utils/data.js";
import AboutSection from "./AboutSection";
import GallerySection from "./GallerySection";
import ServiceSection from "./ServicesSection";
import TeamSection from "./TeamSection";

const HomePage = () => {
  return (
    <main>
      <HeroSlider meta={heroBannerList} />
      <AboutSection />
      <ServiceSection />
      <GallerySection />
      <TeamSection />
    </main>
  );
};

export default HomePage;
