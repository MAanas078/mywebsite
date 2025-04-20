import { useEffect, useState } from 'react';
import { Download, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';

const words = ['Full-Stack Developer', 'Freelancer', 'Problem Solver', 'Tech Enthusiast'];

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
      }

      // Start deleting after typing is done
      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before delete
      }

      // Move to next word after deleting is done
      if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="md:w-1/2 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Mohd Aanas
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 mb-6 min-h-[2.5rem]"
          >
            <span className="text-indigo-600 font-semibold">{displayedText}</span>
            <span className="text-indigo-600 animate-ping ml-1">|</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-600 mb-8 max-w-lg"
          >
            Crafting scalable full-stack solutions with creativity and clean code.
            Specialized in building exceptional digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              <Send className="mr-2 h-5 w-5" />
              Hire Me
            </button>

            <a
              href="/https://drive.google.com/file/d/1Y9_l3b0IyYyzmD2IZWvPEH1HKxs-VdJx/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <Download className="mr-2 h-5 w-5" />
              View Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: 'spring',
            stiffness: 100,
          }}
          whileHover={{ scale: 1.05 }}
          className="md:w-1/2 mt-12 md:mt-0"
        >
          <motion.img
            src={profilePic}
            alt="Mohd Aanas"
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover mx-auto shadow-2xl border-4 border-indigo-500"
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
