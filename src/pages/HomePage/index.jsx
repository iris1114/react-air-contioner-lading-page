import HeroSlider from "../../components/slider/HeroSlider";
import { heroBannerList } from "../../utils/data.js";
import AboutSection from "./AboutSection";

const HomePage = () => {
  return (
    <main>
      <HeroSlider meta={heroBannerList} />
      <AboutSection/>
    </main>
  );
};

export default HomePage;
