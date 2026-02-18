// import React from 'react';

// const HistoryPage = () => {
//   const milestones = [
//     {
//       year: '1991',
//       title: 'The Beginning',
//       desc: "Established as Nepal's first reconditioned vehicle house and bike rental service in Western Nepal under the visionary leadership of Mr. Dhruba Thapa.",
//     },
//     {
//       year: 'Early 1990s',
//       title: 'Auto Expansion',
//       desc: 'Expanded into auto dealerships and motor showrooms across Western Nepal, building a reputation for integrity and quality in every transaction.',
//     },
//     {
//       year: '2000s',
//       title: 'Strategic Diversification',
//       desc: 'Boldly diversified into real estate, hospitality, and banking sectors — transforming from an auto business into a multi-sector conglomerate.',
//     },
//     {
//       year: '2010s',
//       title: 'Nationwide Growth',
//       desc: 'Grew to 22+ branches nationwide with 200+ employees. Added agriculture, education, and housing to the portfolio, cementing national leadership.',
//     },
//     {
//       year: '2020s',
//       title: 'Global Partnerships',
//       desc: 'Became authorized dealer for global brands — Force Motors, Maxus, Deepal. Launched Himalaya Trust for community upliftment in education, healthcare, and environment.',
//     },
//     {
//       year: 'Today',
//       title: 'A Thriving Conglomerate',
//       desc: 'A thriving conglomerate approaching $100M annual turnover, contributing significantly to Nepal\'s economy with modern infrastructure across 7+ sectors.',
//     },
//   ];

//   const phases = [
//     {
//       period: '1991–2000',
//       title: 'Pioneering Autos',
//       desc: 'From two-wheelers to full vehicle sales, Himalaya Organization set industry standards in Pokhara and across Western Nepal, establishing trust that remains the cornerstone of our identity.',
//     },
//     {
//       period: '2001–2015',
//       title: 'Diversification Era',
//       desc: 'Entered real estate, hotels blending Nepali hospitality, financial services, sustainable farming, and educational institutions — always prioritizing ethical growth and long-term value.',
//     },
//     {
//       period: '2016–Now',
//       title: 'Modern Expansion',
//       desc: 'Nationwide presence in Kathmandu, Itahari, and beyond. Focus on innovation, social responsibility via Himalaya Trust, and economic empowerment for communities across Nepal.',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white font-sans">

//       {/* Hero */}
//       <section className="relative bg-[#1a2838] text-white overflow-hidden">
//         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #c4a787 0, #c4a787 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>
//         <div className="relative z-10 px-6 md:px-16 lg:px-24 py-28 md:py-36">
//           <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-6">Our Journey</p>
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-4xl">
//             Three Decades of
//             <span className="block text-[#c4a787]  mt-2">Resilience & Growth</span>
//           </h1>
//           <p className="mt-8 text-gray-300 max-w-2xl text-lg leading-relaxed">
//             Since 1991, Himalaya Organization has transformed from a pioneering vehicle rental service into Nepal's leading business conglomerate, driven by vision, hard work, and innovation.
//           </p>
//         </div>
//       </section>

//       {/* Founding Story */}
//       <section className="px-6 md:px-16 lg:px-24 py-24 max-w-5xl mx-auto">
//         <div className="grid md:grid-cols-5 gap-12 items-start">
//           <div className="md:col-span-2">
//             <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Founding Story</p>
//             <div className="text-6xl font-light text-[#1a2838] leading-none">1991</div>
//             <div className="w-16 h-1 bg-[#c4a787] mt-4"></div>
//           </div>
//           <div className="md:col-span-3 space-y-5 text-gray-600 leading-relaxed">
//             <p>In 1991, under the leadership of Founder and Chairman <strong className="text-[#1a2838]">Mr. Dhruba Thapa</strong>, Himalaya Organization launched as Nepal's first reconditioned vehicle house and bike rental firm in Western Nepal.</p>
//             <p>This bold entry into the auto sector — focusing on buy/sell/exchange of pre-owned two-wheelers — laid the foundation for expansion amid economic challenges that would have deterred lesser visionaries.</p>
//             <p>What began as hands-on transactions evolved through relentless adaptability, building a reputation for integrity and excellence that has persisted for over 30 years without major setbacks.</p>
//           </div>
//         </div>
//       </section>

