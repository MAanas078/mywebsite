import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?fit=crop&w=800&h=500',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates and team features.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?fit=crop&w=800&h=500',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management and monitoring.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&h=500',
    technologies: ['React', 'D3.js', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing and management system with virtual tours.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?fit=crop&w=800&h=500',
    technologies: ['React', 'Next.js', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">🚧 Featured Projects</h2>
          <p className="text-lg text-gray-600">Here’s a glimpse of what I’ve been working on lately</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
              className="relative rounded-3xl shadow-xl overflow-hidden backdrop-blur-md border border-gray-200 bg-white/60 hover:bg-white/80 transition-all"
            >
              {/* Image with animation */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-600 text-white rounded-full text-xs font-medium shadow-md hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 hover:text-indigo-600 font-medium transition"
                  >
                    <Github className="h-5 w-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 hover:text-indigo-600 font-medium transition"
                  >
                    <ExternalLink className="h-5 w-5 mr-1" />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
