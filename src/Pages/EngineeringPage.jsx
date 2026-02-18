import React from 'react';
import { ArrowRight } from 'lucide-react';

const StickySection = ({ imageLeft = true, image, quote, children }) => {
  const imageCol = (
    <div className="lg:block lg:w-1/2 relative h-[300px] lg:h-auto">
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
            <div className="bg-[#131f2f]/70 backdrop-blur-sm border border-[#c4a787]/20 p-4 lg:p-6">
              <span className="text-[#c4a787] text-3xl lg:text-4xl leading-none font-serif">"</span>
              <p className="text-white text-xs lg:text-sm leading-relaxed mt-2">{quote}</p>
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
    <span className="text-[#1a2838] group-hover:text-[#c4a787] text-xs sm:text-sm font-medium transition-colors duration-200 uppercase tracking-wide">
      {label}
    </span>
    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#c4a787] group-hover:translate-x-1 transition-transform duration-200" />
  </div>
);

// ─── Offering numbered card ──────────────────────────────────────────────────
const OfferingCard = ({ index, title, desc }) => (
  <div className="bg-white p-4 sm:p-6 lg:p-8 group hover:bg-[#1a2838] transition-colors duration-300 border border-gray-100">
    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#c4a787] flex items-center justify-center text-white text-[10px] sm:text-xs font-semibold mb-4 sm:mb-6">
      {String(index + 1).padStart(2, '0')}
    </div>
    <h3 className="font-semibold text-[#1a2838] group-hover:text-[#c4a787] mb-2 sm:mb-3 text-xs sm:text-sm transition-colors">{title}</h3>
    <p className="text-gray-500 group-hover:text-gray-300 text-[10px] sm:text-xs leading-relaxed transition-colors">{desc}</p>
  </div>
);

// ─── CTA card (dark) ─────────────────────────────────────────────────────────
const CTACard = ({ title, desc }) => (
  <div className="bg-[#1a2838] p-6 sm:p-8 relative overflow-hidden">
    {/* logo watermark */}
    <div className="absolute top-4 right-4 opacity-5">
      <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-white rounded-full" />
    </div>
    <h3 className="text-white text-lg sm:text-xl font-light mb-2 sm:mb-3 leading-snug">{title}</h3>
    <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{desc}</p>
    <a
      href="/contact"
      className="inline-block bg-[#c4a787] text-white text-[10px] sm:text-xs uppercase tracking-widest px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#b39670] transition-colors"
    >
      Get in Touch
    </a>
  </div>
);

export const EngineeringPage = () => {
  
  const services = [
    'Civil Construction',
    'Mechanical & Electrical Engineering',
    'Structural Fabrication',
    'Machinery Maintenance',
    'Industrial Setup & Commissioning',
    'Engineering Consulting',
  ];

  const offerings = [
    { title: 'Civil Construction', desc: 'Roads, bridges, buildings, and infrastructure projects delivered on time and to specification.' },
    { title: 'Mechanical & Electrical', desc: 'Comprehensive mechanical and electrical engineering services for industrial and commercial needs.' },
    { title: 'Fabrication & Maintenance', desc: 'Precision fabrication, machinery maintenance, and complete industrial setup services.' },
    { title: 'Engineering Consulting', desc: 'Expert consulting for auto, real estate, and agricultural engineering projects.' },
  ];

  return (
    <div className="bg-white font-sans">
      <section className="relative bg-[#1a2838] text-white overflow-hidden min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh] flex items-center">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #c4a787 0, #c4a787 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 px-4 sm:px-6 md:px-16 lg:px-24 py-16 sm:py-20 lg:py-28">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 sm:mb-6">Engineering</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light leading-tight max-w-4xl">
            Precision Engineering
            <span className="block text-[#c4a787] mt-1 sm:mt-2">Excellence</span>
          </h1>
          <p className="mt-4 sm:mt-6 lg:mt-8 text-gray-300 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed">
            Himalaya Organization's engineering division delivers robust solutions for infrastructure, manufacturing, and beyond — with skilled teams and state-of-the-art technology.
          </p>
        </div>
      </section>

      <StickySection
        imageLeft={true}
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
        quote="We're dedicated to delivering precision engineering that powers Nepal's infrastructure for generations."
      >
        <div className="px-4 sm:px-6 md:px-10 lg:px-14 py-10 sm:py-12 lg:py-20 bg-[#f8f5f1]">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-4">Our Services</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#1a2838] mb-3 sm:mb-4">Complex Projects, Expert Solutions</h2>
          <p className="text-gray-500 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">
            Leveraging our cross-sector infrastructure expertise, Himalaya Organization's engineering division tackles complex projects from inception to completion with highly skilled teams and modern equipment.
          </p>
          <p className="text-gray-500 leading-relaxed mb-6 sm:mb-8 lg:mb-10 text-xs sm:text-sm">
            Whether you need civil construction, MEP services, or industrial setup — we combine technical mastery with uncompromising safety standards to deliver results on time and within budget.
          </p>
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <p className="text-[#c4a787] text-[10px] sm:text-xs uppercase tracking-widest font-medium">Engineering Services</p>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            {services.map((s) => <ServiceLink key={s} label={s} />)}
          </div>
        </div>
        
        <div className="px-4 sm:px-6 md:px-10 lg:px-14 py-10 sm:py-12 lg:py-20 bg-white">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-4">Overview</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#1a2838] mb-4 sm:mb-6">On-Time, On-Budget, Every Time</h2>
          <p className="text-gray-500 leading-relaxed mb-6 sm:mb-8 lg:mb-10 text-xs sm:text-sm">
            On-time delivery, safety compliance, and innovation at competitive costs — backed by 30+ years of Himalaya Organization's commitment to excellence in every project we undertake across Nepal.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
            {offerings.map((o, i) => <OfferingCard key={i} index={i} {...o} />)}
          </div>
          <CTACard
            title="Start Your Engineering Project Today!"
            desc="Request a quote or schedule an engineering assessment — our team is ready to deliver."
          />
        </div>
      </StickySection>
    </div>
  );
};