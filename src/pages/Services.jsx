import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const services = [
  {
    title: "Digital Marketing",
    image: "/seo.jpg",
    details: ["SEO (Search Engine Optimization)", "Google Ads", "Pay Per Click"],
    link: "digital-marketing",
    implementation: `
      - We analyze your industry trends and competitors.
      - SEO optimization to rank higher on Google.
      - Running highly targeted paid ads to maximize conversions.
    `,
    benefits: `
      - Increases brand visibility online.
      - Drives quality traffic to your website.
      - Higher chances of lead generation and customer engagement.
    `,
  },
  {
    title: "Social Media Marketing",
    image: "/social.jpg",
    details: ["Facebook & Instagram Ads", "LinkedIn Campaigns", "Brand Awareness"],
    link: "social-media-marketing",
    implementation: `
      - Creating engaging content tailored for your audience.
      - Running data-driven ad campaigns on social media.
      - Monitoring analytics and refining strategies continuously.
    `,
    benefits: `
      - Boosts engagement and customer interaction.
      - Expands your brand reach effectively.
      - Generates potential leads through social platforms.
    `,
  },
  {
    title: "Content Strategy",
    image: "/content.jpg",
    details: ["Content Planning", "Blog Writing", "SEO-Optimized Articles"],
    link: "content-strategy",
    implementation: `
      - Crafting a strategic content calendar.
      - Writing high-quality, SEO-optimized blog posts.
      - Using storytelling techniques to keep your audience engaged.
    `,
    benefits: `
      - Improves brand credibility and thought leadership.
      - Boosts organic traffic via search engines.
      - Keeps your customers informed and engaged.
    `,
  },
  {
    title: "PPC Advertising",
    image: "/ppc.jpg",
    details: ["Google Ads", "YouTube Ads", "Conversion Tracking"],
    link: "ppc-advertising",
    implementation: `
      - Conducting thorough keyword research for high ROI.
      - Designing and optimizing ad campaigns for different platforms.
      - A/B testing ads to improve conversions.
    `,
    benefits: `
      - Drives instant traffic to your website.
      - Ensures cost-effective ad spending.
      - Converts visitors into paying customers efficiently.
    `,
  },
  {
    title: "Email Marketing",
    image: "/email.jpg",
    details: ["Personalized Email Campaigns", "Targeted Communication", "Marketing Automation"],
    link: "email-marketing",
    implementation: `
      - Segmenting audiences for personalized email campaigns.
      - Crafting compelling email copy with clear CTAs.
      - Automating follow-ups to nurture leads effectively.
    `,
    benefits: `
      - Strengthens customer relationships.
      - Improves retention rates with targeted messaging.
      - Delivers high ROI with minimal investment.
    `,
  },
  {
    title: "Website Development",
    image: "/web.jpg",
    details: ["Responsive and user-friendly designs", "SEO Optimization", "Performance Enhancements"],
    link: "website-development",
    implementation: `
      - Designing modern, mobile-friendly websites.
      - Optimizing site speed and security.
      - Implementing SEO best practices for higher rankings.
    `,
    benefits: `
      - Provides a seamless user experience.
      - Enhances brand credibility and trust.
      - Increases conversions with optimized landing pages.
    `,
  },

];

function Services() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="w-full h-full">
      {/* Hero Section */}
      <div
        className="rrelative w-full h-[70vh] p-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/bgi2.jpg')" }}
        data-aos="fade-down"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center text-white h-full">
          <div>
            <h2 className="text-4xl font-extrabold" data-aos="fade-up">
              Our Digital Marketing Services
            </h2>
            <p className="mt-4 text-lg" data-aos="fade-up" data-aos-delay="200">
              Empowering your brand with cutting-edge solutions that drive results.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-black text-white py-16" data-aos="fade-up">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" data-aos="fade-right">
              We translate your vision into <br />
              <span className="text-white">result-driven digital solutions.</span>
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
                  <span className="text-red-500 text-xl">✔</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-10 md:py-20 bg-black" data-aos="fade-up">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center bg-[#0D0D0D] p-4 md:p-6 transition-all duration-100 relative h-auto md:h-[280px] w-full hover:border-t-4 hover:border-l-4 hover:border-purple-500 border-r-4 border-b-4 border-gray-500 hover:border-r-0 hover:border-b-0"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          {/* Service Image (Top on Mobile, Left on Desktop) */}
          <div className="w-full md:w-1/2 h-48 md:h-full">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Service Details (Bottom on Mobile, Right on Desktop) */}
          <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-center">
            <h4 className="text-xl font-bold text-white text-left">{service.title}</h4>
            <ul className="text-white space-y-2 text-sm mt-3">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-white">●</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a
                href={`#${service.link}`}
                className="text-blue-400 font-semibold hover:text-blue-600"
              >
                SERVICE DETAILS →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* How We Implement These Services */}
      <section className="py-20 bg-black text-white" id="service-details" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center" data-aos="fade-up">
            How We Implement Our Services
          </h3>
          <p className="text-lg text-center mt-2" data-aos="fade-up" data-aos-delay="100">
            Discover how our services can help scale your business.
          </p>
          <div className="mt-10 space-y-8">
            {services.map((service, index) => (
              <div key={index} id={service.link} data-aos="fade-up" data-aos-delay={index * 20}>
                <h4 className="text-2xl font-bold">{service.title}</h4>
                <p className="mt-2 text-gray-400">{service.details.join(", ")}</p>
                <h5 className="mt-4 font-semibold text-lg">How We Implement It:</h5>
                <p className="text-gray-300 mt-2 whitespace-pre-line">{service.implementation}</p>
                <h5 className="mt-4 font-semibold text-lg">How It Benefits Your Business:</h5>
                <p className="text-gray-300 mt-2 whitespace-pre-line">{service.benefits}</p>
                <hr className="mt-6 border-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white text-center" data-aos="fade-up">
        <h3 className="text-4xl font-bold" data-aos="fade-up">
          Ready to grow your business?
        </h3>
        <p className="mt-4 text-lg" data-aos="fade-up" data-aos-delay="100">
          Contact us today to discuss how we can help you achieve your marketing goals.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-white text-black hover:bg-blue-700 hover:text-white transition duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

export default Services;