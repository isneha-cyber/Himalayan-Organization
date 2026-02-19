import React, { useState } from 'react';
import { Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData]   = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent]     = useState(0);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  const prev = () => setCurrent((c) => (c === 0 ? offices.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === offices.length - 1 ? 0 : c + 1));

  const offices = [
    {
      city: 'Pokhara',
      country: 'Nepal',
      label: 'Head Office',
      address: 'Prithvi Chowk, Pokhara Metropolitan City, Gandaki Province',
      phone: '+977 061-523848',
      email: 'pokhara@grouphimalaya.com',
      src: '/images/h2.webp',
    },
    {
      city: 'Kathmandu',
      country: 'Nepal',
      label: 'Branch Office',
      address: 'New Road, Kathmandu Metropolitan City, Bagmati Province',
      phone: '+977 01-4XXXXXX',
      email: 'kathmandu@grouphimalaya.com',
      src: '/images/h5.webp',
    },
    {
      city: 'Itahari',
      country: 'Nepal',
      label: 'Branch Office',
      address: 'Main Road, Itahari Sub-Metropolitan City, Koshi Province',
      phone: '+977 025-XXXXXX',
      email: 'itahari@grouphimalaya.com',
      src: '/images/hero4.jpeg',
    },
  ];

  // ── Shared office card ───────────────────────────────────────────────────
  const OfficeCard = ({ office }) => (
    <div className="flex flex-col h-full">
      {/* Photo - full image on mobile */}
      <div className="relative overflow-hidden aspect-[4/3] sm:aspect-square mb-4 sm:mb-6">
        <img
          src={office.src}
          alt={`${office.city} office`}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 sm:bottom-5 left-0 right-0 text-center">
          <h3 className="text-white text-xl sm:text-2xl font-light">{office.city}</h3>
          <p className="text-[#c4a787] text-[10px] sm:text-xs uppercase tracking-widest mt-1">{office.label}</p>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3 sm:gap-4 flex-grow">
        <div className="flex items-center gap-2 sm:gap-3">
          <p className="text-[#c4a787] uppercase tracking-[0.2em] text-[10px] sm:text-xs whitespace-nowrap">
            Contact Information
          </p>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <p className="text-[#0d1c29]/60 text-xs sm:text-sm leading-relaxed">{office.address}</p>
        <a href={`tel:${office.phone.replace(/\s/g, '')}`}
          className="flex items-center gap-2 text-[#0d1c29]/70 hover:text-[#c4a787] transition-colors text-xs sm:text-sm">
          <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-[#c4a787] shrink-0" />
          {office.phone}
        </a>
        <a href={`mailto:${office.email}`}
          className="flex items-center gap-2 text-[#0d1c29]/70 hover:text-[#c4a787] transition-colors text-xs sm:text-sm">
          <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-[#c4a787] shrink-0" />
          {office.email}
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">

      {/* ══════════════════════════════════════
          SECTION 1 — Get in Touch
          Stack on mobile, side-by-side on lg
      ══════════════════════════════════════ */}
      <section className="flex flex-col lg:flex-row md:h-[600px] min-h-[600px]">

        {/* Image panel — full image on mobile */}
        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:min-h-[600px] overflow-hidden">
          <img
            src="/images/contact.avif"
            alt="Contact"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay removed for cleaner image */}

          {/* Quote card - repositioned for better mobile view */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:right-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-5 lg:p-6 max-w-xs mx-auto lg:mx-0">
              <span className="text-[#c4a787] text-3xl sm:text-4xl font-serif leading-none">"</span>
              <p className="text-white text-sm sm:text-base lg:text-lg font-light leading-snug mt-1">
                We're here to listen, guide, and support.
              </p>
              <p className="text-[#c4a787] mt-3 sm:mt-4 text-xs sm:text-sm italic" style={{ fontFamily: 'Georgia, serif' }}>
                Dhruba Thapa
              </p>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div className="w-full lg:w-1/2 bg-[#0d1c29] flex items-center">
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 lg:py-16">

            {/* Header */}
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="w-5 sm:w-6 h-px bg-[#c4a787]" />
              <p className="text-[#c4a787] uppercase tracking-[0.25em] text-[10px] sm:text-xs">Contact</p>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 sm:mb-8">
              Get in Touch
            </h1>

            {/* Quick links - stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-8 sm:mb-10">
              <a href="tel:+977061523848"
                className="flex items-center gap-2 text-white hover:text-[#c4a787] transition-colors text-xs sm:text-sm">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-[#c4a787] shrink-0" />
                +977 061-523848
              </a>
              <a href="mailto:info@grouphimalaya.com"
                className="flex items-center gap-2 text-white hover:text-[#c4a787] transition-colors text-xs sm:text-sm">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-[#c4a787] shrink-0" />
                info@grouphimalaya.com
              </a>
            </div>

            {/* Divider label */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <p className="text-[#c4a787] uppercase tracking-[0.25em] text-[10px] sm:text-xs whitespace-nowrap">
                Write us a Message
              </p>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Form / success */}
            {submitted ? (
              <div className="text-center py-8 sm:py-12">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#c4a787] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-light text-white mb-2">Message Sent!</h3>
                <p className="text-white/60 text-xs sm:text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <input
                  required name="name" value={formData.name} onChange={handleChange}
                  placeholder="Name"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm focus:outline-none focus:border-[#c4a787] transition-colors"
                />
                <input
                  required name="email" type="email" value={formData.email} onChange={handleChange}
                  placeholder="Email"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm focus:outline-none focus:border-[#c4a787] transition-colors"
                />
                <textarea
                  required name="message" value={formData.message} onChange={handleChange}
                  placeholder="Message" rows={4}
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm focus:outline-none focus:border-[#c4a787] transition-colors resize-none"
                />
                <button type="submit"
                  className="w-full bg-[#e8d5bf] text-[#0d1c29] py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium hover:bg-[#c4a787] transition-colors duration-300 rounded-full mt-2">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — Our Offices
          Mobile: touch slider with full images
      ══════════════════════════════════════ */}
      <section className="bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-28">

        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="w-5 sm:w-6 h-px bg-[#c4a787]" />
              <p className="text-[#c4a787] uppercase tracking-[0.25em] text-[10px] sm:text-xs">Offices</p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#0d1c29]">Our Offices</h2>
          </div>

          {/* Slider controls — only on mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <button onClick={prev}
              className="w-9 h-9 sm:w-10 sm:h-10 border border-gray-200 flex items-center justify-center hover:border-[#c4a787] hover:text-[#c4a787] transition-colors">
              <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
            <span className="text-[10px] sm:text-xs text-gray-400 w-8 sm:w-10 text-center">
              {current + 1} / {offices.length}
            </span>
            <button onClick={next}
              className="w-9 h-9 sm:w-10 sm:h-10 border border-gray-200 flex items-center justify-center hover:border-[#c4a787] hover:text-[#c4a787] transition-colors">
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* ── Mobile slider with full images ── */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {offices.map((office, i) => (
                <div key={i} className="w-full shrink-0 px-1">
                  <OfficeCard office={office} />
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {offices.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-300 ${
                  i === current ? 'bg-[#c4a787]' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop grid ── */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {offices.map((office, i) => (
            <OfficeCard key={i} office={office} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;