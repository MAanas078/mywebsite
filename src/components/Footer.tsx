
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-6 mb-8"
          >
            <a
              href="https://github.com/MAanas078"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="www.linkedin.com/in/mohd-aanas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="mailto:moaanas.pu@gmail.com"
              className="hover:text-indigo-400 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-sm mb-8"
          >
            © 2025 Mohd Aanas – All Rights Reserved
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={scrollToTop}
            className="p-2 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;