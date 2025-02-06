import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import '../styles/Home.css';
import Footer from "../components/Footer"; // Ensure correct import path


function Home() {
  
  const quotes = [
    "More Than an Agency— We’re your In-House Digital Marketing Team",
    "Drive Growth with Results-Driven Digital Marketing",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000); // Change quote every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  const services = [
    {
      title: "Performance Marketing",
      image: "/performance marketing.png", // Update with actual path
      link: "/services#digital-marketing",
    },
    {
      title: "Social Media and Influencer Marketing",
      image: "/influencer.jpg", // Update with actual path
      link: "/services#social-media",
    },
    {
      title: "SEO and Data Analytics",
      image: "/google.png", // Update with actual path
      link: "/services#seo-analytics",
    },
  ];
  const posts = [
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7292830163082387456?compact=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7291777433630883840?compact=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7290718816936828928?compact=1",
  ];
  
  return (
    <div className="font-sans font-serif relative w-full h-screen">
      {/* Background Image */}
      <div 
  className="absolute inset-0 bg-cover bg-center z-0"
  style={{ backgroundImage: "url('/homebg.jpg')" }}
></div>

{/* Hero Section */}
<div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-center text-center px-4 sm:px-6 md:px-10">
  {/* Content Section */}
  <motion.div
    className="relative z-10 max-w-2xl bg-transparent bg-opacity-80 text-white p-6 rounded-lg flex flex-col mt-auto lg:mt-0"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    {/* Animated Quote Section */}
    <div className="h-24 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
        >
          {quotes[index]}
        </motion.h1>
      </AnimatePresence>
    </div>

    {/* Button and Link */}
    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        to="/contact"
        className="px-6 py-3 bg-white border-2 border-white text-black rounded-lg shadow-lg hover:bg-black hover:text-white transition duration-300"
      >
        Contact Us
      </Link>

      <Link
        to="/services"
        className="px-6 py-3 border-2 border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-black transition duration-300"
      >
        Our Services
      </Link>
    </div>
  </motion.div>
</div>

    <section  style={{ backgroundColor: "#ddd8d3" }} className="py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/tanya.jpg" // Replace with actual image path
            alt="Tanya Narula"
            className="w-full md:w-[80%] rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-lg text-gray-600 font-semibold">Hear It From</h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Miss. Tanya Narula
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-1">
            (Founder, Digital Marketing Expert)
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            "Digital World is not just an agency, it's a revolution in marketing."
          </p>
        </div>
      </div>
    </section>

      {/* How We Can Help You Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            How We Can Help You?
          </motion.h2>

          <motion.p
            className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are a passionate digital marketing agency dedicated to driving results for businesses of all sizes.
            Our mission is to deliver innovative solutions that elevate brands and connect them with their target audiences.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: '🎧', title: 'One click support', description: 'Effortlessly connect with our support team to resolve your concerns in no time. Our one-click solution ensures swift assistance to keep you moving forward without delays.' },
            { icon: '📈', title: 'Sky rocket sales', description: 'Boost your business growth with tailored strategies designed to maximize revenue and drive customer engagement. Take your sales to the next level with impactful solutions.' },
            { icon: '📋', title: 'Quick Onboarding', description: 'Experience a seamless and efficient onboarding process. We simplify every step to get you up and running in no time, saving effort and maximizing productivity.' },
            { icon: '📦', title: 'Product development', description: 'Transform your ideas into reality with our comprehensive product development solutions. From concept to execution, we deliver innovation that drives success.' },
            { icon: '📁', title: 'Quality content', description: 'Stand out with content that resonates. Our high-quality, tailored messaging ensures your brand captures attention and delivers value to your audience.' },
            { icon: '📊', title: 'Result with impact', description: 'Achieve measurable outcomes that matter. Our results-oriented approach delivers impactful solutions, ensuring your goals are not just met but exceeded.' },
          ].map((service, index) => (
            
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div 
                className="text-5xl mb-4"
                whileHover={{ rotate: 10 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-black">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 text-black">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group block bg-transparent  overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold group-hover:text-blue-400">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

      {/* Trusted Brands Section */}
      <section className="py-20 bg-black">
        <div className="max-w-8xl mx-auto text-container text-center">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6">Our Trusted Brands</h2>
          <div className="brand-slider flex overflow-hidden">
            <div className="animate-loop-scroll flex gap-8">
              {["logo7.jpg", "logo8.jpg", "logo9.jpg", "logo10.jpg", "logo11.jpg", "logo12.jpg", "logo13.jpg"].map((logo, index) => (
                <img key={index} src={logo} alt={`Brand ${index + 1}`} className="h-16" />
              ))}
            </div>
            <div className="animate-loop-scroll flex gap-8" aria-hidden="true">
              {["logo7.jpg", "logo8.jpg", "logo9.jpg", "logo10.jpg", "logo11.jpg", "logo12.jpg", "logo13.jpg"].map((logo, index) => (
                <img key={index} src={logo} alt={`Brand ${index + 1}`} className="h-16" />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="linkedin p-4  bg-white">
      {/* Mobile: Horizontal scroll | Desktop: Stays same */}
      <div className="flex flex-nowrap lg:flex-row gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:px-40 scrollbar-hide">
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[85%] sm:w-[80%] md:w-[60%] lg:w-auto snap-center lg:px-20"
          >
            <iframe
              src={post}
              height="600"
              width="400"
              frameBorder="0"
              allowFullScreen
              className="w-full h-[500px] rounded-lg shadow-lg"
              title={`LinkedIn Reel ${index + 1}`}
            ></iframe>
          </div>
        ))}
      </div>
    </section>
      <Footer />

    </div>
    
  );
}

export default Home;
