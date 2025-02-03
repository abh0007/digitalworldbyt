import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
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
    const serviceID = "service_dtpjvzf";
    const templateID = "template_c87vdj7";
    const publicKey = "Piekq47LlwdNXkKbE";

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
        
      );
  };

  return (
    <footer className="bg-white text-black py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo5.png" alt="Company Logo" className="w-50 mb-4" />
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
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
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
            123 Digital Street, Hyderabad, India <br />
            Phone: +91 98765 43210 <br />
            Email: contact@digitalworldbyt.com
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-500 hover:text-blue-500"><FaFacebook size={24} /></a>
            <a href="#" className="text-blue-500 hover:text-blue-300"><FaTwitter size={24} /></a>
            <a href="#" className="text-blue-500 hover:text-pink-500"><FaInstagram size={24} /></a>
            <a href="#" className="text-blue-500 hover:text-blue-600"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        © 2025 DigitalWorldByT. All rights reserved.
      </div>
    </footer>
  );
};

export default ContactUs;
