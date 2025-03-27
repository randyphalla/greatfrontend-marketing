import './IconButton.css';

interface IconButtonProps {
  ariaLabel: string;
  href: string;
  icon: string | TrustedHTML; // React.ReactNode
}

// TODO: https://www.greatfrontend.com/projects/challenges/button-component
const IconButton = (props: IconButtonProps) => {
  const { ariaLabel, href, icon } = props;

  return (
    <a
      className="block min-w-min p-2 icon-button rounded-lg hover:bg-neutral-50 focus:outline-4 outline-royal-blue"
      aria-label={ariaLabel}
      href={href}
      target="_blank"
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  )
};

export default IconButton;
