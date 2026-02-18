import React from 'react';

const Blog = () => {
  // Blog post data
  const blogPost = {
    category: "Business",
    title: "Understanding the Basics of Contract Law for Small Business Owners",
    description: "Learn essential contract law principles to protect your business interests and avoid common pitfalls in contractual agreements.",
    imageSrc: "images/blog1.webp",
    slug: "understanding-the-basics-of-contract-law-for-small-business-owners",
    date: "2024-03-15"
  };

  return (
    <div className="bg-white font-sans">
      {/* Section Header */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24">
        <div className="">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#c5a788] uppercase tracking-[0.25em] text-xs md:text-sm mb-4">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0d1c29]">
              Our Latest News
            </h1>
          </div>

          {/* Blog Card - Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden ">
            {/* Left Column - Image */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
              <img
                src={blogPost.imageSrc}
                alt={blogPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Column - Content */}
            <div className="bg-[#132030] p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-[#c5a788]"></div>
                <span className="text-white uppercase tracking-wider text-sm font-medium">
                  {blogPost.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-6 leading-tight">
                {blogPost.title}
              </h2>

              {/* Description */}
              <p className="text-white/70 text-sm md:text-base mb-8 leading-relaxed">
                {blogPost.description}
              </p>

              {/* Read Article Link */}
              <a
                href={`/blog/${blogPost.slug}`}
                className="group inline-flex items-center gap-3 w-fit"
              >
                <span className="text-white uppercase tracking-wider text-sm font-medium">
                  Read Article
                </span>
                <div className="w-12 h-[2px] bg-white/30 group-hover:bg-white transition-colors duration-300"></div>
              </a>
            </div>
          </div>

          {/* Optional: Add more blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* You can map through additional blog posts here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;