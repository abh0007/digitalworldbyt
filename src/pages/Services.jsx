import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div 
        className="relative w-full h-screen p-10 bg-cover bg-center" 
        style={{ backgroundImage: "url('/bgi2.jpg')" }} // Replace with your image path
      >
       
        {/* Dark Overlay for Readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50"></div>
  
        {/* Content Section */}
        <div className="relative z-10 flex items-center justify-center text-center text-white h-screen">
  <div>
    <h2 className="text-4xl font-extrabold">Our Digital Marketing Services</h2>
    <p className="mt-4 text-lg">
      Empowering your brand with cutting-edge solutions that drive results.
    </p>
  </div>
</div>

      </div>

      {/* Services List Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800">What We Offer</h3>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service 1: SEO Optimization */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-semibold text-green-500">SEO Optimization</h4>
              <p className="mt-4 text-lg text-gray-700">
                Improve your search engine rankings and drive organic traffic to your website with our expert SEO strategies.
              </p>
              <Link to="/contact" className="mt-4 inline-block text-green-500 hover:underline">
                Get in Touch
              </Link>
            </div>
            {/* Service 2: Social Media Marketing */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-semibold text-green-500">Social Media Marketing</h4>
              <p className="mt-4 text-lg text-gray-700">
                Engage with your audience through targeted campaigns on platforms like Facebook, Instagram, and LinkedIn.
              </p>
              <Link to="/contact" className="mt-4 inline-block text-green-500 hover:underline">
                Get in Touch
              </Link>
            </div>
            {/* Service 3: Content Strategy */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-semibold text-green-500">Content Strategy</h4>
              <p className="mt-4 text-lg text-gray-700">
                Develop a content strategy that resonates with your target audience and boosts brand visibility.
              </p>
              <Link to="/contact" className="mt-4 inline-block text-green-500 hover:underline">
                Get in Touch
              </Link>
            </div>
            {/* Service 4: PPC Advertising */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-semibold text-green-500">PPC Advertising</h4>
              <p className="mt-4 text-lg text-gray-700">
                Maximize your ROI with pay-per-click advertising on Google, Facebook, and other platforms.
              </p>
              <Link to="/contact" className="mt-4 inline-block text-green-500 hover:underline">
                Get in Touch
              </Link>
            </div>
            {/* Service 5: Email Marketing */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-semibold text-green-500">Email Marketing</h4>
              <p className="mt-4 text-lg text-gray-700">
                Reach your audience directly with personalized email campaigns that drive conversions.
              </p>
              <Link to="/contact" className="mt-4 inline-block text-green-500 hover:underline">
                Get in Touch
              </Link>
            </div>
            {/* Service 6: Website Development */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-semibold text-green-500">Website Development</h4>
              <p className="mt-4 text-lg text-gray-700">
                Create a professional and responsive website that enhances user experience and brand credibility.
              </p>
              <Link to="/contact" className="mt-4 inline-block text-green-500 hover:underline">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800">Our Work</h3>
          <p className="mt-4 text-lg text-gray-700">
            Take a look at some of our successful case studies and projects to see how we deliver results.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Portfolio Item 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <img
                src="/project1.jpg"
                alt="Project 1"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="mt-4 text-xl font-semibold text-gray-800">Project One</h4>
            </div>
            {/* Portfolio Item 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <img
                src="/project2.jpg"
                alt="Project 2"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="mt-4 text-xl font-semibold text-gray-800">Project Two</h4>
            </div>
            {/* Portfolio Item 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <img
                src="/project3.jpg"
                alt="Project 3"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="mt-4 text-xl font-semibold text-gray-800">Project Three</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-green-500 text-white text-center">
        <h3 className="text-4xl font-bold">Ready to grow your business?</h3>
        <p className="mt-4 text-lg">
          Contact us today to discuss how we can help you achieve your marketing goals.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-white text-green-500 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
        >
          Get in Touch
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Digital Marketing Company. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <Link to="/privacy-policy" className="hover:text-green-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-green-400">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Services;
