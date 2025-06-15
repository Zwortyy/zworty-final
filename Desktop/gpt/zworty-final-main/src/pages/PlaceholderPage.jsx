import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });

  const [status, setStatus] = useState(null); // success, error, consent-error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // ❗️ KVKK kutusu kontrolü
    if (!formData.consent) {
      setStatus('consent-error');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          consent: false
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="flex-grow">
      {/* Top Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-[#b8002d] to-[#eb0029] text-white py-16 px-4 text-center"
      >
        <h2 className="text-lg">Contact</h2>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">Contact Us, Get Professional Support</h1>
      </motion.section>

      {/* Bottom Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          {/* Info Text */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-[#b8002d] mb-4">Get in Touch</h2>
            <p className="text-gray-700">
              Contact KRT for superior service in glass balcony, guillotine glass, and aluminum pergola systems.
              Reach out now for outstanding solutions!
            </p>
          </div>

          {/* Form */}
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 p-2 border border-gray-300 rounded"
                />
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex gap-4">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="w-1/2 p-2 border border-gray-300 rounded"
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-1/2 p-2 border border-gray-300 rounded"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              ></textarea>
              <label className="text-sm text-gray-600 flex items-start gap-2">
                <input
                  name="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1"
                />
                I have read and agree to the information provided in accordance with the Law on the Protection of Personal Data (KVKK).
              </label>
              <button type="submit" className="bg-[#eb0029] text-white py-2 px-6 rounded hover:bg-[#c50026]">
                Send
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <p className="text-green-600 mt-2">Your message has been sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 mt-2">There was an error sending your message. Please try again.</p>
              )}
              {status === 'consent-error' && (
                <p className="text-red-500 mt-2">You must accept the KVKK agreement before submitting the form.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
