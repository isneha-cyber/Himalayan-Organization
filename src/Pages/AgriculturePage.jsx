import React from 'react';
import { ArrowRight } from 'lucide-react';

const StickySection = ({ imageLeft = true, image, quote, children }) => {
  const imageCol = (
    <div className="w-full lg:w-1/2 relative h-[300px] lg:h-auto">
      <div className="lg:sticky lg:top-0 h-full lg:h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131f2f]/80 via-[#131f2f]/20 to-transparent" />
        {/* Quote card */}
        {quote && (
          <div className="absolute bottom-10 left-4 right-4 lg:left-8 lg:right-8">
            <div className="bg-[#131f2f]/70 backdrop-blur-sm border border-[#c4a787]/20 p-6">
              <span className="text-[#c4a787] text-4xl leading-none font-serif">"</span>
              <p className="text-white text-sm leading-relaxed mt-2">{quote}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const contentCol = (
    <div className="w-full lg:w-1/2">
      {children}
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {imageLeft ? (
        <>
          {imageCol}
          {contentCol}
        </>
      ) : (
        <>
          {contentCol}
          {imageCol}
        </>
      )}
    </div>
  );
};

// ─── Service link item (arrow list) ─────────────────────────────────────────
const ServiceLink = ({ label }) => (
  <div className="group flex items-center justify-between py-4 border-b border-gray-100 cursor-pointer hover:border-[#c4a787] transition-colors duration-200">
    <span className="text-[#1a2838] group-hover:text-[#c4a787] text-sm font-medium transition-colors duration-200 uppercase tracking-wide">
      {label}
    </span>
    <ArrowRight className="w-4 h-4 text-[#c4a787] group-hover:translate-x-1 transition-transform duration-200" />
  </div>
);

// ─── Offering numbered card ──────────────────────────────────────────────────
const OfferingCard = ({ index, title, desc }) => (
  <div className="bg-white p-8 group hover:bg-[#1a2838] transition-colors duration-300 border border-gray-100">
    <div className="w-8 h-8 bg-[#c4a787] flex items-center justify-center text-white text-xs font-semibold mb-6">
      {String(index + 1).padStart(2, '0')}
    </div>
    <h3 className="font-semibold text-[#1a2838] group-hover:text-[#c4a787] mb-3 text-sm transition-colors">{title}</h3>
    <p className="text-gray-500 group-hover:text-gray-300 text-xs leading-relaxed transition-colors">{desc}</p>
  </div>
);

// ─── CTA card (dark) ─────────────────────────────────────────────────────────
const CTACard = ({ title, desc }) => (
  <div className="bg-[#1a2838] p-8 relative overflow-hidden">
    {/* logo watermark */}
    <div className="absolute top-4 right-4 opacity-5">
      <div className="w-16 h-16 border-2 border-white rounded-full" />
    </div>
    <h3 className="text-white text-xl font-light mb-3 leading-snug">{title}</h3>
    <p className="text-white/60 text-sm leading-relaxed mb-6">{desc}</p>
    <a
      href="/contact"
      className="inline-block bg-[#c4a787] text-white text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-[#b39670] transition-colors"
    >
      Get in Touch
    </a>
  </div>
);

export const AgriculturePage = () => {
  const services = [
    'High-Yield Seeds & Fertilizers',
    'Modern Irrigation Systems',
    'Greenhouse & Farm Mechanization',
    'Organic Farming Training',
    'Market Linkage Programs',
    'Agri-Finance & Export Support',
  ];

  const offerings = [
    { title: 'Seeds & Equipment', desc: 'High-yield seeds, premium fertilizers, and modern farming equipment supply.' },
    { title: 'Modern Farm Systems', desc: 'Irrigation systems, greenhouses, and farm mechanization for improved yields.' },
    { title: 'Organic Training', desc: 'Organic farming training programs and direct market linkages for farmers.' },
    { title: 'Agri-Finance & Export', desc: 'Dedicated agri-business financing and export facilitation support.' },
  ];

  return (
    <div className="bg-white font-sans">
      <section className="relative bg-[#1a2838] text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #c4a787 0, #c4a787 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 px-6 md:px-16 lg:px-24 py-28">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-6">Agriculture</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight max-w-4xl">
            Sustainable Farming
            <span className="block text-[#c4a787] mt-2">for Tomorrow</span>
          </h1>
          <p className="mt-8 text-gray-300 max-w-xl text-lg leading-relaxed">
            Himalaya Organization advances Nepal's agriculture with innovative, eco-friendly solutions for food security and rural prosperity.
          </p>
        </div>
      </section>

      <StickySection
        imageLeft={true}
        image="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80"
        quote="Rooted in Nepal's soil — we're growing a food-secure and economically resilient nation for generations."
      >
        <div className="px-6 md:px-8 lg:px-14 py-12 md:py-20 bg-[#f8f5f1]">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1a2838] mb-4">From Seeds to Supply Chains</h2>
          <p className="text-gray-500 leading-relaxed mb-4 text-sm">
            Investing in modern agrotech, we support Nepal's farmers and markets across the entire agricultural value chain. From certified seed supply to irrigation systems and export facilitation, we're with you at every step.
          </p>
          <p className="text-gray-500 leading-relaxed mb-10 text-sm">
            We believe sustainable agriculture is at the heart of Nepal's prosperity. By equipping farmers with the right tools, knowledge, and market access, we're building a food-secure and economically resilient nation.
          </p>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <p className="text-[#c4a787] text-xs uppercase tracking-widest font-medium">Agricultural Services</p>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            {services.map((s) => <ServiceLink key={s} label={s} />)}
          </div>
        </div>
        
        <div className="px-6 md:px-8 lg:px-14 py-12 md:py-20 bg-white">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Overview</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1a2838] mb-6">Modern Agriculture, Lasting Impact</h2>
          <p className="text-gray-500 leading-relaxed mb-10 text-sm">
            Proven results in boosting yields while preserving Nepal's fertile lands — our commitment to eco-friendly farming practices and farmer empowerment drives sustainable growth across the nation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {offerings.map((o, i) => <OfferingCard key={i} index={i} {...o} />)}
          </div>
          <CTACard
            title="Grow Nepal's Future Together!"
            desc="Source products, join our training programs, or partner with us to advance Nepal's agricultural sector."
          />
        </div>
      </StickySection>
    </div>
  );
};