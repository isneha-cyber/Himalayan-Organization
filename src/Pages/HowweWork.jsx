import React from 'react';

const HowWeWorkPage = () => {
  const steps = [
    {
      num: '01',
      title: 'Consultation',
      desc: 'We begin by deeply understanding your goals through in-depth discussions, site visits, and thorough needs assessment — no assumptions, only listening.',
    },
    {
      num: '02',
      title: 'Planning',
      desc: 'We develop customized strategies with realistic timelines, transparent budgets, and comprehensive risk assessments tailored to your specific context.',
    },
    {
      num: '03',
      title: 'Execution',
      desc: 'Our expert teams deploy resources efficiently, maintaining quality through regular reviews and transparent communication at every stage.',
    },
    {
      num: '04',
      title: 'Delivery & Support',
      desc: 'We hand over with thorough training, warranties, and ongoing assistance — because our commitment doesn\'t end at delivery.',
    },
  ];

  const principles = [
    { principle: 'Client-First', application: 'Tailored solutions for automobiles, housing, hospitality, and every sector we serve.' },
    { principle: 'Transparency', application: 'Real-time updates and ethical dealings — no hidden costs, no surprises.' },
    { principle: 'Innovation', application: 'Global brands like Force Motors integrated with deep local market understanding.' },
    { principle: 'Sustainability', application: 'Eco-friendly practices embedded in agriculture, construction, and daily operations.' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero */}
      <section className="relative bg-[#1a2838] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #c4a787 0, #c4a787 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 px-6 md:px-16 lg:px-24 py-28 md:py-36">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-6">Our Process</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-4xl">
            Efficient Processes,
            <span className="block text-[#c4a787]  mt-2">Lasting Results</span>
          </h1>
          <p className="mt-8 text-gray-300 max-w-2xl text-lg leading-relaxed">
            At Himalaya Organization, we deliver excellence through structured, transparent workflows powered by expert teams and modern infrastructure across all sectors.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-[#f8f5f1]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Our Approach</p>
            <h2 className="text-4xl font-light text-[#1a2838] mb-8">A Proven Cycle of Success</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              We operate as a cohesive family of businesses, starting with client needs and ending with sustainable success. Every project follows a proven cycle: consultation, planning, execution, and support — ensuring adaptability and zero major setbacks over 30+ years.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our 200+ specialists in Kathmandu, Pokhara, and beyond use cutting-edge tools for seamless operations — from vehicle sales to real estate development, we bring the same rigor to every engagement.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '$100M', label: 'Approaching Turnover' },
              { num: '30+', label: 'Years Setback-Free' },
              { num: '200+', label: 'Specialists Nationwide' },
              { num: '22+', label: 'Operational Branches' },
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 border-b-2 border-[#c4a787]">
                <p className="text-3xl font-light text-[#1a2838]">{s.num}</p>
                <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Workflow */}
      <section className="px-6 md:px-16 lg:px-24 py-24">
        <div className="text-center mb-16">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Step by Step</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a2838]">Our Workflow</h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative border border-gray-100 p-10 hover:border-[#c4a787] transition-colors group">
                <div className="absolute top-0 left-0 w-16 h-1 bg-[#c4a787]"></div>
                <p className="text-6xl font-light text-[#f0ebe4] absolute top-6 right-6">{step.num}</p>
                <p className="text-[#c4a787] text-sm uppercase tracking-widest mb-3">{step.num}</p>
                <h3 className="text-xl font-semibold text-[#1a2838] mb-4 group-hover:text-[#c4a787] transition-colors">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
          {/* Flow Arrow */}
          <div className="flex justify-center mt-12 gap-4 items-center text-[#c4a787] flex-wrap">
            {['Consult', '→', 'Plan', '→', 'Execute', '→', 'Deliver'].map((item, i) => (
              <span key={i} className={`text-sm ${item === '→' ? 'text-gray-300' : 'uppercase tracking-widest font-semibold'}`}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="bg-[#1a2838] text-white px-6 md:px-16 lg:px-24 py-24">
        <div className="text-center mb-16">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">What Guides Us</p>
          <h2 className="text-4xl md:text-5xl font-light">Key Principles</h2>
        </div>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#c4a787]">
                <th className="text-left py-4 px-4 text-[#c4a787] uppercase tracking-widest text-xs font-medium">Principle</th>
                <th className="text-left py-4 px-4 text-[#c4a787] uppercase tracking-widest text-xs font-medium">How We Apply It</th>
              </tr>
            </thead>
            <tbody>
              {principles.map((row, i) => (
                <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="py-5 px-4 font-semibold text-white">{row.principle}</td>
                  <td className="py-5 px-4 text-gray-300 text-sm leading-relaxed">{row.application}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Why It Works */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-[#f8f5f1] text-center">
        <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Why It Works</p>
        <h2 className="text-4xl md:text-5xl font-light text-[#1a2838] mb-8 max-w-3xl mx-auto">This Approach Fuels Our $100M+ Growth</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">Our methodical, client-first approach has enabled nationwide expansion, community impact via Himalaya Trust, and consistent, setback-free growth since 1991.</p>
        <a href="/contact" className="bg-[#1a2838] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#c4a787] transition-colors inline-block">Get a Free Consultation</a>
      </section>

    </div>
  );
};

export default HowWeWorkPage;