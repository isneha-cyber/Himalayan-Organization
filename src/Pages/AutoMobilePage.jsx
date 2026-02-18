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
  <div className="bg-white p-6 md:p-8 group hover:bg-[#1a2838] transition-colors duration-300 border border-gray-100">
    <div className="w-8 h-8 bg-[#c4a787] flex items-center justify-center text-white text-xs font-semibold mb-6">
      {String(index + 1).padStart(2, '0')}
    </div>
    <h3 className="font-semibold text-[#1a2838] group-hover:text-[#c4a787] mb-3 text-sm transition-colors">{title}</h3>
    <p className="text-gray-500 group-hover:text-gray-300 text-xs leading-relaxed transition-colors">{desc}</p>
  </div>
);

// ─── CTA card (dark) ─────────────────────────────────────────────────────────
const CTACard = ({ title, desc }) => (
  <div className="bg-[#1a2838] p-6 md:p-8 relative overflow-hidden">
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

export const AutoMobilePage = () => {
  const services = [
    'Authorized Vehicle Sales',
    'Reconditioned Vehicle Exchange',
    'Fleet Rentals & Leasing',
    'After-Sales Service',
    'Genuine Parts Supply',
    'Vehicle Financing',
  ];

  const offerings = [
    { title: 'Authorized Dealerships', desc: 'Authorized sales and service for Force Motors, Maxus, and Deepal with full manufacturer support and warranty.' },
    { title: 'Reconditioned Vehicles', desc: "Quality pre-owned vehicle sales with buy/sell/exchange programs — Nepal's original reconditioned vehicle house since 1991." },
    { title: 'Rentals & Fleet', desc: 'Short and long-term rentals for bikes, cars, and commercial fleets with comprehensive after-sales support.' },
    { title: 'Financing', desc: 'Integrated financing partnerships for seamless vehicle purchases with competitive interest rates.' },
  ];

  return (
    <div className="bg-white font-sans">
      {/* ── Hero ── */}
      <section className="relative bg-[#1a2838] text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #c4a787 0, #c4a787 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 px-6 md:px-16 lg:px-24 py-20 md:py-28">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-6">Auto Mobile</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight max-w-4xl">
            Driving Nepal
            <span className="block text-[#c4a787] mt-2">Forward</span>
          </h1>
          <p className="mt-8 text-gray-300 max-w-xl text-base md:text-lg leading-relaxed">
            Himalaya Organization leads Nepal's auto industry as authorized dealers for Force Motors, Maxus, and Deepal — offering sales, rentals, and service excellence since 1991.
          </p>
          <div className="flex gap-3 mt-8 md:mt-10 flex-wrap">
            {['Force Motors', 'Maxus', 'Deepal'].map((b) => (
              <span key={b} className="border border-[#c4a787] text-[#c4a787] px-4 py-1.5 md:px-5 md:py-2 text-xs uppercase tracking-widest">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 1: image left, content right ── */}
      <StickySection
        imageLeft={true}
        image="images/h5.webp"
        quote="We're dedicated to empowering your journey on Nepal's roads — every kilometre, every destination."
      >
        <div className="px-6 md:px-8 lg:px-14 py-12 md:py-20 bg-[#f8f5f1]">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1a2838] mb-4">Drive Success with Expert Auto Solutions</h2>
          <p className="text-gray-500 leading-relaxed mb-4 text-sm">
            Our automobile division encompasses a wide array of services designed to support Nepal's drivers and businesses. From initial purchase to ongoing maintenance, we provide personalized solutions that keep you moving.
          </p>
          <p className="text-gray-500 leading-relaxed mb-10 text-sm">
            Whether you're an individual seeking your first vehicle, a company building a fleet, or a business needing reliable transportation solutions, our team is here to deliver the right result.
          </p>

          {/* Service list */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <p className="text-[#c4a787] text-xs uppercase tracking-widest font-medium">Automobile Services</p>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            {services.map((s) => <ServiceLink key={s} label={s} />)}
          </div>
        </div>

        <div className="px-6 md:px-8 lg:px-14 py-12 md:py-20 bg-white">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Overview</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1a2838] mb-6">Pioneering Auto Excellence Since 1991</h2>
          <p className="text-gray-500 leading-relaxed mb-10 text-sm">
            Pioneering since 1991 with Nepal's first reconditioned vehicle house, our automobile division has grown into a trusted name for two-wheelers, cars, and commercial vehicles — blending global brands with local needs across 22+ branches.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {offerings.map((o, i) => <OfferingCard key={i} index={i} {...o} />)}
          </div>
          <CTACard
            title="Ignite Your Journey on Nepal's Roads!"
            desc="Ready to find your perfect vehicle? Contact us to explore our range and benefit from expert guidance."
          />
        </div>
      </StickySection>
    </div>
  );
};