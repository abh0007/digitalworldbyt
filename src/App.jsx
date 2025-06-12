import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./ScrollToTop"
import Ads from "./pages/Ads";
import ServiceSection from "./pages/ServiceSection";
import Testimonials from "./pages/Testemonials";
import Blog from "./pages/Blog";
import BrandSlider from "./pages/Brandslider";
import "@fontsource/roboto"; // Default weight (400)
import "@fontsource/roboto/300.css"; // Light
import "@fontsource/roboto/700.css"; // Bold


function App() {
  return (
    <div className=" text-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Ads" element={<Ads/>} />
        <Route path="/ServiceSection" element={<ServiceSection/>} />
        <Route path="/Testemonials" element={<ServiceSection/>} />
        <Route path="/Brandslider" element={<BrandSlider/>} />
        <Route path="/Blog" element={<Blog />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
