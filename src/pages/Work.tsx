import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Shield, Home, Sparkles, Droplet, Sun, Hammer, Layers, Scissors } from "lucide-react";

// Types for our portfolio work sites
interface WorkSite {
  url: string;
  name: string;
  domain: string;
  industry: string;
  theme: string;
  gradient: string;
  accentColor: string;
  bgAccent: string;
  textColor?: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  mockupIcon: React.ReactNode;
}

export default function Work() {
  const sites: WorkSite[] = [
    {
      url: "https://hugobuildersllc.com/",
      name: "Hugo Builders LLC",
      domain: "hugobuildersllc.com",
      industry: "Construction & Custom Homes",
      theme: "construction",
      gradient: "from-[#111111] to-[#262626]",
      accentColor: "text-amber-500",
      bgAccent: "bg-amber-500",
      headline: "Crafting Heirloom-Quality Homes",
      subheadline: "Custom residential construction and contracting built to stand the test of time.",
      ctaText: "Start Building",
      mockupIcon: <Hammer className="w-5 h-5 text-amber-500" />,
    },
    {
      url: "https://allcityjanitorialservice.com/",
      name: "All City Janitorial Service",
      domain: "allcityjanitorialservice.com",
      industry: "Commercial Cleaning & Janitorial",
      theme: "cleaning",
      gradient: "from-[#0a2540] to-[#134074]",
      accentColor: "text-cyan-400",
      bgAccent: "bg-cyan-400",
      headline: "Commercial Cleaning Beyond Standards",
      subheadline: "Premium office cleaning and commercial janitorial solutions for modern workplaces.",
      ctaText: "Request Quote",
      mockupIcon: <Layers className="w-5 h-5 text-cyan-400" />,
    },
    {
      url: "https://leongtoroofing.com/",
      name: "Leongto Roofing",
      domain: "leongtoroofing.com",
      industry: "Roofing Installations & Repairs",
      theme: "roofing",
      gradient: "from-[#18181b] to-[#3f3f46]",
      accentColor: "text-red-500",
      bgAccent: "bg-red-500",
      headline: "Protecting What Matters Most",
      subheadline: "Professional roofing installations, shingle replacements, and leak repair services.",
      ctaText: "Get Free Estmate",
      mockupIcon: <Shield className="w-5 h-5 text-red-500" />,
    },
    {
      url: "https://rooferzcorp.com/",
      name: "Rooferz Corp",
      domain: "rooferzcorp.com",
      industry: "Commercial & Residential Roofing",
      theme: "roofing-corp",
      gradient: "from-[#09090b] to-[#27272a]",
      accentColor: "text-orange-500",
      bgAccent: "bg-orange-500",
      headline: "Elite Roofing Systems",
      subheadline: "Industrial-grade commercial and residential roofing contractors.",
      ctaText: "Connect with Us",
      mockupIcon: <Layers className="w-5 h-5 text-orange-500" />,
    },
    {
      url: "https://alexandersafetysolutions.com/",
      name: "Alexander Safety Solutions",
      domain: "alexandersafetysolutions.com",
      industry: "Industrial Safety & Compliance",
      theme: "safety",
      gradient: "from-[#0f172a] to-[#1e293b]",
      accentColor: "text-yellow-400",
      bgAccent: "bg-yellow-400",
      headline: "Zero Accidents. Total Compliance.",
      subheadline: "Expert occupational health and safety consulting, training, and safety audits.",
      ctaText: "Get Safety Audit",
      mockupIcon: <Shield className="w-5 h-5 text-yellow-400" />,
    },
    {
      url: "https://clearandbrightsolutions.com/",
      name: "Clear & Bright Solutions",
      domain: "clearandbrightsolutions.com",
      industry: "Window Cleaning & Pressure Washing",
      theme: "cleaning-bright",
      gradient: "from-[#f0f9ff] to-[#e0f2fe]",
      accentColor: "text-sky-600",
      bgAccent: "bg-sky-600",
      textColor: "text-slate-800",
      headline: "Crystal Clear Glass & Surfaces",
      subheadline: "Premium residential and commercial window cleaning and exterior pressure washing.",
      ctaText: "Book Service",
      mockupIcon: <Sun className="w-5 h-5 text-sky-600" />,
    },
    {
      url: "https://axelslandscapingdesign.com/",
      name: "Axel's Landscaping & Design",
      domain: "axelslandscapingdesign.com",
      industry: "Landscape Design & Lawn Care",
      theme: "landscaping",
      gradient: "from-[#06241c] to-[#0f3d32]",
      accentColor: "text-emerald-400",
      bgAccent: "bg-emerald-400",
      headline: "Landscapes Beyond Expectation",
      subheadline: "Custom outdoor living spaces, gardens, lawn care, and premium landscape design.",
      ctaText: "Get Consultation",
      mockupIcon: <Scissors className="w-5 h-5 text-emerald-400" />,
    },
    {
      url: "https://canosteelinc.com/",
      name: "Cano Steel Inc",
      domain: "canosteelinc.com",
      industry: "Structural Steel & Fabrication",
      theme: "steel",
      gradient: "from-[#0f172a] to-[#334155]",
      accentColor: "text-blue-500",
      bgAccent: "bg-blue-500",
      headline: "Precision Structural Steel",
      subheadline: "Custom steel fabrication, welding, and structural metal framing projects.",
      ctaText: "Discuss Project",
      mockupIcon: <Hammer className="w-5 h-5 text-blue-500" />,
    },
    {
      url: "https://rdperezconstruction.com/",
      name: "RD Perez Construction",
      domain: "rdperezconstruction.com",
      industry: "General Contracting & Construction",
      theme: "general-contracting",
      gradient: "from-[#1c1917] to-[#44403c]",
      accentColor: "text-amber-600",
      bgAccent: "bg-amber-600",
      headline: "Engineered for Excellence",
      subheadline: "Commercial and residential general contractor delivering quality renovations.",
      ctaText: "Contact Estimator",
      mockupIcon: <Layers className="w-5 h-5 text-amber-600" />,
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white text-black font-sans pb-24" id="work-page">
      {/* HEADER SECTION */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 pt-4 pb-8">
        {/* Animated Tech Logo (similar to M-Files style in user's new image) */}
        <div className="flex flex-col items-center justify-center mb-2">
          <motion.svg
            viewBox="10 0 60 40"
            className="w-20 h-10 text-black fill-current"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible"
          >
            {/* Shape 1 (left parallelogram) */}
            <motion.path
              d="M 15 38 L 27 38 L 40 14 L 28 14 Z"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            />
            {/* Shape 2 (middle parallelogram) */}
            <motion.path
              d="M 37 24 L 49 24 L 62 0 L 50 0 Z"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.15 } }
              }}
            />
            {/* Shape 3 (right square) */}
            <motion.path
              d="M 54 38 L 64 38 L 64 28 L 54 28 Z"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } }
              }}
            />
          </motion.svg>
          <span className="text-xl font-black tracking-tight text-black lowercase font-sans mt-2">
            revero<span className="text-neutral-400">.</span>
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-7xl font-black tracking-tight text-center text-black leading-tight uppercase font-sans max-w-4xl mx-auto"
        >
          Websites That<br />Mean Business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[#6B6B6B] text-center text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Explore a curated selection of ultra-high-converting websites we designed and engineered for industry-leading service providers.
        </motion.p>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="max-w-6xl mx-auto px-6" id="portfolio-grid-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sites.map((site, index) => {
            const isLightBg = site.textColor !== undefined;
            return (
              <motion.div
                key={site.url}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                className="group flex flex-col h-full bg-white border border-[#E5E5E5] rounded-3xl p-5 hover:border-black hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                {/* BROWSER CONTAINER (THE PREVIEW) */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E5E5E5]/80 shadow-sm flex flex-col select-none">
                  {/* Browser top-bar */}
                  <div className="flex items-center justify-between px-3 py-2 bg-[#F5F5F5] border-b border-[#E5E5E5]">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="flex items-center gap-1.5 px-4 py-0.5 rounded bg-white text-[9px] font-mono font-medium text-neutral-400 tracking-tight w-40 justify-center border border-black/5">
                      <Globe size={8} />
                      <span className="truncate">{site.domain}</span>
                    </div>
                    <div className="w-10" />
                  </div>

                  {/* Browser content: Stylized Hero Preview */}
                  <div className={`flex-1 bg-gradient-to-br ${site.gradient} p-4 flex flex-col justify-between relative overflow-hidden`}>
                    {/* Background visual detail */}
                    <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-4 translate-y-4">
                      {site.mockupIcon}
                    </div>

                    {/* Mock Website Navbar */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div className="flex items-center gap-1">
                        {React.cloneElement(site.mockupIcon, { className: "w-3 h-3 " + site.accentColor })}
                        <span className={`text-[9px] font-black tracking-tight uppercase ${isLightBg ? "text-slate-900" : "text-white"}`}>
                          {site.name.split(" ")[0]}
                        </span>
                      </div>
                      <div className={`flex gap-2 text-[7px] font-mono tracking-wider uppercase ${isLightBg ? "text-slate-500" : "text-white/60"}`}>
                        <span>About</span>
                        <span>Services</span>
                        <span>Contact</span>
                      </div>
                    </div>

                    {/* Mock Website Hero Info */}
                    <div className="space-y-2 py-4 my-auto relative z-10">
                      <h3 className={`text-base font-black tracking-tight leading-snug uppercase ${isLightBg ? "text-slate-900" : "text-white"}`}>
                        {site.headline}
                      </h3>
                      <p className={`text-[8px] leading-relaxed max-w-[90%] line-clamp-2 ${isLightBg ? "text-slate-500" : "text-white/70"}`}>
                        {site.subheadline}
                      </p>
                    </div>

                    {/* Mock Website Footer Row */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/10 mt-auto">
                      <span className={`text-[7px] font-mono uppercase tracking-widest ${isLightBg ? "text-slate-500" : "text-white/50"}`}>
                        ★ ★ ★ ★ ★ TOP RATED
                      </span>
                      <div className={`px-2 py-1 rounded-full text-[7px] font-mono font-bold tracking-widest uppercase ${site.bgAccent} text-black`}>
                        {site.ctaText}
                      </div>
                    </div>
                  </div>
                </div>

                {/* INFO FOOTER SECTION */}
                <div className="mt-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#6B6B6B] tracking-wider uppercase block">
                      {site.industry}
                    </span>
                    <h2 className="text-xl font-extrabold text-black font-sans leading-tight">
                      {site.name}
                    </h2>
                  </div>

                  {/* Beautiful Structured Link Border */}
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-between p-3.5 border-2 border-black rounded-2xl bg-[#F5F5F5] hover:bg-black text-black hover:text-white transition-all duration-300 group/link"
                  >
                    <span className="font-mono text-xs font-bold uppercase tracking-widest pl-1">
                      LAUNCH SITE
                    </span>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/10 group-hover/link:bg-white/10 group-hover/link:border-white/20 transition-all text-[10px] font-mono font-semibold text-black group-hover/link:text-white">
                      <span>{site.domain}</span>
                      <ArrowUpRight size={12} className="group-hover/link:rotate-45 transition-transform duration-300" />
                    </div>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
