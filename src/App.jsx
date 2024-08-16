import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "./App.css";
import { useEffect } from "react";
import Features from "./components/Features";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTA";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <Projects />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
