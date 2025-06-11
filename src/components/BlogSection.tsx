import React from "react";

interface BlogPost {
  image: string;
  category: string;
  title: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    image: "https://rn53themes.net/themes/matrimo/images/blog/1.jpg",
    category: "WEDDING + JOHNNY",
    title: "Wedding arrangements",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    image: "https://rn53themes.net/themes/matrimo/images/blog/2.jpg",
    category: "WEDDING + JOHNNY",
    title: "Wedding arrangements",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    image: "https://rn53themes.net/themes/matrimo/images/blog/3.jpg",
    category: "WEDDING + JOHNNY",
    title: "Invitation cards",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
];

const BlogSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="bg-[#fffaf7] text-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-sm text-[#b68c62] tracking-wide uppercase">
              Blog Posts
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif">
              Blog <span className="text-[#b68c62]">&</span> Articles
            </h2>
            {/* Center Content */}
            <div className="text-center z-10">
              <h1 className="text-3xl font-bold text-brown-700">
                Recent Couples
              </h1>

              {/* Mirrored images below */}
              <div className="flex justify-center items-center gap-1 mt-4">
                {/* Left Image (flipped horizontally) */}
                <img
                  src="https://rn53themes.net/themes/matrimo/images/leaf/1.png"
                  alt="decor"
                  className="w-24 transform scale-x-[-1] animate-float"
                />

                {/* Right Image (normal) */}
                <img
                  src="https://rn53themes.net/themes/matrimo/images/leaf/1.png"
                  alt="decor"
                  className="w-24 animate-float"
                />
              </div>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <div key={idx} className=" bg-white text-center md:text-left">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[350px] object-cover"
                />
                <div className="mt-4">
                  <p className="text-[11px] text-pink-600 font-semibold uppercase tracking-widest">
                    {post.category}
                  </p>
                  <h3 className="text-lg font-bold mt-1">{post.title}</h3>
                  <p className="text-sm mt-1">{post.description}</p>
                  <button className="mt-4 bg-black text-white px-4 py-1 text-[11px] font-semibold uppercase tracking-wide">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
