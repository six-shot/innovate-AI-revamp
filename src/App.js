import logo from "./logo.svg";
import "./App.css";
import Navbar from "./modules/components/global/navbar";
import Hero from "./modules/sections/hero";
import SubHero from "./modules/sections/subhero";
import Products from "./modules/sections/products";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SubHero/>
      <Products/>
    </div>
  );
}

export default App;
