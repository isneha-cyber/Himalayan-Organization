import React, { useState } from 'react'
import { Target, Users, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react'

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    {
      icon: <Target className="w-8 h-8 text-[#c4a787]" />,
      title: "Mission & Vision",
      description: "Driving entrepreneurial growth and contributing to Nepal's economic development by aligning local opportunities with global trends while maintaining excellence across all ventures.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#c4a787]" />,
      title: "Who We Are",
      description: "Established in 1991, we are one of Nepal's leading business houses with a strong legacy of diversified investments and commitment to sustainable growth.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#c4a787]" />,
      title: "The Business",
      description: "From automobile dealerships to finance, construction, agriculture, and hospitality, we continue to evolve with changing market demands across diverse sectors.",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <>
      {/* About Section */}
      <div className="py-12 md:py-24 px-6 md:px-12 flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
        <div className="lg:w-1/3">
          <h2 className='uppercase text-sm md:text-lg text-[#c4a787] tracking-wider'>About</h2>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-light mt-4 md:mt-6 leading-tight'>
            Empowering
            <br className='mt-2' />
            Business Growth
          </h2>
        </div>
        
        <div className="lg:w-2/3 space-y-4">
          <p className='text-base md:text-lg lg:text-xl mb-4 leading-relaxed'>
            Established in 1991, Himalaya Organization is one of Nepal's leading business houses with a strong legacy of diversified investments. The group is committed to driving entrepreneurial growth and contributing to the nation's economic development by aligning local opportunities with global trends and maintaining excellence across all its ventures.
          </p>

          <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
            Under the leadership of Chairman Mr. Dhruba Thapa, the organization grew from a small bike rental business into a diversified enterprise. From pioneering Nepal's first recondition house concept to expanding into automobile dealerships, trade, construction, finance, agriculture, and hospitality, Himalaya Organization continues to evolve with changing market demands and pursue steady growth.
          </p>
        </div>
      </div>

      {/* Full Width Image Section */}
      <div className="w-full overflow-hidden">
        <img 
          className='w-full h-[220px] md:h-[500px] lg:h-[800px] object-cover' 
          src="images/about1.jpg" 
          alt="Himalaya Organization" 
        />
      </div>

      {/* Services Section */}
      <div className="px-6 md:px-12 sm:pb-24 pb-12 pt-12 md:pt-24 bg-gray-50">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className='uppercase text-sm md:text-lg text-[#c4a787] tracking-wider mb-3'>Our Values</h2>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-light'>
            What Drives Us Forward
          </h2>
        </div>

        {/* Mobile Slider - Only visible on small screens */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-white p-8 h-full">
                    <div className="mb-6">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-light mb-4 text-gray-900">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* <button className="uppercase text-xs tracking-wider border-b border-gray-900 pb-1 hover:text-[#c4a787] hover:border-[#c4a787] transition-colors duration-300">
                      More Information
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-[#c4a787] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 md:p-10 transition-shadow duration-300"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light mb-4 text-gray-900">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* <button className="uppercase text-xs md:text-sm tracking-wider border-b border-gray-900 pb-1 hover:text-[#c4a787] hover:border-[#c4a787] transition-colors duration-300">
                More Information
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default About