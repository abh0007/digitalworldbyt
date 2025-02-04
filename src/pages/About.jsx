import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";


function About() {
  const testimonials = [
    { quote: "DigitalWorldByT transformed our online presence with outstanding marketing strategies!", name: "John Doe", company: "XYZ Corp" },
    { quote: "Their team is innovative and results-driven. Highly recommended!", name: "Sarah Lee", company: "ABC Enterprises" },
    { quote: "Exceptional service and dedication to our brand's success!", name: "Michael Smith", company: "LMN Solutions" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="text-gray-900 bg-white font-sans font-serif ">
      {/* Hero Section with Image Background */}
      <div className="relative h-[70vh] flex items-center justify-left align-left p-10 mt-4  bg-black">
        <img
          src="/about5.jpg" // Replace with your image path
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <motion.div
          className="relative z-10 text-center text-white max-w-4xl p-10"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl  mb-4  text-left  ">Our mission is to craft impactful strategies that elevate brands. Our vision is to be a leader in innovative digital solutions, driving growth and success for our clients.</h1>
          <p className="mt-2 text-lg"></p>
        </motion.div>
      </div>

      {/* Our Story */}
      <motion.section
        className="py-20 px-10 bg-white text-center"
        variants={slideIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-black">Our Story</h2>
        <p className="mt-4  text-lg text-gray-700 max-w-2xl mx-auto">
          DigitalWorldByT was founded by Tanya Narula, a passionate digital marketer dedicated to helping businesses thrive online. With years of experience, we’ve grown into a trusted partner for brands worldwide.
        </p>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="py-20 px-10 bg-gray-100 text-center"
        variants={slideIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-black">Our Mission & Vision</h2>
        <p className="mt-4  text-lg text-gray-700 max-w-2xl mx-auto">
          Our mission is to craft impactful strategies that elevate brands. Our vision is to be a leader in innovative digital solutions, driving growth and success for our clients.
        </p>
      </motion.section>

      {/* Goals */}
      <motion.section
        className="py-20 px-10 bg-white text-center"
        variants={slideIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-black">Our Goals</h2>
        <ul className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto list-disc list-inside">
          <li>Deliver high-quality marketing solutions.</li>
          <li>Empower businesses to succeed digitally.</li>
          <li>Stay ahead of industry trends.</li>
        </ul>
      </motion.section>

      {/* Clients */}
      <motion.section
        className="py-20 px-10 bg-gray-100 text-center"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-black">Trusted by Leading Brands</h2>
        <div className="mt-12 flex justify-center space-x-10 flex-wrap">
          <img src="/logo6.jpg" alt="Client 1" className="h-30 mb-4 ml-20" />
          <img src="/logo7.jpg" alt="Client 2" className="h-30 mb-4 ml-20" />
          <img src="/logo8.jpg" alt="Client 3" className="h-30 mb-4 ml-20" />
          <img src="/logo9.jpg" alt="Client 4 ml-20" className="h-30 mb-4 ml-20" />
          <img src="/logo10.jpg" alt="Client 5" className="h-30 mb-4 ml-20" />
        </div>
      </motion.section>

      {/* Company Values & Culture */}
      <motion.section
        className="py-20 px-10 bg-white text-center"
        variants={slideIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-black">Our Values & Culture</h2>
        <p className="mt-4 ml-20 text-lg text-gray-700 max-w-2xl mx-auto">
          Integrity, innovation, and collaboration define us. We strive for excellence and foster a growth mindset within our team and clients.
        </p>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-20 px-10 bg-gray-100 text-center"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-black">What Our Clients Say</h2>
        <div className="mt-10 bg-white p-15 rounded-lg shadow-lg relative inline-block max-w-xl mx-auto">
          <FaQuoteLeft className="absolute top-4 ml-20 left-4 ml-20 text-black text-3xl" />
          <p className="text-lg text-gray-800 italic">{testimonials[currentIndex].quote}</p>
          <FaQuoteRight className="absolute bottom-4 ml-20 right-4 ml-20 text-black text-3xl" />
          <p className="mt-4 ml-20 font-semibold text-gray-700">- {testimonials[currentIndex].name}, {testimonials[currentIndex].company}</p>
        </div>
        <div className="mt-6 flex justify-center space-x-4 ml-20">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-4 ml-20 h-4 ml-20 rounded-full ${index === currentIndex ? "bg-black" : "bg-gray-300"}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default About;