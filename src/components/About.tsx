import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const skills = [
  'React.js', 'Node.js', 'TypeScript', 'MongoDB',
  'Express.js', 'Next.js', 'Tailwind CSS', 'GraphQL',
  'PostgreSQL', 'Git', 'Docker', 'AWS'
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - About Me */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                As a passionate full-stack developer, I specialize in building responsive and scalable web applications using modern technologies and a strong foundation in development best practices.
              </p>
              <p>
                I'm passionate about writing clean, maintainable code and creating smooth, user-friendly experiences. Eager to contribute to real-world projects and currently open to freelance work and remote opportunities.
              </p>
              <p>
                Outside of coding, I love experimenting with new tools, contributing to small community projects, and staying curious through self-learning and exploration.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-semibold text-gray-900 mb-6"
            >
              Technical Skills
            </motion.h3>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="h-5 w-5 text-indigo-600" />
                  <span className="text-gray-700">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
