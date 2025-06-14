import React from "react";
import image1 from "../assets/1 (2).png";
import image2 from "../assets/1.png";

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
    <div className="bg-[var(--bg-secondary-color)]">
      <section className="w-5/6 mx-auto text-black py-16">
        <div className=" px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--primary-color)] mb-4  font-cinzel">
              Blog & Articles
            </h2>
            {/* Center Content */}
            <div className="text-center z-10">
              {/* Mirrored images below */}
              {/* Decorations */}
              <div className="flex justify-center items-center gap-1 my-4 ">
                <img
                  src={image1}
                  alt="decor"
                  className="w-24 animate-float"
                  style={{ transform: "scaleX(-1)" }}
                />
                <img src={image2} alt="decor" className="w-24 animate-float" />
              </div>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {blogPosts.map((post, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow hover:shadow-md transition p-4"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover rounded-md"
                />
                <div className="mt-5">
                  <p className="text-xs text-[var(--primary-color)]  font-semibold uppercase tracking-wide">
                    {post.category}
                  </p>
                  <h3 className="text-lg text-[var(--secondary-color)] font-bold mt-2 text-gray-800">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {post.description}
                  </p>
                  <button className="mt-4 bg-[var(--primary-color)] text-white px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded hover:bg-gray-800 transition">
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
