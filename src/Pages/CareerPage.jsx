import React from 'react';
import { ArrowRight } from 'lucide-react';

const CareerPage = () => {
  const jobs = [
    {
      title: 'Automobile Sales Executive',
      location: 'Pokhara, Nepal',
      type: 'Full Time',
      href: '/career/automobile-sales-executive',
    },
    {
      title: 'Real Estate Project Manager',
      location: 'Kathmandu, Nepal',
      type: 'Full Time',
      href: '/career/real-estate-project-manager',
    },
    {
      title: 'Hospitality Operations Manager',
      location: 'Pokhara, Nepal',
      type: 'Full Time',
      href: '/career/hospitality-operations-manager',
    },
    {
      title: 'Finance & Banking Advisor',
      location: 'Kathmandu, Nepal',
      type: 'Full Time',
      href: '/career/finance-banking-advisor',
    },
    {
      title: 'Agriculture Field Specialist',
      location: 'Itahari, Nepal',
      type: 'Full Time',
      href: '/career/agriculture-field-specialist',
    },
    {
      title: 'Civil Engineering Officer',
      location: 'Pokhara, Nepal',
      type: 'Full Time',
      href: '/career/civil-engineering-officer',
    },
    {
      title: 'Marketing & Brand Executive',
      location: 'Kathmandu, Nepal',
      type: 'Full Time',
      href: '/career/marketing-brand-executive',
    },
    {
      title: 'HR & Recruitment Specialist',
      location: 'Pokhara, Nepal',
      type: 'Full Time',
      href: '/career/hr-recruitment-specialist',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── SECTION 1: Hero ── */}
      {/* Layout: Left dark panel (text) + Right full-height image */}
      <section className="flex flex-col lg:flex-row min-h-[480px] lg:min-h-[600px]">

        {/* Left – Dark panel with career text */}
        <div className="w-full lg:w-[42%] bg-[#0d1c29] flex items-center px-10 md:px-14 lg:px-16 py-20 lg:py-28 order-1 lg:order-1">
          <div className="max-w-sm">
            {/* "Career" label with line */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-[#c4a787]" />
              <p className="text-white uppercase tracking-[0.25em] text-xs">Career</p>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              <span className="text-[#c4a787]">Grow</span>
              <span className="text-white"> Your </span>
              <br />
              <span className="text-white">Career with Us</span>
            </h1>

            {/* Subtext */}
            <p className="text-white/60 text-sm leading-relaxed">
              Embark on a fulfilling career journey with us, where challenges become opportunities and every contribution makes a meaningful impact across Nepal's leading business conglomerate.
            </p>
          </div>
        </div>

        {/* Right – Full-height image */}
        <div className="w-full lg:w-[58%] h-[300px] lg:h-auto relative overflow-hidden order-2 lg:order-2">
          <img 
            src="/images/career.jpg" 
            alt="Career opportunities"
            className="w-full h-full object-cover"
          />
          {/* Subtle dark gradient on left edge to blend with panel */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0d1c29]/30 to-transparent hidden lg:block" />
        </div>
      </section>

      {/* ── SECTION 2: Job Listings ── */}
      <section className="bg-white px-6 md:px-14 lg:px-24 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          {jobs.map((job, i) => (
            <a
              key={i}
              href={job.href}
              className="group flex items-center justify-between py-6 border-b border-[#e8eded] hover:border-[#c4a787] transition-colors duration-300 cursor-pointer"
            >
              {/* Job title */}
              <div className="flex-1 pr-4">
                <h3 className="text-[#0d1c29] text-lg md:text-xl font-light group-hover:text-[#c4a787] transition-colors duration-300">
                  {job.title}
                </h3>
              </div>

              {/* Meta info + arrow */}
              <div className="flex items-center gap-6 md:gap-10 flex-shrink-0">
                {/* Location */}
                <p className="text-[#c4a787] text-xs uppercase tracking-[0.15em] hidden sm:block">
                  {job.location}
                </p>

                {/* Type */}
                <p className="text-[#c4a787] text-xs uppercase tracking-[0.15em] hidden md:block">
                  {job.type}
                </p>

                {/* Arrow icon */}
                <div className="w-8 h-8 flex items-center justify-center text-[#c4a787] group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5" strokeWidth={1} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: Open Application CTA ── */}
      <section className="bg-[#f8f5f1] px-6 md:px-14 lg:px-24 py-20 text-center">
        <p className="text-[#c4a787] uppercase tracking-[0.25em] text-xs mb-4">Don't See Your Role?</p>
        <h2 className="text-3xl md:text-4xl font-light text-[#0d1c29] mb-6">
          Send an Open Application
        </h2>
        <p className="text-[#0d1c29]/60 max-w-xl mx-auto text-sm leading-relaxed mb-10">
          We're always looking for passionate, talented individuals to join our growing team. Send us your resume and we'll reach out when a matching opportunity arises.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-3 bg-[#0d1c29] text-white px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-[#c4a787] transition-colors duration-300"
        >
          Get In Touch
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </a>
      </section>

    </div>
  );
};

export default CareerPage;