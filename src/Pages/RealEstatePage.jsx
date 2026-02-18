import React from 'react';
import { ArrowRight } from 'lucide-react';

const StickySection = ({ imageLeft = true, image, quote, children }) => {
  const imageCol = (
    <div className="w-full lg:w-1/2 relative">
      {/* Mobile image - visible on small screens */}
      <div className="lg:hidden w-full h-[300px] relative mb-8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131f2f]/80 via-[#131f2f]/20 to-transparent" />
        {/* Quote card - also visible on mobile */}
        {quote && (
          <div className="absolute bottom-6 left-4 right-4">
            <div className="bg-[#131f2f]/70 backdrop-blur-sm border border-[#c4a787]/20 p-4">
              <span className="text-[#c4a787] text-3xl leading-none font-serif">"</span>
              <p className="text-white text-xs leading-relaxed mt-1">{quote}</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Desktop sticky image - hidden on mobile */}
      <div className="hidden lg:block sticky top-0 h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131f2f]/80 via-[#131f2f]/20 to-transparent" />
        {/* Quote card */}
        {quote && (
          <div className="absolute bottom-10 left-8 right-8">
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

export const RealEstatePage = () => {
  const services = [
    'Residential Apartments & Villas',
    'Commercial Complexes',
    'Gated Communities',
    'Affordable Housing',
    'Land Development & Plot Sales',
    'Property Management',
  ];

  const offerings = [
    { title: 'Residential Projects', desc: 'Apartments, villas, and gated communities designed for modern Nepali living.' },
    { title: 'Commercial Spaces', desc: 'Complexes, offices, and retail spaces in strategic city-center locations.' },
    { title: 'Affordable Housing', desc: 'Eco-friendly, affordable housing initiatives making quality living accessible.' },
    { title: 'Land & Property', desc: 'Land development, plot sales, and professional property management services.' },
  ];

  return (
    <div className="bg-white font-sans">
      <section className="relative bg-[#1a2838] text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #c4a787 0, #c4a787 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 px-6 md:px-16 lg:px-24 py-28">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-6">Real Estate</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight max-w-4xl">
            Building Nepal's
            <span className="block text-[#c4a787] mt-2">Dreams</span>
          </h1>
          <p className="mt-8 text-gray-300 max-w-xl text-lg leading-relaxed">
            From modern residences to thriving commercial spaces, Himalaya Organization delivers quality real estate solutions crafted for today's Nepal.
          </p>
        </div>
      </section>

      <StickySection
        imageLeft={true}
        image="/images/realestate.webp"
        quote="We're committed to building more than structures — we build communities and futures for Nepal."
      >
        <div className="px-8 md:px-14 py-20 bg-[#f8f5f1]">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Our Services</p>
          <h2 className="text-4xl font-light text-[#1a2838] mb-4">Sustainable Spaces for Modern Nepal</h2>
          <p className="text-gray-500 leading-relaxed mb-4 text-sm">
            Our real estate arm develops sustainable residential and commercial projects that enhance urban living and investment potential across Nepal's key cities — with transparency and long-term value at the core.
          </p>
          <p className="text-gray-500 leading-relaxed mb-10 text-sm">
            Whether you're a first-time homebuyer, a seasoned investor, or a business seeking commercial space, we offer strategic locations, transparent dealings, and robust post-sale support.
          </p>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <p className="text-[#c4a787] text-xs uppercase tracking-widest font-medium">Real Estate Services</p>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            {services.map((s) => <ServiceLink key={s} label={s} />)}
          </div>
        </div>
        <div className="px-8 md:px-14 py-20 bg-white">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Overview</p>
          <h2 className="text-4xl font-light text-[#1a2838] mb-6">Long-Term Value, Transparent Dealings</h2>
          <p className="text-gray-500 leading-relaxed mb-10 text-sm">
            Strategic locations, transparent dealings, and post-sale support ensure long-term value for homeowners and investors alike. Our reputation, built over 30+ years, is your guarantee of quality and integrity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {offerings.map((o, i) => <OfferingCard key={i} index={i} {...o} />)}
          </div>
          <CTACard
            title="Find Your Dream Property in Nepal!"
            desc="Schedule a site visit or request our brochures. Our advisors are here to guide every step."
          />
        </div>
      </StickySection>
    </div>
  );
};