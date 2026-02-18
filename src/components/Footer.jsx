import React from 'react'
import { Phone, Mail, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#1a2838] text-white">
      {/* Top Section - Contact Us */}
      <div className="border-b border-white/10">
        <div className="px-6 md:px-12 py-8 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">Contact Us</h2>
            
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
              {/* Phone */}
              <a href="tel:+9770615238848" className="flex items-center gap-3 text-gray-300 hover:text-[#c4a787] transition-colors duration-300">
                <Phone className="w-5 h-5" />
                <span className="text-sm md:text-base">+977 061-523848</span>
              </a>
              
              {/* Email */}
              <a href="mailto:info@grouphimalaya.com" className="flex items-center gap-3 text-gray-300 hover:text-[#c4a787] transition-colors duration-300">
                <Mail className="w-5 h-5" />
                <span className="text-sm md:text-base">info@grouphimalaya.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-6 md:px-12 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1 - Logo & Social */}
          <div>
            <div className="mb-8 md:mb-12">
              <div className="bg-white p-2 inline-block">
                <img src="/images/logo2.png" alt="Company Logo" className="h-18 w-auto" />
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://np.linkedin.com/company/himalayaorg" className="w-10 h-10 border border-white/20 rounded flex items-center justify-center hover:bg-[#c4a787] hover:border-[#c4a787] transition-all duration-300 group">
                <Linkedin className="w-4 h-4 text-[#c4a787] group-hover:text-white" />
              </a>
              <a href="https://www.facebook.com/himalayaorg/" className="w-10 h-10 border border-white/20 rounded flex items-center justify-center hover:bg-[#c4a787] hover:border-[#c4a787] transition-all duration-300 group">
                <Facebook className="w-4 h-4 text-[#c4a787] group-hover:text-white" />
              </a>
              <a href="https://www.instagram.com/himalayaorg/?hl=en" className="w-10 h-10 border border-white/20 rounded flex items-center justify-center hover:bg-[#c4a787] hover:border-[#c4a787] transition-all duration-300 group">
                <Instagram className="w-4 h-4 text-[#c4a787] group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Column 2 - About Us */}
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6 text-gray-400">About Us</h3>
            <ul className="space-y-3">
              <li><a href="/about-organization" className="text-gray-300 hover:text-[#c4a787] transition-colors duration-300 text-sm">About The Organization</a></li>
              <li><a href="/organization-history" className="text-gray-300 hover:text-[#c4a787] transition-colors duration-300 text-sm">Organization History</a></li>
              <li><a href="/corporate-profile" className="text-gray-300 hover:text-[#c4a787] transition-colors duration-300 text-sm">Corporate Profile</a></li>
              <li><a href="/message-from-chairman" className="text-gray-300 hover:text-[#c4a787] transition-colors duration-300 text-sm">Message From Chairman</a></li>
              <li><a href="/who-we-are" className="text-gray-300 hover:text-[#c4a787] transition-colors duration-300 text-sm">Who We Are</a></li>
              <li><a href="/how-we-work" className="text-gray-300 hover:text-[#c4a787] transition-colors duration-300 text-sm">How We Work</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-[#c4a787] transition-colors duration-300 text-sm">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3 - Business Sector */}
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6 text-gray-400">Business Sector</h3>
            <ul className="space-y-3">
              <li><a href="/auto-mobile" className="text-gray-300 hover:text-[#c4a787] transition-colors duration-300 text-sm">Automobile</a></li>
              <li><a href="/real-estate" className="text-gray-300 hover:text-[#c4a787] transition-colors duration-300 text-sm">Real Estate Housing</a></li>
              <li><a href="/hospitality" className="text-gray-300 hover:text-[#c4a787] transition-colors duration-300 text-sm">Hospitality</a></li>
              <li><a href="/banking" className="text-gray-300 hover:text-[#c4a787] transition-colors duration-300 text-sm">Banking</a></li>
              <li><a href="/agriculture" className="text-gray-300 hover:text-[#c4a787] transition-colors duration-300 text-sm">Agriculture</a></li>
              <li><a href="/engineering" className="text-gray-300 hover:text-[#c4a787] transition-colors duration-300 text-sm">Engineering</a></li>
            </ul>
          </div>

          {/* Column 4 - Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6 text-gray-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/blog" className="text-gray-300 hover:text-[#c4a787] transition-colors duration-300 text-sm">Blog/News</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-[#c4a787] transition-colors duration-300 text-sm">Contact</a></li>
              <li><a href="/career" className="text-gray-300 hover:text-[#c4a787] transition-colors duration-300 text-sm">Career</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
            <p className="text-center md:text-left">
              © 2024 Himalaya Organization. All rights reserved.
            </p>
            <p className="text-center md:text-right">
              Crafted by{' '}
              <a 
                href="https://sait.com.np/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#c4a787] hover:text-[#b39670] transition-colors duration-300 underline"
              >
                S.A I.T Solution Trade and Concern
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer