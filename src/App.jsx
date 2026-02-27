// ============================================================
// ADHAVAA CHAKRAVARTHI PRASANNA VENKATESH — PORTFOLIO
// Single-file React component. No external dependencies
// beyond Tailwind CSS and Lucide React.
//
// HOW TO CUSTOMIZE:
// 1. Update `PROFILE` object with your real links (GitHub, LinkedIn, resume PDF)
// 2. Update `PROJECTS` array — each project has structured fields
// 3. Update `SKILLS` object with any new tools
// 4. Update `EXPERIENCES` array as you gain new roles
// 5. Colors are CSS variables in the <style> block at the bottom
// ============================================================

import { useState, useEffect, useRef } from "react";
import {
  Mail, Github, Linkedin, FileText, ArrowRight,
  Cpu, Activity, FlaskConical, BookOpen, Users,
  ChevronDown, ExternalLink, Menu, X, Circle
} from "lucide-react";

// ============================================================
// DATA — EDIT THIS SECTION
// ============================================================

const PROFILE = {
  name: "Adhavaa Chakravarthi Prasanna Venkatesh",
  shortName: "Adhavaa",
  title: "Biomedical Engineering Student",
  subtitle: "Embedded Systems · Biosignal Acquisition · Product Documentation · Research Tooling",
  positioning: "I build hardware-software systems at the intersection of sensing and biology — and I document them like they actually need to work.",
  currentlyBuilding: "wearable rehab sensing systems + real-time research visualization tooling",
  email: "adhavaachakravarthi@gmail.com", // REPLACE
  github: "https://github.com/AdhavaaChakravarthi", // REPLACE
  linkedin: "https://linkedin.com/in/adhavaa", // REPLACE
  resume: "C:/Users/ADHAVAA CHAKRAVARTHI/Downloads/Resume_Sanofi_PMO (1).pdf", // REPLACE with actual PDF path
};

