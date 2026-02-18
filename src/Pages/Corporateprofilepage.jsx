import React from 'react';

const CorporateProfilePage = () => {
  const snapshot = [
    { label: 'Founded', value: '1991 A.D.', sub: 'Western Nepal' },
    { label: 'Employees', value: '200+', sub: 'Nationwide' },
    { label: 'Branches', value: '22+', sub: 'Kathmandu, Pokhara, Itahari & more' },
    { label: 'Annual Turnover', value: '~$100M', sub: 'And growing' },
    { label: 'Business Sectors', value: '7+', sub: 'Diverse industries' },
    { label: 'Social Arm', value: 'Himalaya Trust', sub: 'Education, healthcare, environment' },
  ];

  const pillars = [
    { title: 'Pioneer in Automobiles', desc: "Leading Nepal's auto industry with global brands — Force Motors, Maxus, and Deepal." },
    { title: 'Real Estate & Housing', desc: 'Expanding modern residential and commercial developments for contemporary Nepal.' },
    { title: 'Hospitality & Agriculture', desc: 'Enhancing community impact through hotels, sustainable farming, and financial services.' },
  ];

  const achievements = [
    'Expanded from autos to 7+ sectors without major setbacks over 30+ years',
    'Nationwide presence fueling jobs and economic diversification across Nepal',
    'Himalaya Trust initiatives supporting education, healthcare, and sustainability',
    'Authorized importer and distributor for Force Motors, Maxus, and Deepal brands',
    'Approaching $100 million annual turnover — a landmark for a Nepali private enterprise',
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

    
      <section className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]">

        {/* ── LEFT: Dark text panel ── */}
        <div className="relative w-full lg:w-[55%] bg-[#1a2838] overflow-hidden flex items-center">

          {/* Diagonal dot pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #c4a787 0, #c4a787 1px, transparent 0, transparent 50%)',
              backgroundSize: '20px 20px',
            }}
          />

          <div className="relative z-10 px-8 md:px-14 lg:px-16 py-20 lg:py-28 w-full">

            {/* Label with gold line */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#c4a787]" />
              <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs">Corporate Profile</p>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-xl">
              <span className="text-white">Nepal's Trusted</span>
              <span className="block text-[#c4a787]  mt-3">Business Powerhouse</span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-white/60 max-w-md text-base leading-relaxed">
              Himalaya Organization Pvt. Ltd. — Established 1991. Driving economic growth with
              integrity, innovation, and excellence across key sectors of Nepal's economy.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-white/10">
              {[
                { num: '1991', label: 'Founded' },
                { num: '200+', label: 'Employees' },
                { num: '22+', label: 'Branches' },
                { num: '$100M', label: 'Turnover' },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-light text-[#c4a787]">{s.num}</p>
                  <p className="text-white/40 text-xs mt-1 uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Full-cover image panel ── */}
        <div className="w-full lg:w-[45%] min-h-[440px] lg:min-h-full relative overflow-hidden">

          {/* ✅ Full-cover image — fills entire right panel */}
          <img
            src="/images/commitment.jpg"
            alt="Himalaya Organization"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Subtle dark overlay so badge stays readable */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Left edge blend into dark panel */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#1a2838]/50 to-transparent hidden lg:block" />

          {/* Decorative "Est. 1991" badge — bottom right */}
          <div className="absolute bottom-8 right-8 hidden md:block">
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 p-5">
              <p className="text-white/50 text-[10px] uppercase tracking-[0.3em] mb-3">Est.</p>
              <p className="text-white text-4xl font-light leading-none">1991</p>
              <div className="w-full h-px bg-[#c4a787]/50 my-3" />
              <p className="text-[#c4a787] text-xs uppercase tracking-widest">Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Company Snapshot ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-[#f8f5f1]">
        <div className="text-center mb-16">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">At a Glance</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a2838]">Company Snapshot</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {snapshot.map((item, i) => (
            <div key={i} className="bg-white p-8 border-t-2 border-[#c4a787]">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">{item.label}</p>
              <p className="text-3xl font-light text-[#1a2838] mb-1">{item.value}</p>
              <p className="text-sm text-gray-500">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Business Overview ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Business Overview</p>
            <h2 className="text-4xl font-light text-[#1a2838] mb-8">A Legacy Built on Diverse Strengths</h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Himalaya Organization is a leading Nepali conglomerate, starting with Nepal's first
                reconditioned vehicle house and bike rentals, now authorized importer/distributor for
                Force Motors and regional dealer for Maxus, Deepal, and more.
              </p>
              <p>
                We diversify Nepal's economy by integrating global trends with local needs, employing
                expert teams and modern infrastructure across automobiles, real estate, hospitality,
                financial solutions, sustainable agriculture, educational institutions, and affordable housing.
              </p>
              <p>
                Our four pillars — hard work, integrity, adaptability, and excellence — ensure
                setback-free growth over 30+ years, contributing significantly to national markets.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-8">Strategic Pillars</p>
            {pillars.map((p, i) => (
              <div key={i} className="border border-gray-100 p-6 hover:border-[#c4a787] transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#c4a787] flex-shrink-0 flex items-center justify-center text-white text-xs font-semibold">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a2838] mb-2 group-hover:text-[#c4a787] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership & Governance ── */}
      <section className="bg-[#1a2838] text-white px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Leadership &amp; Governance</p>
            <h2 className="text-4xl font-light mb-8">Visionary at the Himalayan</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Founder &amp; Chairman <strong className="text-white">Mr. Dhruba Thapa</strong> is a
              visionary leader whose perseverance transformed a two-wheeler exchange into a multi-sector
              empire, inspiring Nepal's entrepreneurs for generations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The organization is governed by a commitment to transparency and stakeholder value, with
              expert management teams across all entities ensuring operational excellence and ethical conduct.
            </p>
          </div>
          <div className="border border-white/10 p-10">
            <div className="text-center mb-8">
              <div className="w-24 h-24 rounded-full bg-[#c4a787]/20 border border-[#c4a787] flex items-center justify-center text-[#c4a787] text-3xl font-light mx-auto mb-4">
                DT
              </div>
              <h3 className="text-xl font-semibold">Mr. Dhruba Thapa</h3>
              <p className="text-[#c4a787] text-sm uppercase tracking-widest mt-1">Founder &amp; Chairman</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 border border-white/10">
                <p className="text-2xl font-light text-[#c4a787]">30+</p>
                <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest">Years Leading</p>
              </div>
              <div className="text-center p-4 border border-white/10">
                <p className="text-2xl font-light text-[#c4a787]">7+</p>
                <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest">Sectors Built</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-[#f8f5f1]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Track Record</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a2838]">Achievements &amp; Impact</h2>
          </div>
          <div className="space-y-4">
            {achievements.map((item, i) => (
              <div key={i} className="flex items-start gap-6 p-6 bg-white hover:shadow-sm transition-shadow">
                <div className="w-6 h-6 flex-shrink-0 bg-[#c4a787] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-[#1a2838] text-white px-6 md:px-16 lg:px-24 py-20 text-center">
        <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Connect With Us</p>
        <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Collaborate on Nepal's Growth?</h2>
        <p className="text-gray-300 mb-4">Head Office: Pokhara / Kathmandu</p>
        <a href="mailto:info@grouphimalaya.com" className="text-[#c4a787] hover:underline text-lg">
          info@grouphimalaya.com
        </a>
        <div className="mt-10">
          <a
            href="/contact"
            className="bg-[#c4a787] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#b39670] transition-colors inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>

    </div>
  );
};

export default CorporateProfilePage;