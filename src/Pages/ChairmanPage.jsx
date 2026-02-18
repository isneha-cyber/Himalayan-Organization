import React from 'react';

const ChairmanPage = () => {
  return (
    <>
    <div className=" h-4 md:h-0"></div>
    <div className="min-h-screen bg-white font-sans">

    
      <section className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]">

        {/* ── LEFT: Dark text panel ── */}
        <div className="relative w-full lg:w-[52%] bg-[#1a2838] overflow-hidden flex items-center order-2 lg:order-1">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #c4a787 0, #c4a787 1px, transparent 0, transparent 50%)',
              backgroundSize: '20px 20px',
            }}
          />
          <div className="relative z-10 px-8 md:px-14 lg:px-16 py-20 lg:py-28 w-full">

            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#c4a787]" />
              <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs">Leadership</p>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              <span className="text-white">Message From</span>
              <span className="block text-[#c4a787]  mt-3">The Chairman</span>
            </h1>

            {/* Teaser quote */}
            <p className="mt-8 text-white/60 max-w-md text-base leading-relaxed ">
              "Hard work, integrity, and an unwavering commitment to our people will always build
              something lasting."
            </p>

            {/* Author info */}
            <div className="mt-10 flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#c4a787]/20 border border-[#c4a787] flex items-center justify-center text-[#c4a787] font-light text-lg">
                DT
              </div>
              <div>
                <p className="text-white font-semibold">Mr. Dhruba Thapa</p>
                <p className="text-[#c4a787] text-xs uppercase tracking-widest mt-1">Founder &amp; Chairman</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-white/10">
              {[
                { num: '1991', label: 'Founded' },
                { num: '30+', label: 'Years' },
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

        {/* ── RIGHT: Chairman photo ── */}
        <div className="w-full lg:w-[48%] min-h-[400px] lg:min-h-full relative overflow-hidden order-1 lg:order-2">
          <img
            src="/images/message.jpeg"
            alt="Mr. Dhruba Thapa — Founder & Chairman"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* Subtle dark overlay */}
          <div className="absolute inset-0 bg-black/20" />
          {/* Left blend */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#1a2838]/50 to-transparent hidden lg:block" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          CHAIRMAN PROFILE SECTION
          ══════════════════════════════════════ */}
      <section className="px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-16">

          {/* ── Left col: photo + quick facts ── */}
          <div className="md:col-span-1">
            {/* Photo */}
            <div className="w-full aspect-[3/4] relative overflow-hidden mb-6">
              <img
                src="/images/message.jpeg"
                alt="Mr. Dhruba Thapa"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2838]/60 to-transparent" />
            </div>

            <h2 className="text-xl font-semibold text-[#1a2838]">Mr. Dhruba Thapa</h2>
            <p className="text-[#c4a787] text-sm uppercase tracking-widest mt-1 mb-6">
              Founder &amp; Chairman
            </p>

            {/* Quick facts */}
            <div className="space-y-4">
              {[
                { label: 'Founded', value: '1991' },
                { label: 'Experience', value: '30+ Years' },
                { label: 'Sectors Built', value: '7+ Industries' },
                { label: 'Employees', value: '200+ Professionals' },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-[#c4a787] pl-4">
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{item.label}</p>
                  <p className="text-[#1a2838] font-semibold mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right col: full message ── */}
          <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed">
            <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs">
              A Message to Our Stakeholders
            </p>

            {/* Opening quote */}
            <blockquote className="text-xl md:text-2xl font-light text-[#1a2838]  leading-relaxed border-l-4 border-[#c4a787] pl-6 py-2">
              "When I started Himalaya Organization in 1991, I had a simple belief: that hard work,
              integrity, and an unwavering commitment to our people would build something lasting."
            </blockquote>

            <p>
              Those early days — operating Nepal's first reconditioned vehicle house and bike rental
              service in Western Nepal — were filled with challenges that many said were insurmountable.
              But every setback was a lesson, and every lesson became a stepping stone toward what
              Himalaya Organization is today.
            </p>

            <p>
              Over three decades, we have grown from a small auto venture into a conglomerate spanning
              automobiles, real estate, hospitality, banking, agriculture, education, housing, and
              engineering. We now employ over 200 professionals across 22+ branches, with an annual
              turnover approaching $100 million.
            </p>

            <p>
              But numbers, while important, are not what drive me. What drives me is the impact we
              create — the jobs we generate, the homes we build, the communities we uplift through
              Himalaya Trust, and the entrepreneurs we inspire across Nepal.
            </p>

            <p>
              As we look ahead, I am more committed than ever to our founding principles: hard work,
              integrity, adaptability, and excellence. The world is changing rapidly, and Nepal is
              changing with it. Himalaya Organization will continue to change with Nepal — always
              rooted in our values, always focused on building tomorrow.
            </p>

            <p>
              To our clients, partners, employees, and community: thank you for being part of this
              journey. The best is yet to come.
            </p>

            {/* Signature block */}
            <div className="pt-8 border-t border-gray-100 flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-[#1a2838] flex items-center justify-center text-[#c4a787] font-light text-xl flex-shrink-0">
                DT
              </div>
              <div>
                <p className="text-[#1a2838] font-semibold text-lg">Mr. Dhruba Thapa</p>
                <p className="text-gray-400 text-sm">
                  Founder &amp; Chairman, Himalaya Organization Pvt. Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote Banner ── */}
      <section className="bg-[#f8f5f1] px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-1 bg-[#c4a787] mx-auto mb-8" />
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1a2838] leading-relaxed ">
            "A journey of perseverance, from two-wheelers to a multi-sector empire that builds
            Nepal's tomorrow."
          </blockquote>
          <div className="w-12 h-1 bg-[#c4a787] mx-auto mt-8" />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1a2838] text-white px-6 md:px-16 lg:px-24 py-20 text-center">
        <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Be Part of Our Vision</p>
        <h2 className="text-3xl md:text-4xl font-light mb-8">Partner, Invest, or Join Our Team</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/contact"
            className="bg-[#c4a787] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#b39670] transition-colors"
          >
            Contact Us
          </a>
          <a
            href="/career"
            className="border border-white/30 text-white px-8 py-4 text-sm uppercase tracking-widest hover:border-[#c4a787] hover:text-[#c4a787] transition-colors"
          >
            Explore Careers
          </a>
        </div>
      </section>

    </div>
    </>
  );
};

export default ChairmanPage;