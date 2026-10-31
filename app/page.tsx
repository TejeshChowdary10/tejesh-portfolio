"use client";

import { useEffect, useRef, useState } from "react";

/* ─── tiny hook: reveal on scroll ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── data ─── */
const EXPERIENCE = [
  {
    role: "AWS Cloud Intern",
    company: "F13 Technologies",
    period: "July 2026 – October 2026",
    type: "Internship (Completed)",
    location: "Remote",
    current: false,
    summary: "Built serverless, production-grade cloud architectures and applied AI in real-world environments.",
    highlights: [
      {
        label: "Employee Document Vault",
        desc: "Serverless document management with RBAC, versioning & audit logging using S3, Lambda, DynamoDB, Cognito, API Gateway, and KMS.",
      },
      {
        label: "Smart Leave Management",
        desc: "End-to-end serverless leave system with multi-step workflows, notifications, and scheduling via Lambda, Step Functions, SNS, SES, and EventBridge.",
      },
      {
        label: "AWS Partner Training",
        desc: "Completed 6 official AWS Partner programs: Cloud Migration, Cloud Economics, Generative AI, Agentic AI, and Data Science.",
      },
    ],
    tech: ["AWS Lambda", "S3", "DynamoDB", "Step Functions", "API Gateway", "Cognito", "SNS", "SES", "EventBridge", "KMS"],
  },
  {
    role: "Data Analyst Intern",
    company: "SkilFied Mentor",
    period: "June 2026 – July 2026",
    type: "Internship",
    location: "Remote",
    current: false,
    summary: "Applied data analysis and automation to improve business reporting pipelines.",
    highlights: [
      {
        label: "Automated Reporting",
        desc: "Developed SQL queries and Python workflows to automate data analysis, reducing manual reporting time significantly.",
      },
      {
        label: "Data Transformation",
        desc: "Cleaned and transformed multi-source datasets to improve accuracy and reliability of business reports.",
      },
    ],
    tech: ["Python", "SQL", "MySQL", "Pandas", "Excel"],
  },
];

const PROJECTS = [
  {
    title: "ML Techniques on Big Data for MQTT IoT Security",
    tags: ["Python", "PySpark", "Big Data", "ML"],
    period: "Sep 2025 – Mar 2026",
    github: "https://github.com/TejeshChowdary10/mqtt-iot-intrusion-detection",
    bullets: [
      "Built a scalable ML pipeline for analyzing large-scale MQTT IoT network traffic on a big data framework.",
      "Performed distributed data preprocessing, feature engineering, and model optimization for efficient intrusion detection.",
    ],
  },
  {
    title: "Brain Tumor Segmentation via Federated Learning",
    tags: ["Python", "Federated Learning", "Attention U-Net"],
    period: "Jan 2025 – Jun 2025",
    github: "https://github.com/TejeshChowdary10/brain-tumor-federated-learning",
    bullets: [
      "Implemented Attention U-Net with FedAvg and FedAdagrad for privacy-preserving medical image segmentation.",
      "Achieved 0.882 Dice score under high data skew, validating model robustness in non-IID settings.",
    ],
  },
  {
    title: "Union Budget 2024 Sentiment Analysis",
    tags: ["Python", "NLP", "Sentiment Analysis", "STM"],
    period: "Jul 2024 – Jan 2025",
    github: "https://github.com/TejeshChowdary10/sentiment-analysis-union-budget-2024",
    bullets: [
      "Collected and analyzed 1,700+ social media comments using NLP, STM, and sentiment classification.",
      "Built ensemble ML models (SVM, XGBoost, RF) to classify public opinion with >74% accuracy.",
    ],
  },
  {
    title: "Decoding Algorithmic Diversity using CodeT5+ & Clustering",
    tags: ["Python", "CodeT5+", "Clustering", "NLP"],
    period: "Nov 2024 – Mar 2025",
    github: "https://github.com/TejeshChowdary10/codet5-algorithmic-diversity",
    bullets: [
      "Fine-tuned CodeT5+ transformer to generate embeddings for code across multiple programming languages.",
      "Applied K-Means and hierarchical clustering to identify algorithmic patterns; published at CONIT 2025.",
    ],
  },
  {
    title: "Hybrid Encryption & Baudot Code Security System",
    tags: ["Python", "Cryptography", "Trie", "Chaotic Maps"],
    period: "Jun 2024 – Oct 2024",
    github: "https://github.com/TejeshChowdary10/hybrid-encryption-baudot-chaotic",
    bullets: [
      "Designed a hybrid encryption scheme combining chaotic maps with Baudot codes for secure communication.",
      "Integrated Trie-based spell checker for paragraph validation; published at ASIANCON 2024.",
    ],
  },
  {
    title: "Drone Delivery Path Planning & Collision Avoidance",
    tags: ["Python", "Graph Algorithms", "Optimization", "Simulation"],
    period: "Aug 2024 – Jan 2025",
    github: "https://github.com/TejeshChowdary10/drone-delivery-path-planning",
    bullets: [
      "Developed an algorithmic framework for multi-drone route optimization with real-time collision detection.",
      "Applied A*, Dijkstra, and dynamic obstacle avoidance algorithms; published at ICICACS 2025.",
    ],
  },
];

