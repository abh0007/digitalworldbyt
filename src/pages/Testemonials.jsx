import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Lakshay Ahuja(3rd Gen,Director)",
    review: "Digital World is a true blessing for our business,we have been working with digital world from 2years now and the way Tanya has been taking care of all the digital services and every week she personal takes meeting with our team is just incredible! So happy with the services. ",
    company: "Ahuja Silk & Sarees",
    logo: "/reviewlogo1.jpg",
    rating: 5,
  },
  {
    name: "Naveen Dabra",
    review: "In gaming industry we were facing too much problems in running ads and making our digital presence Digital World so authentically help us to develop our website and social media presence and brought us amazing quality leads.",
    company: "Diamond Exch",
    logo: "/logo24.jpg",
    rating: 5,
  },
  {
    name: "Amit Sulankhe(Founder)",
    review: "We had been with Digital World since we started our business so from scratch to a well known company DW is there,We are soo happy with service one of the best thing about digital world is availability as we have timezone difference but the team has been available for us always and the deliverable are always on time!",
    company: "EU Transline",
    logo: "/logo20.jpg",
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
    <section className="bg-black py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">What Our Clients Say</h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white">Real feedback from businesses that trust us.</p>

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
  );
}
