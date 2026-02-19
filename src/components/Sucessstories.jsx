import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Successstories = () => {
  const stories = [
    {
      id: 1,
      category: "Entrepreneurship",
      title: "From Bike Rentals to Nepal's Leading Business House",
      description: "Started at 17, building an empire through 35 years of dedication",
      image: "/images/story.webp",
      bgColor: "bg-[#132030]",
      link: "#"
    },
    {
      id: 2,
      category: "Automobile Industry",
      title: "Pioneering Nepal's First Recondition House Concept",
      description: "Revolutionizing the automobile sector with innovative business models",
      image: "/images/automobile.webp",
      bgColor: "bg-[#1a2634]",
      link: "#"
    }
  ];

  return (
    <div className="pt-12 md:pt-24 bg-gray-50">
      <div>
     

        {/* Main Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column - Story Content */}
          <div className="bg-[#132030] text-white flex">
            <div className="group cursor-pointer flex flex-col justify-between px-4 md:px-12 py-10 md:py-0 w-full">
              <div>
                {/* Organization Name */}
                <div className="mb-8 md:mb-12 mt-10 md:mt-24">
                  <div className="text-lg md:text-2xl font-light flex items-center gap-2">
                    <span className="uppercase text-[#c4a787]">Himalaya Organization</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">Est. 1991</p>
                </div>

                {/* Category */}
                <p className="text-xs md:text-sm uppercase tracking-widest mb-4 text-[#c4a787]">
                  Entrepreneurial Journey
                </p>

                {/* Title */}
                <h3 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-snug mb-6">
                  From a 17-Year-Old College Student to Industry Leader
                </h3>

                {/* Story Points */}
                <div className="space-y-4 mb-8 text-sm md:text-base text-gray-300">
                  <p>
                    • Started entrepreneurial journey at 17 while still in college
                  </p>
                  <p>
                    • Began with a small bike rental business in the early 1990s
                  </p>
                  <p>
                    • Pioneered Nepal's first recondition house concept
                  </p>
                  <p>
                    • Expanded into motor showrooms and various auto dealerships
                  </p>
                  <p>
                    • Built a diversified business empire across multiple sectors
                  </p>
                  <p>
                    • Served as Former President of NADA (Nepal Automobiles Dealers Association)
                  </p>
                </div>

                {/* Quote */}
                <blockquote className="border-l-2 border-[#c4a787] pl-4 italic text-gray-300 text-sm md:text-base mb-8">
                  "I endured many ups and downs, took risks and always encouraged others to invest in Nepal."
                  <span className="block mt-2 text-xs not-italic text-gray-400">- Mr. Dhruba Thapa</span>
                </blockquote>
              </div>

              {/* Button */}
              {/* <button className="flex mb-12 items-center gap-2 text-sm md:text-base uppercase tracking-wider border-b border-white pb-1 group-hover:text-[#c4a787] group-hover:border-[#c4a787] transition-all duration-300 w-fit">
                View Full Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </button> */}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[850px] overflow-hidden ">
            <img
              src="/images/message.jpg"
              alt="Himalaya Organization Success Story"
              className="w-full h-full object-cover transition-transform duration-700 "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Stats Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="grid grid-cols-3 gap-4 text-white">
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-light text-[#c4a787]">35+</div>
                  <div className="text-xs md:text-sm mt-1">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-light text-[#c4a787]">7+</div>
                  <div className="text-xs md:text-sm mt-1">Business Sectors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-light text-[#c4a787]">1991</div>
                  <div className="text-xs md:text-sm mt-1">Established</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Successstories;