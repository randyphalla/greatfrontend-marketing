import Button from "./Button";
import IconButton from "./IconButton";
import ProfileImage from "../assets/images/profile.png";

interface ProfileCardProps {
  fullName: string;
  position: string;
  company: string;
  description: string;
  buttonText: string;
  onClick: () => void;
  socialLinks: SocialLink[];
}

interface SocialLink {
  id: number;
  svg: any;
  ariaLabel: string;
  href: string;
}

const ProfileCard = (props: ProfileCardProps) => {
  const { fullName, position, company, description, buttonText, onClick, socialLinks } = props;

  return (
    <div className="w-[340px] my-drop-shadow rounded-xl bg-white">
      <div className="py-6 px-4">
        <img
          className="size-[64px] ml-auto mr-auto"
          src={ProfileImage}
          alt="A smiling woman wearing glasses stands in front of a white brick wall, exuding a cheerful and friendly demeanor."
        />
        <h2 className="mt-6 font-medium text-xl text-center text-neutral-900">{fullName}</h2>
        <h3 className="mt-1 font-normal text-sm text-center text-neutral-600">{position} @ {company}</h3>
        <p className="mt-6 mb-10 font-normal text-base text-center text-neutral-600">{description}</p>
        <Button text={buttonText} onClick={onClick} />
        <div className="mt-6 flex justify-center gap-4">
          {socialLinks.map((socialLink: SocialLink) => (
            <IconButton
              key={socialLink.id}
              icon={socialLink.svg}
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
