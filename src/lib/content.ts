export const site = {
  name: "Shiva Garuda",
  identity: "ECE @ Berkeley — hardware, ML, and full-stack systems",
  intro:
    "First-year Electrical and Computer Engineering student at UC Berkeley. Previously technical lead of an 84-member FRC team, software engineering intern at SciAnno Mosaics, and research assistant in the Kane Lab at CU Boulder.",
  education: {
    school: "University of California, Berkeley",
    degree: "B.S. Electrical and Computer Engineering",
    dates: "Aug. 2026 – Present",
    expected: "Expected May 2030",
    coursework: [
      "Linear Algebra & Differential Equations",
      "Structure and Interpretation of Computer Programs",
      "Physics Mechanics & Wave Motion",
      "Introduction to Signals and Systems",
      "Data Structures & Algorithms",
    ],
  },
  email: "shivagaruda23@berkeley.edu",
  links: {
    github: "https://github.com/Shivag23",
    linkedin: "https://www.linkedin.com/in/shiva-garuda",
    resume: "/resume.pdf",
  },
} as const;

export const nav = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const projects = [
  {
    id: "P-01",
    title: "CAD Collector Design",
    domain: "CAD / Mechanical",
    featured: true,
    description:
      "Helped design the game-piece collector for my robotics team — a single-axis pivot with a single roller, modeled in Onshape.",
    tags: ["Onshape"],
    images: [
      {
        src: "/images/cad-collector/assembly.png",
        alt: "Onshape assembly of the collector frame, single-axis pivot, and roller",
      },
      {
        src: "/images/cad-collector/sketch.png",
        alt: "Side-profile CAD sketch of the collector pivot and roller",
      },
      {
        src: "/images/cad-collector/pivot.png",
        alt: "Exploded Onshape view of the collector single-axis pivot",
      },
    ],
  },
  {
    id: "P-02",
    title: "Wearable Posture Monitor",
    domain: "Embedded",
    description:
      "Wearable posture-correction device with Arduino Nano, buzzer, and battery. Improved slouch-detection accuracy by 40% and delivered haptic feedback in under 0.5 seconds. Filed a provisional patent and user-tested with 20+ students.",
    tags: ["Arduino Nano", "Embedded C", "MPU6050", "Circuit Design"],
    images: [
      {
        src: "/images/posture-monitor/prototype.png",
        alt: "Arduino Nano prototype of the wearable posture monitor wired to sensor modules",
      },
    ],
  },
  {
    id: "P-03",
    title: "Fantasy Football Analyzer",
    domain: "Full-stack / ML",
    description:
      "Full-stack web app that scrapes historical NFL statistics and serves weekly player-performance predictions from a trained neural network. Front end deployed on Vercel with a Neon Postgres backend; multi-agent workflows used to accelerate development.",
    tags: ["Python", "Node.js", "Neural Networks", "Vercel", "Neon"],
    href: "https://fantasy-analyzer.vercel.app/",
    images: [
      {
        src: "/images/fantasy-analyzer/hero.jpg",
        alt: "Fantasy Analyzer landing page with player search and NFL research tools",
        fit: "cover",
      },
    ],
  },
  {
    id: "P-04",
    title: "VAE for Neuroimaging Data Generation",
    domain: "ML / Research",
    description:
      "Trained a variational autoencoder on 3,000+ time-series samples over a 6-week research project at the CU Boulder Imagine AI Lab, generating synthetic neuroimaging data with ~3% reconstruction error. Presented findings to lab researchers.",
    tags: ["Python", "Deep Learning", "Google Colab"],
    images: [
      {
        src: "/images/vae/tsne.png",
        alt: "t-SNE plots comparing TimeGAN and TimeVAE synthetic time-series distributions against real data",
      },
    ],
  },
  {
    id: "P-05",
    title: "Robotic Tic-Tac-Toe TUI",
    domain: "Robotics / HCI",
    description:
      "Designed and 3D-printed a custom enclosure in OnShape, then wired and soldered an Arduino, RFID sensor, and servo motor to integrate embedded hardware with Toio robots. Programmed robots in JavaScript for autonomous map sweeping and player-controlled Tic-Tac-Toe. Mentored 2 teammates and presented HCI research to 150+ community members.",
    tags: ["JavaScript", "Arduino", "RFID", "OnShape"],
  },
] as const;

export const experience = [
  {
    role: "Technical Lead",
    org: "1619 Up A Creek Robotics (FRC)",
    dates: "Aug. 2022 – Jun. 2026",
    bullets: [
      "Captained an 84-member team across software, mechanical, electrical, strategy, and operations, guiding the program to the FIRST Robotics World Championship and earning the Autonomous Award for software performance.",
      "Led development of an AprilTag pose-localization subsystem (Java, PhotonVision, ArduCam, Orange Pi coprocessor), reducing localization error by 25%; system won Innovation in Control Award at Worlds.",
      "Built 3D simulation tooling in AdvantageScope that cut mechanism design-iteration time by 40%.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "SciAnno Mosaics",
    dates: "Dec. 2024 – Jun. 2026",
    bullets: [
      "Engineered a Python-based chatbot and agent platform on Google Cloud Platform integrating PubMed, UniProt, and BioProject APIs to automate gene annotation and literature mining, cutting literature-search time by ~20%.",
      "Built 10+ network-inference tools (PPI/co-expression network curation, gene community clustering, adapted Random Walk with Restart), now used by the CU Boulder Kane Lab for leaf transcriptomic research.",
      "Co-authored a paper published in Nature Scientific Reports based on contributions to the platform.",
    ],
    paper: {
      label: "Nature Scientific Reports",
      href: "https://doi.org/10.1038/s41598-026-45070-7",
    },
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Kane Lab, CU Boulder",
    dates: "May 2024 – Mar. 2026",
    bullets: [
      "Built a custom Python data-augmentation pipeline (Augmentor) that expanded a curated cannabis-leaf image dataset to 2,000+ training images.",
      "Landmarked leaf morphology (TPSDig) across monoecious accessions and applied Principal Component Analysis in R to quantify how backcrossing affects Cannabis sativa leaf shape.",
      "Trained a CNN on this data achieving 91% accuracy classifying leaf images as monoecious vs. dioecious.",
    ],
  },
] as const;

export const skills = [
  {
    category: "Hardware / Embedded",
    items: [
      "Embedded C",
      "Arduino",
      "Circuit Design & Soldering",
      "MPU6050",
      "Orange Pi",
      "ArduCam",
      "RFID",
      "3D Printing",
      "Onshape",
      "LabVIEW",
      "PhotonVision",
    ],
  },
  {
    category: "Machine Learning",
    items: [
      "Python",
      "TensorFlow",
      "R",
      "LangChain / LangGraph",
      "Multi-Agent Systems",
      "Augmentor",
      "TPSDig",
      "Roboflow",
    ],
  },
  {
    category: "Full-stack",
    items: [
      "JavaScript",
      "HTML / CSS",
      "Node.js",
      "Google Cloud Platform",
      "Vercel",
      "Neon",
      "Supabase",
    ],
  },
  {
    category: "Tools",
    items: [
      "Java",
      "Git",
      "VS Code",
      "Jupyter Notebook",
      "Cursor",
      "Claude Code",
      "AdvantageScope",
    ],
  },
] as const;
