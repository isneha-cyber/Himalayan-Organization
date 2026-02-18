import React, { useState, useEffect, useRef } from 'react';
import {
  Mail, CheckCircle, ArrowRight, Bell, TrendingUp,
  Car, Building2, Leaf, Newspaper, Users, ArrowDown
} from 'lucide-react';

// ── Data ─────────────────────────────────────────────────────────────────────

const categories = [
  { icon: Car,        label: 'Automobiles',      desc: 'New arrivals, offers & dealership news' },
  { icon: Building2,  label: 'Real Estate',       desc: 'Project launches & property insights' },
  { icon: TrendingUp, label: 'Finance & Banking', desc: 'Market updates & financial tips' },
  { icon: Leaf,       label: 'Agriculture',       desc: 'Farming innovations & seasonal guides' },
  { icon: Newspaper,  label: 'Company News',      desc: 'Announcements, events & milestones' },
  { icon: Users,      label: 'Community & CSR',   desc: 'Himalaya Trust initiatives & impact' },
];

const stats = [
  { value: '10,000+', label: 'Subscribers' },
  { value: 'Monthly', label: 'Publication' },
  { value: '6',       label: 'Topic Categories' },
  { value: '100%',    label: 'Free to Join' },
];

const perks = [
  { num: '01', title: 'Expert Insights',  desc: "Curated analysis from Nepal's leading business conglomerate across 7 sectors." },
  { num: '02', title: 'Zero Clutter',     desc: 'One focused email per month. No spam, no noise — only what matters to you.' },
  { num: '03', title: 'First Access',     desc: 'Be the first to hear about new projects, launches, and opportunities.' },
  { num: '04', title: 'Community',        desc: 'Join 10,000+ professionals, investors, and entrepreneurs shaping Nepal.' },
];

const recentEditions = [
  {
    tag: 'Automobiles',
    date: 'Jan 2025',
    num: '01',
    title: 'Deepal EV Launch in Nepal: What You Need to Know',
    excerpt: 'Himalaya Organization officially begins sales of the Deepal new energy vehicle lineup, bringing cutting-edge EV technology to Nepali roads.',
  },
  {
    tag: 'Real Estate',
    date: 'Dec 2024',
    num: '02',
    title: 'New Residential Project Launch in Pokhara',
    excerpt: 'Our latest affordable housing development in Pokhara features eco-friendly designs and modern amenities for the contemporary Nepali family.',
  },
  {
    tag: 'Company News',
    date: 'Nov 2024',
    num: '03',
    title: 'Himalaya Organization Crosses 22 Branch Milestone',
    excerpt: 'We celebrate the opening of our 22nd nationwide branch, reinforcing our commitment to serving communities across Nepal.',
  },
];

// ── Fade-in hook ──────────────────────────────────────────────────────────────
function useFadeIn(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, delay);
    return () => clearTimeout(t);
  }, [delay]);
  return ref;
}

