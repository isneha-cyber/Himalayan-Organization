import React from 'react';
import { Zap, User, Mountain } from 'lucide-react';

const WhoWeArePage = () => {
  const pillars = [
    { title: 'Hard Work', meaning: 'Relentless drive for sustainable growth in every sector we enter.' },
    { title: 'Integrity', meaning: 'Transparency and trust in every transaction, every relationship.' },
    { title: 'Adaptability', meaning: 'Evolving with market demands and innovations since 1991.' },
    { title: 'Excellence', meaning: 'Premium quality across all sectors — non-negotiable.' },
  ];

  const identityPoints = [
    {
      icon: Zap,
      title: 'Pioneering Spirit',
      desc: 'From two-wheeler exchanges in 1991 to multi-sector leadership without major setbacks — we have always led, never followed.',
    },
    {
      icon: User,
      title: 'Expert Teams',
      desc: 'Complete groups of specialists backed by modern infrastructure in every venture, across every city we operate in.',
    },
    {
      icon: Mountain,
      title: 'Nation Builders',
      desc: 'Driving Nepal\'s economy, fostering entrepreneurs, and supporting communities via Himalaya Trust initiatives in education and healthcare.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero */}
      <section className="relative bg-[#1a2838] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #c4a787 0, #c4a787 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 px-6 md:px-16 lg:px-24 py-28 md:py-36">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-6">Identity</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-4xl">
            We Are
            <span className="block text-[#c4a787]  mt-2">Himalaya Organization</span>
          </h1>
          <p className="mt-8 text-gray-300 max-w-2xl text-lg leading-relaxed">
            A dynamic family of companies and people powering Nepal's progress since 1991 — rooted in integrity, adaptability, and excellence.
          </p>
        </div>
      </section>

      {/* Identity */}
      <section className="px-6 md:px-16 lg:px-24 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <div>
            <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Our Identity</p>
            <h2 className="text-4xl font-light text-[#1a2838] mb-8">More Than a Business — A Family</h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>We are Himalaya Organization Pvt. Ltd., one of Nepal's leading corporate houses, born from a simple vision in Western Nepal: Nepal's first reconditioned vehicle house and bike rental service.</p>
              <p>Today, we're a diversified powerhouse led by Chairman <strong className="text-[#1a2838]">Mr. Dhruba Thapa</strong>, employing 200+ experts across 22+ branches nationwide, shaping the economic landscape of modern Nepal.</p>
              <p>As a unified family of businesses, we blend global trends with local needs — dominating automobiles while expanding into real estate, hospitality, finance, sustainable agriculture, education, and housing.</p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-gray-100 pt-10">
              <div>
                <p className="text-4xl font-light text-[#c4a787]">1991</p>
                <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest">Founded</p>
              </div>
              <div>
                <p className="text-4xl font-light text-[#c4a787]">$100M</p>
                <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest">Approaching Turnover</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {identityPoints.map((point, i) => {
              const IconComponent = point.icon;
              return (
                <div key={i} className="bg-[#f8f5f1] p-8 hover:bg-[#1a2838] group transition-colors duration-300 cursor-default">
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 text-[#1a2838] group-hover:text-[#c4a787] transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a2838] group-hover:text-[#c4a787] mb-3 transition-colors">{point.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="bg-[#f8f5f1] px-6 md:px-16 lg:px-24 py-24">
        <div className="text-center mb-16">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Our Foundation</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a2838]">Core Pillars</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pillars.map((p, i) => (
            <div key={i} className="bg-white p-8 text-center group hover:bg-[#1a2838] transition-colors duration-300">
              <div className="w-12 h-12 border-2 border-[#c4a787] rounded-full flex items-center justify-center mx-auto mb-6 text-[#c4a787] font-semibold text-sm group-hover:bg-[#c4a787] group-hover:text-white transition-colors">0{i+1}</div>
              <h3 className="text-lg font-semibold text-[#1a2838] group-hover:text-[#c4a787] mb-3 transition-colors">{p.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">{p.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why We Matter */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-[#1a2838] text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Why We Matter</p>
            <h2 className="text-4xl font-light mb-8">Nepal's Reliable Pillar of Progress</h2>
            <p className="text-gray-300 leading-relaxed mb-6">We're more than businesses — we're Nepal's reliable pillar, with annual turnover nearing $100 million, creating meaningful jobs in Kathmandu, Pokhara, Itahari, and beyond.</p>
            <p className="text-gray-300 leading-relaxed">Our mission: Deliver top products and services, ensure safe and rewarding workplaces, and create positive societal impact through ethics and sustainability.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '200+', label: 'Employees' },
              { num: '22+', label: 'Branches' },
              { num: '7+', label: 'Sectors' },
              { num: '30+', label: 'Years' },
            ].map((stat, i) => (
              <div key={i} className="border border-white/10 p-8 text-center hover:border-[#c4a787] transition-colors">
                <p className="text-4xl font-light text-[#c4a787]">{stat.num}</p>
                <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="px-6 md:px-16 lg:px-24 py-24 text-center bg-white">
        <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Be Part of Us</p>
        <h2 className="text-4xl md:text-5xl font-light text-[#1a2838] mb-8">Join Our Family</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">Whether partnering, investing, or building a career, discover how we shape tomorrow together.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/contact" className="bg-[#1a2838] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#c4a787] transition-colors">Get In Touch</a>
          <a href="/career" className="border border-[#1a2838] text-[#1a2838] px-8 py-4 text-sm uppercase tracking-widest hover:border-[#c4a787] hover:text-[#c4a787] transition-colors">View Careers</a>
        </div>
      </section>

    </div>
  );
};

export default WhoWeArePage;