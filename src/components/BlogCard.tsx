import './BlogCard.css';
import BlogImage from '../assets/images/spacejoy-YqFz7UMm8qE-unsplash.jpg';

// type BlogCardProps = {
//   imgSrc: string;
//   imgAlt: string;
//   title: string;
//   body: string;
//   linkTitle: string;
//   linkHref: string;
// };

// props: BlogCardProps
const BlogCard = () => {
  // const { imgSrc, imgAlt, title, body, linkTitle, linkHref } = props;

  return (
    <div className="w-[340px]">
      <img
        className="w-full h-[288px] rounded-t-lg object-cover"
        src={BlogImage}
        alt="Blog Image"
      />
      <div className="px-[16px] py-[24px] bg-white rounded-b-lg">
        <div className="w-min px-2 py-[1px] bg-green-50 border border-green-200 rounded-full">
          <p className="bg-green-50 text-sm font-normal text-green-700">Interior</p>
        </div>
        <h2 className="mt-2 text-lg font-semibold">Top 5 Living Room Inspirations</h2>
        <p className="mt-3 text-base font-medium text-neutral-600">Curated vibrants colors for your living, make it pop & calm in the same time.</p>
        <a
          className="flex items-center mt-6 text-base font-medium text-indigo-700"
          href="#"
          target="_blank"
        >
          <span className="px-[2px]">Read more</span>
          <svg
            className="ml-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.4764 9.16658L9.00637 4.69657L10.1849 3.51807L16.6667 9.99992L10.1849 16.4817L9.00637 15.3032L13.4764 10.8332H3.33337V9.16658H13.4764Z"
              fill="#4338CA"
            />
          </svg>
        </a>
      </div>
    </div>
  )
};

export default BlogCard;
