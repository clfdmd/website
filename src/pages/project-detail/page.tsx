import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../../mocks/projects';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const foundProject = projectsData.find((p) => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [id]);

  if (!project) {
    return null;
  }

  // 默认展示的媒体数量（可根据需要调整）
  const mediaItems = project.content.images || [];

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 bg-white z-50 overflow-y-auto"
    >
      <button
        onClick={() => navigate('/projects')}
        className="fixed top-8 left-8 w-12 h-12 bg-[#0A0A0A] hover:bg-[#E8B4B8] rounded-full flex items-center justify-center transition-colors duration-300 z-10 cursor-pointer whitespace-nowrap"
      >
        <i className="ri-close-line text-white text-2xl"></i>
      </button>

      <div className="pt-32 pb-20">
        <div className="max-w-[1000px] mx-auto px-16">
          {/* 标题区域 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold text-[#0A0A0A] mb-6">{project.title}</h1>
            
            {/* 简介 - 与projects页相同 */}
            <p className="text-lg text-[#2D2D2D] mb-4">{project.subtitle}</p>
            
            {/* 工具 - 与projects页相同 */}
            <div className="flex items-center justify-center gap-3">
              {project.tools.map((tool: string) => (
                <span
                  key={tool}
                  className="text-[#E8B4B8] text-sm whitespace-nowrap"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Overview 和内容区域 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-10"
          >
            {/* Overview 标题 */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Overview</h2>
              <div className="w-24 h-1 bg-[#E8B4B8] mb-6"></div>
              
              {/* Overview 介绍文字 */}
              <div className="space-y-6 text-[#2D2D2D] leading-relaxed">
                {project.content.overview && (
                  <p className="text-base">{project.content.overview}</p>
                )}
                
                {project.content.challenge && (
                  <div>
                    <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">Challenge</h3>
                    <p className="text-base">{project.content.challenge}</p>
                  </div>
                )}
                
                {project.content.solution && (
                  <div>
                    <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">Solution</h3>
                    <p className="text-base">{project.content.solution}</p>
                  </div>
                )}
              </div>
            </div>

            {/* 图片/视频区域 */}
            <div className="space-y-8 pt-6">
              {mediaItems.map((image: string, index: number) => (
                <div 
                  key={index} 
                  className="rounded-[15px] overflow-hidden bg-[#F5F5F5]"
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}

              {/* 视频占位区域（如果有视频链接） */}
              {project.content.video && (
                <div className="rounded-[15px] overflow-hidden aspect-video bg-[#F5F5F5]">
                  <iframe
                    src={project.content.video}
                    title="Project video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>

            {/* 返回按钮 */}
            <div className="pt-12 border-t border-[#F5F5F5] text-center">
              <button
                onClick={() => navigate('/projects')}
                className="px-10 py-4 bg-[#0A0A0A] text-white rounded-full hover:bg-[#E8B4B8] transition-all duration-300 text-base font-medium cursor-pointer whitespace-nowrap"
              >
                Back to Projects
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailPage;
