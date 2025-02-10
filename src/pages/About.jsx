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

      <motion.section
  className="py-20 px-6 sm:px-10 bg-gray-100 text-center"
  variants={fadeIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <h2 className="text-3xl sm:text-4xl font-bold text-black">
    Trusted by Leading Brands
  </h2>

  {/* Draggable Logo Slider */}
  <motion.div
    className="mt-8 flex space-x-10 sm:space-x-16 overflow-x-auto cursor-grab p-4"
    drag="x"
    dragConstraints={{ left: -300, right: 0 }} // Adjusted for better mobile experience
  >
    <img src="/logo20.jpg" alt="Client 1" className="h-24 sm:h-32 md:h-40 flex-shrink-0" />
    <img src="/logo7.jpg" alt="Client 2" className="h-24 sm:h-32 md:h-40 flex-shrink-0" />
    <img src="/logo8.jpg" alt="Client 3" className="h-24 sm:h-32 md:h-40 flex-shrink-0" />
    <img src="/logo9.jpg" alt="Client 4" className="h-24 sm:h-32 md:h-40 flex-shrink-0" />
    <img src="/logo10.jpg" alt="Client 5" className="h-24 sm:h-32 md:h-40 flex-shrink-0" />
  </motion.div>
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

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
          <h2 className="text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="text-lg text-gray-700">Real feedback from businesses that trust us.</p>

          {/* Testimonial Slider */}
          <div className="relative w-full max-w-2xl p-6 bg-white rounded-xl shadow-lg">
            {/* Previous Button */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent text-black p-2 rounded-full shadow-lg"
              onClick={prevTestimonial}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Company Logo */}
                <img src={testimonials[index].logo} alt={testimonials[index].company} className="h-16 w-auto mb-4" />

                {/* Review Text */}
                <p className="text-xl text-gray-800 font-medium">&quot;{testimonials[index].review}&quot;</p>

                {/* Client Name */}
                <p className="text-gray-600 mt-2 font-semibold">- {testimonials[index].name}, {testimonials[index].company}</p>

                {/* Star Rating */}
                <div className="flex justify-center mt-4">
                  {Array.from({ length: testimonials[index].rating }, (_, i) => (
                    <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next Button */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent text-black p-2 rounded-full shadow-lg"
              onClick={nextTestimonial}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default About;
