import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-blue-600 text-center">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mt-2">
          We'd love to hear from you! Fill out the form below or reach us via email or phone.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="mt-6 text-center text-gray-700">
          <p>Email: <a href="mailto:contact@digitalmarketingbyt.com" className="text-blue-500">contact@digitalmarketingbyt.com</a></p>
          <p>Phone: <a href="tel:+911234567890" className="text-blue-500">+91 1234567890</a></p>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center space-x-4">
          <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/digitalmarketingbyt" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.svg" alt="Instagram" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
