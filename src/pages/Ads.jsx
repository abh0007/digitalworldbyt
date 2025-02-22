import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const adImages = [
  "/ad1.png", // Replace with actual image paths
  "/ad2.png",
  "/ad3.png",
  "/ad4.png",
];

const adTitles = [
  "(CPL)Cost Per Lead",
  "Reach",
  "Impressions",
  "Sales",
];

export default function AdsThatPerform() {
  const [index, setIndex] = useState(0);

  // Function to slide images forward
  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % adImages.length);
  };

  // Function to slide images backward (Fixed)
  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? adImages.length - 1 : prevIndex - 1));
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        {/* Title and Description */}
        <div className="text-center">
          <h2 className="text-6xl font-bold text-gray-900">Ads That Perform</h2>
          <p className="text-2xl text-gray-700 mt-2">
            Our data-driven ad campaigns ensure maximum engagement and conversions.
          </p>
        </div>

        {/* Image Slider */}
        <div className="relative h-80 lg:h-200 lg:w-full flex items-center shadow-lg justify-center">
          {/* Previous Button */}
          <button
            className="absolute left-4 bg-black text-white p-2 rounded-full shadow-lg z-10"
            onClick={prevImage} // Make sure event triggers correctly
          >
            <ChevronLeft size={24} />
          </button>
          {/* Image and Title Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="relative w-full h-full flex flex-col items-left"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              {/* Ad Title on Top */}
              <p className="absolute top-4 left-20 text-black text-xl sm:text-lg font-semibold px-4">
                {adTitles[index]}
              </p>
              <img
                src={adImages[index]}
                alt="Ad Image"
                className="w-full h-full object-cover rounded-lg shadow-lg p-10 lg:px-2 py-15"
              />
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <button
            className="absolute right-4 bg-black text-white p-2 rounded-full shadow-lg"
            onClick={nextImage}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
