import React from 'react';
import { Link } from 'react-router-dom';
import {
  Car, Building2, Hotel, Landmark, Wheat, GraduationCap, Home,
  Users, GitBranch, Clock, TrendingUp, ArrowRight
} from 'lucide-react';

const sectors = [
  {
    sector: 'Automobiles',
    focus: 'Dealerships, sales, rentals for Force Motors, Maxus, Deepal',
    Icon: Car,
    description: 'Leading automotive solutions with premium brands and comprehensive services across Nepal.',
    stats: '10+ Dealerships',
    color: 'from-[#131f2f] to-[#131f2f]',
  },
  {
    sector: 'Real Estate',
    focus: 'Residential and commercial developments',
    Icon: Building2,
    description: 'Creating landmark properties that redefine urban living and commercial spaces.',
    stats: '50+ Projects',
 color: 'from-[#131f2f] to-[#131f2f]',  },
  {
    sector: 'Hospitality',
    focus: 'Hotels and resorts blending comfort with Nepali hospitality',
    Icon: Hotel,
    description: 'Exceptional experiences where traditional warmth meets modern luxury.',
    stats: '5 Properties',
 color: 'from-[#131f2f] to-[#131f2f]',  },
  {
    sector: 'Banking & Finance',
    focus: 'Tailored loans and investment solutions',
    Icon: Landmark,
    description: 'Empowering businesses and individuals with innovative financial solutions.',
    stats: '20K+ Clients',
 color: 'from-[#131f2f] to-[#131f2f]',  },
  {
    sector: 'Agriculture',
    focus: 'Sustainable farming and food security initiatives',
    Icon: Wheat,
    description: 'Revolutionizing Nepali agriculture through sustainable practices and technology.',
    stats: '100+ Farmers',
 color: 'from-[#131f2f] to-[#131f2f]',  },
  {
    sector: 'Education',
    focus: 'Institutions shaping future leaders',
    Icon: GraduationCap,
    description: "Nurturing minds and building the foundation for Nepal's tomorrow.",
    stats: '3 Institutions',
 color: 'from-[#131f2f] to-[#131f2f]',  },
  {
    sector: 'Housing',
    focus: 'Modern, affordable living spaces',
    Icon: Home,
    description: 'Quality homes that make dreams of ownership accessible to all.',
    stats: '1000+ Families',
 color: 'from-[#131f2f] to-[#131f2f]',  },
];

const values = [
  { title: 'Hard Work',    desc: 'Relentless dedication fuels our growth across every sector and challenge we face.' },
  { title: 'Integrity',   desc: 'Every decision upholds trust and transparency with clients, partners, and communities.' },
  { title: 'Adaptability',desc: 'We evolve with market needs and innovations to stay ahead of the curve.' },
  { title: 'Excellence',  desc: 'Superior quality defines our offerings and the experience we deliver.' },
];

// Mosaic: alternating stat / photo pairs
const mosaicPairs = [
  {
    stat: { theme: 'dark',  label: 'Employees',      number: '200+', Icon: Users,      description: "A strong team of 200+ professionals driving Nepal's economy across 7+ sectors." },
    photo: { src: '/images/employee.jpg', alt: 'Himalaya Organization team', caption: 'Collaborative Excellence' },
  },
  {
    stat: { theme: 'dark',  label: 'Branches',       number: '22+',  Icon: GitBranch,  description: 'Nationwide presence across 22+ branches — from Kathmandu to Itahari and beyond.' },
    photo: { src: '/images/h5.webp',     alt: 'Modern branch office',        caption: 'Nationwide Presence' },
  },
  {
    stat: { theme: 'cream', label: 'Commitment',     number: '30+',  Icon: Clock,      description: 'Over 30 years of unwavering commitment to clients, communities, and Nepal\'s growth.' },
    photo: { src: '/images/commitment.jpg', alt: 'Community engagement',     caption: 'Community First' },
  },
  {
    stat: { theme: 'cream', label: 'Annual Turnover', number: '$100M', Icon: TrendingUp, description: 'Approaching $100 million — a milestone built on excellence and consistent delivery.' },
    photo: { src: '/images/annual.jpg', alt: 'Annual celebration',           caption: 'Celebrating Milestones' },
  },
];

// Flatten into desktop grid cells: stat, photo, stat, photo... then next row photo, stat...
// Row 1: stat photo stat photo  | Row 2: photo stat photo stat
const desktopCells = [
  ...mosaicPairs.slice(0, 2).flatMap(p => [
    { type: 'stat',  ...p.stat  },
    { type: 'photo', ...p.photo },
  ]),
  ...mosaicPairs.slice(2).flatMap(p => [
    { type: 'photo', ...p.photo },
    { type: 'stat',  ...p.stat  },
  ]),
];

