import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const services = [
  {
    title: "Performance Marketing",
    description:
      "We create data-driven campaigns to optimize conversions and maximize ROI using PPC, social ads, and email marketing.",
  },
  {
    title: "Social Media Management",
    description:
      "We manage your social media presence, including content creation, engagement, and growth strategies.",
  },
  {
    title: "Influencer Marketing",
    description:
      "We connect brands with influencers to drive awareness and engagement through authentic collaborations.",
  },
  {
    title: "SEO",
    description:
      "We improve your search engine rankings through keyword optimization, backlink building, and on-page SEO strategies.",
  },
  {
    title: "Personal Branding",
    description:
      "We craft your online identity with professional branding, content strategy, and audience engagement.",
  },
  {
    title: "PR Channel",
    description:
      "We help you get media coverage and build strong public relations through strategic PR campaigns.",
  },
  {
    title: "Website Development",
    description:
      "We design and develop high-performing websites tailored to your business needs for better user experience.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="w-full h-full font-roboto">
      {/* Hero Section */}
      <div
        className="relative w-full h-[70vh] p-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/bgi2.jpg')" }}
        data-aos="fade-down"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-trransparent bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center text-center text-white h-full">
          <div>
            <h3 className="text-5xl font-extrabold" data-aos="fade-up">
              Our  Services
            </h3>
            <p className="mt-4 text-xl" data-aos="fade-up" data-aos-delay="200">
              Empowering your brand with cutting-edge solutions that drive
              results.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-black text-white py-16" data-aos="fade-up">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="md:w-1/2">
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight"
              data-aos="fade-right"
            >
              We translate your vision into <br />
              <span className="text-white">
                result-driven digital solutions.
              </span>
            </h2>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <ul className="space-y-4">
              {[
                "Comprehensive digital solutions under one roof.",
                "Customized strategies tailored to your business needs.",
                "High-quality deliverables ensuring client satisfaction.",
              ].map((point, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-lg"
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                >
                  <span className="text-purple-500 font-bold text-xl">✔</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
          {/* Left Side - Text & Dropdown */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-6">
              What We Offer
            </h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="border-b border-white">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="w-full flex justify-between items-center py-4 text-lg font-semibold text-white focus:outline-none"
                  >
                    {service.title}
                    <span>{openIndex === index ? "▲" : "▼"}</span>
                  </button>
                  {openIndex === index && (
                    <p className="text-white text-sm pb-4 px-2">
                      {service.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 lg:h-150 flex justify-center">
            <img
              src="/serviceright.png"
              alt="Services"
              className="w-full  shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
  href="https://wa.me/918887813257" // Replace with your actual WhatsApp number
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
