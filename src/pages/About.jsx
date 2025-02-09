import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    <div className="text-gray-900 bg-transparent font-roboto">
      {/* Hero Section with Image Background */}
      <div className="relative h-[70vh] flex items-center justify-center p-10 mt-4 ">
        <img
          src="/about-hero.jpg" // Replace with your image path
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <motion.div
          className="relative z-10 text-center text-white max-w-4xl p-10"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-5xl font-bold mb-4">Welcome to DigitalWorldByT</h1>
          <p className="mt-2 text-lg">Your partner in innovative digital marketing solutions.</p>
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
        <h2 className="text-4xl font-bold text-black">Our Story</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
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
        <h2 className="text-4xl font-bold text-black">Our Mission & Vision</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
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
        <h2 className="text-4xl font-bold text-black">Our Goals</h2>
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
        <h2 className="text-4xl font-bold text-black">Trusted by Leading Brands</h2>
        <div className="mt-12 flex justify-center space-x-30 flex-wrap">
          <img src="/logo20.jpg" alt="Client 1" className="h-40 mb-4" />
          <img src="/logo7.jpg" alt="Client 2" className="h-40 mb-4" />
          <img src="/logo8.jpg" alt="Client 3" className="h-40 mb-4" />
          <img src="/logo9.jpg" alt="Client 4" className="h-40 mb-4" />
          <img src="/logo10.jpg" alt="Client 5" className="h-40 mb-4" />
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
        <h2 className="text-4xl font-bold text-black">Our Values & Culture</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
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
        <h2 className="text-4xl font-bold text-black">What Our Clients Say</h2>
        <div className="mt-10 bg-white p-10 rounded-lg shadow-lg relative inline-block max-w-xl mx-auto">
          <FaQuoteLeft className="absolute top-4 left-4 text-black text-3xl" />
          <p className="text-lg text-gray-800 italic">{testimonials[currentIndex].quote}</p>
          <FaQuoteRight className="absolute bottom-4 right-4 text-black text-3xl" />
          <p className="mt-4 font-semibold text-gray-700">- {testimonials[currentIndex].name}, {testimonials[currentIndex].company}</p>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${index === currentIndex ? "bg-black" : "bg-gray-300"}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </motion.section>

      <section
        className="py-20 bg-black text-white text-center"
        data-aos="fade-up"
      >
        <h3 className="text-4xl font-bold" data-aos="fade-up">
          Ready to grow your business?
        </h3>
        <p className="mt-4 text-lg" data-aos="fade-up" data-aos-delay="100">
          Contact us today to discuss how we can help you achieve your marketing
          goals.
        </p>
        <a
  href="https://wa.me/1234567890" // Replace with your actual WhatsApp number
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block px-6 py-3 bg-white text-black hover:bg-blue-700 hover:text-white transition duration-300"
  data-aos="fade-up"
  data-aos-delay="200"
>
  Get in Touch
</a>

      </section>
    </div>
  );
}

export default About;