const PhotoCard = ({ src, alt, caption, mobile }) => (
  <div className={`relative overflow-hidden group ${mobile ? 'w-full aspect-[4/3]' : 'w-full h-full'}`}>
    <img
      src={src} alt={alt}
      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.parentElement.querySelector('.fallback').style.display = 'flex';
      }}
    />
    <div className="fallback hidden w-full h-full bg-[#1a2838] items-center justify-center text-white text-sm p-4 text-center absolute inset-0">{alt}</div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
      <p className="text-white text-sm p-4 font-light">{caption}</p>
    </div>
  </div>
);

const StatCard = ({ theme, label, number, Icon, description, mobile }) => {
  const dark  = theme === 'dark';
  const bg    = dark ? 'bg-[#0d1c29]' : 'bg-[#ead3bc]';
  const text  = dark ? 'text-white'   : 'text-[#0d1c29]';
  const sub   = dark ? 'text-white/60': 'text-[#0d1c29]/60';
  const accent= dark ? 'text-[#c4a787]': 'text-[#0d1c29]/70';
  const line  = dark ? 'bg-[#c4a787]' : 'bg-[#0d1c29]/30';

  return (
    <div className={`${bg} ${mobile ? 'w-full p-6' : 'w-full h-full p-6 sm:p-8 md:p-10'} flex flex-col justify-between group relative overflow-hidden`}>
      {/* Decorative corner */}
      <div className={`absolute top-0 right-0 w-20 h-20 opacity-10 ${dark ? 'bg-white' : 'bg-[#0d1c29]'}`}
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />

      {/* Label */}
      <div className="flex items-center gap-2">
        <div className={`w-5 h-px ${line}`} />
        <p className={`text-[10px] uppercase tracking-[0.25em] ${accent}`}>{label}</p>
      </div>

      {/* Center: number + icon */}
      <div>
        <Icon className={`${accent} mb-3`} size={20} strokeWidth={1.5} />
        <p className={`text-4xl sm:text-5xl md:text-6xl font-light leading-none mb-3 ${text}`}>{number}</p>
        <p className={`text-xs sm:text-sm leading-relaxed ${sub}`}>{description}</p>
      </div>

      {/* Bottom accent line */}
      <div className={`w-0 group-hover:w-12 h-px transition-all duration-500 ${line}`} />
    </div>
  );
};

