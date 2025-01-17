import logo from "./logo.svg";
import "./App.css";
import Navbar from "./modules/components/global/navbar";
import Hero from "./modules/sections/hero";
import SubHero from "./modules/sections/subhero";
import Products from "./modules/sections/products";
import CTA from "./modules/sections/cta";
import Footer from "./modules/sections/footer";
import BottomFooter from "./modules/sections/bottomfooter";
import WebsiteTab from "./modules/components/tab/WebsiteTab";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SubHero />
      <Products />
      <CTA />
      <div className="max-w-[1440px] mx-auto px-[5rem]">
        <WebsiteTab />
      </div>
      <Footer />

      <BottomFooter />
    </div>
  );
}

export default App;
