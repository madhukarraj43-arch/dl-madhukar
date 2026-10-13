import React, { useState, useEffect, useRef } from 'react';
import {
  AlertCircle,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Code2,
  Compass,
  Copy,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Eye,
  FolderGit2,
  Github,
  Globe2,
  GraduationCap,
  Instagram,
  Layout,
  Linkedin,
  Mail,
  MapPin,
  Maximize2,
  Menu,
  MessageSquare,
  Mic,
  Printer,
  RotateCcw,
  Ruler,
  Scale,
  School,
  Send,
  ShieldCheck,
  Sliders,
  Sparkles,
  Terminal,
  Trophy,
  Upload,
  User,
  Users,
  X,
  Zap
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   60Hz SMOOTH SECTION SHIFT WRAPPER (APPLE STORE TRANSITION)
───────────────────────────────────────────────────────────── */
function AppleSectionShift({ id, children, className = '' }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(id === 'home');

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative overflow-hidden bg-black ${className}`}
    >
      {/* Subtle Apple Monochrome Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[520px] h-[220px] bg-white/[0.03] blur-[110px] rounded-full" />
      </div>

      <div className={`apple-section-shift ${isVisible ? 'is-visible' : ''}`}>
        {children}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   PORTFOLIO DATA (CENTRALIZED)
───────────────────────────────────────────────────────────── */
const personalInfo = {
  name: "Madhukar Raj",
  age: 18,
  role: "B.Tech CSE (Core) Student",
  headline: "B.Tech CSE (Core) Student. SIH 2026 Innovator. Web Developer.",
  college: "JECRC University",
  collegeFull: "JECRC University, Jaipur",
  degree: "B.Tech in Computer Science and Engineering (Core)",
  hometown: "Bhagalpur",
  homeState: "Bihar",
  height: "5'7\"",
  weight: "55 kgs",
  location: "Jaipur, Rajasthan (Hometown: Bhagalpur, Bihar)",
  email: "madhukar.26bcon2022@jecrcu.edu.in",
  linkedin: "https://www.linkedin.com/in/madhukar-raj-undefined-6392b442b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: "https://github.com/madhukarraj43-arch",
  instagram: "https://www.instagram.com/oneofthegoodfellas?srtk=YThxZW9zcGE4c3Ju",
  availability: "Open to Collaborations, Hackathons & Internships",
  shortIntro:
    "18-year-old B.Tech CSE (Core) student at JECRC University, Jaipur, from Bhagalpur, Bihar. Focused on C, Python, modern Web Development, strong communication & speaking skills, and solving national challenges like the Smart India Hackathon (SIH) 2026 Manganese Reserve problem statement.",
  about: {
    story: [
      "I am Madhukar Raj, an 18-year-old undergraduate student pursuing B.Tech in Computer Science & Engineering (Core) at JECRC University, Jaipur. My hometown is Bhagalpur, located in the state of Bihar.",
      "I completed my 10th standard from Sant Joseph's School, scoring 83% in the ICSE Board examinations, and completed my 11th and 12th from Chauhan Public School, scoring 69.2% in the CBSE Board exams.",
      "Currently, I am learning and building with foundational languages like C and Python while crafting modern responsive interfaces in Web Development. Alongside engineering, I focus on soft skills like communication and public speaking—capabilities that drove our Smart India Hackathon (SIH) 2026 Manganese Reserve problem statement project."
    ],
    highlights: [
      { label: "Full Name & Age", value: "Madhukar Raj • 18 Years" },
      { label: "Current Education", value: "B.Tech CSE (Core) @ JECRC University" },
      { label: "Hometown & State", value: "Bhagalpur, Bihar" },
      { label: "Physical Specs", value: "Height: 5'7\" • Weight: 55 kgs" }
    ]
  }
};

const educationData = [
  {
    level: "Undergraduate Degree • Present",
    degree: "B.Tech in Computer Science & Engineering (Core)",
    institution: "JECRC University, Jaipur",
    board: "JECRC University",
    period: "Currently Pursuing",
    status: "Currently Pursuing",
    scoreBadge: "B.Tech CSE (Core)",
    scoreValue: null,
    description:
      "Pursuing Bachelor of Technology in Computer Science & Engineering (Core) at JECRC University, Jaipur. Focused on C, Python, modern web development, core algorithms, and hackathon problem statements.",
    highlights: [
      "Student of B.Tech CSE (Core) at JECRC University, Jaipur",
      "Hands-on programming in C, Python, and modern Web Development",
      "Developed the Smart India Hackathon (SIH) 2026 Manganese Reserve project",
      "Active in technical presentations, communication, and collaborative engineering"
    ]
  },
  {
    level: "Senior Secondary • Class 11th & 12th",
    degree: "Higher Secondary Education (11th & 12th)",
    institution: "Chauhan Public School",
    board: "CBSE Board",
    period: "Completed",
    status: "Completed",
    scoreBadge: "69.2% in CBSE Board",
    scoreValue: "69.2%",
    description:
      "Completed 11th and 12th standard from Chauhan Public School and scored 69.2% in the CBSE Board examinations.",
    highlights: [
      "Scored 69.2% aggregate in the CBSE Board examinations",
      "Completed Class 11th and 12th at Chauhan Public School",
      "Strong analytical grounding in Mathematics, Physics, and Science"
    ]
  },
  {
    level: "Secondary School • Class 10th Passout",
    degree: "Secondary School Certificate (10th Passout)",
    institution: "Sant Joseph's School",
    board: "ICSE Board",
    period: "Completed",
    status: "Completed",
    scoreBadge: "83% in ICSE Board",
    scoreValue: "83%",
    description:
      "10th passout from Sant Joseph's School with an 83% score in the ICSE Board examinations, building strong academic discipline and spoken English proficiency.",
    highlights: [
      "Scored 83% in the ICSE Board 10th examinations",
      "Graduated from Sant Joseph's School",
      "Built core foundations in Science, Mathematics, and English communication"
    ]
  }
];

const skillsData = {
  technical: [
    {
      id: "c-lang",
      name: "C Programming",
      category: "Programming Languages",
      icon: Code2,
      level: "Actively Learning",
      percentage: 82,
      description:
        "Structured systems programming, pointers, memory allocation, arrays, structures, and algorithmic logic in C.",
      tags: ["C Language", "Pointers", "Memory Management", "Data Structures", "Core CS"]
    },
    {
      id: "python",
      name: "Python",
      category: "Programming Languages",
      icon: Terminal,
      level: "Actively Learning",
      percentage: 85,
      description:
        "Scripting, computational modeling, data analysis, object-oriented design, and automation used in SIH 2026 prototyping.",
      tags: ["Python", "Data Modeling", "OOP", "Scripting", "Automation"]
    },
    {
      id: "web-dev",
      name: "Web Development",
      category: "Frontend & Web Engineering",
      icon: Layout,
      level: "Actively Working On",
      percentage: 86,
      description:
        "Crafting minimalist, high-refresh-rate responsive websites using HTML5, CSS3, JavaScript, React, and iOS 26 Liquid Glass UI.",
      tags: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "iOS 26 UI"]
    },
    {
      id: "problem-solving",
      name: "Algorithmic Problem Solving",
      category: "Core Computer Science",
      icon: Cpu,
      level: "Core Focus",
      percentage: 80,
      description:
        "Translating national hackathon problem statements—such as Manganese Reserve estimation—into structured computational models.",
      tags: ["Algorithms", "Logical Analysis", "SIH 2026 Modeling", "Debugging"]
    },
    {
      id: "git-github",
      name: "Git & GitHub",
      category: "Developer Workflow",
      icon: FolderGit2,
      level: "Proficient",
      percentage: 80,
      description:
        "Source code versioning, repository management, branch workflows, and open-source collaboration on GitHub.",
      tags: ["Git", "GitHub", "Version Control", "Open Source"]
    }
  ],
  soft: [
    {
      id: "communication",
      name: "Communication Skills",
      category: "Soft Skills",
      icon: MessageSquare,
      level: "Strong",
      percentage: 92,
      description:
        "Clear, concise verbal and written communication—articulating complex engineering ideas with precision and clarity.",
      tags: ["Clear Articulation", "Active Listening", "Technical Writing", "Team Alignment"]
    },
    {
      id: "speaking-skills",
      name: "Speaking & Presentation Skills",
      category: "Soft Skills",
      icon: Mic,
      level: "Strong",
      percentage: 90,
      description:
        "Confident public speaking, stage composure, and pitching technical prototypes before hackathon juries and peers.",
      tags: ["Public Speaking", "Hackathon Pitching", "Stage Confidence", "Presentation"]
    },
    {
      id: "teamwork",
      name: "Team Collaboration",
      category: "Soft Skills",
      icon: Users,
      level: "Strong",
      percentage: 90,
      description:
        "Working seamlessly in high-tempo hackathon teams, coordinating deliverables, and maintaining collective focus.",
      tags: ["Teamwork", "Collaboration", "Hackathon Execution", "Leadership"]
    },
    {
      id: "adaptability",
      name: "Quick Learning & Adaptability",
      category: "Growth Mindset",
      icon: Zap,
      level: "Strong",
      percentage: 94,
      description:
        "Rapidly adopting new languages (C, Python, modern web frameworks) and adapting to new engineering challenges.",
      tags: ["Fast Learner", "Curiosity", "Self-Driven", "Adaptability"]
    }
  ]
};

const projectsData = [
  {
    id: "sih-manganese-reserve",
    title: "Smart India Hackathon (SIH) 2026 — Manganese Reserve Problem Statement Project",
    badge: "SIH 2026 Flagship",
    category: "Smart India Hackathon 2026 • Data & Geological Modeling",
    featured: true,
    shortDesc:
      "Computational reserve estimation and spatial analysis solution engineered for the Smart India Hackathon (SIH) 2026 Manganese Reserve problem statement.",
    fullDesc:
      "Built for Smart India Hackathon (SIH) 2026 to solve the Manganese Reserve problem statement. The system processes subterranean borehole exploration data to classify manganese ore grades (Mn %), filter deposits by cut-off grade thresholds, and compute recoverable reserve tonnage with high precision.",
    problemStatement:
      "Smart India Hackathon (SIH) 2026 — Manganese Reserve Problem Statement: Accurately mapping, analyzing, and estimating Manganese mineral reserves from geological survey and borehole datasets to optimize resource calculation and sustainable extraction planning.",
    solutionHighlights: [
      "Automated Manganese (Mn %) ore-grade classification and dynamic cut-off grade filtering",
      "Volumetric and tonnage reserve calculation engine across multi-depth geological boreholes",
      "Interactive simulation terminal for inspecting deposit zones, strike lengths, and UNFC confidence",
      "Eliminates manual calculation bottlenecks and improves survey precision for mining engineers"
    ],
    technologies: [
      "Python",
      "C Language",
      "Data Modeling",
      "Web Development",
      "React & Tailwind CSS",
      "Geospatial Analytics",
      "SIH 2026"
    ],
    githubUrl: "https://github.com/madhukarraj43-arch"
  },
  {
    id: "apple-liquid-glass-portfolio",
    title: "Apple Monochromatic iOS 26 Liquid Glass Portfolio",
    badge: "Web Development",
    category: "Apple Store Inspired UI",
    featured: false,
    shortDesc:
      "Minimalist monochromatic portfolio crafted with Apple SF Pro calligraphy, 60Hz smooth section shifts, and iOS 26 Liquid Glass panels.",
    fullDesc:
      "Engineered with pure black-and-white Apple Store aesthetics, hardware-accelerated 60Hz transitions, and iOS 26 frosted Liquid Glass enclosures around every typographic element.",
    problemStatement:
      "Creating an ultra-clean, Apple-grade personal portfolio with fluid section surfing and zero visual clutter.",
    solutionHighlights: [
      "Pure monochromatic black, white, and silver Apple Store design language",
      "Every text block housed inside an iOS 26 Liquid Glass specular panel",
      "60Hz hardware-accelerated section shifts and interactive Quick-Surf dock",
      "Integrated SIH 2026 borehole simulator and high-resolution certificate viewer"
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "SF Pro Typography", "iOS 26 Liquid Glass"],
    githubUrl: "https://github.com/madhukarraj43-arch"
  },
  {
    id: "c-python-lab",
    title: "C & Python Core Algorithms Suite",
    badge: "Core CS",
    category: "Programming Languages",
    featured: false,
    shortDesc:
      "Foundational algorithms, pointer & memory structures in C, and scientific data scripts in Python.",
    fullDesc:
      "Developed during B.Tech CSE (Core) studies at JECRC University, focusing on low-level memory manipulation in C and high-level mathematical scripting in Python.",
    problemStatement:
      "Mastering core computer science fundamentals across compiled and interpreted languages.",
    solutionHighlights: [
      "Pointers, structs, and dynamic memory allocation implementations in C",
      "Automated data parsing and mathematical scripts in Python",
      "Clean, modular code repositories maintained on GitHub"
    ],
    technologies: ["C", "Python", "Data Structures", "Algorithms", "GitHub"],
    githubUrl: "https://github.com/madhukarraj43-arch"
  }
];

const achievementsData = [
  {
    id: "sih-2026-cert",
    type: "Hackathon Certificate",
    title: "Smart India Hackathon (SIH) 2026 — Official Certificate",
    issuer: "Ministry of Education's Innovation Cell (MIC) & AICTE",
    date: "SIH 2026",
    badge: "Attached Certificate",
    isCertificate: true,
    certificateId: "SIH2026-MR-MNG-9842",
    description:
      "Awarded to Madhukar Raj (B.Tech CSE Core, JECRC University) for engineering an innovative solution for the Manganese Reserve problem statement in Smart India Hackathon (SIH) 2026.",
    details: [
      "Official Smart India Hackathon (SIH) 2026 Certificate of Participation & Achievement",
      "Problem Statement: Manganese Reserve Estimation & Geospatial Resource Modeling",
      "Recognized for technical execution, problem-solving, and presentation clarity",
      "Endorsed by Ministry of Education's Innovation Cell & AICTE, Govt. of India"
    ]
  },
  {
    id: "icse-83",
    type: "Academic Honor",
    title: "83% in ICSE 10th Board Examinations",
    issuer: "Sant Joseph's School (ICSE Board)",
    date: "Class 10th Passout",
    badge: "83% ICSE",
    isCertificate: false,
    description:
      "Passed 10th standard from Sant Joseph's School with an 83% score in the ICSE Board examinations.",
    details: [
      "Distinction performance in ICSE 10th Board Exams (83%)",
      "Strong foundation in Mathematics, Science, and English communication",
      "Alumnus of Sant Joseph's School"
    ]
  },
  {
    id: "cbse-69-2",
    type: "Academic Milestone",
    title: "69.2% in CBSE 12th Board Examinations",
    issuer: "Chauhan Public School (CBSE Board)",
    date: "Class 11th & 12th",
    badge: "69.2% CBSE",
    isCertificate: false,
    description:
      "Completed 11th and 12th standard from Chauhan Public School, scoring 69.2% in the CBSE Board exams.",
    details: [
      "Completed Senior Secondary education under CBSE Board",
      "Focused on Physics, Chemistry, and Mathematics",
      "Qualified for B.Tech CSE (Core) engineering degree"
    ]
  },
  {
    id: "jecrc-btech",
    type: "Higher Education",
    title: "B.Tech CSE (Core) Scholar",
    issuer: "JECRC University, Jaipur",
    date: "Present",
    badge: "B.Tech CSE Core",
    isCertificate: false,
    description:
      "Currently pursuing B.Tech in Computer Science & Engineering (Core) at JECRC University, Jaipur.",
    details: [
      "Active in C, Python, and modern Web Development",
      "Smart India Hackathon (SIH) 2026 team innovator",
      "Combining software engineering with strong speaking & communication skills"
    ]
  }
];

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About me', href: '#about', id: 'about' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Certifications', href: '#achievements', id: 'achievements' },
  { name: 'Contact', href: '#contact', id: 'contact' },
  { name: 'GitHub & LinkedIn', href: '#social-links', id: 'social-links' },
];

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: APPLE STORE MINIMALIST NAVBAR
───────────────────────────────────────────────────────────── */
function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2.5' : 'py-4'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <nav className="liquid-glass-panel rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between border border-white/15 bg-black/75">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center font-semibold text-black text-xs tracking-tighter transition-transform duration-300 group-hover:scale-105">
              MR
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold text-white tracking-tight leading-none">
                {personalInfo.name}
              </span>
              <span className="text-[9px] uppercase tracking-[0.18em] text-[#86868b] leading-tight mt-0.5">
                B.Tech CSE Core
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-black font-semibold shadow-[0_2px_14px_rgba(255,255,255,0.28)]'
                      : 'text-[#a1a1a6] hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-[#a1a1a6] hover:text-white hover:bg-white/10 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-[#a1a1a6] hover:text-white hover:bg-white/10 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-4 py-1.5 rounded-full text-xs font-medium bg-white text-black hover:bg-[#e8e8ed] transition-all"
            >
              Contact
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-3 py-1 rounded-full text-xs font-medium bg-white text-black"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-[#a1a1a6] hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 liquid-glass-panel rounded-apple-lg p-4 bg-black/95 border border-white/20">
            <div className="grid grid-cols-2 gap-1.5 pb-3 mb-3 border-b border-white/10">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                      isActive ? 'bg-white text-black font-semibold' : 'text-[#a1a1a6] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] opacity-60">0{idx + 1}</span>
                  </a>
                );
              })}
            </div>
            <div className="flex items-center justify-between text-xs text-[#86868b] px-1">
              <span>Madhukar Raj • Portfolio</span>
              <div className="flex items-center gap-3">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center gap-1">
                  GitHub <ArrowUpRight className="w-3 h-3" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center gap-1">
                  LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 01: HOME (OVERVIEW + iOS 26 LIQUID GLASS + SURFER)
───────────────────────────────────────────────────────────── */
function Hero() {
  const [activePreviewIdx, setActivePreviewIdx] = useState(0);
  const [glassPreset, setGlassPreset] = useState('titanium');

  const surfSections = [
    {
      id: 'home',
      number: '01',
      label: 'Home',
      subtitle: 'Portfolio overview, iOS 26 Liquid Glass animation & section surfer',
      tag: 'Overview',
      icon: Sparkles
    },
    {
      id: 'about',
      number: '02',
      label: 'About Me',
      subtitle: 'Madhukar Raj • Age 18 • Bhagalpur, Bihar • 5\'7" & 55 kgs • JECRC B.Tech CSE',
      tag: 'Identity',
      icon: User
    },
    {
      id: 'education',
      number: '03',
      label: 'Education',
      subtitle: '10th Sant Joseph\'s (83% ICSE) • 12th Chauhan Public (69.2% CBSE) • JECRC',
      tag: 'Academics',
      icon: GraduationCap
    },
    {
      id: 'skills',
      number: '04',
      label: 'Skills',
      subtitle: 'Technical: C, Python, Web Dev • Soft: Communication & Speaking Skills',
      tag: 'Capabilities',
      icon: Code2
    },
    {
      id: 'projects',
      number: '05',
      label: 'Projects',
      subtitle: 'Smart India Hackathon (SIH) 2026: Manganese Reserve Problem Statement',
      tag: 'SIH 2026',
      icon: FolderGit2
    },
    {
      id: 'achievements',
      number: '06',
      label: 'Certifications & Achievements',
      subtitle: 'Official Smart India Hackathon (SIH) 2026 Certificate & Academic Honors',
      tag: 'Certificate',
      icon: Award
    },
    {
      id: 'contact',
      number: '07',
      label: 'Contact',
      subtitle: 'madhukar.26bcon2022@jecrcu.edu.in • Direct Dispatch & Location',
      tag: 'Inbox',
      icon: Mail
    },
    {
      id: 'social-links',
      number: '08',
      label: 'GitHub & LinkedIn Links',
      subtitle: 'GitHub (@madhukarraj43-arch) • LinkedIn • Instagram (@oneofthegoodfellas)',
      tag: 'Network',
      icon: Compass
    },
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppleSectionShift id="home" className="min-h-screen flex items-center pt-28 pb-20">
      {/* Pure Monochrome iOS 26 Liquid Glass Ambient Blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="absolute top-[10%] left-[15%] w-[480px] h-[480px] rounded-full blur-[120px] animate-liquid-mono-1"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 55%, transparent 75%)'
          }}
        />
        <div
          className="absolute top-[35%] right-[12%] w-[440px] h-[440px] rounded-full blur-[120px] animate-liquid-mono-2"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.03) 55%, transparent 75%)'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Top Hero Header Enclosed in iOS 26 Liquid Glass */}
        <div className="liquid-glass-panel rounded-apple-2xl p-8 sm:p-12 text-center space-y-5 mb-8 liquid-shimmer">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full liquid-glass-pill text-xs font-medium tracking-wide text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="apple-eyebrow !text-white">Section 01 • Portfolio Overview</span>
            <span className="text-white/30">•</span>
            <span className="text-[#d2d2d7] font-mono text-[11px]">iOS 26 Liquid Glass • 60Hz</span>
          </div>

          <h1 className="apple-title-hero">
            Madhukar Raj.
          </h1>

          <div className="max-w-3xl mx-auto ios26-text-glass rounded-apple-lg px-6 py-4">
            <p className="text-base sm:text-xl font-normal apple-text-silver tracking-tight">
              B.Tech CSE (Core) Student at JECRC University, Jaipur. Smart India Hackathon (SIH) 2026 Innovator. Engineered with Apple-grade minimalism.
            </p>
          </div>
        </div>

        {/* Main Grid: Left = Portfolio Overview + iOS 26 Liquid Glass Animation | Right = Surf All Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          <div className="lg:col-span-7 flex flex-col">
            <div className="liquid-glass-panel rounded-apple-2xl p-6 sm:p-9 flex flex-col justify-between h-full space-y-6 liquid-shimmer">
              {/* Interactive iOS 26 Liquid Glass Animation Showcase */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 shrink-0 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-white/25 animate-liquid-ripple" />
                  <div
                    className={`absolute w-24 h-24 rounded-full blur-xl transition-all duration-700 ${
                      glassPreset === 'titanium'
                        ? 'bg-white/35 scale-105'
                        : glassPreset === 'obsidian'
                        ? 'bg-white/20 scale-95'
                        : 'bg-white/50 scale-110'
                    }`}
                  />
                  {/* Morphing Monochrome iOS 26 Liquid Glass Orb */}
                  <div
                    onClick={() =>
                      setGlassPreset((prev) =>
                        prev === 'titanium' ? 'silver' : prev === 'silver' ? 'obsidian' : 'titanium'
                      )
                    }
                    title="Click to shift iOS 26 Liquid Glass specular density"
                    className="relative w-28 h-28 sm:w-32 sm:h-32 animate-liquid-orb cursor-pointer flex flex-col items-center justify-center text-center p-3 select-none"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.22) 100%)',
                      backdropFilter: 'blur(24px) saturate(200%)',
                      WebkitBackdropFilter: 'blur(24px) saturate(200%)',
                      border: '1.5px solid rgba(255,255,255,0.5)',
                      boxShadow:
                        '0 20px 45px rgba(0,0,0,0.85), inset 0 2px 6px rgba(255,255,255,0.75), inset 0 -3px 8px rgba(255,255,255,0.2)'
                    }}
                  >
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/80">iOS 26</span>
                    <span className="text-2xl font-semibold text-white tracking-tighter mt-0.5">MR</span>
                    <span className="text-[9px] font-mono text-[#d2d2d7] mt-1">Liquid Glass</span>
                  </div>
                </div>

                {/* Overview Text Inside iOS 26 Glass Enclosure */}
                <div className="flex-1 space-y-3 w-full">
                  <div className="ios26-text-glass rounded-apple-lg p-4 sm:p-5 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="apple-eyebrow !text-white">Complete Overview</span>
                      <span className="text-[11px] font-mono text-[#a1a1a6]">Bhagalpur ➔ Jaipur</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug">
                      All Portfolio Information in One Unified View.
                    </h2>
                    <p className="text-xs sm:text-sm text-[#d2d2d7] leading-relaxed">
                      {personalInfo.shortIntro}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {['titanium', 'silver', 'obsidian'].map((preset) => (
                      <button
                        key={preset}
                        onClick={() => setGlassPreset(preset)}
                        className={`px-3 py-1 rounded-full text-[11px] font-mono capitalize transition-all cursor-pointer ${
                          glassPreset === preset
                            ? 'bg-white text-black font-semibold'
                            : 'liquid-glass-pill text-[#a1a1a6] hover:text-white'
                        }`}
                      >
                        Finish: {preset}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Snapshot Grid Enclosed in iOS 26 Liquid Glass Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div onClick={() => handleScrollTo('about')} className="liquid-glass-pill p-3.5 rounded-apple-md cursor-pointer">
                  <div className="text-[10px] uppercase tracking-wider text-[#86868b] font-mono">Personal</div>
                  <div className="text-sm font-semibold text-white mt-0.5">18 Yrs • 5'7" • 55kg</div>
                  <div className="text-[11px] text-[#a1a1a6] mt-0.5">Bhagalpur, Bihar</div>
                </div>
                <div onClick={() => handleScrollTo('education')} className="liquid-glass-pill p-3.5 rounded-apple-md cursor-pointer">
                  <div className="text-[10px] uppercase tracking-wider text-[#86868b] font-mono">Academics</div>
                  <div className="text-sm font-semibold text-white mt-0.5">83% ICSE • 69.2% CBSE</div>
                  <div className="text-[11px] text-[#a1a1a6] mt-0.5">JECRC B.Tech CSE</div>
                </div>
                <div onClick={() => handleScrollTo('skills')} className="liquid-glass-pill p-3.5 rounded-apple-md cursor-pointer">
                  <div className="text-[10px] uppercase tracking-wider text-[#86868b] font-mono">Skills</div>
                  <div className="text-sm font-semibold text-white mt-0.5">C, Python & Web</div>
                  <div className="text-[11px] text-[#a1a1a6] mt-0.5">Speaking & Comm.</div>
                </div>
                <div onClick={() => handleScrollTo('projects')} className="liquid-glass-pill p-3.5 rounded-apple-md cursor-pointer">
                  <div className="text-[10px] uppercase tracking-wider text-[#86868b] font-mono">Flagship</div>
                  <div className="text-sm font-semibold text-white mt-0.5">SIH 2026 Project</div>
                  <div className="text-[11px] text-[#a1a1a6] mt-0.5">Manganese Reserve</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleScrollTo('projects')}
                  className="apple-btn-primary flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore SIH 2026 Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleScrollTo('achievements')}
                  className="apple-btn-secondary flex items-center gap-2 cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>SIH 2026 Certificate</span>
                </button>
                <button
                  onClick={() => handleScrollTo('contact')}
                  className="apple-btn-secondary flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Section Surfer (Surf Across All 8 Sections) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="liquid-glass-panel rounded-apple-2xl p-6 sm:p-8 flex flex-col justify-between h-full liquid-shimmer">
              <div>
                <div className="ios26-text-glass rounded-apple-md p-4 mb-4">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-white" />
                      <span className="apple-eyebrow !text-white">Section Surfer</span>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white text-black font-semibold">
                      60Hz Smooth Shift
                    </span>
                  </div>
                  <p className="text-xs text-[#d2d2d7] pt-2 leading-relaxed">
                    Surf directly to any of the 8 ordered sections of Madhukar Raj's portfolio:
                  </p>
                </div>

                <div className="space-y-2">
                  {surfSections.map((sec, index) => {
                    const Icon = sec.icon;
                    const isPreviewed = activePreviewIdx === index;
                    return (
                      <button
                        key={sec.id}
                        onMouseEnter={() => setActivePreviewIdx(index)}
                        onClick={() => handleScrollTo(sec.id)}
                        className={`w-full text-left group flex items-center justify-between p-2.5 rounded-apple-md border transition-all duration-300 cursor-pointer ${
                          isPreviewed
                            ? 'bg-white/[0.14] border-white/35 shadow-[0_8px_24px_rgba(0,0,0,0.65)] translate-x-0.5'
                            : 'bg-white/[0.035] border-white/10 hover:bg-white/[0.09] hover:border-white/25'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0 pr-2">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                              isPreviewed ? 'bg-white text-black' : 'bg-white/10 text-white'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-semibold text-white flex items-center gap-2">
                              <span className="font-mono text-[10px] text-[#a1a1a6]">{sec.number}</span>
                              <span className="truncate">{sec.label}</span>
                            </div>
                            <div className="text-[11px] text-[#a1a1a6] truncate">
                              {sec.subtitle}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white">
                            {sec.tag}
                          </span>
                          <ChevronRight className="w-4 h-4 text-[#86868b] transform group-hover:translate-x-1 group-hover:text-white transition-all" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#86868b]">
                <span>iOS 26 Liquid Glass Navigator</span>
                <span className="text-white font-mono text-[11px]">01 ➔ 08</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppleSectionShift>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 02: ABOUT ME
───────────────────────────────────────────────────────────── */
function About() {
  const personalSpecs = [
    { label: "Name", value: "Madhukar Raj", icon: User },
    { label: "Age", value: "18", icon: Calendar },
    { label: "Education", value: "Student at JECRC University (B.Tech CSE Core)", icon: GraduationCap },
    { label: "Hometown", value: "Bhagalpur", icon: MapPin },
    { label: "Home State", value: "Bihar", icon: Globe2 },
    { label: "Height", value: "5'7\"", icon: Ruler },
    { label: "Weight", value: "55 kgs", icon: Scale },
    { label: "Degree Program", value: "B.Tech CSE (Core)", icon: Cpu },
  ];

  return (
    <AppleSectionShift id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header in iOS 26 Liquid Glass Panel */}
        <div className="liquid-glass-panel rounded-apple-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto mb-14 space-y-3 liquid-shimmer">
          <div className="apple-eyebrow">
            Section 02 • Personal Profile
          </div>
          <h2 className="apple-section-headline">
            About Me.
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1a6] tracking-[-0.016em]">
            Personal details, Bhagalpur roots in Bihar, physical specifications, and B.Tech CSE (Core) studies at JECRC University.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {/* Personal Details Spec Sheet */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="liquid-glass-panel rounded-apple-2xl p-6 sm:p-8 space-y-6 liquid-shimmer h-full flex flex-col justify-between">
              <div>
                <div className="ios26-text-glass rounded-apple-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-white text-black font-bold flex items-center justify-center text-sm">
                      MR
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white tracking-tight">{personalInfo.name}</h3>
                      <p className="text-xs text-[#a1a1a6] font-mono">B.Tech CSE (Core) • JECRC University</p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-black font-semibold">
                    Verified
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5">
                  {personalSpecs.map((spec, index) => {
                    const Icon = spec.icon;
                    return (
                      <div
                        key={index}
                        className="liquid-glass-pill p-3.5 rounded-apple-md flex items-start gap-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] uppercase tracking-wider text-[#86868b] font-mono">{spec.label}</div>
                          <div className="text-xs sm:text-sm font-semibold text-white leading-snug mt-0.5">
                            {spec.value}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="ios26-text-glass p-4 rounded-apple-md flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white shrink-0" />
                <div className="text-xs text-[#d2d2d7] leading-relaxed">
                  Hometown: <strong className="text-white">Bhagalpur</strong>, Home State: <strong className="text-white">Bihar</strong> • Studying at <strong className="text-white">JECRC University, Jaipur</strong>.
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Biography in iOS 26 Liquid Glass */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="liquid-glass-panel rounded-apple-2xl p-6 sm:p-10 space-y-6 liquid-shimmer h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="ios26-text-glass rounded-apple-lg p-5 space-y-2">
                  <div className="apple-eyebrow">Biography & Identity</div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                    18-year-old B.Tech CSE (Core) undergraduate focused on precision software engineering.
                  </h3>
                </div>

                {personalInfo.about.story.map((para, i) => (
                  <div key={i} className="ios26-text-glass p-4 sm:p-5 rounded-apple-lg">
                    <p className="text-sm sm:text-base text-[#d2d2d7] leading-relaxed">
                      {para}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalInfo.about.highlights.map((h, i) => (
                  <div key={i} className="liquid-glass-pill p-3.5 rounded-apple-md">
                    <div className="text-[10px] uppercase tracking-wider text-[#86868b] font-mono">{h.label}</div>
                    <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">{h.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppleSectionShift>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 03: EDUCATION
───────────────────────────────────────────────────────────── */
function Education() {
  return (
    <AppleSectionShift id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="liquid-glass-panel rounded-apple-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto mb-14 space-y-3 liquid-shimmer">
          <div className="apple-eyebrow">
            Section 03 • Academic Record
          </div>
          <h2 className="apple-section-headline">
            Education.
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1a6] tracking-[-0.016em]">
            10th passout from Sant Joseph's School (83% ICSE Board), 11th & 12th from Chauhan Public School (69.2% CBSE Board), and B.Tech in CSE (Core) at JECRC University, Jaipur.
          </p>
        </div>

        {/* Top Academic Summary Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="liquid-glass-panel rounded-apple-xl p-6 text-center liquid-shimmer">
            <div className="text-xs font-mono uppercase text-[#86868b]">10th Standard • ICSE Board</div>
            <div className="text-4xl font-semibold text-white mt-1 tracking-tight">83%</div>
            <div className="text-xs text-[#d2d2d7] mt-1.5 font-medium">Sant Joseph's School</div>
          </div>
          <div className="liquid-glass-panel rounded-apple-xl p-6 text-center liquid-shimmer">
            <div className="text-xs font-mono uppercase text-[#86868b]">11th & 12th • CBSE Board</div>
            <div className="text-4xl font-semibold text-white mt-1 tracking-tight">69.2%</div>
            <div className="text-xs text-[#d2d2d7] mt-1.5 font-medium">Chauhan Public School</div>
          </div>
          <div className="liquid-glass-panel rounded-apple-xl p-6 text-center liquid-shimmer">
            <div className="text-xs font-mono uppercase text-[#86868b]">Current Degree • Jaipur</div>
            <div className="text-2xl sm:text-3xl font-semibold text-white mt-1.5 tracking-tight">B.Tech CSE (Core)</div>
            <div className="text-xs text-[#d2d2d7] mt-1.5 font-medium">JECRC University, Jaipur</div>
          </div>
        </div>

        <div className="space-y-6">
          {educationData.map((item, index) => {
            const isOngoing = item.status === "Currently Pursuing";
            return (
              <div key={index} className="liquid-glass-panel rounded-apple-2xl p-6 sm:p-9 liquid-shimmer space-y-5">
                <div className="ios26-text-glass rounded-apple-xl p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#a1a1a6]">
                        {item.level}
                      </span>
                      {isOngoing && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white text-black text-[11px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                          {item.status}
                        </span>
                      )}
                      <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[11px] font-mono border border-white/15">
                        {item.board}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                      {item.degree}
                    </h3>

                    <div className="text-sm sm:text-base font-medium text-[#d2d2d7] flex items-center gap-2">
                      <School className="w-4 h-4 text-white" />
                      <span>{item.institution}</span>
                    </div>
                  </div>

                  <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-3 shrink-0">
                    {item.scoreValue ? (
                      <div className="liquid-glass-pill px-5 py-3 rounded-apple-md flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center text-xs">
                          %
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] uppercase tracking-wider text-[#86868b] font-mono">Board Score</div>
                          <div className="text-2xl font-semibold text-white">{item.scoreValue}</div>
                        </div>
                      </div>
                    ) : (
                      <div className="liquid-glass-pill px-4 py-2.5 rounded-apple-md text-xs font-semibold text-white">
                        Pursuing @ JECRC University
                      </div>
                    )}
                  </div>
                </div>

                <div className="ios26-text-glass rounded-apple-lg p-4 sm:p-5">
                  <p className="text-sm sm:text-base text-[#d2d2d7] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.highlights.map((hl, i) => (
                    <div key={i} className="liquid-glass-pill p-3.5 rounded-apple-md flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#d2d2d7]">
                        {hl}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppleSectionShift>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 04: SKILLS
───────────────────────────────────────────────────────────── */
function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const allTechnical = skillsData.technical.map((s) => ({ ...s, skillType: 'technical' }));
  const allSoft = skillsData.soft.map((s) => ({ ...s, skillType: 'soft' }));
  const combinedSkills = [...allTechnical, ...allSoft];

  const getFilteredSkills = () => {
    if (activeTab === 'all') return combinedSkills;
    if (activeTab === 'technical') return allTechnical;
    if (activeTab === 'soft') return allSoft;
    return combinedSkills;
  };

  const currentSkills = getFilteredSkills();

  return (
    <AppleSectionShift id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="liquid-glass-panel rounded-apple-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto mb-12 space-y-3 liquid-shimmer">
          <div className="apple-eyebrow">
            Section 04 • Technical & Soft Skills
          </div>
          <h2 className="apple-section-headline">
            Skills.
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1a6] tracking-[-0.016em]">
            Currently learning languages like <strong className="text-white">C</strong> and <strong className="text-white">Python</strong>, actively working on <strong className="text-white">Web Development</strong>, and practicing soft skills like <strong className="text-white">Communication</strong> and <strong className="text-white">Speaking Skills</strong>.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {[
            { id: 'all', label: 'All Skills', count: combinedSkills.length },
            { id: 'technical', label: 'Technical (C, Python, Web Dev)', count: allTechnical.length },
            { id: 'soft', label: 'Soft Skills (Communication, Speaking)', count: allSoft.length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-white text-black font-semibold shadow-[0_4px_20px_rgba(255,255,255,0.25)]'
                  : 'liquid-glass-pill text-[#a1a1a6] hover:text-white'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeTab === tab.id ? 'bg-black/15 text-black' : 'bg-white/10 text-white'}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div key={skill.id} className="liquid-glass-panel rounded-apple-2xl p-6 flex flex-col justify-between liquid-shimmer space-y-4">
                <div className="space-y-4">
                  <div className="ios26-text-glass rounded-apple-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white tracking-tight">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] text-[#a1a1a6] font-mono">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/15">
                      {skill.skillType === 'soft' ? 'Soft' : 'Tech'}
                    </span>
                  </div>

                  <div className="ios26-text-glass rounded-apple-lg p-4">
                    <p className="text-xs sm:text-sm text-[#d2d2d7] leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>

                <div className="ios26-text-glass rounded-apple-lg p-4 space-y-3">
                  <div>
                    <div className="flex justify-between text-[11px] font-mono mb-1.5">
                      <span className="text-[#a1a1a6]">{skill.level}</span>
                      <span className="text-white font-semibold">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-white transition-all duration-700"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.06] text-white border border-white/15">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppleSectionShift>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 05: PROJECTS (SIH 2026 MANGANESE RESERVE PROJECT)
───────────────────────────────────────────────────────────── */
const BOREHOLE_ZONES = [
  {
    id: 'alpha',
    name: 'Zone Alpha (Balaghat Sector)',
    sampleId: 'BH-MNG-049',
    mnGrade: 46.8,
    gradeClass: 'High-Grade Dioxide Ore',
    baseTonnage: 1.42,
    depthRange: '42m – 168m',
    strikeLength: '1,250 meters',
    confidence: '92.4% (UNFC 111 Proved)'
  },
  {
    id: 'beta',
    name: 'Zone Beta (Nagpur-Bhandara)',
    sampleId: 'BH-MNG-112',
    mnGrade: 38.4,
    gradeClass: 'Medium-High Metallurgical Grade',
    baseTonnage: 2.15,
    depthRange: '60m – 210m',
    strikeLength: '1,840 meters',
    confidence: '89.1% (UNFC 121 Probable)'
  },
  {
    id: 'gamma',
    name: 'Zone Gamma (Singhbhum Belt)',
    sampleId: 'BH-MNG-208',
    mnGrade: 31.2,
    gradeClass: 'Siliceous Manganese Ore',
    baseTonnage: 3.08,
    depthRange: '25m – 140m',
    strikeLength: '2,320 meters',
    confidence: '86.7% (UNFC 122 Probable)'
  }
];

function Projects({ onSelectProject }) {
  const [selectedZoneIdx, setSelectedZoneIdx] = useState(0);
  const [cutoffGrade, setCutoffGrade] = useState(20);

  const sihProject = projectsData.find((p) => p.id === 'sih-manganese-reserve');
  const otherProjects = projectsData.filter((p) => p.id !== 'sih-manganese-reserve');

  const activeZone = BOREHOLE_ZONES[selectedZoneIdx];
  const cutoffFactor = Math.max(0.45, 1 - (cutoffGrade - 15) * 0.018);
  const recoverableTonnage = (activeZone.baseTonnage * cutoffFactor).toFixed(2);

  return (
    <AppleSectionShift id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="liquid-glass-panel rounded-apple-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto mb-14 space-y-3 liquid-shimmer">
          <div className="apple-eyebrow">
            Section 05 • Engineering & Hackathons
          </div>
          <h2 className="apple-section-headline">
            Projects.
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1a6] tracking-[-0.016em]">
            Featuring the flagship <strong className="text-white">Smart India Hackathon (SIH) 2026 Manganese Reserve Problem Statement</strong> project.
          </p>
        </div>

        {sihProject && (
          <div className="mb-14">
            <div className="liquid-glass-panel rounded-apple-2xl p-6 sm:p-10 liquid-shimmer border border-white/20">
              <div className="ios26-text-glass rounded-apple-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 mb-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-white text-black font-semibold text-xs tracking-tight">
                    SMART INDIA HACKATHON (SIH) 2026
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-xs font-mono">
                    Manganese Reserve Problem Statement
                  </span>
                </div>
                <div className="text-xs font-mono text-[#d2d2d7] flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-white" />
                  <span>Flagship Engineering Project</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Project Text Panels */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="ios26-text-glass rounded-apple-xl p-5 sm:p-6 space-y-3">
                    <h3 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight leading-tight">
                      {sihProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-[#a1a1a6]">
                      Computational Geological Borehole Modeling & Manganese Reserve Estimation
                    </p>
                    <p className="text-sm sm:text-base text-[#d2d2d7] leading-relaxed pt-1">
                      {sihProject.fullDesc}
                    </p>
                  </div>

                  <div className="ios26-text-glass p-5 rounded-apple-xl space-y-1.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                      Problem Statement Addressed:
                    </div>
                    <p className="text-xs sm:text-sm text-[#d2d2d7] leading-relaxed">
                      {sihProject.problemStatement}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sihProject.solutionHighlights.map((hl, i) => (
                      <div key={i} className="liquid-glass-pill p-3.5 rounded-apple-md flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span className="text-xs text-[#d2d2d7] leading-relaxed">{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {sihProject.technologies.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full liquid-glass-pill text-white text-xs font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => onSelectProject(sihProject)}
                      className="apple-btn-primary flex items-center gap-2 cursor-pointer"
                    >
                      <span>Inspect Architecture</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a href="#achievements" className="apple-btn-secondary flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>View SIH Certificate</span>
                    </a>
                    <a
                      href={sihProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full liquid-glass-pill text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Right Column: Monochrome Interactive Manganese Reserve Simulator */}
                <div className="lg:col-span-5 w-full">
                  <div className="liquid-glass-panel rounded-apple-2xl p-5 sm:p-6 space-y-4">
                    <div className="ios26-text-glass rounded-apple-lg p-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-white" />
                        <span className="text-xs font-mono font-semibold text-white">
                          Manganese Reserve Simulator
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white text-black font-semibold">
                        Interactive
                      </span>
                    </div>

                    <div className="ios26-text-glass rounded-apple-lg p-3.5 space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-[#a1a1a6]">
                        Select Geological Borehole Zone:
                      </label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {BOREHOLE_ZONES.map((z, idx) => (
                          <button
                            key={z.id}
                            onClick={() => setSelectedZoneIdx(idx)}
                            className={`py-1.5 px-2 rounded-lg text-[11px] font-mono transition-all cursor-pointer ${
                              selectedZoneIdx === idx
                                ? 'bg-white text-black font-semibold'
                                : 'bg-white/5 text-[#a1a1a6] hover:bg-white/15 hover:text-white border border-white/10'
                            }`}
                          >
                            Zone {idx === 0 ? 'Alpha' : idx === 1 ? 'Beta' : 'Gamma'}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2.5 font-mono text-xs">
                      <div className="ios26-text-glass p-3.5 rounded-apple-lg space-y-1.5">
                        <div className="flex justify-between text-[#a1a1a6] text-[11px]">
                          <span>{activeZone.name}</span>
                          <span className="text-white">{activeZone.sampleId}</span>
                        </div>
                        <div className="flex justify-between text-white font-semibold">
                          <span>Manganese Grade (Mn %)</span>
                          <span className="text-white">{activeZone.mnGrade}% Mn</span>
                        </div>
                        <div className="text-[10px] text-[#a1a1a6]">{activeZone.gradeClass}</div>
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-white h-full rounded-full transition-all duration-500"
                            style={{ width: `${Math.min(100, activeZone.mnGrade * 1.8)}%` }}
                          />
                        </div>
                      </div>

                      <div className="ios26-text-glass p-3.5 rounded-apple-lg space-y-2">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-[#d2d2d7] flex items-center gap-1.5">
                            <Sliders className="w-3 h-3 text-white" />
                            <span>Cut-off Grade Threshold:</span>
                          </span>
                          <span className="text-white font-semibold">{cutoffGrade}.0% Mn</span>
                        </div>
                        <input
                          type="range"
                          min="15"
                          max="35"
                          value={cutoffGrade}
                          onChange={(e) => setCutoffGrade(Number(e.target.value))}
                          className="w-full accent-white cursor-pointer h-1.5 bg-white/20 rounded-lg"
                        />
                        <div className="flex justify-between text-[9px] text-[#86868b]">
                          <span>15% Mn</span>
                          <span>25% Mn</span>
                          <span>35% Mn</span>
                        </div>
                      </div>

                      <div className="ios26-text-glass p-4 rounded-apple-lg space-y-1">
                        <div className="flex justify-between text-[#a1a1a6] text-[11px]">
                          <span>Estimated Recoverable Reserve</span>
                          <span className="text-white">60Hz Live Model</span>
                        </div>
                        <div className="text-xl font-semibold text-white">
                          {recoverableTonnage} Million Metric Tonnes
                        </div>
                        <div className="text-[11px] text-[#86868b]">
                          Confidence: {activeZone.confidence}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="liquid-glass-pill p-3 rounded-apple-md">
                          <div className="text-[#86868b]">Depth Profile</div>
                          <div className="font-semibold text-white">{activeZone.depthRange}</div>
                        </div>
                        <div className="liquid-glass-pill p-3 rounded-apple-md">
                          <div className="text-[#86868b]">Strike Length</div>
                          <div className="font-semibold text-white">{activeZone.strikeLength}</div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectProject(sihProject)}
                      className="w-full py-2.5 rounded-full liquid-glass-pill text-xs font-mono font-medium text-white cursor-pointer"
                    >
                      Open Full Architecture Specification →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <div key={project.id} className="liquid-glass-panel rounded-apple-2xl p-6 sm:p-8 flex flex-col justify-between liquid-shimmer space-y-4">
              <div className="space-y-4">
                <div className="ios26-text-glass rounded-apple-lg p-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white text-black font-semibold">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-[#a1a1a6]">{project.category}</span>
                </div>

                <div className="ios26-text-glass rounded-apple-lg p-5 space-y-2">
                  <h4 className="text-xl font-semibold text-white tracking-tight">
                    {project.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#d2d2d7] leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2.5 py-1 rounded-full liquid-glass-pill text-white font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-semibold text-white hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Inspect Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full liquid-glass-pill text-white"
                  title="View on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppleSectionShift>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="fixed inset-0 bg-black/90 backdrop-blur-2xl transition-opacity" onClick={onClose} />
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto liquid-glass-panel rounded-apple-2xl border border-white/25 p-6 sm:p-9 shadow-2xl z-10 space-y-6 bg-black/95">
        <div className="ios26-text-glass rounded-apple-xl p-5 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-0.5 rounded-full bg-white text-black text-xs font-semibold">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-[#a1a1a6]">{project.category}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {project.problemStatement && (
          <div className="ios26-text-glass p-5 rounded-apple-xl space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Problem Statement:
            </div>
            <p className="text-xs sm:text-sm text-[#d2d2d7] leading-relaxed">
              {project.problemStatement}
            </p>
          </div>
        )}

        <div className="ios26-text-glass p-5 rounded-apple-xl space-y-2">
          <h4 className="apple-eyebrow">Project Overview</h4>
          <p className="text-[#d2d2d7] text-sm sm:text-base leading-relaxed">
            {project.fullDesc}
          </p>
        </div>

        {project.solutionHighlights && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.solutionHighlights.map((hl, index) => (
                <div key={index} className="liquid-glass-pill p-3.5 rounded-apple-md flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span className="text-xs text-[#d2d2d7]">{hl}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 rounded-full liquid-glass-pill text-white text-xs font-mono">
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-primary flex items-center gap-2 cursor-pointer"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Profile</span>
          </a>
          <button onClick={onClose} className="apple-btn-secondary cursor-pointer">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 06: CERTIFICATIONS / ACHIEVEMENTS
───────────────────────────────────────────────────────────── */
function Achievements() {
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [customCertImage, setCustomCertImage] = useState(() => {
    try {
      return localStorage.getItem('madhukar_sih_cert_img') || null;
    } catch {
      return null;
    }
  });
  const fileInputRef = useRef(null);

  const sihCert = achievementsData.find((a) => a.id === 'sih-2026-cert');

  const handleCertUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result;
      if (typeof dataUrl === 'string') {
        setCustomCertImage(dataUrl);
        try {
          localStorage.setItem('madhukar_sih_cert_img', dataUrl);
        } catch {
          // Ignore quota errors
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetCert = () => {
    setCustomCertImage(null);
    try {
      localStorage.removeItem('madhukar_sih_cert_img');
    } catch {
      // Ignore
    }
  };

  const activeCertSrc = customCertImage || '/sih-certificate.svg';

  return (
    <AppleSectionShift id="achievements" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="liquid-glass-panel rounded-apple-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto mb-14 space-y-3 liquid-shimmer">
          <div className="apple-eyebrow">
            Section 06 • Official Credentials
          </div>
          <h2 className="apple-section-headline">
            Certifications & Achievements.
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1a6] tracking-[-0.016em]">
            Featuring the <strong className="text-white">Smart India Hackathon (SIH) 2026 Certificate</strong> alongside verified ICSE & CBSE board distinctions.
          </p>
        </div>

        {sihCert && (
          <div className="mb-14">
            <div className="liquid-glass-panel rounded-apple-2xl p-6 sm:p-10 liquid-shimmer border border-white/20">
              <div className="ios26-text-glass rounded-apple-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 mb-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-white text-black font-semibold text-xs tracking-tight">
                    SMART INDIA HACKATHON (SIH) 2026
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono border border-white/15">
                    Official Certificate
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-white">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ID: {sihCert.certificateId}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Certificate Text in iOS 26 Liquid Glass */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="ios26-text-glass rounded-apple-xl p-5 sm:p-6 space-y-2.5">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight">
                      {sihCert.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-[#a1a1a6]">
                      Issued by: {sihCert.issuer}
                    </p>
                    <p className="text-sm sm:text-base text-[#d2d2d7] leading-relaxed pt-1">
                      {sihCert.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {sihCert.details.map((detail, idx) => (
                      <div key={idx} className="liquid-glass-pill p-3 rounded-apple-md flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#d2d2d7]">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleCertUpload}
                    className="hidden"
                  />

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => setCertModalOpen(true)}
                      className="apple-btn-primary flex items-center gap-2 cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>View Full Certificate</span>
                    </button>

                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="apple-btn-secondary flex items-center gap-2 cursor-pointer"
                      title="Upload or attach a picture/scan of your certificate"
                    >
                      <Upload className="w-4 h-4" />
                      <span>{customCertImage ? 'Replace Attached Picture' : 'Attach Certificate Picture'}</span>
                    </button>

                    {customCertImage && (
                      <button
                        onClick={handleResetCert}
                        className="p-2.5 rounded-full liquid-glass-pill text-white cursor-pointer"
                        title="Reset to default vector certificate"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Column: Certificate Preview Frame */}
                <div className="lg:col-span-6">
                  <div
                    onClick={() => setCertModalOpen(true)}
                    className="group relative cursor-pointer liquid-glass-panel rounded-apple-2xl p-4 hover:border-white/40 transition-all"
                  >
                    <div className="overflow-hidden rounded-apple-xl border border-white/15 bg-black">
                      <img
                        src={activeCertSrc}
                        alt="Smart India Hackathon 2026 Certificate — Madhukar Raj"
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                      />
                    </div>

                    <div className="mt-3 ios26-text-glass rounded-apple-md px-4 py-2.5 flex items-center justify-between text-xs font-mono text-[#d2d2d7]">
                      <span className="flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-white" />
                        <span>SIH 2026 • Madhukar Raj</span>
                      </span>
                      <span className="text-white flex items-center gap-1 group-hover:underline">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Expand</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Academic Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {achievementsData.filter((a) => a.id !== 'sih-2026-cert').map((item) => (
            <div key={item.id} className="liquid-glass-panel rounded-apple-2xl p-6 flex flex-col justify-between liquid-shimmer space-y-4">
              <div className="space-y-4">
                <div className="ios26-text-glass rounded-apple-lg p-3.5 flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white text-black font-semibold">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-[#a1a1a6]">{item.date}</span>
                </div>

                <div className="ios26-text-glass rounded-apple-lg p-4 space-y-1.5">
                  <h4 className="text-base font-semibold text-white">{item.title}</h4>
                  <p className="text-xs font-mono text-[#a1a1a6]">{item.issuer}</p>
                  <p className="text-xs sm:text-sm text-[#d2d2d7] pt-1 leading-relaxed">{item.description}</p>
                </div>
              </div>

              <div className="ios26-text-glass rounded-apple-lg p-3.5 space-y-1.5">
                {item.details.map((d, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#d2d2d7]">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-1.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {certModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <div className="fixed inset-0 bg-black/90 backdrop-blur-2xl" onClick={() => setCertModalOpen(false)} />
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto liquid-glass-panel rounded-apple-2xl border border-white/25 p-6 sm:p-8 shadow-2xl z-10 space-y-5 bg-black/95">
            <div className="ios26-text-glass rounded-apple-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-white" />
                <span className="text-xs sm:text-sm font-mono font-semibold text-white">
                  Smart India Hackathon (SIH) 2026 Certificate • Madhukar Raj
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                  title="Print Certificate"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCertModalOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="rounded-apple-xl overflow-hidden border border-white/20 bg-black shadow-2xl">
              <img
                src={activeCertSrc}
                alt="Smart India Hackathon 2026 Certificate — Madhukar Raj"
                className="w-full h-auto object-contain max-h-[70vh] mx-auto"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="apple-btn-secondary flex items-center gap-2 cursor-pointer text-xs"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Attach Original Certificate Picture</span>
              </button>
              <div className="flex items-center gap-3">
                <a
                  href={activeCertSrc}
                  download="Smart_India_Hackathon_2026_Certificate_Madhukar_Raj"
                  className="apple-btn-primary flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Certificate</span>
                </a>
                <button onClick={() => setCertModalOpen(false)} className="apple-btn-secondary cursor-pointer">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AppleSectionShift>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 07: CONTACT
───────────────────────────────────────────────────────────── */
function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (status.type) setStatus({ type: null, message: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    setIsSubmitting(true);
    const mailtoSubject = encodeURIComponent(formState.subject || `Portfolio Inquiry from ${formState.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: `Opening your email client addressed to ${personalInfo.email}.`
      });
      window.location.href = mailtoUrl;
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 400);
  };

  return (
    <AppleSectionShift id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="liquid-glass-panel rounded-apple-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto mb-14 space-y-3 liquid-shimmer">
          <div className="apple-eyebrow">
            Section 07 • Direct Correspondence
          </div>
          <h2 className="apple-section-headline">
            Contact.
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1a6] tracking-[-0.016em]">
            Connect via official JECRC University email, LinkedIn, Instagram, or GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Email & Social Channels in iOS 26 Liquid Glass */}
          <div className="lg:col-span-5 space-y-5">
            <div className="liquid-glass-panel rounded-apple-2xl p-6 sm:p-7 space-y-4 liquid-shimmer">
              <div className="ios26-text-glass rounded-apple-lg p-4 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="apple-eyebrow">Official Email</span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white text-black font-semibold">
                    Primary
                  </span>
                </div>
                <div className="text-xs text-[#a1a1a6] font-mono pt-1">JECRC University Address:</div>
                <div className="text-sm sm:text-base font-semibold text-white break-all select-all font-mono">
                  {personalInfo.email}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 apple-btn-primary flex items-center justify-center gap-2 cursor-pointer text-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied Email Address</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 rounded-full liquid-glass-pill text-white"
                  title="Open Mail App"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="liquid-glass-panel rounded-apple-2xl p-6 space-y-3 liquid-shimmer">
              <div className="ios26-text-glass rounded-apple-md px-4 py-2.5">
                <div className="apple-eyebrow !text-white">Direct Social Channels</div>
              </div>

              <div className="space-y-2.5">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-apple-md liquid-glass-pill text-white"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Linkedin className="w-4 h-4 text-white shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold">LinkedIn</div>
                      <div className="text-[11px] text-[#a1a1a6] truncate">madhukar-raj-undefined-6392b442b</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#a1a1a6] shrink-0" />
                </a>

                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-apple-md liquid-glass-pill text-white"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Instagram className="w-4 h-4 text-white shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold">Instagram (Socials)</div>
                      <div className="text-[11px] text-[#a1a1a6] truncate">@oneofthegoodfellas</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#a1a1a6] shrink-0" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-apple-md liquid-glass-pill text-white"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Github className="w-4 h-4 text-white shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold">GitHub</div>
                      <div className="text-[11px] text-[#a1a1a6] truncate">github.com/madhukarraj43-arch</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#a1a1a6] shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form in iOS 26 Liquid Glass */}
          <div className="lg:col-span-7">
            <div className="liquid-glass-panel rounded-apple-2xl p-6 sm:p-9 space-y-5 liquid-shimmer">
              <div className="ios26-text-glass rounded-apple-lg p-4 flex items-center justify-between">
                <span className="apple-eyebrow !text-white flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-white" />
                  <span>Send a Direct Message</span>
                </span>
                <span className="text-[11px] font-mono text-[#a1a1a6]">60Hz Instant Dispatch</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="ios26-text-glass rounded-apple-lg p-3.5">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#a1a1a6] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className="w-full bg-transparent text-white placeholder-[#6e6e73] text-sm focus:outline-none"
                    />
                  </div>
                  <div className="ios26-text-glass rounded-apple-lg p-3.5">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#a1a1a6] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      required
                      className="w-full bg-transparent text-white placeholder-[#6e6e73] text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div className="ios26-text-glass rounded-apple-lg p-3.5">
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#a1a1a6] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Hackathon Collaboration / Engineering Inquiry"
                    className="w-full bg-transparent text-white placeholder-[#6e6e73] text-sm focus:outline-none"
                  />
                </div>

                <div className="ios26-text-glass rounded-apple-lg p-3.5">
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#a1a1a6] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Write your message for Madhukar Raj..."
                    required
                    className="w-full bg-transparent text-white placeholder-[#6e6e73] text-sm focus:outline-none resize-none"
                  />
                </div>

                {status.message && (
                  <div
                    className={`p-3.5 rounded-apple-md text-xs flex items-start gap-2.5 ${
                      status.type === 'error'
                        ? 'bg-white/10 border border-white/30 text-white'
                        : 'bg-white text-black font-semibold'
                    }`}
                  >
                    {status.type === 'error' ? (
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    ) : (
                      <Check className="w-4 h-4 shrink-0 mt-0.5" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full apple-btn-primary flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Preparing Dispatch...' : 'Send Message to Madhukar Raj'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AppleSectionShift>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 08: GITHUB AND LINKEDIN LINKS (& SOCIALS)
───────────────────────────────────────────────────────────── */
function SocialLinks() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const primaryProfiles = [
    {
      name: "GitHub",
      badge: "Code & Repositories",
      handle: "github.com/madhukarraj43-arch",
      url: personalInfo.github,
      desc: "Explore Madhukar Raj's GitHub repositories, C & Python implementations, web development projects, and Smart India Hackathon (SIH) 2026 engineering code.",
      icon: Github,
      btnText: "Open GitHub Profile"
    },
    {
      name: "LinkedIn",
      badge: "Professional Network",
      handle: "linkedin.com/in/madhukar-raj-undefined-6392b442b",
      url: personalInfo.linkedin,
      desc: "Connect professionally with Madhukar Raj on LinkedIn for B.Tech CSE collaborations, internships, hackathons, and engineering dialogue.",
      icon: Linkedin,
      btnText: "Connect on LinkedIn"
    },
    {
      name: "Instagram",
      badge: "Socials & Updates",
      handle: "@oneofthegoodfellas",
      url: personalInfo.instagram,
      desc: "Follow Madhukar Raj on Instagram (@oneofthegoodfellas) for personal updates, JECRC University campus life, and student journey.",
      icon: Instagram,
      btnText: "Follow on Instagram"
    },
    {
      name: "Official Email",
      badge: "JECRC University Inbox",
      handle: personalInfo.email,
      url: `mailto:${personalInfo.email}`,
      desc: "Direct academic and professional email correspondence with Madhukar Raj at JECRC University, Jaipur.",
      icon: Mail,
      btnText: "Send Direct Email"
    }
  ];

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <AppleSectionShift id="social-links" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="liquid-glass-panel rounded-apple-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto mb-14 space-y-3 liquid-shimmer">
          <div className="apple-eyebrow">
            Section 08 • Digital Network
          </div>
          <h2 className="apple-section-headline">
            GitHub & LinkedIn Links.
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1a6] tracking-[-0.016em]">
            Direct verified gateways to Madhukar Raj's GitHub, LinkedIn, Instagram, and academic email.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {primaryProfiles.map((item, index) => {
            const Icon = item.icon;
            const isCopied = copiedIndex === index;

            return (
              <div key={item.name} className="liquid-glass-panel rounded-apple-2xl p-6 sm:p-8 flex flex-col justify-between liquid-shimmer space-y-4">
                <div className="space-y-4">
                  <div className="ios26-text-glass rounded-apple-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white tracking-tight">{item.name}</h3>
                        <div className="text-xs text-[#a1a1a6] font-mono">{item.badge}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/15">
                      Verified
                    </span>
                  </div>

                  <div className="ios26-text-glass rounded-apple-xl p-4">
                    <p className="text-xs sm:text-sm text-[#d2d2d7] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="liquid-glass-pill p-3.5 rounded-apple-md flex items-center justify-between text-xs font-mono">
                    <span className="text-white truncate mr-2" title={item.url}>
                      {item.handle}
                    </span>
                    <button
                      onClick={() => handleCopy(item.url.startsWith('mailto:') ? item.handle : item.url, index)}
                      className="text-[#a1a1a6] hover:text-white transition-colors cursor-pointer shrink-0 flex items-center gap-1"
                      title="Copy Link"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white" />
                          <span className="text-[10px] text-white">Copied</span>
                        </>
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={item.url}
                    target={item.url.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="w-full apple-btn-primary flex items-center justify-center gap-2 cursor-pointer text-xs"
                  >
                    <span>{item.btnText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppleSectionShift>
  );
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: FLOATING iOS 26 LIQUID GLASS DOCK
───────────────────────────────────────────────────────────── */
function FloatingLiquidDock({ activeSection }) {
  const dockItems = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'achievements', label: 'Certificate', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'social-links', label: 'GitHub/In', icon: Github },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center gap-1 px-3 py-2 rounded-full liquid-glass-panel border border-white/25 bg-black/80 shadow-[0_18px_45px_rgba(0,0,0,0.9)]">
      {dockItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            title={`Surf to ${item.label}`}
            className={`px-3 py-1.5 rounded-full text-[11px] font-medium flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
              isActive
                ? 'bg-white text-black font-semibold scale-105 shadow-[0_2px_12px_rgba(255,255,255,0.3)]'
                : 'text-[#a1a1a6] hover:text-white hover:bg-white/10'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: APPLE STORE MINIMALIST FOOTER
───────────────────────────────────────────────────────────── */
function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-white/10 bg-black text-[#86868b] relative overflow-hidden pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="liquid-glass-panel rounded-apple-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center text-xs">
                MR
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{personalInfo.name}</div>
                <div className="text-xs text-[#a1a1a6] font-mono">
                  B.Tech CSE (Core) • {personalInfo.collegeFull}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-[#a1a1a6] hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full liquid-glass-pill text-white"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full liquid-glass-pill text-white"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full liquid-glass-pill text-white"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-full liquid-glass-pill text-white"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-full bg-white text-black hover:bg-[#e8e8ed] transition-all cursor-pointer ml-1"
                title="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#86868b]">
            <div>Copyright © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</div>
            <div>Apple Monochromatic Design • iOS 26 Liquid Glass • 60Hz Fluid Motion</div>
            <div className="text-[#d2d2d7]">Bhagalpur, Bihar ➔ Jaipur, Rajasthan</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT: APP (ROOT CONTAINER)
───────────────────────────────────────────────────────────── */
export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact', 'social-links'];
      const scrollPosition = window.scrollY + 260;
      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] flex flex-col font-sans selection:bg-white selection:text-black">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        {/* 1. Home */}
        <Hero />
        {/* 2. About me */}
        <About />
        {/* 3. Education */}
        <Education />
        {/* 4. Skills */}
        <Skills />
        {/* 5. Projects */}
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        {/* 6. Certifications / Achievements */}
        <Achievements />
        {/* 7. Contact */}
        <Contact />
        {/* 8. GitHub and LinkedIn links */}
        <SocialLinks />
      </main>
      <FloatingLiquidDock activeSection={activeSection} />
      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
