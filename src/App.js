import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  TrendingUp,
  Video,
  ArrowUpRight,
  FolderOpen,
  Heart,
  Sparkles,
  Layout,
  Globe,
  Award,
  ChevronDown,
  GraduationCap,
  BookOpen,
  Zap,
  BarChart3,
  PenTool,
  Target,
  Briefcase
} from 'lucide-react';
// new correctiones made
import { SiLinkedin } from "react-icons/si";

// Add this above your App component
const LinkedInOutline = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
// correction end
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'works', 'experience', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const driveLink = "https://drive.google.com/drive/folders/1n5NHfyIePeavXwNEkeuHR2T0tznYiOse?usp=sharing";

  const education = [
    {
      degree: 'Advanced Diploma in Digital Marketing',
      institution: 'Dotin Academy, Kochi',
      date: '11/2024 – 07/2025',
      location: 'Kochi',
      icon: <GraduationCap className="w-6 h-6 text-amber-400" />,
      iconBg: 'bg-amber-500/10'
    },
    {
      degree: 'Bachelor of Journalism and Mass Communication',
      institution: 'Calicut University',
      date: '11/2021 – 01/2024',
      location: 'Kerala',
      icon: <BookOpen className="w-6 h-6 text-purple-400" />,
      iconBg: 'bg-purple-500/10'
    }
  ];

  const experience = [
    {
      company: 'Dotcom Creativez',
      role: 'Digital Marketing Intern & Content Creator',
      date: 'Jan 2025 - July 2025',
      location: 'Kochi',
      icon: <Target className="w-6 h-6 text-purple-400" />,
      description: [
        'Successfully completed a six-month immersive internship focusing on performance analysis and growth.',
        'Developed and executed multi-platform content strategies across diverse digital ecosystems.',
        'Created engaging video and written content designed for high audience retention.',
        'Monitored real-time performance metrics and optimized live campaigns for better ROI.'
      ]
    },
    {
      company: '7box Digital Solutions',
      role: 'Content Creator Intern',
      date: 'Sept 2025 - Nov 2025',
      location: 'Kochi',
      icon: <BarChart3 className="w-6 h-6 text-amber-400" />,
      description: [
        'Assisted in high-level content planning and creative campaign execution.',
        'Managed brand communities and social media accounts to drive engagement.',
        'Conducted market research and trend analysis to stay ahead of viral shifts.'
      ]
    },
    {
      company: 'Learn with Entrepreneur',
      role: 'Content Creator',
      date: 'Jan 2026 - April 2026',
      location: 'Kochi',
      icon: <PenTool className="w-6 h-6 text-fuchsia-400" />,
      description: [
        'Led end-to-end content production aligned with core brand objectives.',
        'Managed cross-platform content calendars to ensure consistent brand voice.',
        'Analyzed and reported on content performance insights to refine strategies.',
        'Collaborated with creative teams to significantly enhance brand visibility.'
      ]
    }
  ];

  const coreSkills = [
    { name: 'Content Strategy', level: 95, icon: <Layout className="w-5 h-5 text-purple-400" /> },
    { name: 'Social Media Marketing', level: 92, icon: <Globe className="w-5 h-5 text-amber-400" /> },
    { name: 'Video Production', level: 90, icon: <Video className="w-5 h-5 text-fuchsia-400" /> },
    { name: 'Brand Storytelling', level: 88, icon: <Sparkles className="w-5 h-5 text-yellow-400" /> }
  ];

  const techStack = [
    { name: 'Meta Ads Manager', type: 'Advertising' },
    { name: 'Canva Pro', type: 'Design' },
    { name: 'CapCut', type: 'Editing' },
    { name: 'Google Analytics', type: 'Data' },
    { name: 'Business Suite', type: 'Management' },
    { name: 'Google Ads', type: 'SEM' }
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-[#08070b] text-slate-200 selection:bg-purple-500/30 selection:text-white font-sans overflow-x-hidden">

      {/* Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-900/20 blur-[160px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-900/10 blur-[140px] rounded-full"
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#08070b]/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group cursor-pointer flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center font-bold text-white group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-purple-600/20">V</div>
            <span className="text-xl font-bold tracking-tighter text-white">VAISHNA.M</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex bg-white/5 border border-white/10 p-1 rounded-full backdrop-blur-md"
          >
            {['Home', 'About', 'Works', 'Experience', 'Skills', 'Contact'].map((label) => (
              <button
                key={label}
                onClick={() => document.getElementById(label.toLowerCase()).scrollIntoView({ behavior: 'smooth' })}
                className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all relative ${activeSection === label.toLowerCase() ? 'text-black' : 'text-slate-400 hover:text-white'}`}
              >
                <span className="relative z-10">{label}</span>
                {activeSection === label.toLowerCase() && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-amber-500 rounded-full shadow-lg shadow-amber-500/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <a href="https://linkedin.com/in/vaishna-meledath" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-purple-400 transition-colors"><LinkedInOutline size={20} /></a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 animate-pulse" /> Content & Growth Strategist
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]"
            >
              CRAFTING <br />
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-amber-400"
              >
                ENGAGING
              </motion.span> <br />
              STORIES.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed"
            >
              I turn brand objectives into visual experiences that captivate audiences and drive measurable digital success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-5"
            >
              <button
                onClick={() => document.getElementById('works').scrollIntoView({ behavior: 'smooth' })}
                className="group px-10 py-5 bg-white text-black rounded-full font-bold flex items-center gap-3 transition-all hover:bg-amber-500 hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
              >
                View My Portfolio <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </div>
          {/* 
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square rounded-[4rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-amber-500/10" />
              <div className="grid grid-cols-3 gap-4 p-12 w-full opacity-40">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.2,
                      repeat: Infinity
                    }}
                    className="aspect-square rounded-2xl bg-white/10 border border-white/20"
                  />
                ))}
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 border-2 border-dashed border-purple-500/30 rounded-full"
              />
              <TrendingUp className="w-24 h-24 text-white opacity-20 relative z-10" />
            </div>
          </motion.div> */}

        </div>
      </section>

      {/* About & Education */}
      <section id="about" className="py-32 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <motion.div {...fadeUp} className="md:col-span-4">
                <h2 className="text-xs font-bold text-purple-500 uppercase tracking-[0.4em] mb-4">About Me</h2>
                <h3 className="text-4xl font-bold text-white mb-6">Strategy & Storytelling.</h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  I am a digital marketing professional passionate about using analytics and creativity to deliver measurable results. My background in Journalism gives me a unique edge in crafting narratives that resonate.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-sm font-medium text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Performance Analysis
                  </div>
                  <div className="flex items-center gap-4 text-sm font-medium text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> High-Engagement SEO
                  </div>
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="md:col-span-8"
              >
                <div className="grid sm:grid-cols-2 gap-8">
                  {education.map((item, i) => (
                    <motion.div
                      key={i}
                      className="p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.04] transition-all"
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${item.iconBg}`}>
                        {item.icon}
                      </div>
                      <div className="text-xs font-bold text-amber-500/80 mb-2 uppercase tracking-widest">{item.date}</div>
                      <h4 className="text-xl font-bold text-white mb-2 leading-tight">{item.degree}</h4>
                      <p className="text-slate-400 text-sm font-medium">{item.institution}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="mb-20 text-center">
            <h2 className="text-xs font-bold text-amber-400 uppercase tracking-[0.4em] mb-4">Professional Path</h2>
            <h3 className="text-5xl font-bold text-white tracking-tight">Work Experience.</h3>
          </motion.div>

          <div className="relative space-y-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500/50 before:via-amber-500/50 before:to-transparent">
            {experience.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Timeline Dot/Icon Container */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-[#0c0b11] text-white shadow-xl z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
                  {job.icon || <Briefcase className="w-5 h-5 text-slate-400" />}
                </div>

                {/* Content Box */}
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-8 bg-white/[0.02] border border-white/5 rounded-[3rem] hover:border-white/20 transition-all hover:bg-white/[0.04] shadow-2xl">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-amber-500 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full">{job.date}</span>
                    <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{job.location}</span>
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-1">{job.role}</h4>
                  <p className="text-purple-400 font-bold mb-6">{job.company}</p>

                  <ul className="space-y-3">
                    {job.description.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-purple-500/50 mt-1.5"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Drive Works */}
      <section id="works" className="py-32 px-6">
        <div className="container mx-auto">
          <motion.div
            {...fadeUp}
            className="relative group rounded-[4rem] overflow-hidden bg-purple-600/5 border border-purple-500/10 p-12 md:p-24"
          >
            <motion.div
              whileInView={{ rotate: [0, 12, 12], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="absolute top-0 right-0 p-12 opacity-10"
            >
              <FolderOpen className="w-64 h-64 text-white" />
            </motion.div>

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-xs font-bold text-amber-400 uppercase tracking-[0.4em] mb-6">Gallery Hub</h2>
              <h3 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">EXPLORE MY <br />CREATIVE DRIVE.</h3>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                Click below to access my live Google Drive portfolio, featuring video edits, content strategies, and successful brand campaigns.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-black rounded-2xl transition-all shadow-2xl shadow-white/10 uppercase tracking-widest text-xs"
              >
                Go to Portfolio <ArrowUpRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 px-6 bg-white/[0.01]">
        <div className="container mx-auto">
          <motion.div {...fadeUp} className="text-center mb-20">
            <h2 className="text-xs font-bold text-purple-400 uppercase tracking-[0.4em] mb-4">Expertise</h2>
            <h3 className="text-5xl font-bold text-white tracking-tight">Technical Arsenal.</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
              {coreSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="p-8 bg-[#0c0b11] border border-white/5 rounded-[2.5rem] hover:border-purple-500/30 transition-all group overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="text-3xl font-black text-white/10 group-hover:text-white/20">{skill.level}%</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{skill.name}</h4>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-purple-500 to-amber-400"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...fadeUp}
              className="p-10 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-[2.5rem] text-white flex flex-col justify-between shadow-2xl shadow-purple-600/20"
            >
              <div>
                <Award className="w-10 h-10 mb-8 opacity-50 text-amber-300" />
                <h4 className="text-2xl font-bold mb-6">Tech Ecosystem</h4>
                <div className="space-y-4">
                  {techStack.map((tech, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-2 group cursor-default">
                      <span className="font-bold text-sm tracking-tight group-hover:translate-x-1 transition-transform">{tech.name}</span>
                      <span className="text-[10px] uppercase font-black opacity-60 tracking-widest text-amber-200">{tech.type}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 bg-black/20 p-6 rounded-2xl text-[11px] font-bold uppercase tracking-widest italic opacity-80 border border-white/10 text-center">
                Driven by Results
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-gradient-to-br from-purple-950/20 to-slate-900/20 border border-white/10 rounded-[4rem] p-12 md:p-24 text-center overflow-hidden relative shadow-2xl"
          >
            <div className="relative z-10">
              <h2 className="text-xs font-bold text-amber-500 uppercase tracking-[0.4em] mb-6">Get in Touch</h2>
              <h3 className="text-5xl md:text-7xl font-black text-white mb-12 tracking-tighter leading-none">LET'S BUILD <br />SOMETHING BOLD.</h3>

              <div className="flex flex-wrap justify-center gap-6 mb-16">
                <motion.a
                  whileHover={{ y: -5 }}
                  href="mailto:vaishnameledath@gmail.com"
                  className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-purple-500/50 transition-all group"
                >
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-bold tracking-tight">vaishnameledath@gmail.com</span>
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="tel:+919567759264"
                  className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-amber-500/50 transition-all group"
                >
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-bold tracking-tight">+91 9567759264</span>
                </motion.a>
              </div>

              <div className="flex justify-center">
                <motion.a
                  whileHover={{ scale: 1.2, color: '#a855f7' }}
                  href="https://linkedin.com/in/vaishna-meledath"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 transition-all flex flex-col items-center gap-2"
                >
                  <LinkedInOutline size={32} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-bold text-white text-xs">V</div>
            <span className="font-bold text-white tracking-widest text-[10px] uppercase">Vaishna M Portfolio • 2026</span>
          </div>
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Built with Passion for Growth <Heart className="w-3 h-3 inline-block text-amber-500 mx-1" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;