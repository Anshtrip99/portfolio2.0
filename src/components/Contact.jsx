import React, { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_ygn54ut", 
        "template_yu7xxt8", 
        formData,
        "ccgN8JlbNs3CYAFBa"
      )
      .then(
        () => {
          setResponseMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setResponseMessage("Failed to send the message. Please try again.");
          console.error(error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div
      className="relative py-20 px-6 border-b border-neutral-900"
      id="contact"
    >
      <div className="absolute inset-0 bg-neutral-900 bg-opacity-50 backdrop-blur-sm -z-10"></div>

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl mb-12 text-white"
      >
        Get in Touch
      </motion.h2>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 text-white">
     
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-800 bg-opacity-80 p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl mb-6 font-semibold">Send a Message</h3>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 bg-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="py-3 px-6 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          {responseMessage && (
            <p className="mt-4 text-center text-white">{responseMessage}</p>
          )}
        </motion.div>

       
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start space-y-6 bg-neutral-800 bg-opacity-80 p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-blue-500 text-xl" />
            <span className="text-lg">{CONTACT.phoneNo}</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-500 text-xl" />
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-lg underline hover:text-blue-500"
            >
              {CONTACT.email}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-blue-500 text-xl" />
            <span className="text-lg">{CONTACT.address}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
