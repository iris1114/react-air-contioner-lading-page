import HeroSlider from "../../components/slider/HeroSlider";
import { heroBannerList } from "../../utils/data.js";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServicesSection";

const HomePage = () => {
  return (
    <main>
      <HeroSlider meta={heroBannerList} />
      <AboutSection />
      <ServiceSection />
    </main>
  );
};

export default HomePage;
