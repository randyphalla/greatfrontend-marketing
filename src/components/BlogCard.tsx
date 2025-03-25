import './BlogCard.css';

type BlogCardProps = {
  imgSrc: string;
  imgAlt: string;
  badgeText: string;
  title: string;
  body: string;
  linkTitle: string;
  linkHref: string;
};

const BlogCard = (props: BlogCardProps) => {
  const { imgSrc, imgAlt, badgeText, title, body, linkTitle, linkHref } = props;

  return (
    <div className="w-[340px] my-drop-shadow">
      <img
        className="w-full h-[288px] rounded-t-lg object-cover"
        src={imgSrc}
        alt={imgAlt}
      />
      <div className="px-[16px] py-[24px] bg-white rounded-b-lg">
        <div className="w-min px-2 py-[1px] bg-green-50 border border-green-200 rounded-full">
          <p className="bg-green-50 text-sm font-normal text-green-700">{badgeText}</p>
        </div>
        <h2 className="mt-2 text-lg font-semibold">{title}</h2>
        <p className="mt-3 text-base font-medium text-neutral-600 line-clamp-2">{body}</p>
        <a
          className="flex items-center mt-6 text-base font-medium text-indigo-700"
          href={linkHref}
          target="_blank"
        >
          <span className="px-[2px]">{linkTitle}</span>
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