//       {/* Timeline */}
//       <section className="bg-[#f8f5f1] px-6 md:px-16 lg:px-24 py-24">
//         <div className="text-center mb-20">
//           <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Milestones</p>
//           <h2 className="text-4xl md:text-5xl font-light text-[#1a2838]">Timeline of Growth</h2>
//         </div>
//         <div className="max-w-4xl mx-auto relative">
//           {/* Vertical line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-[#c4a787]/30 top-0 bottom-0 hidden md:block"></div>
//           <div className="space-y-12">
//             {milestones.map((m, i) => (
//               <div key={i} className={`flex flex-col md:flex-row items-start gap-8 relative ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
//                 {/* Content */}
//                 <div className="flex-1">
//                   <div className={`bg-white p-8 relative ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
//                     <div className="absolute top-0 left-0 w-12 h-1 bg-[#c4a787]"></div>
//                     <p className="text-[#c4a787] text-sm uppercase tracking-widest mb-2">{m.year}</p>
//                     <h3 className="text-xl font-semibold text-[#1a2838] mb-3">{m.title}</h3>
//                     <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
//                   </div>
//                 </div>
//                 {/* Center dot */}
//                 <div className="hidden md:flex w-6 flex-shrink-0 items-center justify-center">
//                   <div className="w-4 h-4 rounded-full bg-[#c4a787] border-4 border-[#f8f5f1] mt-8"></div>
//                 </div>
//                 <div className="flex-1 hidden md:block"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Growth Phases */}
//       <section className="px-6 md:px-16 lg:px-24 py-24">
//         <div className="text-center mb-16">
//           <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Our Evolution</p>
//           <h2 className="text-4xl md:text-5xl font-light text-[#1a2838]">Key Growth Phases</h2>
//         </div>
//         <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {phases.map((phase, i) => (
//             <div key={i} className="border border-gray-100 p-10 hover:border-[#c4a787] transition-colors group">
//               <p className="text-[#c4a787] text-xs uppercase tracking-widest mb-3">{phase.period}</p>
//               <h3 className="text-xl font-semibold text-[#1a2838] mb-4 group-hover:text-[#c4a787] transition-colors">{phase.title}</h3>
//               <p className="text-gray-600 text-sm leading-relaxed">{phase.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Legacy */}
//       <section className="bg-[#1a2838] text-white px-6 md:px-16 lg:px-24 py-24 text-center">
//         <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Our Legacy</p>
//         <h2 className="text-4xl md:text-5xl font-light mb-8 max-w-3xl mx-auto">Built on Four Pillars, Guided by One Purpose</h2>
//         <p className="text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
//           Our history is a testament to hard work, integrity, adaptability, and excellence — four pillars that have kept us setback-free. Today, we drive Nepal's markets while fostering entrepreneurship and community welfare.
//         </p>
//         <div className="flex flex-wrap gap-4 justify-center">
//           <a href="/career" className="bg-[#c4a787] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#b39670] transition-colors">Join Our Story</a>
//           <a href="/about" className="border border-white/30 text-white px-8 py-4 text-sm uppercase tracking-widest hover:border-[#c4a787] hover:text-[#c4a787] transition-colors">Learn More</a>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default HistoryPage;


import React from 'react';