const PROJECTS = [
  {
    id: "knee-sleeve",
    title: "Smart Knee Sleeve",
    category: ["Wearables", "Embedded"],
    impactStatement: "A wearable rehab monitoring system designed to quantify ACL recovery progress with biosignal confidence metrics.",
    role: "Electrical / Systems / Technical Documentation",
    status: "Competition Project",
    tags: ["ESP32", "BLE", "EMG", "IMU", "Python", "MATLAB", "ICD-Lite", "Validation Matrix"],
    summary:
      "Designed as part of a biomedical engineering design competition, this knee sleeve integrates 3 EMG channels and 4 IMUs into an ESP32-based wireless data acquisition system. The goal: give physiotherapists and patients an objective, wearable way to track rehab progress — not just subjective pain scores.",
    whatIDid: [
      "Defined the system architecture: sensor placement rationale, ADC selection, BLE data flow, and power budget",
      "Wrote an ICD-Lite (Interface Control Document) to formalize channel definitions, data formats, and subsystem boundaries between firmware and signal processing",
      "Developed a bring-up checklist and validation matrix to structure hardware testing milestones",
      "Contributed to signal chain design: EMG front-end conditioning, IMU orientation fusion pipeline",
      "Coordinated documentation across team members so everyone worked against the same system spec",
    ],
    systemThinking: [
      "Separated concerns early: hardware interface spec ≠ firmware behavior ≠ signal processing logic",
      "Applied DFMEA-style thinking to identify failure modes in power delivery and wireless connectivity",
      "Scoped the MVP deliberately — confidence index via normalized EMG + IMU, not a full clinical system",
    ],
    nextSteps: "Refine EMG conditioning circuit, add onboard storage fallback for BLE drop events, prepare dataset for rehab phase classifier training.",
    detailsLink: "#knee-sleeve-detail", // REPLACE with real link or modal trigger
  },
  {
    id: "tacs-toolchain",
    title: "tACS Real-Time Visualization Toolchain",
    category: ["Research", "Signal Processing"],
    impactStatement: "A Python-based live dashboard and signal analysis framework for transcranial alternating current stimulation research.",
    role: "Research Tooling / Signal Engineering",
    status: "Ongoing Research",
    tags: ["Python", "MATLAB", "Lock-in Detection", "Phantom Setup", "Live Dashboard", "Signal Processing"],
    summary:
      "Built as part of neurostimulation research, this toolchain enables real-time visualization and analysis of tACS-driven phosphene responses using a phantom-based bench setup. The core problem: replace researcher intuition with physics-based, objective feedback during stimulation parameter sweeps.",
    whatIDid: [
      "Built a Python live dashboard for real-time signal capture and display during experiments",
      "Designed and implemented a lock-in detection concept to extract stimulation-frequency components from noisy signals",
      "Structured MATLAB pipelines for post-hoc spectral analysis and visualization of acquired datasets",
      "Maintained a phantom (tissue-equivalent model) setup for controlled, repeatable experimentation",
      "Documented experimental protocols and parameter sets for reproducibility",
    ],
    systemThinking: [
      "Used lock-in amplification concept as a principled SNR improvement — not just filtering",
      "Designed the dashboard to separate raw signal display from processed output, maintaining data integrity",
      "Structured data pipeline so MATLAB analysis scripts could run independently of the live capture tool",
    ],
    nextSteps: "Integrate COMSOL field modeling outputs as visual overlays; extend phosphene mapping to parametric frequency sweeps.",
    detailsLink: "#tacs-detail",
  },
  {
    id: "tissue-experiments",
    title: "Biological Tissue Conductivity Experiments",
    category: ["Research", "Hardware"],
    impactStatement: "Benchtop impedance characterization of ex-vivo biological tissue with documented experimental protocols and MATLAB analysis workflows.",
    role: "Experimental Setup / Circuit Build / Data Analysis",
    status: "Lab Research",
    tags: ["Ex-vivo Tissue", "Impedance Measurement", "MATLAB", "Python", "Experimental Design", "Photonics Lab"],
    summary:
      "Designed and ran controlled electrical characterization experiments on ex-vivo porcine skin tissue in a photonics lab setting. The work involved building measurement circuits, varying experimental conditions (frequency, electrode configuration, tissue state), and generating reproducible datasets for analysis.",
    whatIDid: [
      "Built custom measurement circuits for benchtop conductance/impedance characterization",
      "Performed systematic ex-vivo experiments on pig skin tissue under varying electrical stimulation conditions",
      "Designed controlled variable protocols — electrode spacing, hydration state, frequency sweep",
      "Analyzed datasets in MATLAB and Python: impedance spectroscopy plots, statistical comparison across conditions",
      "Maintained lab documentation: experimental run sheets, hardware configuration logs, raw data versioning",
    ],
    systemThinking: [
      "Treated each experiment as an engineering test — defined expected outcome before running",
      "Used frequency-domain analysis to distinguish tissue dielectric properties from contact resistance artifacts",
      "Structured data collection to enable retrospective comparison across runs without re-doing experiments",
    ],
    nextSteps: "Extend analysis to multi-layer tissue stack models; tie results into tACS phantom calibration framework.",
    detailsLink: "#tissue-detail",
  },
  {
    id: "cubec",
    title: "CUBEC Curiosity Series",
    category: ["Leadership", "Communication"],
    impactStatement: "A technical interview and content series designed to connect engineering students with real research and industry stories.",
    role: "Content Strategy / Production / Campaign Coordination",
    status: "Active — Student Organization",
    tags: ["Content Strategy", "Campaign Planning", "Technical Storytelling", "Interview Production", "Outreach"],
    summary:
      "As part of CUBEC's marketing and communications team, I built out the Curiosity Series — an interview-driven content initiative featuring researchers, engineers, and founders. My work spanned content strategy, asset production, outreach coordination, and distribution planning.",
    whatIDid: [
      "Designed promotional assets and content layouts for interview releases",
      "Coordinated outreach to guests — researchers, students, and technical professionals",
      "Built campaign planning frameworks to align content cadence with event and recruitment cycles",
      "Wrote and edited editorial copy for social media, newsletters, and pitch decks",
      "Contributed to pitch deck design for CUBEC organizational presentations",
    ],
    systemThinking: [
      "Treated content production as a repeatable pipeline: brief → draft → review → publish → analyze",
      "Tailored technical interview questions to make dense research accessible to a student audience",
      "Used structured templates to reduce production time per episode while maintaining quality",
    ],
    nextSteps: "Expand series to video format; build an editorial calendar synced with conference and recruitment seasons.",
    detailsLink: "#cubec-detail",
  },
  {
    id: "cardioaid",
    title: "CardioAid — CPR Wearable Concept",
    category: ["Wearables"],
    impactStatement: "A wearable CPR assistance concept focused on real-time compression depth feedback for bystander responders.",
    role: "Product Design / Biomedical System Thinking",
    status: "Concept / Design Study",
    tags: ["Wearable Design", "Accelerometry", "Product Thinking", "User Scenario Modeling", "Biomedical Design"],
    summary:
      "CardioAid explores a wearable compression feedback system for non-clinical first responders — the core premise being that depth and rate accuracy during CPR significantly affects outcomes, yet bystanders lack real-time guidance. This project focused on practical wearable design constraints and user-centered system scoping.",
    whatIDid: [
      "Defined system requirements from first-responder usage scenarios",
      "Scoped minimal viable sensor architecture: accelerometer + haptic feedback, low-latency pipeline",
      "Analyzed human factors constraints — gloves, stress, noise — against sensor placement choices",
      "Documented product rationale: problem framing, user needs, design tradeoffs",
    ],
    systemThinking: [
      "Started with the failure mode: what goes wrong during bystander CPR, and what sensing actually helps",
      "Deliberately constrained scope to what's buildable at low cost with off-the-shelf hardware",
    ],
    nextSteps: "Prototype with IMU + vibration motor, validate compression depth estimation against CPR training manikin.",
    detailsLink: "#cardioaid-detail",
  },
];

