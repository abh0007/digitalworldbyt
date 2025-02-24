import { useState, useEffect } from "react";
import axios from "axios";

const GOOGLE_SHEET_ID = "1f0s4rmuzk7yc-PkR2mAw2XcAillAnaQDWcbBi5qMpJ4";
const GOOGLE_API_KEY = "AIzaSyBJDzXAD6YgxL002XakCy1LQ7FJ5wOhUb0";
const SHEET_NAME = "Sheet1";
const API_URL = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${SHEET_NAME}?key=${GOOGLE_API_KEY}`;

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        const rows = response.data.values;
        if (rows && rows.length > 1) {
          const headers = rows[0].map(header => header.toLowerCase().replace(/\s+/g, ""));
          const posts = rows.slice(1).map(row => {
            let postObj = {};
            headers.forEach((header, index) => {
              postObj[header] = row[index] || "";
            });
            return postObj;
          });
          setBlogPosts(posts);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-40">
      <div className="text-center mb-12">
        <h1 className="text-5xl text-black font-bold">Welcome to Our Blog</h1>
        <p className="text-gray-500 mt-2">Stay updated with the latest trends in digital marketing.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden relative">
            {post.imageurl && <img className="w-full h-60 object-cover" src={post.imageurl} alt={post.title} />}
            <div className="p-2">
              <h2 className="text-xl text-black font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{post.content}</p>
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                onClick={() => openModal(post)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Modal with Blur Background */}
      {isModalOpen && selectedPost && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background Blur */}
          <div
            className="absolute inset-0 bg-transparent bg-opacity-30 backdrop-blur-md"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-xl shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-y-auto p-6">
            <button className="absolute top-4 right-4 text-gray-600 text-2xl" onClick={closeModal}>
              &times;
            </button>
            {selectedPost.imageurl && (
              <img className="w-full h-64 object-cover rounded-t-lg" src={selectedPost.imageurl} alt={selectedPost.title} />
            )}
            <h2 className="text-3xl font-bold mt-4">{selectedPost.title}</h2>
            <p className="text-gray-700 mt-4">{selectedPost.fullcontent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
