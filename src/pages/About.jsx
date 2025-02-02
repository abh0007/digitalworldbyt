import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function About() {
  const testimonials = [
    { quote: "DigitalWorldByT transformed our online presence with outstanding marketing strategies!", name: "John Doe", company: "XYZ Corp" },
    { quote: "Their team is innovative and results-driven. Highly recommended!", name: "Sarah Lee", company: "ABC Enterprises" },
    { quote: "Exceptional service and dedication to our brand's success!", name: "Michael Smith", company: "LMN Solutions" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section with Video Background */}
      <div className="relative min-h-screen flex items-center justify-center p-10">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/bg4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl p-10">
          <h1 className="text-5xl font-bold">Welcome to DigitalWorldByT</h1>
          <p className="mt-2 text-s">Founded by Tanya Narula, we help businesses grow with innovative digital marketing solutions.</p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 px-10 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-600">Our Story</h2>
        <p className="mt-4 text-lg text-gray-700">DigitalWorldByT was founded by Tanya Narula, a passionate digital marketer dedicated to helping businesses thrive online.</p>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Our Mission & Vision</h2>
        <p className="mt-4 text-lg text-gray-700">Our mission is to craft impactful strategies that elevate brands. Our vision is to be a leader in innovative digital solutions.</p>
      </section>

      {/* Goals */}
      <section className="py-20 px-10 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-600">Our Goals</h2>
        <ul className="mt-4 text-lg text-gray-700 list-disc list-inside">
          <li>Deliver high-quality marketing solutions.</li>
          <li>Empower businesses to succeed digitally.</li>
          <li>Stay ahead of industry trends.</li>
        </ul>
      </section>

      {/* Clients */}
      <section className="py-20 px-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Trusted by Leading Brands</h2>
        <div className="mt-6 flex justify-center space-x-10">
          <img src="/client1.png" alt="Client 1" className="h-12" />
          <img src="/client2.png" alt="Client 2" className="h-12" />
          <img src="/client3.png" alt="Client 3" className="h-12" />
          <img src="/client4.png" alt="Client 4" className="h-12" />
          <img src="/client5.png" alt="Client 5" className="h-12" />
        </div>
      </section>

      {/* Company Values & Culture */}
      <section className="py-20 px-10 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-600">Our Values & Culture</h2>
        <p className="mt-4 text-lg text-gray-700">Integrity, innovation, and collaboration define us. We strive for excellence and a growth mindset.</p>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-blue-600">What Our Clients Say</h2>
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg relative inline-block max-w-xl mx-auto">
          <FaQuoteLeft className="absolute top-4 left-4 text-blue-500 text-3xl" />
          <p className="text-lg text-gray-800 italic">{testimonials[currentIndex].quote}</p>
          <FaQuoteRight className="absolute bottom-4 right-4 text-blue-500 text-3xl" />
          <p className="mt-4 font-semibold text-gray-700">- {testimonials[currentIndex].name}, {testimonials[currentIndex].company}</p>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
