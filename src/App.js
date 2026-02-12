import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import assets
import avatar1 from "./assets/avatar-1.png";
import avatar2 from "./assets/avatar-2.png";
import resumePDF from "./assets/resume.pdf";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      offset: 0,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
    });

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const profile = {
    name: "CHISOM ORJI EZE",
    role: "UI/UX ARCHITECT",
    manifesto: `I DON'T DESIGN INTERFACES. I DESIGN BEHAVIOR.`,
    description: `PROBLEMS ARE BLUEPRINTS. CONSTRAINTS ARE CATALYSTS. EVERY PROJECT IS A PROVOCATION.`,
    email: "LORDWHITE02@GMAIL.COM",
    phone: "07061646747",
    address: "32 TAPA STREET OFF ABEOKUTA, LAGOS, NIGERIA",
    certifications: [
      { title: "UI/UX DESIGN CERTIFICATE", issuer: "TECHRUSH", year: 2025 },
      { title: "UI/UX DESIGN WITH FIGMA", issuer: "UDEMY", year: 2022 },
      {
        title: "UI/UX DESIGN CERTIFICATE",
        issuer: "GENEZA SCHOOL OF DESIGN",
        year: 2022,
      },
      { title: "TEFL", issuer: "120 HOURS", year: 2022 },
      {
        title: "HUMAN RESOURCE MANAGEMENT",
        issuer: "UNIVERSITY OF IBADAN",
        year: 2022,
      },
      {
        title: "PUBLIC ADMINISTRATION",
        issuer: "CHARTERED INSTITUTE OF LOCAL GOVERNMENT",
        year: 2022,
      },
    ],
    skills: [
      "FIGMA",
      "USER RESEARCH",
      "WIREFRAMING",
      "PROTOTYPING",
      "USABILITY TESTING",
      "UI DESIGN",
      "UX STRATEGY",
    ],
    avatar1,
    avatar2,
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0C] text-white overflow-x-hidden font-['Space_Grotesk'] antialiased selection:bg-fuchsia-500/30 selection:text-white">
      {/* RADICAL BACKGROUND SYSTEM */}
      <div className="fixed inset-0 bg-[#0A0A0C]">
        {/* COLOR FIELDS - BLEEDING EDGES */}
        <div className="absolute top-[-20vh] left-[-10vw] w-[70vw] h-[70vh] bg-fuchsia-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20vh] right-[-10vw] w-[70vw] h-[70vh] bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-violet-600/10 blur-[150px]"></div>

        {/* BRUTALIST GRID - AGGRESSIVE */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="brutalGrid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M60 0 L0 0 0 60"
                fill="none"
                stroke="#2A2A32"
                strokeWidth="1.2"
              />
              <circle cx="30" cy="30" r="1" fill="#FF00FF" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#brutalGrid)" />
        </svg>

        {/* NOISE TEXTURE */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        ></div>
      </div>

      {/* CUSTOM CURSOR - DESTRUCTIVE */}
      <div
        className="fixed w-0 h-0 pointer-events-none z-50 mix-blend-difference hidden lg:block"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s, height 0.2s",
          width: activeIndex !== null ? "80px" : "32px",
          height: activeIndex !== null ? "80px" : "32px",
        }}
      >
        <div className="w-full h-full rounded-full bg-white blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-12">
        {/* ============ HERO - MONUMENTAL TYPOGRAPHY ============ */}
        <div className="grid lg:grid-cols-12 gap-0 min-h-[90vh] items-start lg:items-center mb-32">
          {/* LEFT - DECONSTRUCTED IDENTITY */}
          <div
            className="lg:col-span-7 relative"
            data-aos="fade-right"
            data-aos-duration="1600"
          >
            {/* AVATAR ASSEMBLAGE - FRAGMENTED */}
            <div className="flex items-start gap-2 mb-8 relative">
              <div
                className="relative w-24 h-24 lg:w-32 lg:h-32 overflow-hidden"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
                  transform: "skewX(-5deg)",
                }}
              >
                <img
                  src={profile.avatar1}
                  alt=""
                  className="w-full h-full object-cover scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/40 to-transparent mix-blend-multiply"></div>
              </div>
              <div
                className="relative w-20 h-20 lg:w-28 lg:h-28 overflow-hidden -ml-6 mt-8"
                style={{
                  clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
                  transform: "skewX(5deg)",
                }}
              >
                <img
                  src={profile.avatar2}
                  alt=""
                  className="w-full h-full object-cover scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-blue-600/40 to-transparent mix-blend-multiply"></div>
              </div>

              {/* GLITCH ELEMENTS */}
              <div className="absolute -top-4 -left-4 text-fuchsia-500 text-7xl font-black opacity-20 select-none">
                UX
              </div>
              <div className="absolute bottom-0 left-20 text-blue-500 text-6xl font-black opacity-20 select-none">
                UI
              </div>
            </div>

            {/* NAME - EXPLODED */}
            <div className="relative mb-6">
              <h1 className="text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-[-0.03em] uppercase">
                <span className="block relative">
                  <span className="relative z-10 bg-gradient-to-r from-fuchsia-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                    CHISOM
                  </span>
                  <span className="absolute -top-2 -left-2 text-fuchsia-500/20 text-8xl lg:text-9xl select-none blur-sm">
                    CHISOM
                  </span>
                </span>
                <span className="block relative mt-0">
                  <span className="relative z-10 text-white">ORJI EZE</span>
                  <span className="absolute -bottom-2 left-0 w-full h-[0.15em] bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500"></span>
                </span>
              </h1>
            </div>

            {/* MANIFESTO - PROVOCATIVE */}
            <div className="max-w-2xl mb-10">
              <p className="text-2xl lg:text-3xl font-light text-white/90 mb-4 leading-[1.2] tracking-tight">
                {profile.manifesto}
              </p>
              <p className="text-lg lg:text-xl text-white/50 font-light italic border-l-2 border-fuchsia-500 pl-5">
                {profile.description}
              </p>
            </div>

            {/* AGGRESSIVE CTAS */}
            <div className="flex flex-wrap gap-5">
              <a
                href="#work"
                className="group relative px-8 py-5 bg-fuchsia-600 font-black text-sm tracking-[0.25em] uppercase overflow-hidden hover:bg-fuchsia-700 transition-all duration-300"
                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
                onMouseEnter={() => setActiveIndex(0)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <span className="relative z-10 flex items-center gap-3">
                  EXAMINE WORK
                  <span className="text-xl group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </span>
              </a>

              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-5 bg-transparent font-black text-sm tracking-[0.25em] uppercase border-2 border-white/20 hover:border-blue-500/50 transition-all duration-300 flex items-center gap-3"
                style={{ clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0 100%)" }}
                onMouseEnter={() => setActiveIndex(1)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <span>RESUME.PDF</span>
                <span className="text-lg group-hover:translate-y-1 transition-transform">
                  ⬇
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT - SKILL LABYRINTH */}
          <div
            className="lg:col-span-5 relative mt-16 lg:mt-0"
            data-aos="fade-left"
            data-aos-duration="1600"
          >
            <div className="relative h-[600px] w-full border-l-2 border-white/10 pl-8">
              {/* VERTICAL RHYTHM */}
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-fuchsia-500 via-blue-500 to-transparent"></div>

              <div className="relative h-full flex flex-col justify-center">
                <div className="mb-12">
                  <span className="text-[200px] leading-[0.7] font-black text-white/5 select-none absolute -top-20 right-0">
                    7
                  </span>
                  <h3 className="text-sm tracking-[0.4em] uppercase text-white/30 mb-3">
                    CORE ARMAMENTS
                  </h3>
                  <div className="w-16 h-[2px] bg-fuchsia-500 mb-10"></div>
                </div>

                <div className="space-y-0">
                  {profile.skills.map((skill, i) => (
                    <div
                      key={skill}
                      className="group relative py-4 border-b border-white/5 hover:border-fuchsia-500/30 transition-colors"
                      onMouseEnter={() => setActiveIndex(i + 10)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-white/20 font-mono text-sm w-8">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-lg lg:text-xl font-bold uppercase tracking-wide text-white/80 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all">
                            {skill}
                          </span>
                        </div>
                        <span className="text-fuchsia-500/0 group-hover:text-fuchsia-500 transition-all">
                          ▶
                        </span>
                      </div>

                      {/* SKILL METER */}
                      <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-fuchsia-500 to-blue-500 group-hover:w-full transition-all duration-700"></div>
                    </div>
                  ))}
                </div>

                {/* DECLARATIVE STATEMENT */}
                <div className="mt-16 p-6 bg-white/5 border border-white/10">
                  <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">
                    PRODUCT THINKING
                  </p>
                  <p className="text-sm uppercase font-bold">
                    NOT JUST VISUAL. BEHAVIORAL.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============ CERTIFICATIONS - ARCHIVAL INSTALLATION ============ */}
        <div className="relative mb-40" id="work">
          {/* SECTION HEADER - BRUTAL */}
          <div
            className="flex items-center justify-between mb-16 border-t-2 border-b-2 border-white/10 py-6"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-6">
              <span className="text-6xl lg:text-7xl font-black text-white/10 select-none">
                02
              </span>
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight">
                <span className="bg-gradient-to-r from-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                  CREDENTIALS
                </span>
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <span className="w-12 h-12 flex items-center justify-center border-2 border-white/20 rounded-full text-xl font-bold">
                {profile.certifications.length}
              </span>
              <span className="text-white/40 text-sm tracking-wider uppercase">
                ARCHIVE
              </span>
            </div>
          </div>

          {/* CERTIFICATE GRID - MUSEUM WALL */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {profile.certifications.map((cert, idx) => (
              <div
                key={idx}
                data-aos="zoom-out"
                data-aos-delay={idx * 40}
                className="group relative bg-[#0A0A0C] p-8 lg:p-10 hover:bg-[#121214] transition-all duration-500 border border-white/5 hover:border-fuchsia-500/30"
                onMouseEnter={() => setActiveIndex(idx + 20)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* YEAR MARKER - BOLD */}
                <div className="absolute top-6 right-6 text-5xl lg:text-7xl font-black text-white/5 group-hover:text-fuchsia-500/20 transition-colors select-none">
                  {cert.year}
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 mb-6 flex items-center justify-center bg-gradient-to-br from-fuchsia-600/20 to-blue-600/20 border border-fuchsia-500/30">
                    <span className="text-2xl font-black text-fuchsia-400">
                      {cert.year.toString().slice(-2)}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-black uppercase leading-tight mb-4 max-w-[80%]">
                    {cert.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="text-white/40 text-sm tracking-wider uppercase">
                      {cert.issuer}
                    </span>
                    <span className="text-fuchsia-500/0 group-hover:text-fuchsia-500 transition-all text-xl">
                      →
                    </span>
                  </div>
                </div>

                {/* CORNER ACCENT */}
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-fuchsia-500/0 group-hover:border-fuchsia-500/50 transition-all"></div>
              </div>
            ))}
          </div>
        </div>

        {/* ============ CONTACT - CINEMATIC ============ */}
        <div
          data-aos="fade-up"
          data-aos-duration="1800"
          className="relative min-h-[70vh] mt-40 mb-20 flex items-center"
        >
          {/* BACKGROUND DRAMA */}
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-900/20 via-transparent to-blue-900/20"></div>
          <div className="absolute inset-0 border-t-2 border-b-2 border-white/10"></div>

          <div className="relative z-10 w-full grid lg:grid-cols-2 gap-16 py-16">
            {/* LEFT - COMMAND */}
            <div>
              <span className="text-sm tracking-[0.4em] uppercase text-white/30 mb-6 block">
                INITIATE CONTACT
              </span>

              <h3 className="text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-[0.9] mb-10">
                <span className="bg-gradient-to-r from-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                  LET'S
                </span>
                <br />
                <span className="text-white">COLLIDE</span>
              </h3>

              <p className="text-2xl text-white/60 font-light mb-12 max-w-lg">
                DISCIPLINED CRAFT. UNAPOLOGETIC INTENT. LET'S BUILD SOMETHING
                THAT DISRUPTS.
              </p>

              {/* CONTACT GRID - BOLD */}
              <div className="space-y-6">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-5 group border-b border-white/10 pb-5 hover:border-fuchsia-500 transition-colors"
                >
                  <span className="w-12 h-12 flex items-center justify-center bg-white/5 group-hover:bg-fuchsia-600/30 transition-all">
                    ✉
                  </span>
                  <span className="text-xl font-mono tracking-wide uppercase group-hover:text-fuchsia-400 transition-colors">
                    {profile.email}
                  </span>
                </a>

                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-5 group border-b border-white/10 pb-5 hover:border-blue-500 transition-colors"
                >
                  <span className="w-12 h-12 flex items-center justify-center bg-white/5 group-hover:bg-blue-600/30 transition-all">
                    ☏
                  </span>
                  <span className="text-xl font-mono tracking-wide uppercase group-hover:text-blue-400 transition-colors">
                    {profile.phone}
                  </span>
                </a>

                <div className="flex items-center gap-5 pt-2">
                  <span className="w-12 h-12 flex items-center justify-center bg-white/5">
                    ⌂
                  </span>
                  <span className="text-lg text-white/70 font-mono tracking-wide uppercase">
                    {profile.address}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT - PORTAL */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-[400px] aspect-square">
                {/* ANIMATED RINGS */}
                <div className="absolute inset-0 border-2 border-fuchsia-500/30 rounded-full animate-ping opacity-20"></div>
                <div className="absolute inset-[15%] border border-blue-500/50 rounded-full animate-pulse"></div>
                <div className="absolute inset-[30%] bg-gradient-to-br from-fuchsia-600/30 to-blue-600/30 rounded-full blur-2xl"></div>

                <div className="absolute inset-[25%] bg-[#0A0A0C] rounded-full flex items-center justify-center border-2 border-white/20">
                  <div className="text-center">
                    <div className="text-7xl mb-2 animate-bounce">⚡</div>
                    <div className="text-sm tracking-[0.3em] uppercase text-white/40 mb-1">
                      STATUS
                    </div>
                    <div className="text-2xl font-black uppercase bg-gradient-to-r from-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                      READY
                    </div>
                  </div>
                </div>

                {/* RESUME DIRECT ACCESS */}
                <a
                  href={resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-16 left-1/2 -translate-x-1/2 px-8 py-5 bg-white text-black font-black uppercase text-sm tracking-[0.25em] hover:bg-fuchsia-500 hover:text-white transition-all duration-500 flex items-center gap-4 whitespace-nowrap"
                  style={{
                    clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
                  }}
                >
                  <span>DOWNLOAD RESUME</span>
                  <span className="text-xl">⬇</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ============ COLOPHON ============ */}
        <div className="relative mt-40 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-xs tracking-[0.25em] uppercase">
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 bg-fuchsia-500 rounded-full animate-pulse"></span>
            <span>DISCIPLINED CRAFT</span>
          </div>
          <div className="flex gap-8">
            <span>PRODUCT THINKING</span>
            <span>•</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="font-mono text-white/20">CHISOM ORJI EZE</div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-2px, 2px); }
          66% { transform: translate(2px, -2px); }
        }
        
        .animate-glitch {
          animation: glitch 0.2s infinite;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
          background: #0A0A0C;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #F0F, #00F);
          border-radius: 0;
        }
      `}</style>
    </div>
  );
};

export default App;
