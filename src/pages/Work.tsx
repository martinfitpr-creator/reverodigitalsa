import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Globe, Shield, Home, Sparkles, Droplet, Sun, Hammer, Layers, Scissors, X, ChevronLeft, ChevronRight, MapPin, Phone, CheckCircle2 } from "lucide-react";

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

// Delta Thatch real project images
const deltaThatchImages = [
  {
    src: "/images/delta-thatch/work-01-frame.png",
    alt: "Thatched roof frame being constructed",
    caption: "Frame Construction",
    tag: "Structure",
  },
  {
    src: "/images/delta-thatch/work-02-thatching.png",
    alt: "Team thatching a residential roof",
    caption: "Active Thatching — Residential",
    tag: "In Progress",
  },
  {
    src: "/images/delta-thatch/work-03-scaffolding.jpg",
    alt: "Thatchers on scaffolding laying thatch",
    caption: "Large Commercial Re-Thatch",
    tag: "In Progress",
  },
  {
    src: "/images/delta-thatch/work-04-completed.jpg",
    alt: "Completed thatched home exterior",
    caption: "Completed Residential Project",
    tag: "Completed",
  },
  {
    src: "/images/delta-thatch/work-05-lapa.jpg",
    alt: "Completed thatched lapa structure",
    caption: "Open Lapa — Bush Setting",
    tag: "Completed",
  },
];

export default function Work() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + deltaThatchImages.length) % deltaThatchImages.length : 0
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % deltaThatchImages.length : 0
    );

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
      ctaText: "Get Free Estimate",
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

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
              onClick={closeLightbox}
            >
              <X size={22} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={deltaThatchImages[lightboxIndex].src}
                alt={deltaThatchImages[lightboxIndex].alt}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <div className="mt-4 text-center">
                <span className="text-white/60 text-xs font-mono uppercase tracking-widest">
                  {lightboxIndex + 1} / {deltaThatchImages.length} — {deltaThatchImages[lightboxIndex].caption}
                </span>
              </div>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER SECTION */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4 pt-4 pb-8">
        <div className="flex flex-col items-center justify-center mb-2">
          <motion.svg
            viewBox="10 0 60 40"
            className="w-20 h-10 text-black fill-current"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M 15 38 L 27 38 L 40 14 L 28 14 Z"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            />
            <motion.path
              d="M 37 24 L 49 24 L 62 0 L 50 0 Z"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.15 } }
              }}
            />
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

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* FEATURED PROJECT — DELTA THATCH                           */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 mb-24" id="featured-delta-thatch">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl overflow-hidden border-2 border-black bg-[#0f0d0a]"
        >
          {/* Top accent bar */}
          <div className="bg-amber-500 px-8 py-2 flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-black uppercase">Featured Client Project</span>
            <span className="ml-auto text-[9px] font-mono font-bold text-black/70 uppercase tracking-wider">South Africa · Gauteng</span>
          </div>

          {/* Hero large image */}
          <div className="relative overflow-hidden" style={{ height: "420px" }}>
            <img
              src="/images/delta-thatch/work-04-completed.jpg"
              alt="Completed Delta Thatch residential project"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 cursor-zoom-in"
              onClick={() => openLightbox(3)}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0a] via-[#0f0d0a]/30 to-transparent pointer-events-none" />
            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
              <div>
                <p className="text-amber-400 text-[10px] font-mono font-bold tracking-[0.3em] uppercase mb-2">
                  Thatching & Lapa Specialists
                </p>
                <h2 className="text-white text-4xl md:text-5xl font-black tracking-tight leading-tight">
                  Delta Thatch
                </h2>
                <p className="text-white/60 text-sm mt-1 font-sans">Residential & Commercial Thatching — Gauteng, SA</p>
              </div>
              <div className="hidden md:flex flex-col items-end gap-2">
                <div className="flex items-center gap-1.5 text-white/50 text-xs font-mono">
                  <MapPin size={11} />
                  <span>Gauteng, South Africa</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/50 text-xs font-mono">
                  <CheckCircle2 size={11} className="text-amber-400" />
                  <span className="text-amber-400">Website Delivered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Photo gallery grid */}
          <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {deltaThatchImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative group cursor-pointer rounded-xl overflow-hidden aspect-[4/3] bg-black/30"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-2">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[9px] font-mono text-white/80 uppercase tracking-wider leading-tight">
                    {img.caption}
                  </span>
                </div>
                {/* Tag badge */}
                <div className={`absolute top-2 left-2 px-1.5 py-0.5 rounded-full text-[8px] font-mono font-bold uppercase tracking-wider ${
                  img.tag === "Completed"
                    ? "bg-amber-500 text-black"
                    : img.tag === "In Progress"
                    ? "bg-white/20 text-white"
                    : "bg-white/10 text-white/70"
                }`}>
                  {img.tag}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services + CTA footer */}
          <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Services delivered */}
            <div className="md:col-span-2 bg-white/5 rounded-2xl p-5 space-y-3 border border-white/10">
              <p className="text-amber-400 text-[9px] font-mono font-bold tracking-[0.25em] uppercase">What We Built</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Custom website design",
                  "WhatsApp lead capture",
                  "Photo gallery integration",
                  "Google Maps embed",
                  "Mobile-first layout",
                  "SEO optimised pages",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white/70 text-xs font-sans">
                    <CheckCircle2 size={11} className="text-amber-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-amber-500 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <p className="text-black/70 text-[9px] font-mono font-bold tracking-widest uppercase mb-2">Get the same</p>
                <p className="text-black text-lg font-black leading-tight">Want a site like this for your business?</p>
              </div>
              <a
                href={`https://wa.me/27713315825?text=Hi%20Revero%2C%20I%20saw%20the%20Delta%20Thatch%20project%20and%20I%27m%20interested%20in%20a%20website.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-between bg-black text-white text-xs font-mono font-bold uppercase tracking-widest px-4 py-3 rounded-xl hover:bg-neutral-900 transition-all"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="max-w-6xl mx-auto px-6" id="portfolio-grid-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex items-baseline gap-4"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#6B6B6B] uppercase">More Projects</span>
          <div className="flex-1 h-px bg-[#E5E5E5]" />
        </motion.div>

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
                        {React.cloneElement(site.mockupIcon as React.ReactElement, { className: "w-3 h-3 " + site.accentColor })}
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
