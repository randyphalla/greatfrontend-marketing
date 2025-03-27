import ProfileImage from "../assets/images/profile.png";

interface ProfileCardProps {
  fullName: string;
  position: string;
  company: string;
  description: string;
  onClick: () => void;
  socialLinks: SocialLink[];
}

interface SocialLink {
  id: number;
  svg: any;
  ariaLabel: string;
  href: string;
}

const SocialIconLink = (props: SocialLink) => {
  const { svg, ariaLabel, href } = props;
  return (
    <a
      className="block min-w-min p-2 icon-button rounded-lg hover:bg-neutral-50 focus:outline-4 outline-royal-blue"
      aria-label={ariaLabel}
      href={href}
      target="_blank"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
};

const ProfileCard = (props: ProfileCardProps) => {
  const { fullName, position, company, description, onClick, socialLinks } = props;

  return (
    <div className="w-[340px] my-drop-shadow rounded-xl bg-white">
      <div className="py-6 px-4">
        <img
          className="size-[64px] ml-auto mr-auto"
          src={ProfileImage}
          alt="A smiling woman wearing glasses stands in front of a white brick wall, exuding a cheerful and friendly demeanor."
          loading="lazy"
        />
        <h2 className="mt-6 font-medium text-xl text-center text-neutral-900">{fullName}</h2>
        <h3 className="mt-1 font-normal text-sm text-center text-neutral-600">{position} @ {company}</h3>
        <p className="mt-6 mb-10 font-normal text-base text-center text-neutral-600">{description}</p>
        <button
          className="w-full py-[10px] text-white text-base font-normal rounded-lg bg-indigo-600 cursor-pointer hover:bg-indigo-800 focus:bg-indigo-800 focus:outline-4 outline-royal-blue disabled:bg-neutral-100 disabled:text-neutral-400"
          type="button"
          onClick={onClick}
        >
          Contact me
        </button>
        <div className="mt-6 flex justify-center gap-4">
          {socialLinks.map((socialLink: SocialLink) => (
            <SocialIconLink
              key={socialLink.id}
              id={socialLink.id}
              svg={socialLink.svg}
              ariaLabel={socialLink.ariaLabel}
              href={socialLink.href}
            />
          ))}
        </div>
      </div>
    </div>
  )
};

export default ProfileCard;
