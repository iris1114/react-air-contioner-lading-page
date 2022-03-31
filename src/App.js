import Header from "./components/header";
import Footer from "./components/layout/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/HomePage";



let App = () => {
  return(
      <>
        <Header />
          <HomePage/>
        <Footer />
      </>
  );
}
export default App;
