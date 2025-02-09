import { useState } from "react";

const services = [
  {
    title: "Performance Marketing",
    description: "We create data-driven campaigns to optimize conversions and maximize ROI using PPC, social ads, and email marketing.",
  },
  {
    title: "Social Media Management",
    description: "We manage your social media presence, including content creation, engagement, and growth strategies.",
  },
  {
    title: "Influencer Marketing",
    description: "We connect brands with influencers to drive awareness and engagement through authentic collaborations.",
  },
  {
    title: "SEO",
    description: "We improve your search engine rankings through keyword optimization, backlink building, and on-page SEO strategies.",
  },
  {
    title: "Personal Branding",
    description: "We craft your online identity with professional branding, content strategy, and audience engagement.",
  },
  {
    title: "PR Channel",
    description: "We help you get media coverage and build strong public relations through strategic PR campaigns.",
  },
  {
    title: "Website Development",
    description: "We design and develop high-performing websites tailored to your business needs for better user experience.",
  },
];

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#ddd8d3] py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Left Side - Text & Dropdown */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="border-b border-gray-700">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full flex justify-between items-center py-4 text-lg font-semibold text-gray-900 focus:outline-none"
                >
                  {service.title}
                  <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                {openIndex === index && (
                  <p className="text-gray-700 text-sm pb-4 px-2">{service.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/image.png"
            alt="Services"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
