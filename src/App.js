import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import IntroductionContainer from "./components/IntroductionContainer/IntroductionContainer";
import FeaturedAreaOne from "./components/FeaturedArea/FeatureAreaOne";
import FeaturedAreaTwo from "./components/FeaturedArea/FeaturedAreaTwo";
import FeaturedProducts from "./components/FeaturedProductContainer/FeaturedProducts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroContainer />
      <ProductCategories />
      <IntroductionContainer />
      <FeaturedAreaOne />
      <FeaturedAreaTwo />
      <FeaturedProducts />
    </div>
  );
}

export default App;
