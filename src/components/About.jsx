import React, { useState } from 'react'
import { Target, Users, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react'

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    {
      img: '/images/bullseyes.png',
      title: "Mission & Vision",
      description: "Driving entrepreneurial growth and contributing to Nepal's economic development by aligning local opportunities with global trends while maintaining excellence across all ventures.",
    },
    {
      img: '/images/users.png',
      title: "Who We Are",
      description: "Established in 1991, we are one of Nepal's leading business houses with a strong legacy of diversified investments and commitment to sustainable growth.",
    },
    {
      img: '/images/goals.png',
      title: "The Business",
      description: "From automobile dealerships to finance, construction, agriculture, and hospitality, we continue to evolve with changing market demands across diverse sectors.",
    },
  ]

  return (
    <>
      {/* About Section */}
      <div className=" py-12 sm:py-24 px-6 md:px-12 text-center bg-gray-50">
       
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-light mt-4 md:mt-6 mb-8 leading-tight'>
            Empowering Business Growth
          </h2>
          <p className='text-base md:text-lg lg:text-3xl mb-4 leading-relaxed'>
            Established in 1991, Himalaya Organization is one of Nepal's leading business houses with a strong legacy of diversified investments. The group is committed to driving entrepreneurial growth and contributing to the nation's economic development by aligning local opportunities with global trends and maintaining excellence across all its ventures.
          </p>
        {/* Services Section */}
      <div className="px-0 md:px-12 mt-12 md:mt-16 bg-gray-50">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className='uppercase text-sm md:text-lg text-[#c4a787] tracking-wider mb-3'>Our Values</h2>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-light'>
            What Drives Us Forward
          </h2>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#131f2f] p-8 md:p-10 transition-shadow duration-300"
            >
              <div className="mb-6">
                {/* Fixed: Use img tag with src attribute */}
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light mb-4 text-[#c4a787]">
                {service.title}
              </h3>
              
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
       
      </div>

      
    </>
  )
}

export default About