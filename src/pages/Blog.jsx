import React, { useRef, useState } from "react";

const categories = [
  {
    name: "SEO",
    description: "Learn how to optimize your website and content to rank higher on search engines like Google.",
    posts: [
      { title: "SEO Hacks to Rank #1 on Google", date: "Feb 5, 2025", id: "seo-hacks" },
      { title: "On-Page vs. Off-Page SEO Explained", date: "Jan 28, 2025", id: "onpage-offpage-seo" },
    ],
  },
  {
    name: "Social Media",
    description: "Explore strategies to grow your social media presence and engage your audience effectively.",
    posts: [
      { title: "Social Media Growth Tips", date: "Feb 15, 2025", id: "social-media-growth" },
      { title: "How to Leverage Instagram Reels for Marketing", date: "Jan 18, 2025", id: "instagram-reels" },
    ],
  },
  {
    name: "Branding",
    description: "Build a strong online presence with effective branding and personal marketing techniques.",
    posts: [
      { title: "How to Build a Personal Brand Online", date: "Feb 10, 2025", id: "personal-branding" },
      { title: "5 Ways to Make Your Brand Stand Out", date: "Jan 12, 2025", id: "branding-strategies" },
    ],
  },
  {
    name: "Paid Ads",
    description: "Discover paid advertising techniques for Google Ads, Facebook Ads, and other platforms.",
    posts: [
      { title: "Google Ads vs. Facebook Ads: Which is Better?", date: "Feb 2, 2025", id: "google-vs-facebook-ads" },
      { title: "How to Reduce CPC & Increase ROI in Paid Ads", date: "Jan 22, 2025", id: "paid-ads-strategies" },
    ],
  },
];

const blogContent = {
  "seo-hacks": {
    title: "SEO Hacks to Rank #1 on Google",
    content: "Ranking #1 on Google requires high-quality content, keyword optimization, and backlink building...",
  },
  "onpage-offpage-seo": {
    title: "On-Page vs. Off-Page SEO Explained",
    content: "On-page SEO includes optimizing titles, meta descriptions, and content quality...",
  },
  "social-media-growth": {
    title: "Social Media Growth Tips",
    content: "Growing on social media requires consistent content, audience engagement, and strategic use of hashtags...",
  },
  "instagram-reels": {
    title: "How to Leverage Instagram Reels for Marketing",
    content: "Instagram Reels offers a great way to market your brand through short, engaging videos...",
  },
  "personal-branding": {
    title: "How to Build a Personal Brand Online",
    content: "A strong personal brand helps establish authority in your niche...",
  },
  "branding-strategies": {
    title: "5 Ways to Make Your Brand Stand Out",
    content: "To stand out, focus on unique branding elements like a strong logo, color scheme, and brand voice...",
  },
  "google-vs-facebook-ads": {
    title: "Google Ads vs. Facebook Ads: Which is Better?",
    content: "Google Ads is intent-based, while Facebook Ads target audience behavior and interests...",
  },
  "paid-ads-strategies": {
    title: "How to Reduce CPC & Increase ROI in Paid Ads",
    content: "Lowering CPC and increasing ROI requires optimized targeting, A/B testing, and high-quality ad creatives...",
  },
};

export default function Blog() {
  const sectionRefs = useRef({});
  const postDetailRef = useRef(null);
  const [selectedPost, setSelectedPost] = useState(null);

  // Scroll to section smoothly
  const scrollToSection = (section) => {
    if (sectionRefs.current[section]) {
      sectionRefs.current[section].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Scroll to detailed post
  const scrollToPostDetail = (postId) => {
    setSelectedPost(postId);
    setTimeout(() => {
      postDetailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100); // Ensures state updates before scrolling
  };

  return (
    <div className="min-h-screen font-roboto bg-black pb-20 text-white">
      {/* Hero Section */}
      <header className="w-full py-6 text-center bg-black text-white px-4">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mt-50 mb-4">
          Digital Marketing Insights & Strategies
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Expert Tips for SEO, Social Media, and Online Growth
        </p>
      </header>

      {/* Categories Navigation */}
      <section className="py-8 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:flex gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => scrollToSection(category.name)}
              className="px-4 py-3 rounded-lg font-semibold text-sm md:text-base transition-colors bg-blue-700 text-white hover:bg-blue-800"
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Sections */}
      <main className="max-w-6xl mx-auto px-4 space-y-12">
        {categories.map((category) => (
          <section
            key={category.name}
            ref={(el) => (sectionRefs.current[category.name] = el)}
            className="bg-gray-900 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{category.name}</h2>
            <p className="text-lg text-gray-400 mb-6">{category.description}</p>
            <div className="space-y-6">
              {category.posts.map((post) => (
                <article key={post.id} className="border-b pb-6 last:border-0">
                  <button onClick={() => scrollToPostDetail(post.id)} className="text-left w-full">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white hover:text-blue-400 transition">
                      {post.title}
                    </h3>
                  </button>
                  <time className="text-gray-500 text-sm">{post.date}</time>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* More Details Section */}
      {selectedPost && (
        <section ref={postDetailRef} className="max-w-6xl mx-auto px-4 mt-12 bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{blogContent[selectedPost].title}</h2>
          <p className="text-lg text-gray-300">{blogContent[selectedPost].content}</p>
          <button onClick={() => setSelectedPost(null)} className="mt-6 text-blue-400 hover:underline">
            Back to posts
          </button>
        </section>
      )}
    </div>
  );
}
