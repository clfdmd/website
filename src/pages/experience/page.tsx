import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

// Image Carousel Component
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4 group"
      onMouseEnter={startAutoPlay}
      onMouseLeave={stopAutoPlay}
    >
      <img
        src={images[currentIndex]}
        alt="Event"
        className="w-full h-full object-cover object-top"
      />
      {images.length > 1 && (
        <>
          <button
            onMouseEnter={stopAutoPlay}
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-lg"></i>
          </button>
          <button
            onMouseEnter={stopAutoPlay}
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-lg"></i>
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
              key={idx}
              onMouseEnter={stopAutoPlay}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Video Modal Component
const VideoModal = ({
  videoUrl,
  onClose,
}: {
  videoUrl: string;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="w-[90vw] max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

// Compact Image Carousel for timeline items
const CompactImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
      <div
        className="relative w-full aspect-[4/3] rounded-lg overflow-hidden group"
        onMouseEnter={startAutoPlay}
        onMouseLeave={stopAutoPlay}
      >
      <img
        src={images[currentIndex]}
        alt="Event"
        className="w-full h-full object-cover object-top"
      />
      {images.length > 1 && (
        <>
          <button
            onMouseEnter={stopAutoPlay}
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-sm"></i>
          </button>
          <button
            onMouseEnter={stopAutoPlay}
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-sm"></i>
          </button>
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <button
                key={idx}
                onMouseEnter={stopAutoPlay}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex ? 'bg-white w-3' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A]">
      <Navbar />

      {/* Hero / Overview */}
      <section className="pt-40 pb-24 px-8 bg-gradient-to-b from-[#000000] to-transparent">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold text-white mb-6"
          >
            Broadcasting Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Hands-on experience across large-scale live broadcasting systems and campus-level productions, covering directing, technical supervision, EVS operation, and multi-camera workflows.
          </motion.p>
        </div>
      </section>

      {/* Module 1: Large-Scale Event Broadcasting */}
      <LargeScaleEvents />

      {/* Module 2: Campus Events Leadership */}
      <CampusLeadership />

      {/* Module 4: Teaching */}
      <TeachingSection />

      <Footer />
    </div>
  );
};

const LargeScaleEvents = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const events = [
    {
      title: 'Belt and Road Forum for International Cooperation',
      role: 'EVS Non-real-time Recording Operator',
      icon: 'ri-global-line',
      images: [
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159712/BRF1_mtvfsh.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159712/BRF3_hih3a4.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159712/BRF2_zpubmr.jpg',
      ],
    },
    {
      title: 'Chinese Super League (CSL)',
      role: 'EVS Operator',
      icon: 'ri-football-line',
      images: [
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159713/CSL1_hdgxog.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159713/CSL2_hsmlpz.jpg',
        ],
    },
    {
      title: 'Beijing Youth Championships',
      role: 'Camera Operator',
      icon: 'ri-camera-line',
      images: [
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159712/BYC1_sr5nta.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159714/BYC2_hrcwse.jpg',
        ],
    },
    {
      title: 'Yiche European Cup All-Star Match',
      role: 'Live Technical Support & Subtitle Operator',
      icon: 'ri-tv-line',
      images: [
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159714/YICHE1_gbpims.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159714/YICHE2_pyl0wp.jpg',
      ],
    },
    {
      title: 'LONSID Pop Music Peak Night Concert',
      role: 'Technical Director',
      icon: 'ri-music-line',
      images: [
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159713/LON1_heww4a.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159713/LON2_b6xyeo.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159714/LON4_cbbssr.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159713/LON3_lddyad.jpg',
      ],
    },
    {
      title: 'Beijing International Film Festival',
      role: 'Subtitle Operator',
      icon: 'ri-film-line',
      images: [
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159711/BIF1_wprfnb.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159711/BIF2_mvyons.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159711/BIF3_xbo7b6.jpg',
      ],
    },
  ];

  return (
    <section ref={ref} className="py-24 px-8 bg-[#111111]">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-12"
        >
          Large-Scale Event Broadcasting Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1A1A1A] p-6 rounded-xl hover:bg-[#E8B4B8]/10 transition-all duration-300 cursor-pointer border border-white/10 hover:border-[#E8B4B8]/50"
            >
              <ImageCarousel images={event.images} />
              <div className="w-10 h-10 flex items-center justify-center bg-[#E8B4B8]/20 rounded-full mb-3">
                <i className={`${event.icon} text-[#E8B4B8] text-xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
              <div className="text-[#E8B4B8] text-sm font-medium">{event.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CampusLeadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const highlightedRole = {
    year: '2024-2025',
    role: 'Deputy Director of CUCTVOB',
    event: 'Communication University of China Television Outside Broadcast',
    image: 'https://res.cloudinary.com/dxny54aw4/image/upload/v1771242573/2DD_rlu0td.jpg',
  };

  const timeline = [
    {
      role: 'Producer',
      event: 'CUC 42nd Sports Meeting',
      images: [
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159718/2XYH1_ehjv94.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159718/2XYH3_h42gq5.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159718/2XYH2_k0w2v9.jpg',
      ],
    },
    {
      role: 'Live Director',
      event: 'CUC Choral Competition & May Fourth Commendation Ceremony',
      images: [
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159717/2HC1_pjoqid.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159717/2HC2_ystknj.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159717/2HC3_jnxs7w.jpg',
      ],
      hasVideo: true,
      videoUrl: 'https://res.cloudinary.com/dxny54aw4/video/upload/v1771415040/hechang_lgx835.mp4',
    },
    {
      role: 'Assistant Director',
      event: '20th “Star of Elegance” talent selection events',
      images: [
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771306974/FC1_yrpaws.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771306970/FC2_o6n84w.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771307209/FC3_fj5cac.jpg',
      ],
      hasVideo: true,
      videoUrl: 'https://res.cloudinary.com/dxny54aw4/video/upload/v1771396518/fakelove_iae47l.mp4',
    },
    {
      role: 'Video Technical Director & Camera Operator',
      event: 'CUC 70th Anniversary "Piano Lake Night" Concert',
      images: [
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159716/2GQH1_zodkyk.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771233378/2GQH4_vfftmz.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159716/2GQH3_mgxt4u.jpg',
      ],
    },
    {
      role: 'Subtitle Director',
      event: '40th Guangyuan Spring Campus Singer Contest',
      images: [
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159715/2GC1_ca0uxh.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159716/2GC2_quomfr.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159716/2GC3_l1d0ai.jpg',
      ],
      hasVideo: true,
    },
    {
      role: 'Subtitle Director & Visual Design Director',
      event: '35th Guangyuan Cup Football Tournament',
      images: [
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771234364/2GYB3_c22wv2.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159716/2GYB1_d3ggts.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159718/2GYB2_l2lrj6.jpg',
      ],
    },
    {
      role: 'Video Technical Director',
      event: '2025 Communication University of China New Year Concert',
      images: [
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771306973/XN1_yjnkdb.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771306969/XN2_eb7xej.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771306969/XN3_vp7tzp.jpg',
      ],
    },
    {
      role: 'Video Technical Director',
      event: '20th "Banxia Memorial" Student Film Festival Awards',
      images: [
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159714/2BX2_o1qt7x.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159714/2BX1_acbd9e.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159714/2BX3_askewy.jpg',
      ],
    },
    {
      role: 'Live Director',
      event: '2024 Animation & Digital Arts Opening Ceremony and Graduation Ceremony',
      images: [
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771317083/DY3_x24upd.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771306969/DY1_igbr8q.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771306969/DY2_k4pxga.jpg',
      ],
    },
  ];

  return (
    <section ref={ref} className="py-24 px-8 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-16"
        >
          Full-Process Leadership in Campus Events
        </motion.h2>

        {/* Highlighted Deputy Director Role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 bg-gradient-to-r from-[#E8B4B8]/20 to-[#E8B4B8]/5 p-8 rounded-2xl border-2 border-[#E8B4B8]/50 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8B4B8]/10 rounded-full blur-2xl"></div>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/3 flex justify-center">
              <div className="w-64 h-80 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={highlightedRole.image} 
                  alt="Deputy Director" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:w-2/3 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-5 py-2 bg-[#E8B4B8] text-black text-base font-bold rounded-full">
                  {highlightedRole.year}
                </span>
                <span className="text-[#E8B4B8] font-semibold text-lg">Leadership Role</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">{highlightedRole.role}</h3>
              <p className="text-[#E8B4B8] text-2xl">{highlightedRole.event}</p>
            </div>
          </div>
        </motion.div>

        {/* Compact Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
              className="bg-[#1A1A1A] rounded-xl border border-white/10 hover:border-[#E8B4B8]/30 transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col">
                <div>
                  <CompactImageCarousel images={item.images} />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {item.hasVideo && item.videoUrl && (
                      <button
                        onClick={() => setActiveVideo(item.videoUrl)}
                        className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full
                                  rounded-full flex items-center gap-1 animate-pulse
                                  shadow-lg shadow-red-500/40
                                  hover:scale-105 transition cursor-pointer"
                      >
                        <i className="ri-play-circle-fill text-sm"></i> VIDEO
                      </button>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.event}</h3>
                  <p className="text-white/60 text-xs">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {activeVideo && (
        <VideoModal
          videoUrl={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
};

const TeachingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const teachingImages = [
    'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159719/teach2_es2myb.png',
    'https://res.cloudinary.com/dxny54aw4/image/upload/v1771232873/teach4_qjf8mk.jpg',
    'https://res.cloudinary.com/dxny54aw4/image/upload/v1771232872/teach5_gjb1i0.jpg',
  ];

  return (
    <section ref={ref} className="py-24 px-8 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-12"
        >
          Teaching & Structured Knowledge Transfer
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] p-12 rounded-3xl border border-[#E8B4B8]/30 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8B4B8]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E8B4B8]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 flex items-center justify-center bg-[#E8B4B8] rounded-2xl flex-shrink-0">
                <i className="ri-award-line text-black text-3xl"></i>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  Lead Instructor for Video Technology Training
                </h3>
                <div className="text-[#E8B4B8] text-lg font-medium mb-4">
                  CUCTVOB, 2023 & 2024 & 2025
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <i className="ri-checkbox-circle-fill text-[#E8B4B8] text-xl mt-1"></i>
                <p className="text-white/80 text-lg">
                  Delivered systematic instruction on broadcast workflows, technical systems, and production processes
                </p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-checkbox-circle-fill text-[#E8B4B8] text-xl mt-1"></i>
                <p className="text-white/80 text-lg">
                  Awarded <span className="text-[#E8B4B8] font-semibold">Gold Instructor Award</span> for teaching excellence
                </p>
              </div>
            </div>

            {/* Teaching Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teachingImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="aspect-[4/3] rounded-xl overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`Teaching ${index + 1}`}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencePage;
