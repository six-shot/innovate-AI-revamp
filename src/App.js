import logo from "./logo.svg";
import "./App.css";
import Navbar from "./modules/components/global/navbar";
import Hero from "./modules/sections/hero";
import SubHero from "./modules/sections/subhero";
import Products from "./modules/sections/products";
import Footer from "./modules/sections/footer";
import BottomFooter from "./modules/sections/bottomfooter";
import Varieties from "./modules/sections/varieties";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SubHero />
      <Products />
      <Varieties />
      <Footer />
      <BottomFooter />
    </div>
  );
}

export default App;
