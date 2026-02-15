import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

// Image Carousel Component
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4 group">
      <img
        src={images[currentIndex]}
        alt="Event"
        className="w-full h-full object-cover object-top"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-lg"></i>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-lg"></i>
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
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

// Compact Image Carousel for timeline items
const CompactImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden group">
      <img
        src={images[currentIndex]}
        alt="Event"
        className="w-full h-full object-cover object-top"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-sm"></i>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-sm"></i>
          </button>
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <button
                key={idx}
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
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159712/BRF2_zpubmr.jpg',
        'https://res.cloudinary.com/dxny54aw4/image/upload/v1771159712/BRF3_hih3a4.jpg',
      ],
    },
    {
      title: 'Chinese Super League (CSL)',
      role: 'EVS Operator',
      icon: 'ri-football-line',
      images: [
        'https://static.readdy.ai/image/2413583ecb10b63895c6cd538f0c90e1/70789a70d3ff9d07c9df9335d14c5496.jpeg',
        'https://readdy.ai/api/search-image?query=Sports%20broadcast%20control%20room%20with%20EVS%20replay%20system%20multiple%20monitors%20showing%20football%20match%20from%20different%20angles%20operators%20working%20professional%20equipment&width=800&height=600&seq=csl2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Beijing%20Workers%20Stadium%20aerial%20view%20night%20football%20match%20with%20illuminated%20pitch%20packed%20stands%20professional%20sports%20photography&width=800&height=600&seq=csl3&orientation=landscape',
      ],
    },
    {
      title: 'Beijing Youth Championships',
      role: 'Camera Operator',
      icon: 'ri-camera-line',
      images: [
        'https://static.readdy.ai/image/2413583ecb10b63895c6cd538f0c90e1/0da8c6a0c6cebbd9a552b8e9620b4ecc.jpeg',
        'https://readdy.ai/api/search-image?query=Figure%20skating%20performance%20on%20ice%20rink%20elegant%20athlete%20with%20spotlight%20professional%20sports%20photography%20broadcast%20quality%20image&width=800&height=600&seq=byc2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Archery%20competition%20athlete%20aiming%20bow%20and%20arrow%20professional%20sports%20event%20with%20targets%20in%20background%20dramatic%20lighting&width=800&height=600&seq=byc3&orientation=landscape',
      ],
    },
    {
      title: 'Yiche European Cup All-Star Match',
      role: 'Live Technical Support & Subtitle Operator',
      icon: 'ri-tv-line',
      images: [
        'https://static.readdy.ai/image/2413583ecb10b63895c6cd538f0c90e1/ac2f641737761ae79bce4443f2eb94c0.jpeg',
        'https://readdy.ai/api/search-image?query=Broadcast%20subtitle%20operator%20workstation%20with%20character%20generator%20system%20multiple%20monitors%20showing%20live%20feed%20professional%20broadcast%20environment&width=800&height=600&seq=yec2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Sports%20talk%20show%20studio%20set%20with%20European%20football%20theme%20decorations%20professional%20broadcast%20lighting%20modern%20design&width=800&height=600&seq=yec3&orientation=landscape',
      ],
    },
    {
      title: 'LONSID Pop Music Peak Night Concert',
      role: 'Technical Director',
      icon: 'ri-music-line',
      images: [
        'https://static.readdy.ai/image/2413583ecb10b63895c6cd538f0c90e1/9897fdce1547d4e44f8f39494113287a.jpeg',
        'https://readdy.ai/api/search-image?query=Concert%20technical%20director%20booth%20with%20mixing%20console%20and%20multiple%20monitors%20showing%20stage%20views%20professional%20live%20event%20production&width=800&height=600&seq=lpm2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Pop%20singer%20performing%20on%20stage%20with%20colorful%20stage%20lights%20and%20smoke%20effects%20large%20LED%20backdrop%20concert%20atmosphere&width=800&height=600&seq=lpm3&orientation=landscape',
      ],
    },
    {
      title: 'Beijing International Film Festival',
      role: 'Subtitle Operator',
      icon: 'ri-film-line',
      images: [
        'https://readdy.ai/api/search-image?query=Beijing%20International%20Film%20Festival%20red%20carpet%20ceremony%20with%20celebrities%20and%20photographers%20elegant%20venue%20with%20festival%20branding%20professional%20event%20photography&width=800&height=600&seq=biff1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Film%20festival%20award%20ceremony%20stage%20with%20presenters%20and%20winners%20elegant%20backdrop%20design%20professional%20broadcast%20lighting%20cinematic%20atmosphere&width=800&height=600&seq=biff2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Broadcast%20subtitle%20control%20room%20with%20operator%20working%20on%20character%20generator%20multiple%20screens%20showing%20live%20event%20feed%20professional%20equipment&width=800&height=600&seq=biff3&orientation=landscape',
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

  const highlightedRole = {
    year: '2024-2025',
    role: 'Deputy Director of CUCTVOB',
    event: 'Communication University of China Television Outside Broadcast',
    image: 'https://static.readdy.ai/image/2413583ecb10b63895c6cd538f0c90e1/e9e0cba6a5bb48484b546766efa6c940.jpeg',
  };

  const timeline = [
    {
      role: 'Video Technical Director & Camera Operator',
      event: 'CUC 70th Anniversary "Piano Lake Night" Concert',
      images: [
        'https://readdy.ai/api/search-image?query=University%20anniversary%20outdoor%20concert%20by%20lake%20at%20night%20with%20stage%20lighting%20reflections%20on%20water%20elegant%20celebration%20event&width=800&height=600&seq=piano1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Outdoor%20concert%20stage%20setup%20with%20professional%20lighting%20and%20LED%20screens%20lakeside%20venue%20evening%20atmosphere&width=800&height=600&seq=piano2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Camera%20operator%20filming%20outdoor%20concert%20performance%20professional%20broadcast%20camera%20on%20tripod%20night%20event&width=800&height=600&seq=piano3&orientation=landscape',
      ],
    },
    {
      role: 'Subtitle Director',
      event: '40th Guangyuan Spring Campus Singer Contest',
      images: [
        'https://readdy.ai/api/search-image?query=University%20singing%20competition%20stage%20with%20performer%20and%20colorful%20lighting%20effects%20audience%20in%20auditorium%20professional%20event&width=800&height=600&seq=singer1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Campus%20talent%20show%20stage%20design%20with%20LED%20backdrop%20showing%20graphics%20professional%20lighting%20modern%20auditorium&width=800&height=600&seq=singer2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Broadcast%20control%20room%20during%20live%20event%20operators%20at%20workstations%20multiple%20monitors%20showing%20stage%20performance&width=800&height=600&seq=singer3&orientation=landscape',
      ],
      hasVideo: true,
    },
    {
      role: 'Live Director',
      event: 'CUC Choral Competition & May Fourth Commendation Ceremony',
      images: [
        'https://readdy.ai/api/search-image?query=University%20choir%20performance%20on%20stage%20with%20students%20in%20formal%20attire%20elegant%20auditorium%20professional%20lighting&width=800&height=600&seq=choir1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Award%20ceremony%20stage%20with%20presenters%20and%20recipients%20university%20event%20formal%20setting%20professional%20broadcast&width=800&height=600&seq=choir2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Live%20broadcast%20director%20at%20control%20desk%20calling%20shots%20multiple%20camera%20feeds%20on%20monitors%20professional%20production&width=800&height=600&seq=choir3&orientation=landscape',
      ],
      hasVideo: true,
    },
    {
      role: 'Producer',
      event: 'CUC 42nd Sports Meeting',
      images: [
        'https://readdy.ai/api/search-image?query=University%20sports%20day%20opening%20ceremony%20with%20athletes%20marching%20on%20track%20field%20colorful%20flags%20and%20banners%20sunny%20day&width=800&height=600&seq=sports1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Track%20and%20field%20competition%20athletes%20running%20race%20university%20stadium%20professional%20sports%20photography&width=800&height=600&seq=sports2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Broadcast%20production%20team%20at%20outdoor%20sports%20event%20cameras%20and%20equipment%20setup%20stadium%20venue&width=800&height=600&seq=sports3&orientation=landscape',
      ],
    },
    {
      role: 'Subtitle Director & Visual Design Director',
      event: '35th Guangyuan Cup Football Tournament',
      images: [
        'https://readdy.ai/api/search-image?query=University%20football%20match%20on%20grass%20field%20students%20playing%20soccer%20sunny%20day%20campus%20sports%20atmosphere&width=800&height=600&seq=football1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Football%20match%20broadcast%20with%20scoreboard%20graphics%20overlay%20professional%20sports%20production%20quality&width=800&height=600&seq=football2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Sports%20broadcast%20graphics%20operator%20workstation%20with%20character%20generator%20showing%20match%20statistics&width=800&height=600&seq=football3&orientation=landscape',
      ],
    },
    {
      role: 'Video Technical Director',
      event: '20th "Banxia Memorial" Student Film Festival Awards',
      images: [
        'https://readdy.ai/api/search-image?query=Film%20festival%20awards%20ceremony%20stage%20with%20elegant%20backdrop%20design%20presenters%20at%20podium%20professional%20event%20lighting&width=800&height=600&seq=banxia1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Student%20filmmakers%20receiving%20awards%20on%20stage%20celebration%20moment%20university%20auditorium%20professional%20photography&width=800&height=600&seq=banxia2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Award%20ceremony%20video%20playback%20system%20showing%20film%20clips%20on%20large%20screen%20professional%20event%20production&width=800&height=600&seq=banxia3&orientation=landscape',
      ],
    }
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
                <CompactImageCarousel images={item.images} />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {item.hasVideo && (
                      <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs rounded-full flex items-center gap-1">
                        <i className="ri-video-line text-xs"></i> Video
                      </span>
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
    </section>
  );
};

const TeachingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const teachingImages = [
    'https://readdy.ai/api/search-image?query=University%20instructor%20teaching%20broadcast%20technology%20to%20students%20in%20modern%20classroom%20with%20equipment%20demonstration%20professional%20training%20session&width=800&height=600&seq=teach1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Students%20learning%20video%20production%20in%20broadcast%20studio%20hands%20on%20training%20with%20cameras%20and%20equipment%20educational%20environment&width=800&height=600&seq=teach2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Broadcast%20technology%20workshop%20with%20young%20professionals%20learning%20control%20room%20operations%20multiple%20monitors%20training%20session&width=800&height=600&seq=teach3&orientation=landscape',
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
                  CUCTVOB
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
