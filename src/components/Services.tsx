import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Smartphone,
  Database,
  Palette,
} from 'lucide-react';

const services = [
  {
    icon: <Code2 className="h-6 w-6 text-purple-600" />,
    title: 'Full-Stack Development',
    description:
      'End-to-end web application development using modern technologies and best practices.',
    bg: 'from-purple-100 to-purple-50',
  },
  {
    icon: <Server className="h-6 w-6 text-green-600" />,
    title: 'MERN Stack',
    description:
      'Specialized in MongoDB, Express.js, React, and Node.js development.',
    bg: 'from-green-100 to-green-50',
  },
  {
    icon: <Database className="h-6 w-6 text-blue-600" />,
    title: 'API Development',
    description:
      'Design and implementation of RESTful APIs with proper documentation.',
    bg: 'from-blue-100 to-blue-50',
  },
  {
    icon: <Layout className="h-6 w-6 text-pink-600" />,
    title: 'Frontend Development',
    description:
      'Creating responsive and interactive user interfaces with React.js.',
    bg: 'from-pink-100 to-pink-50',
  },
  {
    icon: <Smartphone className="h-6 w-6 text-yellow-600" />,
    title: 'Responsive Design',
    description:
      'Mobile-first approach ensuring perfect display across all devices.',
    bg: 'from-yellow-100 to-yellow-50',
  },
  {
    icon: <Palette className="h-6 w-6 text-red-600" />,
    title: 'UI/UX Enhancement',
    description:
      'Improving user experience through modern design principles.',
    bg: 'from-red-100 to-red-50',
  },
];

const typewriterWords = ['🚀 Services I Offer'];
const subtitleWords = ['Comprehensive solutions tailored for your development journey.'];

const Services = () => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeletingTitle, setIsDeletingTitle] = useState(false);

  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isDeletingSubtitle, setIsDeletingSubtitle] = useState(false);

  useEffect(() => {
    const currentWord = typewriterWords[titleIndex];
    const speed = isDeletingTitle ? 50 : 100;

    const timer = setTimeout(() => {
      if (isDeletingTitle) {
        setDisplayedTitle((prev) => prev.slice(0, -1));
      } else {
        setDisplayedTitle((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeletingTitle && displayedTitle === currentWord) {
        setTimeout(() => setIsDeletingTitle(true), 1000);
      }

      if (isDeletingTitle && displayedTitle === '') {
        setIsDeletingTitle(false);
        setTitleIndex((prev) => (prev + 1) % typewriterWords.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedTitle, isDeletingTitle, titleIndex]);

  useEffect(() => {
    const currentSub = subtitleWords[subtitleIndex];
    const speed = isDeletingSubtitle ? 30 : 80;

    const timer = setTimeout(() => {
      if (isDeletingSubtitle) {
        setDisplayedSubtitle((prev) => prev.slice(0, -1));
      } else {
        setDisplayedSubtitle((prev) => currentSub.slice(0, prev.length + 1));
      }

      if (!isDeletingSubtitle && displayedSubtitle === currentSub) {
        setTimeout(() => setIsDeletingSubtitle(true), 1500);
      }

      if (isDeletingSubtitle && displayedSubtitle === '') {
        setIsDeletingSubtitle(false);
        setSubtitleIndex((prev) => (prev + 1) % subtitleWords.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedSubtitle, isDeletingSubtitle, subtitleIndex]);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-indigo-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            <span className="text-purple-700">{displayedTitle}</span>
            <span className="text-purple-700 animate-ping ml-1">|</span>
          </h2>
          <p className="text-lg text-gray-700 min-h-[2rem]">
            {displayedSubtitle}
            <span className="text-indigo-600 animate-pulse ml-1">|</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                delay: index * 0.1,
              }}
              className={`relative overflow-hidden rounded-2xl p-6 shadow-xl bg-gradient-to-br ${service.bg} hover:shadow-2xl group transform transition-all duration-300 ease-in-out`}
            >
              <motion.div
                className="absolute w-40 h-40 bg-white opacity-10 rounded-full -top-10 -left-10 blur-2xl animate-pulse"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white p-4 w-12 h-12 rounded-full shadow-md flex items-center justify-center mb-5 z-10 relative"
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-gray-800 mb-2 z-10 relative">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed z-10 relative">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