const SKILLS = {
  Languages: ["Python", "SQL", "Java", "C"],
  "Data Science & ML": ["Machine Learning", "Deep Learning", "NLP", "Federated Learning", "Sentiment Analysis", "Feature Engineering"],
  "Technologies": ["MySQL", "PySpark", "Jupyter Notebook", "Tableau", "pgAdmin 4", "Eclipse"],
  "Cloud & Tools": ["AWS Lambda", "DynamoDB", "S3", "API Gateway", "Step Functions", "Cognito"],
  "Frameworks & Libraries": ["PyTorch", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Matplotlib"],
};

const CERTIFICATIONS = [
  {
    name: "AWS Partner: Generative AI Technical",
    issuer: "Amazon Web Services",
    date: "Aug 2026",
    url: "https://www.credly.com/badges/eba8f956-36c8-4407-9e0b-ba3f77974953/linked_in_profile",
  },
  {
    name: "AWS Partner: Agentic AI Essentials",
    issuer: "Amazon Web Services",
    date: "Aug 2026",
    url: "https://www.credly.com/badges/f965a8ad-7647-4fa3-981d-75f4c18d00e8/linked_in_profile",
  },
  {
    name: "AWS Partner: Cloud Economics Essentials",
    issuer: "Amazon Web Services",
    date: "Aug 2026",
    url: "https://www.credly.com/badges/c9d0d2c9-3a2f-4a31-b698-bde9bfc587fe/linked_in_profile",
  },
  {
    name: "AWS Partner: Technical Accredited",
    issuer: "Amazon Web Services",
    date: "Jul 2026",
    url: "https://www.credly.com/badges/c996832e-62ad-4ac9-b11c-aa22b1d9a9d6/public_url",
  },
  {
    name: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "Mar 2026",
    url: "https://www.credly.com/badges/d1846c61-2c4b-45ba-9ed2-108c50dd0969/public_url",
  },
  {
    name: "AWS Academy Graduate: Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "Aug 2025",
    url: "https://www.credly.com/badges/8968c45c-4da1-4363-9523-1a7eb7bdbd80/print",
  },
  {
    name: "Machine Learning with Python",
    issuer: "IBM · Coursera",
    date: "Dec 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/D88GAN1UZITG",
  },
  {
    name: "The Complete SQL Bootcamp",
    issuer: "Udemy",
    date: "Oct 2024",
    url: "https://www.udemy.com/certificate/UC-57f3086b-8148-4db4-9b8d-041710dcc329/",
  },
];

const PUBLICATIONS = [
  {
    title: "An Efficient Spell Checker System for Paragraphs and Baudot Codes Using Tries",
    venue: "ASIANCON 2024",
    fullVenue: "4th Asian Conference on Innovation in Technology",
    doi: "10.1109/ASIANCON62057.2024.10838175",
    url: "https://doi.org/10.1109/ASIANCON62057.2024.10838175",
    year: "2024",
    citations: 1,
    area: "Algorithms & Data Structures",
  },
  {
    title: "Optimizing Drone Delivery Management: An Algorithmic Framework for Collision Detection and Avoidance with Resource Management",
    venue: "ICICACS 2025",
    fullVenue: "3rd International Conference on Integrated Circuits and Communication Systems",
    doi: "10.1109/ICICACS65178.2025.10968590",
    url: "https://doi.org/10.1109/ICICACS65178.2025.10968590",
    year: "2025",
    citations: 1,
    area: "Optimization & Algorithms",
  },
  {
    title: "Decoding Algorithmic Diversity Across Programming Languages using CodeT5+ with Clustering Analysis",
    venue: "CONIT 2025",
    fullVenue: "5th International Conference on Intelligent Technologies",
    doi: "10.1109/CONIT65521.2025.11167866",
    url: "https://doi.org/10.1109/CONIT65521.2025.11167866",
    year: "2025",
    citations: 0,
    area: "NLP & Code AI",
  },
  {
    title: "Adaptive Biometric Smart Door Lock System with Time-Bound Access Using GSM Module",
    venue: "ICIRCA 2025",
    fullVenue: "6th International Conference on Inventive Research in Computing Applications",
    doi: "10.1109/ICIRCA65828.2025.11064267",
    url: "https://doi.org/10.1109/ICIRCA65828.2025.11064267",
    year: "2025",
    citations: 2,
    area: "IoT & Security",
  },
  {
    title: "Integrating Baudot Encoding and Chaotic Maps with Symmetric Cryptography",
    venue: "ICECA 2025",
    fullVenue: "9th International Conference on Electronics, Communication and Aerospace Technology",
    doi: "",
    url: "https://ieeexplore.ieee.org/author/654951346485441",
    year: "2025",
    citations: 0,
    area: "Cryptography & Security",
  },
  {
    title: "Comparative Study of Encryption Algorithms in Client-Server Communication Using Baudot Encoding",
    venue: "ICE2CPT 2025",
    fullVenue: "International Conference on Electrical, Electronics and Computer Science with Advanced Power Technologies",
    doi: "",
    url: "https://ieeexplore.ieee.org/author/654951346485441",
    year: "2025",
    citations: 0,
    area: "Network Security",
  },
  {
    title: "Evaluating Machine Learning Techniques on Big Data Frameworks for MQTT IoT Security",
    venue: "I3CTCON 2026",
    fullVenue: "IEEE International Conference for Convergence in Computing Technology",
    doi: "",
    url: "https://ieeexplore.ieee.org/author/654951346485441",
    year: "2026",
    citations: 0,
    area: "ML & Big Data",
  },
];

/* ─── section label ─── */
function Label({ children }: { children: string }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.35em] text-white/30 font-medium">
      {children}
    </p>
  );
}

