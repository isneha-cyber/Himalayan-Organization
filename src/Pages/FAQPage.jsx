import React, { useState } from 'react';

const FAQPage = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqs = [
    {
      category: 'General',
      items: [
        {
          q: 'What is Himalaya Organization?',
          a: 'A leading Nepali conglomerate founded in 1991, specializing in automobiles (Force Motors, Maxus, Deepal), real estate, hospitality, banking, agriculture, education, and housing with 22+ branches and 200+ employees nationwide.',
        },
        {
          q: 'Where are you located?',
          a: 'Headquartered in Pokhara with branches in Kathmandu, Itahari, and other key cities across Nepal. Our nationwide presence ensures we\'re always close to our clients.',
        },
        {
          q: 'Who leads the company?',
          a: 'Founder and Chairman Mr. Dhruba Thapa has guided us with a vision of resilience and excellence since 1991 — transforming a single bike rental service into Nepal\'s leading multi-sector conglomerate.',
        },
      ],
    },
    {
      category: 'Services & Sectors',
      items: [
        {
          q: 'What automobile services do you offer?',
          a: 'We offer sales, rentals, and reconditioned vehicles, along with authorized dealerships for premium brands including Force Motors, Maxus, and Deepal. We also provide after-sales support, genuine parts, and financing partnerships.',
        },
        {
          q: 'Do you handle real estate and housing?',
          a: 'Yes. We develop modern residential apartments, villas, gated communities, commercial complexes, and affordable housing projects with eco-friendly designs across Nepal\'s key cities.',
        },
        {
          q: 'What about hospitality and agriculture?',
          a: 'Our hospitality arm operates hotels and resorts blending Nepali warmth with modern amenities. In agriculture, we support sustainable farming for food security through high-yield inputs, irrigation systems, organic training, and market linkages.',
        },
        {
          q: 'What financial services are available?',
          a: 'We offer personal and business loans with competitive rates, investment advisory, savings schemes, and vehicle/property financing. Our digital banking tools ensure quick and secure transactions.',
        },
      ],
    },
    {
      category: 'Partnerships & Careers',
      items: [
        {
          q: 'How can I partner or invest?',
          a: 'Reach out via info@grouphimalaya.com or visit any of our 22+ branches. We welcome investment and partnership discussions across all our business sectors.',
        },
        {
          q: 'Are there job openings?',
          a: 'We actively hire professionals across our 7+ sectors. Check our careers page or email your resume to info@grouphimalaya.com. We are always looking for talented individuals who share our values.',
        },
        {
          q: 'What are your core values?',
          a: 'Hard work, integrity, adaptability, and excellence — in every endeavor, across every sector, at every level of our organization.',
        },
      ],
    },
    {
      category: 'Other',
      items: [
        {
          q: 'What is Himalaya Trust?',
          a: 'Himalaya Trust is our social responsibility arm dedicated to supporting education, healthcare, and environmental sustainability. It reflects our belief that business success should translate into community upliftment.',
        },
        {
          q: 'How do I contact you?',
          a: 'You can reach us by phone at +977 061-523848, by email at info@grouphimalaya.com, through our online contact form, or by visiting any of our branches across Nepal.',
        },
      ],
    },
  ];

  const toggle = (id) => setOpenItem(openItem === id ? null : id);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero */}
      <section className="relative bg-[#1a2838] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #c4a787 0, #c4a787 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 px-6 md:px-16 lg:px-24 py-28 md:py-36">
          <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-6">Help Center</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-4xl">
            Frequently Asked
            <span className="block text-[#c4a787] mt-2">Questions</span>
          </h1>
          <p className="mt-8 text-gray-300 max-w-2xl text-lg leading-relaxed">
            Find quick answers about our services, sectors, and partnerships. Can't find what you need? Contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {faqs.map((section, si) => (
            <div key={si}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-[#c4a787]"></div>
                <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs">{section.category}</p>
              </div>
              <div className="space-y-2">
                {section.items.map((item, ii) => {
                  const id = `${si}-${ii}`;
                  const isOpen = openItem === id;
                  return (
                    <div key={ii} className="border border-gray-100 hover:border-[#c4a787] transition-colors">
                      <button
                        onClick={() => toggle(id)}
                        className="w-full flex items-center justify-between p-6 text-left group"
                      >
                        <span className="font-semibold text-[#1a2838] group-hover:text-[#c4a787] transition-colors pr-8">{item.q}</span>
                        <span className={`flex-shrink-0 w-8 h-8 border border-gray-200 rounded flex items-center justify-center text-gray-400 transition-all duration-300 ${isOpen ? 'bg-[#c4a787] border-[#c4a787] text-white rotate-45' : 'group-hover:border-[#c4a787] group-hover:text-[#c4a787]'}`}>
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <div className="w-12 h-px bg-[#c4a787] mb-4"></div>
                          <p className="text-gray-600 leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-[#f8f5f1] px-6 md:px-16 lg:px-24 py-24 text-center">
        <p className="text-[#c4a787] uppercase tracking-[0.3em] text-xs mb-4">Still Have Questions?</p>
        <h2 className="text-3xl md:text-4xl font-light text-[#1a2838] mb-6">We're Here to Help</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">Our team is always ready to answer your questions and guide you through our services and opportunities.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/contact" className="bg-[#1a2838] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#c4a787] transition-colors">Contact Us</a>
          <a href="tel:+977061523848" className="border border-[#1a2838] text-[#1a2838] px-8 py-4 text-sm uppercase tracking-widest hover:border-[#c4a787] hover:text-[#c4a787] transition-colors">+977 061-523848</a>
        </div>
      </section>

    </div>
  );
};

export default FAQPage;