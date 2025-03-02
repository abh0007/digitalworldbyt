import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form default refresh
    setStatus("Sending...");

    // EmailJS credentials
    const serviceID = "service_kr7xpel";
    const templateID = "template_ibzrgia";
    const publicKey = "VbcGWVS_rw9c5U813";

    // Ensure the template params match your EmailJS template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <footer className="bg-white text-black py-10 font-roboto ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/digitalworldlogo.jpg" alt="Company Logo" className="w-50 mb-4" />
          <p className="text-black text-sm">
            Empowering businesses with cutting-edge digital solutions. Join us on our journey to innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
            <li>
  <a 
    href="https://wa.me/918887813257" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-blue-500"
  >
    Contact
  </a>
</li>

            <li><Link to="/blog" className="hover:text-blue-500">Blog</Link></li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <form onSubmit={handleSubmit}> {/* Added onSubmit */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 mb-3 bg-gray-200 text-black rounded-lg"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 mb-3 bg-gray-200 text-black rounded-lg"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-4 py-2 mb-3 bg-gray-200 text-black rounded-lg"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full border-2 border-black bg-white hover:bg-black hover:text-white px-4 py-2 rounded-lg transition"
            >
              Send Message
            </button>
            <p className="text-sm text-gray-500 mt-2">{status}</p>
          </form>
        </div>

        {/* Address & Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Address</h3>
          <p className="text-black">
            New Delhi, India <br />
            Phone: +91 8887813257 <br />
            Email: digitalw908@gmail.com
          </p>
          <div className="flex space-x-4 mt-4">
          <a href="https://wa.me/918887813257" className="text-gray-500 hover:text-green-500">
  <FaWhatsapp size={24} />
</a>
<a href="https://www.youtube.com/@DigitalWorldByT" className="text-gray-500 hover:text-red-500">
  <FaYoutube size={24} />
</a>
            <a href="https://www.instagram.com/digitalworldbyt/" className="text-gray-500 hover:text-pink-500"><FaInstagram size={24} /></a>
            <a href="https://www.linkedin.com/in/tanya-narula-972a64211/" className="text-gray-500 hover:text-blue-600"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
    © 2025 DigitalWorldByT. All rights reserved.
  </div>
  <div className="text-center text-gray-500 text-sm mt-4">
    Developed by{" "}
    <a 
      href="https://www.linkedin.com/in/abhinay-gangwar-2b13b9239/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-gray-300 hover:underline transition-colors"
    >
      Abhinay Gangwar
    </a>
  </div>
    </footer>
  );
};

export default ContactUs;