const HistoryPage = () => {
  const milestones = [
    {
      year: '1991',
      title: 'The Beginning',
      desc: "Established as Nepal's first reconditioned vehicle house and bike rental service in Western Nepal under the visionary leadership of Mr. Dhruba Thapa.",
    },
    {
      year: 'Early 1990s',
      title: 'Auto Expansion',
      desc: 'Expanded into auto dealerships and motor showrooms across Western Nepal, building a reputation for integrity and quality in every transaction.',
    },
    {
      year: '2000s',
      title: 'Strategic Diversification',
      desc: 'Boldly diversified into real estate, hospitality, and banking sectors — transforming from an auto business into a multi-sector conglomerate.',
    },
    {
      year: '2010s',
      title: 'Nationwide Growth',
      desc: 'Grew to 22+ branches nationwide with 200+ employees. Added agriculture, education, and housing to the portfolio, cementing national leadership.',
    },
    {
      year: '2020s',
      title: 'Global Partnerships',
      desc: 'Became authorized dealer for global brands — Force Motors, Maxus, Deepal. Launched Himalaya Trust for community upliftment in education, healthcare, and environment.',
    },
    {
      year: 'Today',
      title: 'A Thriving Conglomerate',
      desc: "A thriving conglomerate approaching $100M annual turnover, contributing significantly to Nepal's economy with modern infrastructure across 7+ sectors.",
    },
  ];

  const phases = [
    {
      period: '1991–2000',
      title: 'Pioneering Autos',
      desc: 'From two-wheelers to full vehicle sales, Himalaya Organization set industry standards in Pokhara and across Western Nepal, establishing trust that remains the cornerstone of our identity.',
    },
    {
      period: '2001–2015',
      title: 'Diversification Era',
      desc: 'Entered real estate, hotels blending Nepali hospitality, financial services, sustainable farming, and educational institutions — always prioritizing ethical growth and long-term value.',
    },
    {
      period: '2016–Now',
      title: 'Modern Expansion',
      desc: 'Nationwide presence in Kathmandu, Itahari, and beyond. Focus on innovation, social responsibility via Himalaya Trust, and economic empowerment for communities across Nepal.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ══════════════════════════════════════
          ENHANCED HERO — Split layout
          Left: dark panel with text + stats
          Right: full-height image area
          ══════════════════════════════════════ */}
      <section className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[680px]">

        {/* ── LEFT: Dark text panel ── */}
        <div className="relative w-full lg:w-[52%] bg-[#1a2838] overflow-hidden flex items-center">
          {/* Subtle diagonal pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #c4a787 0, #c4a787 1px, transparent 0, transparent 50%)',
              backgroundSize: '20px 20px',
            }}
          />

          <div className="relative z-10 px-8 md:px-14 lg:px-16 py-20 lg:py-28 w-full">
            {/* Label with line */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#c4a787]" />
              <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs">Our Journey</p>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-xl">
              <span className="text-white">Three Decades of</span>
              <span className="block text-[#c4a787]  mt-3">Resilience &amp; Growth</span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-white/60 max-w-md text-base leading-relaxed">
              Since 1991, Himalaya Organization has transformed from a pioneering vehicle rental
              service into Nepal's leading business conglomerate, driven by vision, hard work,
              and unwavering innovation.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-white/10">
              {[
                { num: '1991', label: 'Est.' },
                { num: '30+', label: 'Years' },
                { num: '22+', label: 'Branches' },
                { num: '7+', label: 'Sectors' },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-light text-[#c4a787]">{s.num}</p>
                  <p className="text-white/40 text-xs mt-1 uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Image panel ── */}
        <div className="w-full lg:w-[48%] min-h-[340px] lg:min-h-full relative overflow-hidden">
       <img className=' w-full h-full' src="/images/history.jpeg" alt="" />
      

     

          {/* Blend edge with left panel */}

          {/* Decorative "Founded" badge on image */}
          <div className="absolute bottom-8 right-8 bg-black/30 backdrop-blur-sm border border-white/20 px-5 py-4 hidden md:block">
            <p className="text-white/50 text-[10px] uppercase tracking-[0.3em]">Founded</p>
            <p className="text-white text-3xl font-light mt-1">1991</p>
          </div>
        </div>
      </section>

      {/* ── Founding Story ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Founding Story</p>
            <div className="text-6xl font-light text-[#1a2838] leading-none">1991</div>
            <div className="w-16 h-1 bg-[#c4a787] mt-4" />
          </div>
          <div className="md:col-span-3 space-y-5 text-gray-600 leading-relaxed">
            <p>
              In 1991, under the leadership of Founder and Chairman{' '}
              <strong className="text-[#1a2838]">Mr. Dhruba Thapa</strong>, Himalaya Organization
              launched as Nepal's first reconditioned vehicle house and bike rental firm in Western Nepal.
            </p>
            <p>
              This bold entry into the auto sector — focusing on buy/sell/exchange of pre-owned
              two-wheelers — laid the foundation for expansion amid economic challenges that would have
              deterred lesser visionaries.
            </p>
            <p>
              What began as hands-on transactions evolved through relentless adaptability, building a
              reputation for integrity and excellence that has persisted for over 30 years without major
              setbacks.
            </p>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-[#f8f5f1] px-6 md:px-16 lg:px-24 py-24">
        <div className="text-center mb-20">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Milestones</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a2838]">Timeline of Growth</h2>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-[#c4a787]/30 top-0 bottom-0 hidden md:block" />
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-start gap-8 relative ${
                  i % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className={`bg-white p-8 relative ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="absolute top-0 left-0 w-12 h-1 bg-[#c4a787]" />
                    <p className="text-[#c4a787] text-sm uppercase tracking-widest mb-2">{m.year}</p>
                    <h3 className="text-xl font-semibold text-[#1a2838] mb-3">{m.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-6 flex-shrink-0 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#c4a787] border-4 border-[#f8f5f1] mt-8" />
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Growth Phases ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24">
        <div className="text-center mb-16">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Our Evolution</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a2838]">Key Growth Phases</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {phases.map((phase, i) => (
            <div
              key={i}
              className="border border-gray-100 p-10 hover:border-[#c4a787] transition-colors group"
            >
              <p className="text-[#c4a787] text-xs uppercase tracking-widest mb-3">{phase.period}</p>
              <h3 className="text-xl font-semibold text-[#1a2838] mb-4 group-hover:text-[#c4a787] transition-colors">
                {phase.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{phase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Legacy CTA ── */}
      <section className="bg-[#1a2838] text-white px-6 md:px-16 lg:px-24 py-24 text-center">
        <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Our Legacy</p>
        <h2 className="text-4xl md:text-5xl font-light mb-8 max-w-3xl mx-auto">
          Built on Four Pillars, Guided by One Purpose
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Our history is a testament to hard work, integrity, adaptability, and excellence — four pillars
          that have kept us setback-free. Today, we drive Nepal's markets while fostering entrepreneurship
          and community welfare.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/career"
            className="bg-[#c4a787] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#b39670] transition-colors"
          >
            Join Our Story
          </a>
          <a
            href="/aboutorganization"
            className="border border-white/30 text-white px-8 py-4 text-sm uppercase tracking-widest hover:border-[#c4a787] hover:text-[#c4a787] transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

    </div>
  );
};

export default HistoryPage;