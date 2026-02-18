import React, { useState, useEffect } from 'react';

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	// Background images with overlay text
	const slides = [
		{
			image: '/images/automobile.webp',
			title: 'Automobile',
			description: "Himalaya Organization's roots lie in the automobile sector, which has always been the company's top priority. Despite being involved in numerous business sectors, the Chairman himself oversees the automobile sector's operations with strict supervision. The company has established world-class showrooms for the segment brand, following corporate identities, which are operated by Himalaya."
		},
		{
			image: '/images/realestate.webp',
			title: 'Real Estate',
			description: '60 ACRES OF LAND CURRENTLY OWNED BY HIMALAYA INVEST & DEVELOPMENT COMPANY'
		},
		{
			image: '/images/hospitality.webp',
			title: 'Hospitality',
			description: 'Mountain Glory Forest Resort & Spa is a luxury forest resort that offers the perfect blend of modern amenities and natural beauty. Located in the picturesque city of Pokhara, Nepal, our resort provides a serene accommodation and a cheerful environment that is ideal for couples, families, weddings, and events.'
		},
		{
			image: '/images/h2.webp',
			title: 'Banking',
			description: 'NMB Bank & Mega Bank Limited licensed as "A" class financial institution by Nepal Rastra Bank'
		},
		
	];

	// Auto-advance slider every 7 seconds
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 7000);
		return () => clearInterval(timer);
	}, [slides.length]);

	return (
		<>
			{/* Hero Section */}
			{/* Top Text Section - Heading and Description */}
			<div className=" h-12 md:h-0"></div>
			<div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
				<div className="w-full lg:w-1/2 text-black">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold">
						Your Partner for Business Advisory.
					</h1>
				</div>

				{/* Right Side - Description */}
				<div className="w-full lg:w-1/2 text-black">
					<p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
						Partner with us to access expert services tailored to optimize your operations, mitigate risks, and achieve your business goals effectively.
					</p>
				</div>
			</div>

			{/* Image Slider Section */}
			<div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
				{/* Background Image Slider */}
				<div className="absolute inset-0 z-0">
					{slides.map((slide, index) => (
						<div
							key={index}
							className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
								index === currentSlide ? 'opacity-100' : 'opacity-0'
							}`}
							style={{ backgroundImage: `url('${slide.image}')` }}
						>
							{/* Overlay for better text readability */}
							<div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>
						</div>
					))}
				</div>

				{/* Content Container with Split-Left Layout */}
				<div className="relative z-10 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
					{slides.map((slide, index) => (
						<div 
							key={index}
							className={`absolute inset-0 flex items-center transition-all duration-1000 ${
								index === currentSlide ? 'opacity-100' : 'opacity-0'
							}`}
						>
							<div className="w-full lg:w-2/3 px-6 sm:px-12 lg:px-20 py-12">
								<div className="border-l-8 border-white pl-8 space-y-6">
									<h2 className="text-2xl  text-white uppercase tracking-wider">
										{slide.title}
									</h2>
									<div className="w-24 h-1 bg-white"></div>
									<p className="text-base sm:text-xl  text-white leading-relaxed max-w-3xl">
										{slide.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Slider Navigation Dots */}
				<div className="absolute bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`rounded-full transition-all duration-300 ${
								index === currentSlide 
									? 'bg-white w-8 sm:w-10 h-3' 
									: 'bg-white/50 hover:bg-white/75 w-3 h-3'
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>

			{/* Animated Scrolling Text Banner */}
			<div className="relative w-full bg-[#132030] text-white py-3 sm:py-6 overflow-hidden">
				<div className="animate-scroll whitespace-nowrap flex">
					{/* First set of items */}
					<div className="flex items-center uppercase">
						<span className="px-4 sm:px-6 lg:px-8 text-xs sm:text-sm md:text-base lg:text-2xl font-semibold">Himalayan Organization</span>
						<span className="px-4 sm:px-6 lg:px-8 text-xs sm:text-sm md:text-base lg:text-2xl font-semibold">AutoMobile</span>
						<span className="px-4 sm:px-6 lg:px-8 text-xs sm:text-sm md:text-base lg:text-2xl font-semibold">Banking</span>
						<span className="px-4 sm:px-6 lg:px-8 text-xs sm:text-sm md:text-base lg:text-2xl font-semibold">Real Estate</span>
						<span className="px-4 sm:px-6 lg:px-8 text-xs sm:text-sm md:text-base lg:text-2xl font-semibold">Hospitality</span>
						<span className="px-4 sm:px-6 lg:px-8 text-xs sm:text-sm md:text-base lg:text-2xl font-semibold">Agriculture</span>
						<span className="px-4 sm:px-6 lg:px-8 text-xs sm:text-sm md:text-base lg:text-2xl font-semibold">Education</span>
					</div>

					{/* Duplicate set for seamless loop */}
					<div className="flex items-center uppercase">
						<span className="px-4 sm:px-6 lg:px-8 text-xs sm:text-sm md:text-base lg:text-2xl font-semibold">Himalayan Organization</span>
						<span className="px-4 sm:px-6 lg:px-8 text-xs sm:text-sm md:text-base lg:text-2xl font-semibold">AutoMobile</span>
						<span className="px-4 sm:px-6 lg:px-8 text-xs sm:text-sm md:text-base lg:text-2xl font-semibold">Banking</span>
						<span className="px-4 sm:px-6 lg:px-8 text-xs sm:text-sm md:text-base lg:text-2xl font-semibold">Real Estate</span>
						<span className="px-4 sm:px-6 lg:px-8 text-xs sm:text-sm md:text-base lg:text-2xl font-semibold">Hospitality</span>
						<span className="px-4 sm:px-6 lg:px-8 text-xs sm:text-sm md:text-base lg:text-2xl font-semibold">Agriculture</span>
						<span className="px-4 sm:px-6 lg:px-8 text-xs sm:text-sm md:text-base lg:text-2xl font-semibold">Education</span>
					</div>
				</div>
			</div>

			{/* Add this CSS to your global styles or component */}
			<style jsx>
				{`
					@keyframes scroll {
						0% {
							transform: translateX(0);
						}
						100% {
							transform: translateX(-50%);
						}
					}

					.animate-scroll {
						animation: scroll 20s linear infinite;
					}

					.animate-scroll:hover {
						animation-play-state: paused;
					}
				`}
			</style>
		</>
	);
};

export default Hero;