const SKILLS = {
  "Embedded + Hardware": {
    icon: Cpu,
    items: [
      { tool: "ESP32, STM32, MCU integration", use: "building wearable sensor acquisition pipelines" },
      { tool: "ADC design, signal conditioning", use: "front-end circuit design for EMG and bioelectric signals" },
      { tool: "BLE / wireless protocols", use: "low-power wearable data transmission architectures" },
      { tool: "Benchtop prototyping", use: "PCB-free circuit builds, measurement rigs, lab setups" },
    ],
  },
  "Signals + Data": {
    icon: Activity,
    items: [
      { tool: "MATLAB, Python (NumPy, SciPy, Matplotlib)", use: "signal analysis, visualization, frequency-domain processing" },
      { tool: "EMG / IMU processing", use: "feature extraction, orientation fusion, envelope detection" },
      { tool: "Lock-in detection concepts", use: "SNR-focused extraction of stimulation-correlated signals" },
      { tool: "Spectral analysis, impedance characterization", use: "tissue electrical modeling and ex-vivo data interpretation" },
    ],
  },
  "Research + Validation": {
    icon: FlaskConical,
    items: [
      { tool: "Experimental protocol design", use: "controlled variable studies, bench experiments, repeatability" },
      { tool: "Validation matrix, bring-up checklists", use: "structuring hardware milestones and test coverage" },
      { tool: "DFMEA-style risk thinking", use: "anticipating failure modes before they appear in hardware" },
      { tool: "Data documentation and version control", use: "reproducible experiment pipelines and analysis traceability" },
    ],
  },
  "Product + Documentation": {
    icon: BookOpen,
    items: [
      { tool: "ICD-Lite (Interface Control Documents)", use: "formalizing subsystem boundaries and data contracts" },
      { tool: "System architecture documentation", use: "translating design intent into structured specs for teams" },
      { tool: "Power budgeting, BOM scoping", use: "embedded system feasibility and component selection" },
      { tool: "Figma (basic)", use: "wireframes and product concept layouts" },
    ],
  },
  "Communication + Collaboration": {
    icon: Users,
    items: [
      { tool: "Technical writing and slide decks", use: "communicating system design to non-engineer stakeholders" },
      { tool: "Campaign planning and content strategy", use: "structured outreach and editorial coordination" },
      { tool: "Team documentation and coordination", use: "keeping distributed teams aligned on specs and progress" },
    ],
  },
};

