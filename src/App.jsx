import "./App.css";
import HeroSection from "./components/HeroSection";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="h-full w-full  bg-[url('https://react-landing-page-template-93ne.vercel.app/img/intro-bg.jpg')]">
    <HeroSection/>
    </div>
    </div>
  );
}

export default App;
