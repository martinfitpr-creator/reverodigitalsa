import React from "react";

const sites = [
  { url: "https://hugobuildersllc.com/", name: "hugobuildersllc.com" },
  { url: "https://allcityjanitorialservice.com/", name: "allcityjanitorialservice.com" },
  { url: "https://leongtoroofing.com/", name: "leongtoroofing.com" },
  { url: "https://rooferzcorp.com/", name: "rooferzcorp.com" },
  { url: "https://alexandersafetysolutions.com/", name: "alexandersafetysolutions.com" },
  { url: "https://clearandbrightsolutions.com/", name: "clearandbrightsolutions.com" },
  { url: "https://axelslandscapingdesign.com/", name: "axelslandscapingdesign.com" },
  { url: "https://canosteelinc.com/", name: "canosteelinc.com" },
  { url: "https://rdperezconstruction.com/", name: "rdperezconstruction.com" },
];

export default function WorkShowcase() {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-black text-center">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sites.map((site) => (
  <a
    key={site.url}
    href={site.url}
    target="_blank"
    rel="noopener noreferrer"
    className="block text-center text-blue-600 hover:underline border border-gray-300 rounded-xl p-4 hover:border-black hover:shadow-lg transition"
  >
  {site.name}
</a>
        ))}
      </div>
    </div>
  );
}
