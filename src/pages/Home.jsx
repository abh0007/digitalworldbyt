import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import '../styles/Home.css';
import Footer from "../components/Footer"; // Ensure correct import path
import Ads from "./Ads";
import Testimonials from "./Testemonials";
import BrandSlider from "./Brandslider";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles


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
      title: "Social Media Marketing",
      image: "/influencer.jpg", // Update with actual path
      link: "/services#social-media",
    },
    {
      title: "SEO and Website Development",
      image: "/google.png", // Update with actual path
      link: "/services#seo-analytics",
    },
    {
      title: "Influencer Marketing",
      image: "/influencermarketing.png", // Update with actual path
      link: "/services#digital-marketing",
    },
    {
      title: "PR Channel",
      image: "/prchannel.png", // Update with actual path
      link: "/services#digital-marketing",
    },
    
  ];
  const posts = [
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7292830163082387456?compact=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7282264987274723328?compact=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7290718816936828928?compact=1",
  ];
  const stats = [
    { 
      icon: <img src="/globe.png" className="w-30 h-30" alt="Countries Served" />, 
      value: "20+", 
      label: "Countries Served" 
    },
    { 
      icon: <img src="/award.png" className="w-30 h-30" alt="Years of Experience" />, 
      value: "5+", 
      label: "Years of Experience" 
    },
    { 
      icon: <img src="/check.png" className="w-30 h-30" alt="Successful Projects" />, 
      value: "100+", 
      label: "Successful Projects" 
    },
    { 
      icon: <img src="/handshake.png" className="w-30 h-30" alt="Happy Clients" />, 
      value: "50+", 
      label: "Happy Clients" 
    },
    { 
      icon: <img src="/industry.png" className="w-30 h-30" alt="Industries Covered" />, 
      value: "10+", 
      label: "Industries Covered" 
    }
  ];
  
  

  
  return (
    <div className="font-roboto relative w-full h-screen">
      {/* Background Image */}
      <div 
  className="absolute inset-0 bg-cover bg-center z-0"
  style={{ backgroundImage: "url('/homebg.jpg')" }}
></div>

{/* Hero Section */}<div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-center text-center px-4 sm:px-6 md:px-10">
  {/* Content Section */}
  <motion.div
    className="relative z-10 max-w-3xl bg-transparent bg-opacity-80 text-white p-0 rounded-lg flex flex-col mt-auto mb-20 lg:mt-20"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    {/* Animated Quote Section */}
    <div className="h-24 flex lg:w-221 items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.h5
          key={index}
          className="text-3xl sm:text-4xl md:text-5xl lg:2xl font-bold leading-tight  mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
        >
          {quotes[index]}
        </motion.h5>
      </AnimatePresence>
    </div>

    {/* Button and Link */}
    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:ml-20">
    <a
  href="https://wa.me/918887813257" // Replace with your actual WhatsApp number
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-white border-2 border-white text-black rounded-lg shadow-lg hover:bg-black hover:text-white transition duration-300"
>
  Contact Us
</a>


      <Link
        to="/services"
        className="px-6 py-3 border-2 border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-black transition duration-300"
      >
        Our Services
      </Link>
    </div>
  </motion.div>

</div>


<section className="py-12 bg-white">
      <div className="max-w-8xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12  text-black">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 px-6 text-black">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group block bg-transparent  overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-70 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold group-hover:text-blue-400">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    


    <section style={{ backgroundColor: "#ddd8d3" }} className="sm:py-10 lg:py-0 px-4 sm:px-6 md:px-10">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-6">
    
    {/* Left Side - Text Content */}
    <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
      <h3 className="text-lg text-gray-600 font-semibold">Hear It From</h3>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        Ms Tanya Narula
      </h2>
      <p className="text-sm sm:text-base text-gray-500 mt-1">
        (Founder, Digital Marketing Expert)
      </p>

      {/* On Mobile, the image comes here */}
      <div className="w-full md:hidden flex justify-center mt-4">
        <img 
          src="/tanya.jpg" 
          alt="Tanya Narula"
          className="w-full sm:w-[80%] rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Main content below the image (in mobile) or to the right (in desktop) */}
      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
        "Digital World is not just an agency; it’s a complete digital ecosystem where we provide end-to-end solutions for our clients. From web development and SEO to social media marketing and branding, we help businesses establish a strong digital presence. Our goal is to drive growth, engagement, and success through innovative strategies and tailored digital solutions."
      </p>
    </div>

    {/* Left Side - Image (Desktop Only) */}
    <div className="w-full md:w-1/2 hidden md:flex justify-center">
      <img
        src="/tanya.jpg"
        alt="Tanya Narula"
        className="w-full md:w-[80%] rounded-lg shadow-lg object-cover"
      />
    </div>

  </div>
</section>

<section className="bg-black text-white py-10">
  <div className="max-w-7xl mx-auto text-center px-0">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Our Experience</h2>
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-12">
      Empowering businesses with our expertise across multiple industries and countries.
    </p>

    {/* Desktop Grid View */}
    <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-20">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          {stat.icon}
          <span className="text-4xl font-bold mt-4">{stat.value}</span>
          <span className="text-lg text-gray-300">{stat.label}</span>
        </div>
      ))}
    </div>

    {/* Mobile Scrollable View */}
    <div className="md:hidden overflow-x-auto flex space-x-8 w-full px-4 scrollbar-hide">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center min-w-[150px]">
          {stat.icon}
          <span className="text-3xl font-bold mt-4">{stat.value}</span>
          <span className="text-base text-gray-300">{stat.label}</span>
        </div>
      ))}
    </div>
  </div>
</section>


     
      
    
    <Ads/>
     {/* Trusted Brands Section */}
     <section className="py-10 bg-black">
  <div className="max-w-8xl mx-auto text-container text-center">
    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
      Brands Trusted Us
    </h2>
    
    {/* Brand Slider 1 (Left to Right) */}
    <BrandSlider/>

  </div>
</section>
    
     {/* How We Can Help You Section */}
     <section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h2
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      How We Can Help You?
    </motion.h2>

    <motion.p
      className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      We are a passionate digital marketing agency dedicated to driving results for businesses of all sizes.
      Our mission is to deliver innovative solutions that elevate brands and connect them with their target audiences.
    </motion.p>
  </div>
  
 

  {/* Services Grid with Border Net Structure */}
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-300 max-w-6xl mx-auto">
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
        className="bg-white p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-300"
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



     

<Testimonials/>

      <section className="linkedin p-4  bg-gray-100">
      <h2 className="text-black text-center p-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  mb-6">Follow us On Linkedin</h2>
      {/* Mobile: Horizontal scroll | Desktop: Stays same */}
      <div className="flex flex-nowrap lg:flex-row gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:px-40 scrollbar-hide">
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[85%] sm:w-[80%] md:w-[60%] lg:w-auto snap-center lg:px-26"
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
     {/* Call to Action */}
     <section
        className="py-20 bg-black text-white text-center"
        
      >
        <h3 className="text-4xl font-bold" >
          Ready to grow your business?
        </h3>
        <p className="mt-4 text-lg" >
          Contact us today to discuss how we can help you achieve your marketing
          goals.
        </p>
        <a
  href="https://wa.me/918887813257" // Replace with your actual WhatsApp number
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block px-6 py-3 bg-white text-black hover:bg-blue-700 hover:text-white transition duration-300"
  
>
  Get in Touch
</a>

      </section>
      <Footer />
      

    </div>
    
  );
}

export default Home;