const EXPERIENCES = [
  {
    period: "May 2025– Present",
    role: "Research — Photonics / Neurostimulation Lab",
    org: "Toronto Metropolitan University",
    type: "Research",
    description:
      "Built experimental toolchains for tACS research and biological tissue characterization. Work spans circuit construction, data acquisition pipeline design, Python/MATLAB signal analysis, and experimental documentation.",
  },
  {
    period: "September 2025 – Present",
    role: "Biomedical Engineering Design Team",
    org: "TMU — Smart Knee Sleeve Project",
    type: "Design Team",
    description:
      "Core contributor to electrical/system integration, documentation (ICD-Lite, validation matrix), and architecture decisions for a wearable ACL rehab monitoring device entered in a biomedical design competition.",
  },
  {
    period: "May 2024– Present",
    role: "Marketing & Content — Curiosity Series",
    org: "CUBEC (Canadian University Biomedical Engineering Conference)",
    type: "Leadership",
    description:
      "Led content production and campaign coordination for CUBEC's technical interview series. Responsibilities included asset design, editorial writing, guest outreach, pitch deck contributions, and distribution strategy.",
  },
];

// ============================================================
// COMPONENT
// ============================================================

const categoryColors = {
  Wearables: "bg-[#c8b89a] text-[#3a2e1c]",
  Embedded: "bg-[#6b7c5c] text-[#f5f0e8]",
  Research: "bg-[#7a6048] text-[#f5f0e8]",
  "Signal Processing": "bg-[#4a6058] text-[#f5f0e8]",
  Hardware: "bg-[#8a7060] text-[#f5f0e8]",
  Leadership: "bg-[#b06040] text-[#f5f0e8]",
  Communication: "bg-[#9a8060] text-[#f5f0e8]",
};