// ── Section label component ───────────────────────────────────────────────────
const SectionLabel = ({ text }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-6 h-px bg-[#c4a787]" />
    <span className="text-[#c4a787] uppercase tracking-[0.3em] text-xs font-medium">{text}</span>
  </div>
);

// ── Serif accent ──────────────────────────────────────────────────────────────
const SerifAccent = ({ children }) => (
  <span className="block " style={{ color: '#c4a787', fontFamily: 'Georgia,serif' }}>
    {children}
  </span>
);

// ═══════════════════════════════════════════════════════════════════════════════
export default function Newsletter() {
  const [email,     setEmail]     = useState('');
  const [name,      setName]      = useState('');
  const [selected,  setSelected]  = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState('');
  const [mousePos,  setMousePos]  = useState({ x: 0, y: 0 });

  const heroRef = useRef(null);
  const textRef = useFadeIn(100);

  useEffect(() => {
    const handle = (e) => {
      if (!heroRef.current) return;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      setMousePos({ x: (e.clientX - left) / width - 0.5, y: (e.clientY - top) / height - 0.5 });
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  const toggleCategory = (lbl) =>
    setSelected((p) => p.includes(lbl) ? p.filter((c) => c !== lbl) : [...p, lbl]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email)                       { setError('Please enter your email address.'); return; }
    if (!/\S+@\S+\.\S+/.test(email))  { setError('Please enter a valid email address.'); return; }
    setError(''); setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <div className="bg-white font-sans text-[#1a2838]">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: '92vh', background: '#0d1520' }}
      >
        {/* Hatch texture */}
        <div className="absolute inset-0 opacity-[0.055]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg,#c4a787 0,#c4a787 1px,transparent 0,transparent 50%)',
          backgroundSize: '24px 24px',
        }} />

        {/* Parallax circles */}
        {[700, 520, 340].map((size, i) => (
          <div key={i}
            className="absolute rounded-full border border-[#c4a787]/10 pointer-events-none"
            style={{
              width: size, height: size,
              right: -size * 0.25, top: '50%',
              transform: `translate(${mousePos.x * -(10 + i * 8)}px, calc(-50% + ${mousePos.y * -(6 + i * 5)}px))`,
              transition: 'transform 0.6s ease-out',
            }}
          />
        ))}

        {/* Gold glow orb */}
        <div className="absolute pointer-events-none" style={{
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(196,167,135,0.13) 0%,transparent 70%)',
          right: -100, top: -100,
          transform: `translate(${mousePos.x * -25}px,${mousePos.y * -15}px)`,
          transition: 'transform 0.7s ease-out',
        }} />

        {/* Rules */}
        <div className="absolute left-6 md:left-16 lg:left-24 top-0 bottom-0 w-px bg-[#c4a787]/10" />
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right,transparent,rgba(196,167,135,0.4),transparent)' }} />

        {/* Content */}
        <div ref={textRef} className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-28">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-[#c4a787]" />
              <span className="text-[#c4a787] uppercase tracking-[0.35em] text-xs font-medium flex items-center gap-2">
                <Bell className="w-3 h-3" /> Stay in the Loop
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-light leading-[1.05] text-white mb-6"
              style={{ fontSize: 'clamp(3rem,8vw,6.5rem)' }}>
              The Himalaya
              <SerifAccent>Newsletter</SerifAccent>
            </h1>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8 max-w-md">
              <div className="h-px bg-[#c4a787]/40 flex-1" />
            </div>

            <p className="text-gray-300 leading-relaxed mb-12 max-w-xl"
              style={{ fontSize: 'clamp(0.95rem,1.5vw,1.1rem)' }}>
              Join 10,000+ readers across Nepal who stay ahead with monthly updates on automobiles,
              real estate, finance, agriculture, and everything Himalaya Organization.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 mb-16">
              <a href="#subscribe"
                className="group inline-flex items-center gap-3 bg-[#c4a787] text-white text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#b39670] transition-colors duration-300">
                Subscribe Free
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#categories"
                className="inline-flex items-center gap-3 border border-white/20 text-white text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:border-[#c4a787] hover:text-[#c4a787] transition-colors duration-300">
                Explore Topics
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-light text-white">{s.value}</p>
                  <p className="text-[#c4a787] text-xs uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-10 left-8 md:left-16 lg:left-24 flex items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#c4a787]/60" />
            <ArrowDown className="w-3 h-3 text-[#c4a787]/60" />
          </div>
          <span className="text-white/30 text-xs uppercase tracking-widest"
            style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        </div> */}
      </section>

      {/* ══════════════════════════════════════
          WHY SUBSCRIBE — 4 perks
      ══════════════════════════════════════ */}
      <section className="bg-[#f8f5f1] py-20 md:py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <SectionLabel text="Why Subscribe" />
              <h2 className="text-4xl md:text-5xl font-light text-[#1a2838] leading-tight">
                Real Value,<br />
                <SerifAccent>Every Month</SerifAccent>
              </h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              No filler, no fluff. The Himalaya Newsletter delivers what matters — direct from Nepal's most trusted conglomerate.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((p) => (
              <div key={p.num}
                className="group bg-white border border-gray-100 p-8 hover:bg-[#1a2838] transition-colors duration-300 cursor-default">
                <div className="w-8 h-8 bg-[#c4a787] flex items-center justify-center text-white text-xs font-semibold mb-6">
                  {p.num}
                </div>
                <h3 className="font-semibold text-[#1a2838] group-hover:text-[#c4a787] mb-3 text-sm transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-300 text-xs leading-relaxed transition-colors">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TOPIC SELECTOR
      ══════════════════════════════════════ */}
      <section id="categories" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <SectionLabel text="What's Inside" />
              <h2 className="text-4xl md:text-5xl font-light text-[#1a2838] leading-tight">
                Choose Your<br />
                <SerifAccent>Topics of Interest</SerifAccent>
              </h2>
            </div>
            <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
              Personalise your digest. Select the sectors you care about and we'll tailor your monthly edition accordingly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map(({ icon: Icon, label, desc }) => {
              const active = selected.includes(label);
              return (
                <div key={label}
                  onClick={() => toggleCategory(label)}
                  className={`group relative cursor-pointer border p-7 transition-all duration-300 overflow-hidden ${
                    active
                      ? 'border-[#c4a787] bg-[#1a2838]'
                      : 'border-gray-100 bg-white hover:border-[#c4a787]/50 hover:shadow-md'
                  }`}>
                  {/* Active hatch */}
                  {active && (
                    <div className="absolute inset-0 opacity-[0.04]" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg,#c4a787 0,#c4a787 1px,transparent 0,transparent 50%)',
                      backgroundSize: '20px 20px',
                    }} />
                  )}
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className={`w-11 h-11 flex items-center justify-center mb-5 transition-colors duration-300 ${
                        active ? 'bg-[#c4a787]' : 'bg-[#c4a787]/10 group-hover:bg-[#c4a787]/20'
                      }`}>
                        <Icon className={`w-5 h-5 transition-colors duration-300 ${active ? 'text-white' : 'text-[#c4a787]'}`} />
                      </div>
                      <h3 className={`font-semibold text-sm mb-1 transition-colors duration-300 ${active ? 'text-[#c4a787]' : 'text-[#1a2838]'}`}>
                        {label}
                      </h3>
                      <p className={`text-xs leading-relaxed transition-colors duration-300 ${active ? 'text-gray-400' : 'text-gray-500'}`}>
                        {desc}
                      </p>
                    </div>
                    {/* Indicator */}
                    <div className={`w-5 h-5 shrink-0 mt-0.5 border flex items-center justify-center transition-all duration-300 ${
                      active ? 'border-[#c4a787] bg-[#c4a787]' : 'border-gray-200'
                    }`}>
                      {active && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected pills summary */}
          {selected.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-xs text-gray-400 uppercase tracking-widest">Selected:</span>
              {selected.map((cat) => (
                <span key={cat}
                  className="bg-[#c4a787]/10 text-[#c4a787] text-xs px-4 py-1.5 border border-[#c4a787]/30 font-medium">
                  {cat}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════
          FORM — split layout (dark | white)
      ══════════════════════════════════════ */}
      <section id="subscribe">
        <div className="flex flex-col lg:flex-row min-h-[640px]">

          {/* Left dark panel */}
          <div className="lg:w-1/2 relative overflow-hidden flex flex-col justify-center
                          px-8 md:px-14 py-20 bg-[#0d1520]">
            {/* Hatch */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: 'repeating-linear-gradient(45deg,#c4a787 0,#c4a787 1px,transparent 0,transparent 50%)',
              backgroundSize: '24px 24px',
            }} />
            {/* Deco circles */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-72 h-72 rounded-full border border-[#c4a787]/10" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4  w-44 h-44 rounded-full border border-[#c4a787]/8" />

            <div className="relative z-10 max-w-md">
              <SectionLabel text="Join Our Community" />
              <h2 className="font-light text-white leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}>
                Subscribe to
                <SerifAccent>the Newsletter</SerifAccent>
              </h2>
              <div className="h-px bg-[#c4a787]/20 mb-6" />
              <p className="text-gray-400 text-sm leading-relaxed mb-10">
                Free. Monthly. No spam — ever. Unsubscribe with a single click, any time.
              </p>
              {['Expert sector insights every month',
                'First access to launches & events',
                'Curated for your chosen topics',
                'Trusted by 10,000+ Nepal professionals'].map((item) => (
                <div key={item} className="flex items-center gap-3 mb-3">
                  <div className="w-1.5 h-1.5 bg-[#c4a787] shrink-0" />
                  <span className="text-gray-400 text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right white form */}
          <div className="lg:w-1/2 bg-white flex flex-col justify-center
                          px-8 md:px-14 py-20">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
                <h3 className="text-2xl font-light text-[#1a2838] mb-8">Your details</h3>

                {/* Name */}
                <div className="mb-6">
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Sharma"
                    className="w-full border-b border-gray-200 focus:border-[#c4a787] outline-none py-3 text-sm text-[#1a2838] placeholder-gray-300 transition-colors bg-transparent"
                  />
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(''); }}
                    placeholder="e.g. ramesh@email.com"
                    className="w-full border-b border-gray-200 focus:border-[#c4a787] outline-none py-3 text-sm text-[#1a2838] placeholder-gray-300 transition-colors bg-transparent"
                  />
                  {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
                </div>

                {/* Selected topics */}
                {selected.length > 0 && (
                  <div className="mb-6">
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-3 font-medium">
                      Your Topics
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {selected.map((cat) => (
                        <span key={cat}
                          className="bg-[#c4a787]/10 text-[#c4a787] text-xs px-3 py-1 border border-[#c4a787]/30 font-medium">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full group flex items-center justify-center gap-3 bg-[#1a2838] text-white text-xs uppercase tracking-widest py-4 rounded-full hover:bg-[#c4a787] transition-colors duration-300 disabled:opacity-50 mt-4"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe Now
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-center text-gray-300 text-xs mt-5">
                  By subscribing, you agree to receive emails from Himalaya Organization.
                </p>
              </form>
            ) : (
              /* Success */
              <div className="w-full max-w-md mx-auto text-center">
                <div className="w-16 h-16 bg-[#c4a787]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#c4a787]" />
                </div>
                <h2 className="text-3xl font-light text-[#1a2838] mb-3">
                  You're{' '}
                  <span className="" style={{ fontFamily: 'Georgia,serif', color: '#c4a787' }}>
                    Subscribed!
                  </span>
                </h2>
                <p className="text-gray-500 text-sm mb-2">
                  Welcome{name ? `, ${name}` : ''}! Your first edition is on its way.
                </p>
                <p className="text-[#c4a787] text-xs font-medium mb-8">{email}</p>
                <div className="flex justify-center gap-2 flex-wrap mb-10">
                  {(selected.length > 0 ? selected : ['Company News']).map((cat) => (
                    <span key={cat}
                      className="bg-[#c4a787]/10 text-[#c4a787] text-xs px-3 py-1.5 border border-[#c4a787]/30 font-medium">
                      {cat}
                    </span>
                  ))}
                </div>
                <a href="/"
                  className="group inline-flex items-center gap-3 bg-[#1a2838] text-white text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#c4a787] transition-colors duration-300">
                  Back to Home
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          RECENT EDITIONS
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-[#f8f5f1]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <SectionLabel text="Past Issues" />
              <h2 className="text-4xl md:text-5xl font-light text-[#1a2838] leading-tight">
                Recent<br />
                <SerifAccent>Editions</SerifAccent>
              </h2>
            </div>
            <a href="#subscribe"
              className="group inline-flex items-center gap-3 border border-[#1a2838]/20 text-[#1a2838] text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:border-[#c4a787] hover:text-[#c4a787] transition-colors self-start md:self-end whitespace-nowrap">
              Subscribe to Get These
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {recentEditions.map((ed) => (
              <div key={ed.num}
                className="group bg-white border border-gray-100 p-8 hover:bg-[#1a2838] transition-colors duration-300 cursor-default">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[#c4a787] text-xs font-semibold uppercase tracking-widest">{ed.tag}</span>
                  <span className="text-gray-300 text-xs group-hover:text-gray-500 transition-colors">{ed.date}</span>
                </div>
                {/* Edition number watermark */}
                <div className="text-6xl font-light text-gray-100 group-hover:text-[#c4a787]/10 transition-colors leading-none mb-4 select-none">
                  {ed.num}
                </div>
                <h3 className="font-semibold text-sm text-[#1a2838] group-hover:text-[#c4a787] mb-3 leading-snug transition-colors">
                  {ed.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-300 text-xs leading-relaxed transition-colors">
                  {ed.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#1a2838] py-24 px-6 md:px-16 lg:px-24">
        {/* Hatch */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg,#c4a787 0,#c4a787 1px,transparent 0,transparent 50%)',
          backgroundSize: '24px 24px',
        }} />
        {/* Circles */}
        <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-[#c4a787]/10" />
        <div className="absolute right-[-40px]  top-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-[#c4a787]/8" />
        {/* Vertical rule */}
        <div className="absolute left-6 md:left-16 lg:left-24 top-0 bottom-0 w-px bg-[#c4a787]/10" />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <SectionLabel text="Don't Miss Out" />
            <h2 className="font-light text-white leading-tight"
              style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}>
              Stay Ahead with
              <SerifAccent>Himalaya Insights</SerifAccent>
            </h2>
            <p className="text-gray-400 text-sm mt-4 max-w-md leading-relaxed">
              Monthly updates. Zero clutter. Real value from Nepal's most trusted business conglomerate — delivered straight to your inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="#subscribe"
              className="group inline-flex items-center justify-center gap-3 bg-[#c4a787] text-white text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#b39670] transition-colors">
              Subscribe Free
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#categories"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:border-[#c4a787] hover:text-[#c4a787] transition-colors">
              Browse Topics
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}