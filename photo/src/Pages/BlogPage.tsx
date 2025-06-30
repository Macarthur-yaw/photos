import { Link } from "react-router";
import blog1 from "../assets/see.jpg";
import blog2 from "../assets/see.jpg";
import blog3 from "../assets/see.jpg";
import blog4 from "../assets/see.jpg";
import blog5 from "../assets/see.jpg";
import blog6 from "../assets/see.jpg";

export const blogPosts = [
  {
    id:1,
    title: "Capturing Golden Hour Magic",
    description: "Discover the secrets behind perfect lighting during golden hour. Tips, timing, and camera settings included.",
    image: blog1,
  },
  {
    id:2,
    title: "Event Photography Essentials",
    description: "From candid moments to crowd shots, here’s how to nail every event photo with professionalism and flair.",
    image: blog2,
  },
  {
    id:3,
    title: "Top 10 Locations for Portraits",
    description: "Explore stunning outdoor and indoor spots that elevate your portrait photography to the next level.",
    image: blog3,
  },
  {
    id:4,
    title: "How to Pose Naturally",
    description: "Learn easy posing techniques to make your clients feel comfortable and look their best in every shot.",
    image: blog4,
  },
  {
    id:5,
    title: "Wedding Stories Through the Lens",
    description: "Go behind the scenes of some of our most heartwarming wedding shoots and the stories they tell.",
    image: blog5,
  },
  {
    id:6,
    title: "Editing Like a Pro",
    description: "Master Lightroom and Photoshop basics with this beginner-friendly guide for timeless photo edits.",
    image: blog6,
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mt-10">
      <h1 className="text-4xl font-bold text-center mb-10">Photography Blog</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post,index) => (
          <Link to={`/blog/${post.id}`} key={index}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 hover:underline cursor-pointer">{post.title}</h2>
                <p className="text-gray-600 text-sm">{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