function TagPill({ text, variant = "default" }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: "9999px",
        fontSize: "0.72rem",
        fontWeight: 500,
        letterSpacing: "0.02em",
        background: variant === "cat"
          ? "var(--accent-rust-light)"
          : "var(--surface-2)",
        color: variant === "cat" ? "var(--accent-rust)" : "var(--text-muted)",
        border: "1px solid var(--border)",
      }}
    >
      {text}
    </span>
  );
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const categoryBadge = project.category[0];
  const catClass = categoryColors[categoryBadge] || "bg-[#c8b89a] text-[#3a2e1c]";

  return (
    <div
      className="project-card"
      style={{
        background: "var(--surface-1)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "28px 28px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        transition: "box-shadow 0.25s, transform 0.25s",
        cursor: "default",
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {project.category.map(c => (
              <span key={c} className={`${catClass} text-xs font-medium px-2 py-0.5 rounded-full`}>{c}</span>
            ))}
            <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", background: "var(--surface-2)", padding: "2px 8px", borderRadius: 9999, border: "1px solid var(--border)" }}>
              {project.status}
            </span>
          </div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", fontFamily: "var(--font-display)", lineHeight: 1.2 }}>
            {project.title}
          </h3>
        </div>
      </div>

      {/* Impact statement */}
      <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
        {project.impactStatement}
      </p>

      {/* Role */}
      <p style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", margin: 0 }}>
        Role: {project.role}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.tags.map(t => <TagPill key={t} text={t} />)}
      </div>

      {/* Summary */}
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.65, margin: 0 }}>
        {project.summary}
      </p>

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          display: "flex", alignItems: "center", gap: 6,
          fontSize: "0.82rem", fontWeight: 600,
          color: "var(--accent-green)",
          background: "none", border: "none", cursor: "pointer",
          padding: 0, marginTop: 4,
        }}
      >
        {expanded ? "Hide details" : "What I built & how I thought about it"}
        <ChevronDown size={14} style={{ transform: expanded ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
      </button>

      {expanded && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 8, borderTop: "1px solid var(--border)" }}>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 8 }}>What I Did</p>
            <ul style={{ margin: 0, padding: "0 0 0 16px", display: "flex", flexDirection: "column", gap: 6 }}>
              {project.whatIDid.map((item, i) => (
                <li key={i} style={{ fontSize: "0.86rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 8 }}>System Thinking Highlights</p>
            <ul style={{ margin: 0, padding: "0 0 0 16px", display: "flex", flexDirection: "column", gap: 6 }}>
              {project.systemThinking.map((item, i) => (
                <li key={i} style={{ fontSize: "0.86rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>{item}</li>
              ))}
            </ul>
          </div>
          {project.nextSteps && (
            <div style={{ background: "var(--surface-2)", borderRadius: 10, padding: "12px 16px" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 6 }}>Next Steps</p>
              <p style={{ fontSize: "0.86rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.55 }}>{project.nextSteps}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Section({ id, children, style = {} }) {
  return (
    <section
      id={id}
      style={{
        padding: "80px 0",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

function SectionLabel({ text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
      <div style={{ width: 32, height: 2, background: "var(--accent-rust)", borderRadius: 2 }} />
      <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent-rust)" }}>{text}</span>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "var(--text-primary)", fontFamily: "var(--font-display)", lineHeight: 1.15, marginBottom: "1rem" }}>
      {children}
    </h2>
  );
}

export default function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [filterCat, setFilterCat] = useState("All");

  const navLinks = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const categories = ["All", "Wearables", "Research", "Embedded", "Signal Processing", "Leadership"];

  const filteredProjects = filterCat === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(filterCat));

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActiveSection(e.target.id)),
      { threshold: 0.3 }
    );
    navLinks.forEach(link => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        :root {
          /* COLORS — edit here to retheme */
          --bg-primary: #f7f3ec;
          --bg-secondary: #f0ebe0;
          --surface-1: #ffffff;
          --surface-2: #f0ebe0;
          --border: #e0d8cc;
          --text-primary: #1e1a14;
          --text-secondary: #4a4238;
          --text-muted: #857a6e;
          --accent-green: #4a6645;
          --accent-green-light: #d4e4cc;
          --accent-rust: #b05a35;
          --accent-rust-light: #f0ddd0;
          --accent-gold: #8a6e30;
          --accent-sand: #c8b89a;

          /* FONTS */
          --font-body: 'DM Sans', 'Segoe UI', system-ui, sans-serif;
          --font-display: 'Cormorant Garamond', 'Georgia', serif;
        }

        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Nav */
        .nav-sticky {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(247, 243, 236, 0.88);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          transition: background 0.3s;
        }

        .nav-inner {
          max-width: 1100px; margin: 0 auto; padding: 0 24px;
          height: 60px; display: flex; align-items: center; justify-content: space-between;
        }

        .nav-logo {
          font-family: var(--font-display);
          font-weight: 700; font-size: 1.2rem;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .nav-links {
          display: flex; gap: 32px; list-style: none;
        }

        .nav-links a {
          font-size: 0.85rem; font-weight: 500;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
          cursor: pointer;
        }

        .nav-links a:hover, .nav-links a.active { color: var(--accent-rust); }

        @media (max-width: 640px) {
          .nav-links { display: none; }
          .nav-mobile-open .nav-links {
            display: flex; flex-direction: column; position: absolute;
            top: 60px; left: 0; right: 0;
            background: var(--bg-primary);
            padding: 16px 24px 24px;
            border-bottom: 1px solid var(--border);
          }
        }

        /* Hero topo pattern */
        .topo-bg {
          position: absolute; inset: 0; overflow: hidden; z-index: 0;
          opacity: 0.04;
        }

        .topo-bg svg {
          width: 100%; height: 100%;
          position: absolute; top: 0; left: 0;
        }

        /* Buttons */
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 24px;
          background: var(--accent-green);
          color: #fff;
          border: none; border-radius: 8px;
          font-family: var(--font-body); font-size: 0.88rem; font-weight: 600;
          cursor: pointer; text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-primary:hover { background: #3a5234; transform: translateY(-1px); }

        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 22px;
          background: transparent;
          color: var(--text-primary);
          border: 1.5px solid var(--border);
          border-radius: 8px;
          font-family: var(--font-body); font-size: 0.88rem; font-weight: 600;
          cursor: pointer; text-decoration: none;
          transition: border-color 0.2s, color 0.2s, transform 0.15s;
        }
        .btn-outline:hover { border-color: var(--accent-rust); color: var(--accent-rust); transform: translateY(-1px); }

        /* Project cards hover */
        .project-card:hover {
          box-shadow: 0 8px 32px rgba(74, 66, 56, 0.1);
          transform: translateY(-2px);
        }

        /* Skills cluster */
        .skill-cluster {
          background: var(--surface-1);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 24px;
          transition: box-shadow 0.2s;
        }
        .skill-cluster:hover { box-shadow: 0 4px 20px rgba(74,66,56,0.08); }

        /* Experience card */
        .exp-card {
          border-left: 2px solid var(--border);
          padding-left: 24px;
          position: relative;
        }
        .exp-card::before {
          content: '';
          position: absolute; left: -5px; top: 6px;
          width: 8px; height: 8px;
          background: var(--accent-rust);
          border-radius: 50%;
        }

        /* Process flow */
        .process-step {
          background: var(--surface-1);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          flex: 1; min-width: 120px;
        }

        /* Filter pills */
        .filter-pill {
          padding: 6px 16px;
          border-radius: 9999px;
          font-size: 0.8rem; font-weight: 600;
          border: 1.5px solid var(--border);
          background: transparent;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s;
        }
        .filter-pill:hover { border-color: var(--accent-green); color: var(--accent-green); }
        .filter-pill.active { background: var(--accent-green); color: #fff; border-color: var(--accent-green); }

        /* Animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease both; }
        .fade-up-delay-1 { animation-delay: 0.1s; }
        .fade-up-delay-2 { animation-delay: 0.2s; }
        .fade-up-delay-3 { animation-delay: 0.3s; }
        .fade-up-delay-4 { animation-delay: 0.4s; }

        /* How I work strip */
        .how-chip {
          padding: 8px 18px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 24px;
          font-size: 0.82rem; font-weight: 600;
          color: var(--text-secondary);
          white-space: nowrap;
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--bg-secondary); }
        ::-webkit-scrollbar-thumb { background: var(--accent-sand); border-radius: 3px; }
      `}</style>

      {/* NAV */}
      <nav className={`nav-sticky ${navOpen ? "nav-mobile-open" : ""}`}>
        <div className="nav-inner">
          <span className="nav-logo">{PROFILE.shortName} Portfolio </span>
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  className={activeSection === link.id ? "active" : ""}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setNavOpen(!navOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "none", padding: 4 }}
            className="mobile-menu-btn"
          >
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {navOpen && (
          <div style={{ padding: "12px 24px 20px", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 16 }}>
            {navLinks.map(link => (
              <a
                key={link.id}
                style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--text-secondary)", cursor: "pointer", textDecoration: "none" }}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <div style={{ paddingTop: 60 }}>

        {/* HERO */}
        <section
          id="hero"
          style={{
            position: "relative",
            minHeight: "92vh",
            display: "flex",
            alignItems: "center",
            background: "linear-gradient(160deg, var(--bg-primary) 0%, #ede6d8 60%, #e6ddd0 100%)",
            overflow: "hidden",
          }}
        >
          {/* Topographic SVG background */}
          <div className="topo-bg" aria-hidden="true">
            <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
              {[...Array(12)].map((_, i) => (
                <ellipse
                  key={i}
                  cx={300 + i * 60}
                  cy={350 + Math.sin(i) * 80}
                  rx={200 + i * 40}
                  ry={120 + i * 30}
                  fill="none"
                  stroke="var(--text-primary)"
                  strokeWidth="0.8"
                  opacity={0.6 - i * 0.04}
                />
              ))}
            </svg>
          </div>

          {/* Signal waveform accent */}
          <div style={{ position: "absolute", right: "5%", top: "30%", opacity: 0.06 }} aria-hidden="true">
            <svg width="320" height="120" viewBox="0 0 320 120">
              <polyline
                points="0,60 30,60 40,20 50,100 60,40 70,80 80,60 120,60 130,30 140,90 150,50 160,70 170,60 220,60 230,15 240,105 250,45 260,75 270,60 320,60"
                fill="none"
                stroke="var(--accent-green)"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: 680 }}>
              <p className="fade-up" style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--accent-rust)", marginBottom: 16 }}>
                Biomedical Engineering · Toronto Metropolitan University
              </p>
              <h1
                className="fade-up fade-up-delay-1"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.8rem, 7vw, 5rem)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  color: "var(--text-primary)",
                  marginBottom: 8,
                  letterSpacing: "-0.02em",
                }}
              >
                Adhavaa
                <br />
                <span style={{ color: "var(--accent-green)" }}>Chakravarthi</span>
              </h1>

              <p
                className="fade-up fade-up-delay-2"
                style={{
                  fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                  color: "var(--text-muted)",
                  marginBottom: 20,
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
              >
                {PROFILE.subtitle}
              </p>

              <p
                className="fade-up fade-up-delay-2"
                style={{
                  fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  marginBottom: 32,
                  maxWidth: 560,
                  fontStyle: "italic",
                  fontFamily: "var(--font-display)",
                }}
              >
                "{PROFILE.positioning}"
              </p>

              <div className="fade-up fade-up-delay-3" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
                <button className="btn-primary" onClick={() => scrollTo("projects")}>
                  View Projects <ArrowRight size={15} />
                </button>
                <a className="btn-outline" href={PROFILE.resume} target="_blank" rel="noopener noreferrer">
                  <FileText size={15} /> Resume
                </a>
                <a className="btn-outline" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={15} /> LinkedIn
                </a>
              </div>

              <div
                className="fade-up fade-up-delay-4"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "8px 16px",
                  background: "var(--accent-green-light)",
                  borderRadius: 8,
                  fontSize: "0.82rem", color: "var(--accent-green)", fontWeight: 600,
                }}
              >
                <Circle size={8} style={{ fill: "var(--accent-green)", color: "var(--accent-green)" }} />
                Currently building: {PROFILE.currentlyBuilding}
              </div>
            </div>
          </div>

          <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", opacity: 0.4 }}>
            <ChevronDown size={24} color="var(--text-muted)" />
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
              <div>
                <SectionLabel text="About" />
                <SectionTitle>Engineering, research,<br />and how things actually work.</SectionTitle>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.75 }}>
                  <p>
                    I'm a third-year Biomedical Engineering student at Toronto Metropolitan University. My work sits at the overlap of embedded hardware, biosignal acquisition, and research instrumentation — the space where a sensor meets a circuit meets a question worth answering.
                  </p>
                  <p>
                    Most of my time is split between building systems in a lab (real bench experiments, real prototypes, real failure modes) and structuring the documentation that makes those systems understandable to someone other than me. I've found that the two things reinforce each other: you document better when you've debugged, and you build more carefully when you know you'll have to explain it.
                  </p>
                  <p>
                    I care about the full stack of a biomedical project — not just "does the hardware work" but "does the system spec hold together, is the validation plan solid, and can a clinician or reviewer understand what we built and why."
                  </p>
                  <p>
                    Outside the engineering track, I run content and communications for CUBEC, which has taught me a different kind of system design: how information flows, how a story lands, and how to translate dense technical work into something a broader audience can engage with.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {/* How I work */}
                <div style={{ background: "var(--surface-1)", border: "1px solid var(--border)", borderRadius: 14, padding: 24 }}>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: 16 }}>How I Work</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {[
                      { label: "Prototype", desc: "Build a version that answers the most important unknown — skip what doesn't matter yet." },
                      { label: "Validate", desc: "Define what pass/fail means before running the test, not after seeing the results." },
                      { label: "Document", desc: "If the ICD doesn't exist, neither does the interface. Write it down." },
                      { label: "Iterate", desc: "First version is for learning. Treat it that way." },
                      { label: "Communicate", desc: "The people reading this aren't always engineers — and that's fine." },
                      { label: "Coordinate", desc: "Distributed teams need shared specs, not just shared files." },
                    ].map(({ label, desc }) => (
                      <div key={label} style={{ display: "flex", gap: 12 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent-rust)", marginTop: 6, flexShrink: 0 }} />
                        <div>
                          <span style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.88rem" }}>{label}.</span>{" "}
                          <span style={{ color: "var(--text-secondary)", fontSize: "0.86rem" }}>{desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick stats / context */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {[
                    { label: "Program", value: "Biomedical Engineering" },
                    { label: "University", value: "Toronto Metropolitan" },
                    { label: "Focus Areas", value: "Embedded + Biosignals" },
                    { label: "Open to", value: "Internship / Co-op 2025" },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ background: "var(--surface-1)", border: "1px solid var(--border)", borderRadius: 10, padding: 16 }}>
                      <p style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 4 }}>{label}</p>
                      <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-primary)" }}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects">
          <div className="container">
            <SectionLabel text="Projects" />
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
              <SectionTitle>Work that builds on itself.</SectionTitle>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`filter-pill ${filterCat === cat ? "active" : ""}`}
                    onClick={() => setFilterCat(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
              {filteredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        </Section>

        {/* PROCESS / HOW I BUILD */}
        <Section id="process" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <SectionLabel text="Process" />
            <SectionTitle>Architecture to communication.</SectionTitle>
            <p style={{ color: "var(--text-secondary)", maxWidth: 560, marginBottom: 40, lineHeight: 1.7 }}>
              Every project I work on moves through a structured arc — not rigidly, but intentionally. Here's the mental model.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "stretch" }}>
              {[
                { step: "01", label: "Architecture", desc: "System block diagram. Subsystem interfaces. Power budget. What connects to what and why." },
                { step: "02", label: "Bring-up", desc: "Hardware comes alive in stages. Each stage has a defined pass/fail. Bring-up checklist before first power-on." },
                { step: "03", label: "Data", desc: "Capture real signals. Understand what the sensor actually gives you versus what you expected." },
                { step: "04", label: "Validation", desc: "Validation matrix. Test cases tied to requirements. No retrofitting criteria after the fact." },
                { step: "05", label: "Iteration", desc: "What changed, why, and what it taught. Version-controlled specs. Decisions documented." },
                { step: "06", label: "Communication", desc: "ICD. Design rationale. Slide deck or report for the humans who weren't in the lab." },
              ].map(({ step, label, desc }) => (
                <div key={step} className="process-step" style={{ minWidth: 160, maxWidth: 200 }}>
                  <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--accent-rust)", letterSpacing: "0.1em", marginBottom: 8 }}>{step}</p>
                  <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", fontFamily: "var(--font-display)", marginBottom: 8 }}>{label}</p>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.55 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills">
          <div className="container">
            <SectionLabel text="Skills" />
            <SectionTitle>What I use, and what I use it for.</SectionTitle>
            <p style={{ color: "var(--text-secondary)", maxWidth: 500, marginBottom: 40, lineHeight: 1.7 }}>
              Not a keyword dump. Each cluster maps to real work I've done.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
              {Object.entries(SKILLS).map(([clusterName, { icon: Icon, items }]) => (
                <div key={clusterName} className="skill-cluster">
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <div style={{ padding: 8, background: "var(--accent-rust-light)", borderRadius: 8 }}>
                      <Icon size={16} color="var(--accent-rust)" />
                    </div>
                    <p style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--text-primary)" }}>{clusterName}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {items.map(({ tool, use }) => (
                      <div key={tool}>
                        <p style={{ fontWeight: 600, fontSize: "0.84rem", color: "var(--text-primary)", marginBottom: 2 }}>{tool}</p>
                        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.45 }}>↳ {use}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <SectionLabel text="Experience" />
            <SectionTitle>Where the work happened.</SectionTitle>
            <div style={{ maxWidth: 700, display: "flex", flexDirection: "column", gap: 32, marginTop: 32 }}>
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="exp-card">
                  <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent-rust)", marginBottom: 6 }}>
                    {exp.period} · {exp.type}
                  </p>
                  <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: 2 }}>{exp.role}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--accent-gold)", fontWeight: 600, marginBottom: 10 }}>{exp.org}</p>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact">
          <div className="container">
            <div style={{ maxWidth: 640 }}>
              <SectionLabel text="Contact" />
              <SectionTitle>Let's build something real.</SectionTitle>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 36, fontSize: "1rem" }}>
                I'm actively looking for internship and co-op opportunities in embedded systems, biomedical device development, and technical product roles — with a strong interest in research-adjacent environments.
                <br /><br />
                If you're working on something interesting at the edge of hardware, signals, or clinical sensing, I'd like to hear about it.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a className="btn-primary" href={`mailto:${PROFILE.email}`}>
                  <Mail size={15} /> Send an email
                </a>
                <a className="btn-outline" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={15} /> LinkedIn
                </a>
                <a className="btn-outline" href={PROFILE.github} target="_blank" rel="noopener noreferrer">
                  <Github size={15} /> GitHub
                </a>
                <a className="btn-outline" href={PROFILE.resume} target="_blank" rel="noopener noreferrer">
                  <FileText size={15} /> Resume PDF
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* FOOTER */}
        <footer style={{
          borderTop: "1px solid var(--border)",
          padding: "24px",
          textAlign: "center",
          color: "var(--text-muted)",
          fontSize: "0.78rem",
        }}>
          <p>Built by Adhavaa · {new Date().getFullYear()} · React + Tailwind</p>
        </footer>

      </div>
    </>
  );
}
