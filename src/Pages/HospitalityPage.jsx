import React from 'react';
import { ArrowRight } from 'lucide-react';

const StickySection = ({ imageLeft = true, image, quote, children }) => {
  const imageCol = (
    <div className="lg:block lg:w-1/2 relative h-[300px] lg:h-auto">
      <div className="lg:sticky lg:top-0 h-full lg:h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131f2f]/80 via-[#131f2f]/20 to-transparent" />
        {/* Quote card */}
        {quote && (
          <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8">
            <div className="bg-[#131f2f]/70 backdrop-blur-sm border border-[#c4a787]/20 p-4 sm:p-5 lg:p-6">
              <span className="text-[#c4a787] text-2xl sm:text-3xl lg:text-4xl leading-none font-serif">"</span>
              <p className="text-white text-xs sm:text-sm leading-relaxed mt-1 sm:mt-2">{quote}</p>
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
  <div className="group flex items-center justify-between py-3 sm:py-4 border-b border-gray-100 cursor-pointer hover:border-[#c4a787] transition-colors duration-200">
    <span className="text-[#1a2838] group-hover:text-[#c4a787] text-xs sm:text-sm font-medium transition-colors duration-200 uppercase tracking-wide">
      {label}
    </span>
    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#c4a787] group-hover:translate-x-1 transition-transform duration-200" />
  </div>
);

// ─── Offering numbered card ──────────────────────────────────────────────────
const OfferingCard = ({ index, title, desc }) => (
  <div className="bg-white p-4 sm:p-6 lg:p-8 group hover:bg-[#1a2838] transition-colors duration-300 border border-gray-100">
    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-[#c4a787] flex items-center justify-center text-white text-[10px] sm:text-xs font-semibold mb-4 sm:mb-5 lg:mb-6">
      {String(index + 1).padStart(2, '0')}
    </div>
    <h3 className="font-semibold text-[#1a2838] group-hover:text-[#c4a787] mb-2 sm:mb-3 text-xs sm:text-sm transition-colors">{title}</h3>
    <p className="text-gray-500 group-hover:text-gray-300 text-[10px] sm:text-xs leading-relaxed transition-colors">{desc}</p>
  </div>
);

// ─── CTA card (dark) ─────────────────────────────────────────────────────────
const CTACard = ({ title, desc }) => (
  <div className="bg-[#1a2838] p-5 sm:p-6 lg:p-8 relative overflow-hidden">
    {/* logo watermark */}
    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-5">
      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border-2 border-white rounded-full" />
    </div>
    <h3 className="text-white text-base sm:text-lg lg:text-xl font-light mb-2 sm:mb-3 leading-snug">{title}</h3>
    <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 lg:mb-6">{desc}</p>
    <a
      href="/contact"
      className="inline-block bg-[#c4a787] text-white text-[10px] sm:text-xs uppercase tracking-widest px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full hover:bg-[#b39670] transition-colors"
    >
      Get in Touch
    </a>
  </div>
);

export const HospitalityPage = () => {
  const services = [
    'Luxury Hotels & Resorts',
    'Budget Guesthouses',
    'Conference Facilities',
    'Wedding & Event Venues',
    'Authentic Dining Experiences',
    'Tourism & Corporate Packages',
  ];

  const offerings = [
    { title: 'Luxury Hotels & Resorts', desc: 'Premium stays in scenic locations blending Himalayan hospitality with modern comforts.' },
    { title: 'Conference & Events', desc: 'State-of-the-art conference facilities, event venues, and exceptional dining experiences.' },
    { title: 'Budget Guesthouses', desc: 'Comfortable, affordable guesthouses with authentic Nepali cuisine and warm hospitality.' },
    { title: 'Tailored Packages', desc: 'Custom packages for tourism, corporate retreats, weddings, and group travel.' },
  ];

  return (
    <div className="bg-white font-sans">
      <section className="relative bg-[#1a2838] text-white overflow-hidden min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh] flex items-center">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #c4a787 0, #c4a787 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 px-4 sm:px-6 md:px-16 lg:px-24 py-16 sm:py-20 lg:py-28">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-4 lg:mb-6">Hospitality</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light leading-tight max-w-4xl">
            Nepali Warmth,
            <span className="block text-[#c4a787] mt-1 sm:mt-2">World-Class Comfort</span>
          </h1>
          <p className="mt-4 sm:mt-6 lg:mt-8 text-gray-300 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed">
            Himalaya Organization's hospitality ventures offer exceptional stays, blending the rich traditions of Himalayan hospitality with modern luxury.
          </p>
        </div>
      </section>

      <StickySection
        imageLeft={true}
        image="/images/hospitality.webp"
        quote="We're dedicated to making every guest feel at home in the heart of the Himalayas."
      >
        <div className="px-4 sm:px-6 md:px-10 lg:px-14 py-10 sm:py-12 lg:py-20 bg-[#f8f5f1]">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-4">Our Services</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#1a2838] mb-3 sm:mb-4">Where Every Stay Becomes a Memory</h2>
          <p className="text-gray-500 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">
            Diversifying our portfolio, we create welcoming hotels and resorts that cater to travelers, corporate guests, and event planners nationwide blending authentic Nepali culture with contemporary comfort.
          </p>
          <p className="text-gray-500 leading-relaxed mb-6 sm:mb-8 lg:mb-10 text-xs sm:text-sm">
            Whether it's a leisure escape, a corporate retreat, or a grand celebration, our trained staff, rigorous safety standards, and community-focused operations make every experience unforgettable.
          </p>
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <p className="text-[#c4a787] text-[10px] sm:text-xs uppercase tracking-widest font-medium">Hospitality Services</p>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            {services.map((s) => <ServiceLink key={s} label={s} />)}
          </div>
        </div>
        
        <div className="px-4 sm:px-6 md:px-10 lg:px-14 py-10 sm:py-12 lg:py-20 bg-white">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-4">Overview</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#1a2838] mb-4 sm:mb-5 lg:mb-6">Every Stay, Unforgettable</h2>
          <p className="text-gray-500 leading-relaxed mb-6 sm:mb-8 lg:mb-10 text-xs sm:text-sm">
           Mountain Glory Forest Resort & Spa
 trained hospitality professionals, authentic local cuisine, and strategic property locations across Nepal's most scenic destinations — we've built our reputation one memorable stay at a time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
            {offerings.map((o, i) => <OfferingCard key={i} index={i} {...o} />)}
          </div>
          <CTACard
            title="Plan Your Perfect Nepal Experience!"
            desc="Book a stay or enquire about hosting your event at one of our premium properties."
          />
        </div>
      </StickySection>
    </div>
  );
};