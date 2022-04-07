import HeroSlider from "../../components/slider/HeroSlider";
import { heroBannerList } from "../../utils/data.js";

const HomePage = () => {
  return (
    <main>
      <HeroSlider meta={heroBannerList} />
    </main>
  );
};

export default HomePage;
