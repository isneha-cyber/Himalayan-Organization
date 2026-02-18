import React from 'react';
import { Link } from 'react-router-dom';

const AboutOrganization = () => {
  const sectors = [
    { sector: 'Automobiles', focus: 'Dealerships, sales, rentals for Force Motors, Maxus, Deepal' },
    { sector: 'Real Estate', focus: 'Residential and commercial developments' },
    { sector: 'Hospitality', focus: 'Hotels and resorts blending comfort with Nepali hospitality' },
    { sector: 'Banking & Finance', focus: 'Tailored loans and investment solutions' },
    { sector: 'Agriculture', focus: 'Sustainable farming and food security initiatives' },
    { sector: 'Education', focus: 'Institutions shaping future leaders' },
    { sector: 'Housing', focus: 'Modern, affordable living spaces' },
  ];

  const values = [
    { title: 'Hard Work', desc: 'Relentless dedication fuels our growth across every sector and challenge we face.' },
    { title: 'Integrity', desc: 'Every decision upholds trust and transparency with clients, partners, and communities.' },
    { title: 'Adaptability', desc: 'We evolve with market needs and innovations to stay ahead of the curve.' },
    { title: 'Excellence', desc: 'Superior quality defines our offerings and the experience we deliver.' },
  ];

  // Mosaic grid data - reorganized for better mobile experience
  const mosaicCells = [
    // Row 1
    {
      type: 'stat',
      theme: 'dark',
      label: 'Employees',
      number: '200+',
      description: 'A strong team of 200+ professionals driving Nepal\'s economy across 7+ sectors.',
    },
    {
      type: 'photo',
      src: '/images/employee.jpg',
      alt: 'Himalaya Organization team',
      gradient: 'from-slate-500 via-slate-400 to-slate-600',
    },
    {
      type: 'stat',
      theme: 'dark',
      label: 'Branches',
      number: '22+',
      description: 'Nationwide presence across 22+ branches — from Kathmandu to Itahari and beyond.',
    },
    {
      type: 'photo',
      src: '/images/h5.webp',
      alt: 'Himalaya Organization branch office',
      gradient: 'from-stone-500 via-amber-400 to-stone-600',
    },
    // Row 2
    {
      type: 'photo',
      src: '/images/commitment.jpg',
      alt: 'Himalaya Organization operations',
      gradient: 'from-slate-600 via-slate-500 to-neutral-700',
    },
    {
      type: 'stat',
      theme: 'cream',
      label: 'Commitment',
      number: '30+',
      description: 'Over 30 years of unwavering commitment to clients, communities, and Nepal\'s growth.',
    },
    {
      type: 'photo',
      src: '/images/annual.jpg',
      alt: 'Himalaya Organization leadership',
      gradient: 'from-neutral-500 via-stone-400 to-neutral-700',
    },
    {
      type: 'stat',
      theme: 'cream',
      label: 'Annual Turnover',
      number: '$100M',
      description: 'Approaching $100 million — a milestone built on excellence and consistent delivery.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Intro header - Responsive */}
      <section className="bg-white px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 md:py-20 border-t border-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 sm:gap-8 lg:gap-16">
          {/* Left: headline */}
          <div className="flex-1">
            <p className="text-[#c4a787] uppercase tracking-[0.25em] text-xs sm:text-sm mb-3 sm:mb-4">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#0d1c29] leading-tight">
              Leading with <br className="hidden sm:block" />
              Passion &amp; Purpose.
            </h2>
          </div>
          {/* Right: description */}
          <div className="lg:w-[48%]">
            <p className="text-[#0d1c29]/70 text-base sm:text-lg leading-relaxed">
              Experience our passion for service and dedication to purpose as we lead with integrity
              and excellence across every sector of Nepal's growing economy creating value for our
              clients, employees, and communities.
            </p>
          </div>
        </div>
      </section>

      {/* FIXED: Mosaic Grid - Better for mobile */}
      <section className="w-full">
        {/* Mobile: Stack vertically with better proportions */}
        <div className="block sm:hidden">
          {mosaicCells.map((cell, i) => (
            <div key={i} className="w-full">
              {cell.type === 'stat' ? (
                /* Mobile Stat Card - Horizontal layout for better readability */
                <div
                  className={`w-full flex items-start gap-4 p-5 ${
                    cell.theme === 'dark' ? 'bg-[#0d1c29]' : 'bg-[#ead3bc]'
                  }`}
                  style={{ minHeight: '140px' }}
                >
                  {/* Left side with number */}
                  <div className="flex-shrink-0 w-20">
                    <p
                      className={`text-2xl font-light leading-none ${
                        cell.theme === 'dark' ? 'text-white' : 'text-[#0d1c29]'
                      }`}
                    >
                      {cell.number}
                    </p>
                    <p
                      className={`text-[10px] uppercase tracking-[0.2em] mt-1 ${
                        cell.theme === 'dark' ? 'text-white/60' : 'text-[#0d1c29]/60'
                      }`}
                    >
                      {cell.label}
                    </p>
                  </div>
                  
                  {/* Right side with description */}
                  <div className="flex-1">
                    <p
                      className={`text-xs leading-relaxed ${
                        cell.theme === 'dark' ? 'text-white/80' : 'text-[#0d1c29]/80'
                      }`}
                    >
                      {cell.description}
                    </p>
                  </div>
                </div>
              ) : (
                /* Mobile Photo Card - Full width with aspect ratio */
                <div className="w-full aspect-[16/9] relative overflow-hidden">
                  {cell.src ? (
                    <img
                      src={cell.src}
                      alt={cell.alt}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br ${cell.gradient} flex items-center justify-center text-white text-sm p-6 text-center">
                            ${cell.alt}
                          </div>
                        `;
                      }}
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${cell.gradient}`} />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tablet and Desktop: Grid layout */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {mosaicCells.map((cell, i) => (
              <div key={i} className="aspect-square">
                {cell.type === 'stat' ? (
                  /* STAT CARD - Tablet/Desktop */
                  <div
                    className={`w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 ${
                      cell.theme === 'dark' ? 'bg-[#0d1c29]' : 'bg-[#ead3bc]'
                    }`}
                  >
                    {/* Label row */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div
                        className={`w-4 sm:w-5 md:w-7 h-px flex-shrink-0 ${
                          cell.theme === 'dark' ? 'bg-[#c4a787]' : 'bg-[#0d1c29]/40'
                        }`}
                      />
                      <p
                        className={`text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] ${
                          cell.theme === 'dark' ? 'text-white/80' : 'text-[#0d1c29]/70'
                        }`}
                      >
                        {cell.label}
                      </p>
                    </div>

                    {/* Number + description */}
                    <div>
                      <p
                        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-none mb-2 sm:mb-3 ${
                          cell.theme === 'dark' ? 'text-white' : 'text-[#0d1c29]'
                        }`}
                      >
                        {cell.number}
                      </p>
                      <p
                        className={`text-[10px] sm:text-xs md:text-sm leading-relaxed ${
                          cell.theme === 'dark' ? 'text-white/60' : 'text-[#0d1c29]/60'
                        }`}
                      >
                        {cell.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* PHOTO CARD - Tablet/Desktop */
                  <div className="w-full h-full relative overflow-hidden">
                    {cell.src ? (
                      <img
                        src={cell.src}
                        alt={cell.alt}
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div class="w-full h-full bg-gradient-to-br ${cell.gradient} flex items-center justify-center text-white text-xs p-4 text-center">
                              ${cell.alt}
                            </div>
                          `;
                        }}
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${cell.gradient}`} />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story - Responsive */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1a2838] leading-tight mb-6 sm:mb-8">
              From Humble Beginnings to a National Powerhouse
            </h2>
            <div className="space-y-4 sm:space-y-5 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                Himalaya Organization began in 1991 with a bold vision: Nepal's first reconditioned vehicle
                house and bike rental service. Under the visionary leadership of Founder and Chairman{' '}
                <strong className="text-[#1a2838]">Mr. Dhruba Thapa</strong>, we expanded from humble auto
                dealings into a nationwide powerhouse.
              </p>
              <p>
                Today, we operate as a dynamic conglomerate — authorized dealers for brands like Force Motors,
                Maxus, and Deepal — while venturing into real estate, hospitality, financial services,
                sustainable agriculture, educational initiatives, and modern housing solutions.
              </p>
              <p>
                Our unwavering commitment extends beyond business. We established the{' '}
                <strong className="text-[#1a2838]">Himalaya Trust</strong> to uplift communities through
                education, healthcare, and environmental efforts, creating lasting social impact.
              </p>
            </div>
          </div>
          <div className="mt-6 lg:mt-0">
            <div className="bg-[#f8f5f1] rounded-sm p-6 sm:p-8 md:p-10 lg:p-12 relative">
              <div className="absolute top-0 left-0 w-16 sm:w-20 md:w-24 h-1 bg-[#c4a787]" />
              <blockquote className="text-xl sm:text-2xl font-light text-[#1a2838] leading-relaxed">
                "A journey of perseverance, from two-wheelers to a multi-sector empire that builds
                Nepal's tomorrow."
              </blockquote>
              <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1a2838] flex items-center justify-center text-[#c4a787] font-semibold text-base sm:text-lg">
                  DT
                </div>
                <div>
                  <p className="text-[#1a2838] font-semibold text-sm sm:text-base">Mr. Dhruba Thapa</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Founder &amp; Chairman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Responsive */}
      <section className="bg-[#1a2838] text-white px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 md:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4">
            Our Purpose
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">Mission &amp; Vision</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'Mission',
              text: 'To forge sustainable businesses that propel Nepal\'s economy, deliver premium products and services, foster a secure and rewarding workplace, and champion ethical practices, social responsibility, and environmental stewardship.',
            },
            {
              title: 'Vision',
              text: 'To emerge as Nepal\'s most reliable pillar of progress, diversifying the economy by merging global trends with local ingenuity, empowering entrepreneurs, and nurturing thriving communities.',
            },
          ].map((item, i) => (
            <div key={i} className="border border-white/10 p-6 sm:p-8 md:p-10 relative">
              <div className="absolute top-0 left-0 w-12 sm:w-16 h-1 bg-[#c4a787]" />
              <h3 className="text-[#c4a787] uppercase tracking-widest text-xs sm:text-sm mb-4 sm:mb-6">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values - Responsive */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 md:py-24 bg-[#f8f5f1]">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4">
            What Drives Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1a2838]">Core Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {values.map((val, i) => (
            <div
              key={i}
              className="bg-white p-6 sm:p-8 group hover:bg-[#1a2838] transition-colors duration-300 cursor-default"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#c4a787] mb-4 sm:mb-6 flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
                0{i + 1}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1a2838] group-hover:text-[#c4a787] mb-2 sm:mb-3 transition-colors">
                {val.title}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-300 text-xs sm:text-sm leading-relaxed transition-colors">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership - Responsive */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-16 sm:py-20 md:py-24">
        <div className="mx-auto">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4">
            Our Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1a2838] mb-8 sm:mb-12 md:mb-16">
            Guided by Vision
          </h2>
          <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 items-start">
            <div className="w-full md:w-1/3">
              <div className="w-full aspect-square bg-[#1a2838] overflow-hidden flex items-center justify-center">
                <img
                  src="/images/message.jpg"
                  alt="Mr. Dhruba Thapa"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <span class="text-4xl sm:text-5xl font-light text-[#c4a787]">DT</span>
                    `;
                  }}
                />
              </div>
              <div className="mt-4 sm:mt-6">
                <h3 className="text-lg sm:text-xl font-semibold text-[#1a2838]">Mr. Dhruba Thapa</h3>
                <p className="text-[#c4a787] text-xs sm:text-sm uppercase tracking-widest mt-1">
                  Founder &amp; Chairman
                </p>
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-4 sm:space-y-5 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                A trailblazer whose journey from bike rentals to a multi-sector empire inspires Nepal's
                new entrepreneurs. His philosophy of perseverance has guided the organization setback-free
                for over three decades.
              </p>
              <p>
                Under his visionary leadership, Himalaya Organization has grown from a single auto venture
                to a conglomerate operating across 7+ sectors, employing 200+ professionals, and contributing
                meaningfully to Nepal's economic landscape.
              </p>
              <div className="flex flex-wrap gap-6 sm:gap-8 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100">
                <div>
                  <p className="text-xl sm:text-2xl font-light text-[#1a2838]">1991</p>
                  <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest">Founded</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-light text-[#1a2838]">$100M</p>
                  <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest">Approaching Turnover</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Sectors - Responsive */}
      <section className="bg-[#f8f5f1] px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 md:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1a2838]">Business Sectors</h2>
        </div>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="inline-block min-w-full align-middle px-4 sm:px-0">
            <table className="w-full max-w-4xl mx-auto min-w-[600px] sm:min-w-0">
              <thead>
                <tr className="border-b-2 border-[#c4a787]">
                  <th className="text-left py-3 sm:py-4 px-2 sm:px-4 text-[#1a2838] uppercase tracking-widest text-xs font-semibold">
                    Sector
                  </th>
                  <th className="text-left py-3 sm:py-4 px-2 sm:px-4 text-[#1a2838] uppercase tracking-widest text-xs font-semibold">
                    Key Focus Areas
                  </th>
                </tr>
              </thead>
              <tbody>
                {sectors.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200 hover:bg-white transition-colors group">
                    <td className="py-4 sm:py-5 px-2 sm:px-4 font-semibold text-[#1a2838] group-hover:text-[#c4a787] transition-colors text-sm sm:text-base">
                      {row.sector}
                    </td>
                    <td className="py-4 sm:py-5 px-2 sm:px-4 text-gray-600 text-xs sm:text-sm">
                      {row.focus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA - Responsive */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 md:py-24 bg-[#1a2838] text-white text-center">
        <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4">
          Get In Touch
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 md:mb-8">
          Ready to Partner for Success?
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base px-4">
          Contact us to explore opportunities in our sectors or join our growing team of 200+ professionals.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-[#c4a787] text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-widest hover:bg-[#b39670] transition-colors"
          >
            Contact Us
          </Link>
          <Link
            to="/career"
            className="w-full sm:w-auto border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-widest hover:border-[#c4a787] hover:text-[#c4a787] transition-colors"
          >
            Explore Careers
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutOrganization;