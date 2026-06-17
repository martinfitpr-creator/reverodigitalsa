import React from "react";

export default function Automation() {
  return (
    <div className="pt-24 max-w-6xl mx-auto px-6 text-center" id="automation-page">
      {/* Status Badge */}
      <div className="flex justify-center mb-6">
        <span className="bg-black text-white text-[10px] font-mono font-bold tracking-widest px-4 py-1.5 rounded-full uppercase">
          🚀 LAUNCHING SOON
        </span>
      </div>
      {/* Headline */}
      <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-black mb-6">
        Systems that operate automatically.
      </h1>
      {/* Subheadline */}
      <p className="text-[#6B6B6B] text-center text-base md:text-lg max-w-2xl mx-auto mb-12">
        Inspired by elite global agencies like Morningside AI, we are constructing custom business
        workflows powered by n8n. Say goodbye to manual administrative chores soon.
      </p>
      {/* Feature list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 border border-[#E5E5E5] rounded-xl hover:border-black transition">
          <h2 className="text-2xl font-bold mb-3">WhatsApp Lead Qualifier</h2>
          <p className="text-sm text-[#6B6B6B]">Prospect submits website contact form</p>
        </div>
        <div className="p-6 border border-[#E5E5E5] rounded-xl hover:border-black transition">
          <h2 className="text-2xl font-bold mb-3">Real-time CRM Auto‑Sync</h2>
          <p className="text-sm text-[#6B6B6B]">Client receives payment completion invoice</p>
        </div>
        <div className="p-6 border border-[#E5E5E5] rounded-xl hover:border-black transition">
          <h2 className="text-2xl font-bold mb-3">Auto Google Review Funnel</h2>
          <p className="text-sm text-[#6B6B6B]">Service delivery ticket marked as Done</p>
        </div>
        <div className="p-6 border border-[#E5E5E5] rounded-xl hover:border-black transition">
          <h2 className="text-2xl font-bold mb-3">Why n8n Rules</h2>
          <p className="text-sm text-[#6B6B6B]">
            n8n handles secure authentication, runs node‑based conditional logical routing, and
            connects any modern custom API instantly.
          </p>
        </div>
      </div>
    </div>
  );
}