/* ─── animated section wrapper ─── */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Experience", "Projects", "Skills", "Certifications", "Publications", "Contact"];

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">

      {/* ═══════════════ NAVBAR ═══════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-tight hover:opacity-70 transition select-none">
            TCG<span className="text-white/30">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm text-white/55">
            {navLinks.map((l) => (
              <button key={l} onClick={() => scrollTo(l)} className="hover:text-white transition cursor-pointer bg-transparent border-none">
                {l}
              </button>
            ))}
          </div>

          <a
            href="mailto:tejeshgeda@gmail.com"
            className="hidden sm:block text-sm border border-white/15 rounded-full px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-300"
          >
            Let&apos;s Talk
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white/60 hover:text-white transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {mobileOpen ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="3" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-64 border-b border-white/10" : "max-h-0"}`}>
          <div className="px-6 pb-5 flex flex-col gap-4 bg-[#050505]/95 backdrop-blur-xl">
            {navLinks.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="text-left text-sm text-white/60 hover:text-white transition py-1 bg-transparent border-none cursor-pointer"
              >
                {l}
              </button>
            ))}
            <a href="mailto:tejeshgeda@gmail.com" className="text-sm text-white/60 hover:text-white transition py-1">
              Contact
            </a>
          </div>
        </div>
      </nav>


      {/* ═══════════════ HERO ═══════════════ */}
      <section id="home" className="relative min-h-screen flex items-center px-6 overflow-hidden">

        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Ambient glows */}
        <div className="absolute top-[20%] left-[60%] w-[700px] h-[700px] rounded-full bg-indigo-500/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-violet-500/[0.03] blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-20">

          {/* Status badge */}
          <div className="flex items-center gap-3 mb-10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-sm text-white/40 tracking-wider">
              Open to opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="font-bold tracking-[-0.055em] leading-[0.88]">
            <span className="block text-[clamp(3.8rem,7vw,7.5rem)]">Tejesh</span>
            <span className="block text-[clamp(3rem,5.8vw,6.5rem)] text-white/30">Chowdary Geda</span>
          </h1>

          {/* Tagline */}
          <div className="mt-10 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-white/80 leading-relaxed">
              CS Graduate&nbsp;
              <span className="text-white/20">·</span>&nbsp;
              <span className="text-white">ML &amp; Data Enthusiast</span>&nbsp;
              <span className="text-white/20">·</span>&nbsp;
              AWS Cloud
            </h2>
            <p className="mt-5 text-base md:text-[17px] leading-7 text-white/40">
              Building scalable ML systems and data pipelines. Exploring the intersection of
              Machine Learning, NLP, Cloud, and AI-driven solutions.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("Projects")}
              className="group flex items-center gap-3 rounded-full bg-white text-black px-7 py-3.5 text-sm font-semibold hover:bg-white/90 transition-all duration-300"
            >
              View My Work
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>

            <a
              href="https://github.com/TejeshChowdary10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-full border border-white/15 px-7 py-3.5 text-sm text-white/70 hover:bg-white/8 hover:border-white/30 transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/tejesh-chowdary-geda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-full border border-white/15 px-7 py-3.5 text-sm text-white/70 hover:bg-white/8 hover:border-white/30 transition-all duration-300"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn ↗
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/8 pt-10">
            {[
              { label: "Focus", value: "ML & Deep Learning" },
              { label: "Projects", value: "6 Research Projects" },
              { label: "Certifications", value: "8 Credentials" },
              { label: "Publications", value: "7 IEEE Papers" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">{s.label}</p>
                <p className="mt-2 text-sm text-white/70 font-medium">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-white/20">
          <span className="text-[9px] uppercase tracking-[0.35em]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>


      {/* ═══════════════ ABOUT ═══════════════ */}
      <section id="about" className="relative border-t border-white/8 px-6 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-28">
              <div>
                <Label>About Me</Label>
                <h2 className="mt-6 text-5xl md:text-7xl font-bold tracking-[-0.055em] leading-[0.9]">
                  Curious by<br />nature.
                  <br />
                  <span className="text-white/22">Always building.</span>
                </h2>
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-xl md:text-[22px] leading-8 text-white/80 font-medium">
                  I&apos;m a Computer Science graduate with a strong passion for Machine Learning, Deep Learning, and AI.
                </p>
                <p className="mt-6 text-base leading-7 text-white/45">
                  My academic journey spans computer vision, NLP, federated learning, and large-scale data processing — translating research concepts into working implementations.
                </p>
                <p className="mt-5 text-base leading-7 text-white/45">
                  Through my AWS Cloud internship at F13 Technologies, I gained hands-on experience building serverless, production-grade cloud architectures and applying AI in real-world environments.
                </p>
                <p className="mt-5 text-base leading-7 text-white/45">
                  I&apos;m actively seeking roles where I can contribute at the intersection of{" "}
                  <span className="text-white font-medium">Machine Learning, Data, and Cloud Engineering</span>.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Rajahmundry, AP", "B.Tech CSE · CGPA 8.63", "Amrita Vishwa Vidyapeetham"].map((tag) => (
                    <span key={tag} className="text-xs border border-white/12 rounded-full px-4 py-2 text-white/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Interest cards */}
          <Reveal delay={150}>
            <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/8">
              {[
                { n: "01", title: "Machine Learning", desc: "Supervised learning, classification, feature engineering, model evaluation, and practical ML applications." },
                { n: "02", title: "Deep Learning", desc: "Computer vision, neural architectures, image segmentation, and federated learning at scale." },
                { n: "03", title: "Data & Analytics", desc: "Extracting patterns from large datasets with Python, SQL, PySpark, and visualization tools." },
                { n: "04", title: "AI & Cloud", desc: "Deploying intelligent, serverless systems using AWS services and cloud-native architectures." },
              ].map((c) => (
                <div
                  key={c.n}
                  className="group relative min-h-[260px] p-7 border-r border-b border-white/8 hover:bg-white/[0.03] transition-all duration-500 cursor-default"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs text-white/25 font-mono">{c.n}</span>
                    <span className="text-white/20 group-hover:text-white/60 group-hover:rotate-45 transition-all duration-500 text-lg">↗</span>
                  </div>
                  <div className="mt-16">
                    <h4 className="text-lg font-semibold tracking-tight">{c.title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-white/40">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>


      {/* ═══════════════ EXPERIENCE ═══════════════ */}
      <section id="experience" className="relative border-t border-white/8 px-6 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
              <div>
                <Label>Work Experience</Label>
                <h2 className="mt-5 text-4xl md:text-6xl font-bold tracking-[-0.055em] leading-[0.92]">
                  Where I&apos;ve<br />
                  <span className="text-white/28">worked.</span>
                </h2>
              </div>
              <p className="text-sm text-white/35 max-w-xs leading-relaxed md:text-right">
                Building real-world systems at the intersection of cloud, data, and AI.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[19px] md:left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/8 to-transparent hidden md:block" />

            <div className="space-y-10">
              {EXPERIENCE.map((exp, i) => (
                <Reveal key={i} delay={i * 120}>
                  <div className="md:pl-16 relative">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-7 hidden md:flex items-center justify-center">
                      <div className={`w-[46px] h-[46px] rounded-full border flex items-center justify-center transition-all duration-500 ${exp.current ? "border-emerald-400/40 bg-emerald-400/[0.06]" : "border-white/12 bg-white/[0.03]"}`}>
                        {exp.current ? (
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                          </span>
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-white/30" />
                        )}
                      </div>
                    </div>

                    {/* Card */}
                    <div className="group relative border border-white/8 rounded-2xl overflow-hidden hover:border-white/16 transition-all duration-500">
                      {/* Subtle top gradient accent */}
                      <div className={`absolute top-0 left-0 right-0 h-px ${exp.current ? "bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" : "bg-gradient-to-r from-transparent via-white/10 to-transparent"}`} />

                      {/* Header */}
                      <div className="p-7 md:p-9 pb-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 flex-wrap mb-1">
                              {exp.current && (
                                <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-2.5 py-0.5">
                                  Current
                                </span>
                              )}
                              <span className="text-[10px] uppercase tracking-widest text-white/25 font-medium">{exp.type}</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">{exp.role}</h3>
                            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                              <span className="text-white/55 font-semibold text-sm">{exp.company}</span>
                              <span className="text-white/20">·</span>
                              <span className="text-white/35 text-sm">{exp.location}</span>
                            </div>
                          </div>
                          <span className="inline-flex items-center self-start gap-2 text-xs text-white/35 border border-white/10 rounded-full px-4 py-2 font-mono whitespace-nowrap bg-white/[0.02] flex-shrink-0">
                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${exp.current ? "bg-emerald-400" : "bg-white/30"}`} />
                            {exp.period}
                          </span>
                        </div>

                        <p className="mt-5 text-sm md:text-[15px] leading-6 text-white/45 max-w-2xl">{exp.summary}</p>
                      </div>

                      {/* Highlights */}
                      <div className="px-7 md:px-9 mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {exp.highlights.map((h: {label: string; desc: string}, j: number) => (
                          <div
                            key={j}
                            className="group/card rounded-xl border border-white/6 bg-white/[0.02] p-4 hover:border-white/14 hover:bg-white/[0.04] transition-all duration-300"
                          >
                            <div className="flex items-start gap-2.5">
                              <div className="mt-0.5 w-5 h-5 rounded-md bg-white/8 flex items-center justify-center flex-shrink-0">
                                <span className="text-white/50 text-[10px]">▸</span>
                              </div>
                              <div>
                                <p className="text-xs font-semibold text-white/75 mb-1">{h.label}</p>
                                <p className="text-[12px] leading-[1.65] text-white/38">{h.desc}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack footer */}
                      <div className="px-7 md:px-9 pt-5 pb-7 md:pb-9 mt-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="text-[10px] uppercase tracking-[0.25em] text-white/20 font-medium flex-shrink-0">Stack</span>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.tech.map((t: string) => (
                              <span
                                key={t}
                                className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/8 text-white/45 font-medium"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════ PROJECTS ═══════════════ */}
      <section id="projects" className="relative border-t border-white/8 px-6 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <Label>Selected Projects</Label>
              <h2 className="mt-5 text-4xl md:text-6xl font-bold tracking-[-0.055em] leading-[0.92]">
                Research &<br />
                <span className="text-white/28">projects.</span>
              </h2>
            </div>
          </Reveal>

          <div className="space-y-6">
            {PROJECTS.map((p, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="group relative border border-white/8 rounded-2xl p-8 md:p-10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* accent glow */}
                  <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-indigo-500/[0.04] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-snug">
                          {p.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 self-start flex-shrink-0">
                        <span className="text-xs text-white/30 font-mono whitespace-nowrap border border-white/8 rounded-full px-3.5 py-1.5">
                          {p.period}
                        </span>
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 text-xs text-white/40 border border-white/10 rounded-full px-3.5 py-1.5 hover:border-white/30 hover:text-white/80 transition-all duration-300"
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                            Code ↗
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((t) => (
                        <span key={t} className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/55 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-3">
                      {p.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-sm md:text-[15px] leading-6 text-white/48">
                          <span className="mt-2 w-1 h-1 rounded-full bg-white/25 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════ SKILLS ═══════════════ */}
      <section id="skills" className="relative border-t border-white/8 px-6 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <Label>Technical Skills</Label>
              <h2 className="mt-5 text-4xl md:text-6xl font-bold tracking-[-0.055em] leading-[0.92]">
                Tools &<br />
                <span className="text-white/28">technologies.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(SKILLS).map(([category, items], i) => (
              <Reveal key={category} delay={i * 80}>
                <div className="border border-white/8 rounded-2xl p-7 hover:border-white/16 hover:bg-white/[0.02] transition-all duration-500">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-5 font-medium">{category}</p>
                  <div className="flex flex-wrap gap-2.5">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white/65 hover:bg-white/[0.08] hover:text-white/90 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Soft skills */}
          <Reveal delay={200}>
            <div className="mt-8 border border-white/8 rounded-2xl p-7 hover:border-white/16 hover:bg-white/[0.02] transition-all duration-500">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-5 font-medium">Soft Skills</p>
              <div className="flex flex-wrap gap-2.5">
                {["Problem Solving", "Teamwork", "Adaptability", "Time Management", "Communication"].map((s) => (
                  <span key={s} className="text-sm px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white/65 hover:bg-white/[0.08] hover:text-white/90 transition-all duration-300 cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      {/* ═══════════════ CERTIFICATIONS ═══════════════ */}
      <section id="certifications" className="relative border-t border-white/8 px-6 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <Label>Certifications</Label>
              <h2 className="mt-5 text-4xl md:text-6xl font-bold tracking-[-0.055em] leading-[0.92]">
                Credentials &<br />
                <span className="text-white/28">learning.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((c, i) => (
              <Reveal key={i} delay={i * 80}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 border border-white/8 rounded-2xl p-6 hover:border-white/20 hover:bg-white/[0.025] transition-all duration-400"
                >
                  <div className="mt-0.5 w-9 h-9 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-white/50">
                      <path d="M12 15l-3 6 3-2 3 2-3-6z" /><circle cx="12" cy="8" r="5" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white/85 leading-snug group-hover:text-white transition-colors">
                      {c.name}
                    </p>
                    <p className="mt-1 text-xs text-white/40">{c.issuer}</p>
                  </div>
                  <span className="text-[11px] text-white/30 font-mono whitespace-nowrap self-start mt-0.5 border border-white/8 rounded-full px-3 py-1">
                    {c.date}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════ PUBLICATIONS ═══════════════ */}
      <section id="publications" className="relative border-t border-white/8 px-6 py-24 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <Label>Publications</Label>
                <h2 className="mt-5 text-3xl md:text-5xl font-bold tracking-[-0.05em] leading-[0.92]">
                  Research<br />
                  <span className="text-white/28">contributions.</span>
                </h2>
              </div>
              <a
                href="https://ieeexplore.ieee.org/author/654951346485441"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 self-start md:self-end text-xs text-indigo-400 border border-indigo-400/25 bg-indigo-500/[0.04] rounded-full px-4 py-2 hover:bg-indigo-500/[0.1] hover:border-indigo-400/50 transition-all duration-300 font-mono"
              >
                IEEE Author Profile ↗
              </a>
            </div>
          </Reveal>

          <div className="space-y-3">
            {PUBLICATIONS.map((pub, i) => (
              <Reveal key={i} delay={i * 70}>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-5 border border-white/8 rounded-2xl p-6 md:p-7 hover:border-white/18 hover:bg-white/[0.025] transition-all duration-400 block"
                >
                  {/* Number */}
                  <span className="text-2xl font-bold text-white/[0.08] font-mono select-none flex-shrink-0 mt-1 w-8 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    {/* Top row: title + year + link */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
                      <p className="text-sm md:text-[15px] font-semibold text-white/80 leading-[1.55] flex-1 group-hover:text-white/95 transition-colors duration-300">
                        {pub.title}
                      </p>
                      <div className="flex items-center gap-2 flex-shrink-0 self-start mt-0.5">
                        <span className="text-[10px] text-white/30 border border-white/8 rounded-full px-2.5 py-0.5 font-mono">{pub.year}</span>
                        <span className="text-[10px] text-indigo-400/70 border border-indigo-400/20 rounded-full px-2.5 py-0.5 font-mono group-hover:text-indigo-400 group-hover:border-indigo-400/40 transition-all duration-300">
                          IEEE ↗
                        </span>
                      </div>
                    </div>

                    {/* Venue + area row */}
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <span className="text-[11px] text-white/35 font-mono font-medium">{pub.venue}</span>
                      <span className="text-white/15 text-[10px]">·</span>
                      <span className="text-[10px] text-white/30 font-mono leading-snug">{pub.fullVenue}</span>
                    </div>

                    {/* Bottom row: area badge + citations + doi */}
                    <div className="mt-3.5 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-white/50">
                        {pub.area}
                      </span>
                      {pub.citations > 0 && (
                        <span className="text-[10px] text-amber-400/80 border border-amber-400/25 bg-amber-400/[0.04] rounded-full px-2.5 py-0.5 font-mono">
                          Cited {pub.citations}×
                        </span>
                      )}
                      {pub.doi && (
                        <span className="text-[10px] text-white/25 font-mono">
                          DOI: {pub.doi}
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════ CONTACT ═══════════════ */}
      <section id="contact" className="relative border-t border-white/8 px-6 py-28 md:py-40">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-violet-500/[0.03] blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <Label>Get In Touch</Label>
            <h2 className="mt-6 text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-[-0.055em] leading-[0.88]">
              Let&apos;s work<br />
              <span className="text-white/25">together.</span>
            </h2>
            <p className="mt-8 text-base md:text-lg text-white/40 max-w-xl mx-auto leading-7">
              I&apos;m actively looking for opportunities in ML, Data, or Cloud roles. Feel free to reach out for a conversation.
            </p>

            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:tejeshgeda@gmail.com"
                className="group inline-flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 text-sm font-semibold hover:bg-white/90 transition-all duration-300"
              >
                tejeshgeda@gmail.com
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>

              <a
                href="https://www.linkedin.com/in/tejesh-chowdary-geda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-8 py-4 text-sm text-white/65 hover:bg-white/8 hover:border-white/30 transition-all duration-300"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/TejeshChowdary10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-8 py-4 text-sm text-white/65 hover:bg-white/8 hover:border-white/30 transition-all duration-300"
              >
                GitHub ↗
              </a>
            </div>

            {/* Contact info row */}
            <div className="mt-14 flex flex-wrap justify-center gap-8 text-xs text-white/25 font-mono">
              <span>📍 Rajahmundry, Andhra Pradesh</span>
              <span>📞 +91 8639683237</span>
              <span>🎓 B.Tech CSE · 2022–2026</span>
            </div>
          </Reveal>
        </div>
      </section>


      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="border-t border-white/8 px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <span className="font-semibold text-white/35">TCG<span className="text-white/15">.</span></span>
          <span>Tejesh Chowdary Geda · {new Date().getFullYear()}</span>
          <span>Rajahmundry, Andhra Pradesh</span>
        </div>
      </footer>


      {/* ═══════════════ GLOBAL STYLES ═══════════════ */}
      <style>{`
        html { scroll-behavior: smooth; }
        ::selection { background: white; color: black; }
        * { -webkit-font-smoothing: antialiased; }
      `}</style>
    </main>
  );
}