const AboutOrganization = () => (
  <div className="min-h-screen bg-white font-sans overflow-x-hidden">

    {/* ── Intro ── */}
    <section className="bg-white px-4 sm:px-8 lg:px-20 py-12 sm:py-20 border-t border-gray-100">
      <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
        <div className="flex-1">
          <p className="text-[#c4a787] uppercase tracking-[0.25em] text-[10px] sm:text-xs mb-3">About</p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#0d1c29] leading-tight">
            Leading with <br className="hidden sm:block" />Passion & Purpose.
          </h2>
        </div>
        <div className="lg:w-[48%]">
          <p className="text-[#0d1c29]/65 text-sm sm:text-base lg:text-lg leading-relaxed">
            Experience our passion for service and dedication to purpose as we lead with integrity and excellence
            across every sector of Nepal's growing economy — creating value for our clients, employees, and communities.
          </p>
        </div>
      </div>
    </section>

    {/* ── Mosaic Grid ── */}
    <section className="w-full">

      {/* Mobile: stat → photo → stat → photo alternating */}
      <div className="sm:hidden">
        {mosaicPairs.map((pair, i) => (
          <React.Fragment key={i}>
            <StatCard  mobile {...pair.stat}  />
            <PhotoCard mobile {...pair.photo} />
          </React.Fragment>
        ))}
      </div>

      {/* Desktop: 4-col grid, 2 rows */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-4">
        {desktopCells.map((cell, i) => (
          <div key={i} className="aspect-square">
            {cell.type === 'stat'
              ? <StatCard  {...cell} />
              : <PhotoCard {...cell} />
            }
          </div>
        ))}
      </div>
    </section>

    {/* ── Our Story ── */}
    <section className="px-4 sm:px-8 lg:px-20 py-14 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div>
          <p className="text-[#c4a787] uppercase tracking-[0.25em] text-[10px] sm:text-xs mb-3">Our Story</p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-[#1a2838] leading-tight mb-6">
            From Humble Beginnings to a National Powerhouse
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
            <p>
              Himalaya Organization began in 1991 with a bold vision: Nepal's first reconditioned vehicle house and bike rental
              service. Under the visionary leadership of Founder and Chairman{' '}
              <strong className="text-[#1a2838]">Mr. Dhruba Thapa</strong>, we expanded from humble auto dealings into a nationwide powerhouse.
            </p>
            <p>
              Today, we operate as a dynamic conglomerate — authorized dealers for brands like Force Motors, Maxus, and Deepal —
              while venturing into real estate, hospitality, financial services, sustainable agriculture, educational initiatives, and modern housing solutions.
            </p>
            <p>
              Our unwavering commitment extends beyond business. We established the{' '}
              <strong className="text-[#1a2838]">Himalaya Trust</strong> to uplift communities through education, healthcare, and environmental efforts.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[#f8f5f1] p-6 sm:p-10 relative">
            <div className="absolute top-0 left-0 w-16 h-1 bg-[#c4a787]" />
            <blockquote className="text-lg sm:text-2xl font-light text-[#1a2838] leading-relaxed">
              "A journey of perseverance, from two-wheelers to a multi-sector empire that builds Nepal's tomorrow."
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#1a2838] flex items-center justify-center text-[#c4a787] font-semibold text-sm shrink-0">
                DT
              </div>
              <div>
                <p className="text-[#1a2838] font-semibold text-sm">Mr. Dhruba Thapa</p>
                <p className="text-gray-400 text-xs">Founder & Chairman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Mission & Vision ── */}
    <section className="bg-[#1a2838] text-white px-4 sm:px-8 lg:px-20 py-14 sm:py-24">
      <div className="text-center mb-10 sm:mb-16">
        <p className="text-[#c4a787] uppercase tracking-[0.25em] text-[10px] sm:text-xs mb-3">Our Purpose</p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light">Mission & Vision</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
        {[
          {
            title: 'Mission',
            text: "To forge sustainable businesses that propel Nepal's economy, deliver premium products and services, foster a secure and rewarding workplace, and champion ethical practices, social responsibility, and environmental stewardship.",
          },
          {
            title: 'Vision',
            text: "To emerge as Nepal's most reliable pillar of progress, diversifying the economy by merging global trends with local ingenuity, empowering entrepreneurs, and nurturing thriving communities.",
          },
        ].map((item, i) => (
          <div key={i} className="border border-white/10 p-6 sm:p-10 relative">
            <div className="absolute top-0 left-0 w-12 h-0.5 bg-[#c4a787]" />
            <h3 className="text-[#c4a787] uppercase tracking-widest text-[10px] sm:text-xs mb-4">{item.title}</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ── Core Values ── */}
    <section className="px-4 sm:px-8 lg:px-20 py-14 sm:py-24 bg-[#f8f5f1]">
      <div className="text-center mb-10 sm:mb-16">
        <p className="text-[#c4a787] uppercase tracking-[0.25em] text-[10px] sm:text-xs mb-3">What Drives Us</p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-[#1a2838]">Core Values</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto">
        {values.map((val, i) => (
          <div key={i} className="bg-white p-5 sm:p-8 group hover:bg-[#1a2838] transition-colors duration-300 cursor-default">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#c4a787] mb-4 sm:mb-6 flex items-center justify-center text-white font-semibold text-xs">
              0{i + 1}
            </div>
            <h3 className="text-sm sm:text-lg font-semibold text-[#1a2838] group-hover:text-[#c4a787] mb-2 sm:mb-3 transition-colors">
              {val.title}
            </h3>
            <p className="text-gray-500 group-hover:text-gray-300 text-xs sm:text-sm leading-relaxed transition-colors">
              {val.desc}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* ── Leadership ── */}
    <section className="px-4 sm:px-8 lg:px-20 py-14 sm:py-24">
      <p className="text-[#c4a787] uppercase tracking-[0.25em] text-[10px] sm:text-xs mb-3">Our Leadership</p>
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-[#1a2838] mb-10 sm:mb-16">Guided by Vision</h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-start">
        <div className="w-full md:w-72 shrink-0">
          <div className="w-full aspect-square bg-[#1a2838] overflow-hidden">
            <img
              src="/images/message.jpg" alt="Mr. Dhruba Thapa"
              className="w-full h-full object-cover" loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<span class="w-full h-full flex items-center justify-center text-4xl font-light text-[#c4a787]">DT</span>';
              }}
            />
          </div>
          <div className="mt-4">
            <h3 className="text-base sm:text-lg font-semibold text-[#1a2838]">Mr. Dhruba Thapa</h3>
            <p className="text-[#c4a787] text-[10px] uppercase tracking-widest mt-1">Founder & Chairman</p>
          </div>
        </div>
        <div className="flex-1 space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
          <p>
            A trailblazer whose journey from bike rentals to a multi-sector empire inspires Nepal's new entrepreneurs.
            His philosophy of perseverance has guided the organization setback-free for over three decades.
          </p>
          <p>
            Under his visionary leadership, Himalaya Organization has grown from a single auto venture to a conglomerate
            operating across 7+ sectors, employing 200+ professionals, and contributing meaningfully to Nepal's economic landscape.
          </p>
          <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-gray-100">
            {[['1991', 'Founded'], ['$100M', 'Approaching Turnover']].map(([num, lbl]) => (
              <div key={lbl}>
                <p className="text-xl sm:text-2xl font-light text-[#1a2838]">{num}</p>
                <p className="text-gray-400 text-[10px] mt-1 uppercase tracking-widest">{lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── Business Sectors ── */}
    <section className="bg-[#f8f5f1] px-4 sm:px-8 lg:px-20 py-14 sm:py-24">
      <div className="text-center mb-10 sm:mb-16">
        <p className="text-[#c4a787] uppercase tracking-[0.25em] text-[10px] sm:text-xs mb-3">What We Do</p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-[#1a2838]">Business Sectors</h2>
        <p className="text-gray-500 max-w-xl mx-auto mt-3 text-sm sm:text-base">Diversified excellence across Nepal's most vital industries</p>
      </div>

      {/* Mobile: stacked cards */}
      <div className="sm:hidden space-y-3">
        {sectors.map(({ sector, focus, Icon, stats }, i) => (
          <div key={i} className="bg-white p-4 flex items-start gap-3 border-l-4 border-[#c4a787]">
            <Icon size={20} strokeWidth={1.5} className="text-[#c4a787] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-[#0d1c29] font-semibold text-sm mb-0.5">{sector}</h3>
              <p className="text-gray-500 text-xs mb-1">{focus}</p>
              <p className="text-[#c4a787] text-[10px] font-semibold uppercase tracking-wider">{stats}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet: 2-col grid */}
      <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4 max-w-3xl mx-auto">
        {sectors.map(({ sector, focus, Icon, description, stats }, i) => (
          <div key={i} className="bg-white p-6 hover:shadow-lg transition-shadow duration-300 group">
            <Icon size={28} strokeWidth={1.5} className="text-[#c4a787] mb-3" />
            <h3 className="text-[#c4a787] font-semibold text-base mb-1">{sector}</h3>
            <p className="text-gray-600 text-sm mb-2">{focus}</p>
            <p className="text-[#1a2838] text-xs font-semibold">{stats}</p>
          </div>
        ))}
      </div>

      {/* Desktop: featured 4-col + 3-col secondary */}
      <div className="hidden lg:block max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-5 mb-5">
          {sectors.slice(0, 4).map(({ sector, focus, Icon, description, stats, color }, i) => (
            <div key={i} className={`group relative overflow-hidden bg-gradient-to-br ${color} cursor-pointer`}>
              <div className="relative p-8 text-[#c4a787] h-full flex flex-col min-h-[240px]">
                <Icon size={36} strokeWidth={1} className="mb-4 text-[#c4a787] group-hover:text-white transition-colors duration-300" />
                <h3 className="text-xl font-light mb-1">{sector}</h3>
                <p className="text-[#f8f5f1] text-sm">{focus}</p>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-black/30 backdrop-blur-sm">
                  <p className="text-white text-sm mb-2">{description}</p>
                  <p className="text-[#c4a787] font-semibold text-xs">{stats}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-5">
          {sectors.slice(4).map(({ sector, focus, Icon, description, stats }, i) => (
            <div key={i} className="bg-white p-6 hover:shadow-xl transition-shadow duration-300 group flex items-start gap-4">
              <Icon size={24} strokeWidth={1.5} className="text-[#c4a787] shrink-0 mt-1" />
              <div>
                <h3 className="text-[#c4a787] font-semibold text-base mb-1">{sector}</h3>
                <p className="text-gray-600 text-sm mb-2">{focus}</p>
                <p className="text-[#1a2838] text-xs font-semibold">{stats}</p>
                <div className="max-h-0 group-hover:max-h-16 overflow-hidden transition-all duration-500 mt-1">
                  <p className="text-gray-400 text-xs">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="px-4 sm:px-8 lg:px-20 py-14 sm:py-24 bg-[#1a2838] text-white text-center">
      <p className="text-[#c4a787] uppercase tracking-[0.25em] text-[10px] sm:text-xs mb-3">Get In Touch</p>
      <h2 className="text-xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-8">Ready to Partner for Success?</h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm sm:text-base">
        Contact us to explore opportunities in our sectors or join our growing team of 200+ professionals.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <Link
          to="/contact"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#c4a787] text-white px-8 py-3.5 text-xs uppercase tracking-widest hover:bg-[#b39670] transition-colors"
        >
          Contact Us <ArrowRight size={14} />
        </Link>
        <Link
          to="/career"
          className="w-full sm:w-auto border border-white/25 text-white px-8 py-3.5 text-xs uppercase tracking-widest hover:border-[#c4a787] hover:text-[#c4a787] transition-colors"
        >
          Explore Careers
        </Link>
      </div>
    </section>

  </div>
);

export default AboutOrganization;