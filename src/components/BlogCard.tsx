import './BlogCard.css';
import BlogImage from '../assets/images/spacejoy-YqFz7UMm8qE-unsplash.jpg';

const BlogCard = () => {
  return (
    <div className="blog-card">
      <img
        className="w-auto"
        src={BlogImage}
        alt="Blog Image"
      />
      <p>Interior</p>
      <h2>Top 5 Living Room Inspirations</h2>
      <p>Curated vibrants colors for your living, make it pop & calm in the same time.</p>
      <button>Read more</button>
    </div>
  )
};

export default BlogCard;
