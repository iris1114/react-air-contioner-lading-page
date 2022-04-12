import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";


let App = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
};

export default App;
