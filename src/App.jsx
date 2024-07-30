import "./App.css";
import About from "./components/About";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";

import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <HeroSection />
      <Features/>
      <About/>
      <OurServices/>
    </div>
  );
}

export default App;
