import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    review: "This service has transformed our marketing strategy. Highly recommended!",
    company: "TechCorp",
    logo: "/logo10.jpg",
    rating: 5,
  },
  {
    name: "Emily Smith",
    review: "Outstanding results! Our engagement rates skyrocketed.",
    company: "Creative Solutions",
    logo: "/logo7.jpg",
    rating: 5,
  },
  {
    name: "Michael Johnson",
    review: "Reliable and effective. A game-changer for our business!",
    company: "MarketPlus",
    logo: "/logo8.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900">What Our Clients Say</h2>
        <p className="text-lg text-gray-700">Real feedback from businesses that trust us.</p>

        {/* Testimonial Slider */}
        <div className="relative w-full max-w-2xl p-6 bg-white rounded-xl shadow-lg">
          {/* Previous Button */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg"
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
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg"
            onClick={nextTestimonial}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
