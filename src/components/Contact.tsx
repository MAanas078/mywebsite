import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as LucideLink, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-100 to-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 drop-shadow-lg">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">Let’s connect for further info.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, rotateY: -90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8 transform-gpu"
          >
            {/* Email Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 150 }}
              className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-xl"
            >
              <Mail className="h-6 w-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <a
                  href="mailto:moaanas.pu@gmail.com"
                  className="text-gray-600 hover:text-indigo-600 hover:underline transition-all duration-300 ease-in-out"
                >
                  moaanas.pu@gmail.com
                </a>
              </div>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 150 }}
              className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-xl"
            >
              <LucideLink className="h-6 w-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">LinkedIn</h3>
                <a
                  href="www.linkedin.com/in/mohd-aanas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 hover:underline transition-all duration-300 ease-in-out"
                >
                  linkedin.com/in/your-profile
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Form Panel */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="space-y-6 bg-white p-8 rounded-2xl shadow-2xl transform-gpu"
          >
            <motion.div whileHover={{ scale: 1.02 }}>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-md shadow-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all"
            >
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </motion.button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 font-medium text-center pt-2"
              >
                ✅ Message submitted successfully!
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
