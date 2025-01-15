import logo from "./logo.svg";
import "./App.css";
import Navbar from "./modules/components/global/navbar";
import Hero from "./modules/sections/hero";
import SubHero from "./modules/sections/subhero";
import Products from "./modules/sections/products";
import CTA from "./modules/sections/cta";
import Footer from "./modules/sections/footer";
import BottomFooter from "./modules/sections/bottomfooter";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SubHero/>
      <Products/>
      <CTA/>
      <Footer/>
      <BottomFooter/>
    </div>
  );
}

export default App;
