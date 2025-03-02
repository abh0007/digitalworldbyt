import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Motion Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

// Testimonials Data
const testimonials = [
  {
    name: "Lakshay Ahuja(3rd Gen, Director)",
    review:
      "Digital World is a true blessing for our business. We have been working with Digital World for 2 years now, and the way Tanya has been taking care of all the digital services is incredible!",
    company: "Ahuja Silk & Sarees",
    logo: "/reviewlogo1.jpg",
    rating: 5,
  },
  {
    name: "Naveen Dabra",
    review:
      "In the gaming industry, we faced issues with ads and online presence. Digital World authentically helped us develop our website and social media presence and brought us high-quality leads.",
    company: "Diamond Exch",
    logo: "/logo24.jpg",
    rating: 5,
  },
  {
    name: "Amit Sulankhe (Founder)",
    review:
      "We've been with Digital World since the start. From scratch to a well-known company, DW has been there! Their availability despite timezone differences is impressive.",
    company: "EU Transline",
    logo: "/logo20.jpg",
    rating: 5,
  },
];
const stats = [
  { 
    icon: <img src="/logo7.jpg" className="w-30 h-30" alt="Countries Served" />, 
    
  },
  { 
    icon: <img src="/logo8.jpg" className="w-30 h-30" alt="Years of Experience" />, 
   
  },
  { 
    icon: <img src="/logo10.jpg" className="w-30 h-30" alt="Successful Projects" />, 
   
  },
  { 
    icon: <img src="/logo11.jpg" className="w-30 h-30" alt="Happy Clients" />, 
   
  },
  { 
    icon: <img src="/logo12.jpg" className="w-30 h-30" alt="Industries Covered" />, 
    
  },
  { 
    icon: <img src="/logo13.jpg" className="w-30 h-30" alt="Successful Projects" />, 
   
  },
  { 
    icon: <img src="/logo14.jpg" className="w-30 h-30" alt="Successful Projects" />, 
   
  },
  { 
    icon: <img src="/logo20.jpg" className="w-30 h-30" alt="Successful Projects" />, 
   
  }
];


function About() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="text-gray-900 bg-transparent font-roboto">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center p-6 sm:p-10 mt-4">
        <img
          src="/about-hero.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
          loading="lazy"
        />
        <motion.div
          className="relative z-10 text-center text-white max-w-4xl p-4 sm:p-10"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Welcome to DigitalWorldByT
          </h1>
          <p className="mt-2 text-base sm:text-lg">
            Your partner in innovative digital marketing solutions.
          </p>
        </motion.div>
      </div>

      {/* Sections */}
      {[
        { title: "Our Story", content: "DigitalWorldByT was founded by Tanya Narula, a passionate digital marketer dedicated to helping businesses thrive online. With years of experience, we’ve grown into a trusted partner for brands worldwide." },
        { title: "Our Mission & Vision", content: "Our mission is to craft impactful strategies that elevate brands. Our vision is to be a leader in innovative digital solutions, driving growth and success for our clients." },
        { title: "Our Goals", content: "Deliver high-quality marketing solutions. Empower businesses to succeed digitally. Stay ahead of industry trends." },
        { title: "Our Values & Culture", content: "Integrity, innovation, and collaboration define us. We strive for excellence and foster a growth mindset within our team and clients." },
      ].map((section, i) => (
        <motion.section
          key={i}
          className={`py-16 px-6 sm:px-10 text-center ${i % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
          variants={slideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black">{section.title}</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">{section.content}</p>
        </motion.section>
      ))}

      {/* Logo Slider */}
      <motion.section
        className="py-16 px-6 bg-black text-center"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Trusted by Leading Brands
        </h2>
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 py-10">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          {stat.icon}
         
        </div>
      ))}
    </div>

    {/* Mobile Scrollable View */}
    <div className="md:hidden overflow-x-auto flex space-x-8 w-full px-4  scrollbar-hide">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center min-w-[150px]">
          {stat.icon}
          <span className="text-3xl font-bold mt-4">{stat.value}</span>
          <span className="text-base text-gray-300">{stat.label}</span>
        </div>
      ))}
    </div>
      </motion.section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <div className="relative w-full max-w-lg p-6 bg-white rounded-xl shadow-lg">
            {/* Navigation Buttons */}
            <button
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md"
              onClick={prevTestimonial}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img src={testimonials[index].logo} alt={testimonials[index].company} className="h-12 sm:h-16 mb-4" />
                <p className="text-lg sm:text-xl text-gray-800 font-medium">
                  &quot;{testimonials[index].review}&quot;
                </p>
                <p className="text-gray-600 mt-2 font-semibold">
                  - {testimonials[index].name}, {testimonials[index].company}
                </p>
                <div className="flex justify-center mt-4">
                  {Array(testimonials[index].rating).fill().map((_, i) => (
                    <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <button className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md" onClick={nextTestimonial} aria-label="Next Testimonial">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
