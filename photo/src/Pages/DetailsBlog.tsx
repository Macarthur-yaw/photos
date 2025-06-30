import { useParams } from "react-router";
import blog1 from "../assets/see.jpg";
import {blogPosts} from "./BlogPage"; 

export default function BlogDetails() {
  const { id  } = useParams<any>();
  const blog = blogPosts.find((b) => b.id === Number(id));

  if (!blog) return <div className="p-10 text-center">Blog post not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 mt-10">
      <img src={blog1} alt={blog.title} className="w-full h-80 object-cover rounded-xl mb-8" />
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 text-lg">{blog.description}</p>
    </div>
  );
}
