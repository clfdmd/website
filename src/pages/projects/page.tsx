import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { projectsData, categories } from '../../mocks/projects';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const getFilteredProjects = () => {
    if (activeFilter === 'all') return projectsData;
    if (activeFilter === 'digital') return projectsData.filter(p => p.category === 'Digital Interactions');
    if (activeFilter === 'hybrid') return projectsData.filter(p => p.category === 'Hybrid Interactions');
    if (activeFilter === 'visual') return projectsData.filter(p => p.category === 'Visual Design');
    return projectsData;
  };

  const filteredProjects = getFilteredProjects();

  const getCategoryProjects = (category: string) => {
    return projectsData.filter(p => p.category === category);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-[#0A0A0A]">Selected</span>{' '}
              <span className="text-[#E8B4B8]">Projects</span>
            </h1>
            <p className="text-[#666] text-lg max-w-2xl">
              A curated selection of interactive systems, games, and visual design projects.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-[#0A0A0A] text-white'
                    : 'bg-white text-[#666] hover:bg-[#E8B4B8] hover:text-white border border-[#E5E5E5]'
                }`}
              >
                {cat.name}
                <span className={`ml-2 ${activeFilter === cat.id ? 'text-white/70' : 'text-[#999]'}`}>
                  ({cat.count})
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-8 lg:px-16 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </div>
  );
};

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    subtitle: string;
    tools: string[];
    thumbnail: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/projects/${project.id}`}
        className="group block cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
          {/* Image Container */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Tool Tags - Top Left */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full whitespace-nowrap"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Arrow Button */}
            <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#E8B4B8] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <i className="ri-arrow-right-up-line text-white text-lg"></i>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-bold text-[#0A0A0A] mb-1.5 group-hover:text-[#E8B4B8] transition-colors duration-300 line-clamp-1">
              {project.title}
            </h3>
            <p className="text-[#666] text-sm line-clamp-2">
              {project.subtitle}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectsPage;
