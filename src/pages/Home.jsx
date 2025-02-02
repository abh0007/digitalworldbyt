import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col-reverse sm:flex-row items-center justify-start text-left px-4 sm:px-6 md:px-10">
        {/* Content Section */}
        <motion.div
          className="relative z-10 max-w-2xl text bg-black bg-opacity-80 text-white p-6 rounded-lg sm:bg-transparent mx-0 lg:mx-40"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl font-poppins font-extrabold leading-tight">
            Transform your business with{" "}
            <span className="text-white">Digital Innovation</span> and success
          </h1>
          <hr className="my-4 border-t-2 border-white opacity-50 w-3/4 sm:w-full mx-auto lg:mx-0" />

          <p className="mt-4 text-lg sm:text-xl font-light">
            We help businesses establish a strong online presence through
            cutting-edge marketing strategies. Our innovative approach ensures
            sustainable growth and maximum digital impact.
          </p>

          {/* Button and Link */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              to="/contact"
              className="px-6 py-3 bg-white border-2 border-white text-black rounded-lg shadow-lg hover:bg-black hover:text-white transition duration-300"
            >
              Contact Us
            </Link>

            <Link
              to="/services"
              className="px-6 py-3 border-2 border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-black transition duration-300"
            >
              Our Services
            </Link>
          </div>
        </motion.div>

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute sm:static top-0 left-0 w-full h-full object-cover z-0 sm:w-1/2"
        >
          <source src="/bg2.mp4" type="video/mp4" />
        </video>
      </div>
       {/* About Us Section */}
       <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            We are a passionate digital marketing agency dedicated to driving results for businesses of all sizes. 
            Our mission is to deliver innovative solutions that elevate brands and connect them with their target audiences.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Core Services</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-black">SEO Optimization</h3>
              <p className="mt-4 text-lg text-gray-700">
                Boost your website's visibility and organic traffic with our expert SEO services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-black">Social Media Marketing</h3>
              <p className="mt-4 text-lg text-gray-700">
                Connect with your audience through targeted social media campaigns that drive engagement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-black">Content Strategy</h3>
              <p className="mt-4 text-lg text-gray-700">
                Craft a compelling content strategy to build your brand and drive customer loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">What Our Clients Say</h2>
          <div className="mt-10 flex flex-col sm:flex-row space-x-0 sm:space-x-4 justify-center gap-4">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-xs hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <p className="text-lg text-gray-700 italic">"The team helped us grow our business online exponentially!"</p>
              <p className="mt-4 font-semibold text-black">John Doe, CEO of XYZ Corp</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-xs hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <p className="text-lg text-gray-700 italic">"A fantastic experience. Our ROI has improved by 30%!"</p>
              <p className="mt-4 font-semibold text-black">Jane Smith, Marketing Head at ABC Ltd</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Work</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <img src="/project1.jpg" alt="Project 1" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Project One</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <img src="/project2.jpg" alt="Project 2" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Project Two</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <img src="/project3.jpg" alt="Project 3" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Project Three</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
     
    </div>
  );
}

export default Home;
