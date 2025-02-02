import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import '../styles/Home.css';

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
          <h1 className="text-4xl sm:text-5xl md:text-3xl lg:text-3xl font-poppins font-extrabold leading-tight">
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

      {/* How We Can Help You Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">How We Can Help You?</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            We are a passionate digital marketing agency dedicated to driving results for businesses of all sizes. 
            Our mission is to deliver innovative solutions that elevate brands and connect them with their target audiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: '🎧', title: 'One click support', description: 'Effortlessly connect with our support team to resolve your concerns in no time. Our one-click solution ensures swift assistance to keep you moving forward without delays.' },
            { icon: '📈', title: 'Sky rocket sales', description: 'Boost your business growth with tailored strategies designed to maximize revenue and drive customer engagement. Take your sales to the next level with impactful solutions.' },
            { icon: '📋', title: 'Quick Onboarding', description: 'Experience a seamless and efficient onboarding process. We simplify every step to get you up and running in no time, saving effort and maximizing productivity.' },
            { icon: '📦', title: 'Product development', description: 'Transform your ideas into reality with our comprehensive product development solutions. From concept to execution, we deliver innovation that drives success.' },
            { icon: '📁', title: 'Quality content', description: 'Stand out with content that resonates. Our high-quality, tailored messaging ensures your brand captures attention and delivers value to your audience.' },
            { icon: '📊', title: 'Result with impact', description: 'Achieve measurable outcomes that matter. Our results-oriented approach delivers impactful solutions, ensuring your goals are not just met but exceeded.' },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-black">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-white p-10">Our Trusted Brands</h2>
    <div className="flex space-x-150 overflow-hidden">
      <div className="flex space-x-10 animate-loop-scroll">
        <img src="logo1.png" alt="Brand 1" className="h-16" />
        <img src="logo2.png" alt="Brand 2" className="h-16" />
        <img src="logo3.png" alt="Brand 3" className="h-16" />
        <img src="logo4.png" alt="Brand 4" className="h-16" />
        <img src="logo5.png" alt="Brand 5" className="h-16" />
        <img src="logo6.png" alt="Brand 6" className="h-16" />
        <img src="logo7.png" alt="Brand 7" className="h-16" />
        <img src="logo8.png" alt="Brand 8" className="h-16" />
        <img src="logo9.png" alt="Brand 9" className="h-16" />
        <img src="logo10.png" alt="Brand 10" className="h-16" />
        <img src="logo5.png" alt="Brand 5" className="h-16" />
        <img src="logo6.png" alt="Brand 6" className="h-16" />
        <img src="logo7.png" alt="Brand 7" className="h-16" />
        <img src="logo8.png" alt="Brand 8" className="h-16" />
        <img src="logo9.png" alt="Brand 9" className="h-16" />
        <img src="logo10.png" alt="Brand 10" className="h-16" />
      </div>
      <div className="flex space-x-10 animate-loop-scroll" aria-hidden="true">
        <img src="logo1.png" alt="Brand 1" className="h-16" />
        <img src="logo2.png" alt="Brand 2" className="h-16" />
        <img src="logo3.png" alt="Brand 3" className="h-16" />
        <img src="logo4.png" alt="Brand 4" className="h-16" />
        <img src="logo5.png" alt="Brand 5" className="h-16" />
        <img src="logo6.png" alt="Brand 6" className="h-16" />
        <img src="logo7.png" alt="Brand 7" className="h-16" />
        <img src="logo8.png" alt="Brand 8" className="h-16" />
        <img src="logo9.png" alt="Brand 9" className="h-16" />
        <img src="logo10.png" alt="Brand 10" className="h-16" />
        <img src="logo5.png" alt="Brand 5" className="h-16" />
        <img src="logo6.png" alt="Brand 6" className="h-16" />
        <img src="logo7.png" alt="Brand 7" className="h-16" />
        <img src="logo8.png" alt="Brand 8" className="h-16" />
        <img src="logo9.png" alt="Brand 9" className="h-16" />
        <img src="logo10.png" alt="Brand 10" className="h-16" />
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Home;
