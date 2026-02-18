import React from 'react';

export const AutomobilePage = () => {
  const offerings = [
    { title: 'Authorized Dealerships', desc: 'Authorized sales and service for Force Motors, Maxus, and Deepal vehicles with full manufacturer support.' },
    { title: 'Reconditioned Vehicles', desc: 'Quality pre-owned vehicle sales with buy/sell/exchange programs — Nepal\'s original reconditioned vehicle house since 1991.' },
    { title: 'Rentals & Fleet', desc: 'Short and long-term rentals for bikes, cars, and commercial fleets with comprehensive after-sales support.' },
    { title: 'Financing', desc: 'Integrated financing partnerships for seamless vehicle purchases with competitive interest rates.' },
  ];

  const brands = ['Force Motors', 'Maxus', 'Deepal'];

  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="relative bg-[#1a2838] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #c4a787 0, #c4a787 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 px-6 md:px-16 lg:px-24 py-28 md:py-36">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-6">Business Sector</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-4xl">
            Driving Nepal
            <span className="block text-[#c4a787] italic mt-2">Forward</span>
          </h1>
          <p className="mt-8 text-gray-300 max-w-2xl text-lg leading-relaxed">
            Himalaya Organization leads Nepal's auto industry as authorized dealers for Force Motors, Maxus, Deepal, and more — offering sales, rentals, and service excellence nationwide.
          </p>
          <div className="flex gap-4 mt-12 flex-wrap">
            {brands.map((b, i) => (
              <span key={i} className="border border-[#c4a787] text-[#c4a787] px-5 py-2 text-sm uppercase tracking-widest">{b}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 py-24 bg-[#f8f5f1]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Overview</p>
            <div className="grid md:grid-cols-2 gap-12">
              <h2 className="text-4xl font-light text-[#1a2838]">Pioneering Auto Excellence Since 1991</h2>
              <p className="text-gray-600 leading-relaxed">Pioneering since 1991 with Nepal's first reconditioned vehicle house, our automobile division has grown into a trusted name for two-wheelers, cars, and commercial vehicles. We blend global brands with local needs across 22+ branches nationwide.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((o, i) => (
              <div key={i} className="bg-white p-8 group hover:bg-[#1a2838] transition-colors duration-300">
                <div className="w-8 h-8 bg-[#c4a787] flex items-center justify-center text-white text-xs font-semibold mb-6">0{i+1}</div>
                <h3 className="font-semibold text-[#1a2838] group-hover:text-[#c4a787] mb-3 transition-colors">{o.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 py-24 bg-[#1a2838] text-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Why Choose Us</p>
            <h2 className="text-4xl font-light mb-6">Expert Service, Nationwide</h2>
            <p className="text-gray-300 leading-relaxed">Backed by expert technicians and modern showrooms in Kathmandu, Pokhara, Itahari, and beyond — delivering reliability without compromise for over three decades.</p>
          </div>
          <div className="space-y-4">
            {['Expert certified technicians', 'Genuine parts guarantee', 'Modern showrooms nationwide', 'After-sales support & warranty', 'Integrated financing options'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-[#c4a787] rounded-full flex-shrink-0"></div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 py-20 text-center bg-white">
        <h2 className="text-3xl font-light text-[#1a2838] mb-6">Ready to Drive Nepal Forward?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">Book a test drive or inquire about our vehicles and services today.</p>
        <a href="/contact" className="bg-[#1a2838] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#c4a787] transition-colors inline-block">Book a Test Drive</a>
      </section>
    </div>
  );
};