import './FeaturesSection.css';

interface FeaturesSectionProps {
  text: string;
  title: string;
  body: string;
  variant: 'left' | 'right';
  imgSrc: string;
  imgAlt: string;
  children?: any;
};

interface FeatureSectionListItemProps {
  icon: any;
  title: string;
  paragraph: string;
}

export const FeatureSectionListItem = (props: FeatureSectionListItemProps) => {
  const { icon, title, paragraph } = props;

  return (
    <div className="flex justify-start items-start">
      <div className="flex justify-center items-center bg-white min-w-[48px] min-h-[48px] text-indigo-700 rounded-full drop-shadow">{icon}</div>
      <div className="pl-4 md:pl-5 pt-3 pb-3">
        <h5 className="text-lg font-semibold text-neutral-900">{title}</h5>
        <p className="mt-3 font-normal text-base text-neutral-600">{paragraph}</p>
      </div>
    </div>
  );
};

const FeaturesSection = (props: FeaturesSectionProps) => {
  const { text, title, body, imgSrc, imgAlt, variant, children } = props;

  return (
    <section className="mx-auto bg-white rounded-sm tablet:rounded-md drop-shadow-sm">
      <h2 className="hidden">Feature Section left/right side</h2>
      {/* Container */}
      <div className="py-12 px-4 tablet:py-16 tablet:px-4 desktop:py-24 desktop:px-24">
        {/* Container for top copy */}
        <div className="desktop:mx-auto desktop:max-w-[656px] mb-12 tablet:mb-16 desktop:mb-16 text-center">
          {text && <p className="font-base font-semibold text-indigo-700">{text}</p>}
          {title && <h3 className="mt-3 mb-5 text-3xl tablet:text-5xl font-semibold text-neutral-900">{title}</h3>}
          {body && <h4 className="font-normal text-lg tablet:text-xl text-neutral-600 desktop:text-balance">{body}</h4>}
        </div>
        {/* Container for left (image) and right (list) */}
        <div className={`flex flex-col desktop:flex-row gap-12 desktop:gap-8 ${variant !== 'left' ? 'flex-col-reverse desktop:flex-row-reverse' : ''}`}>
          {/* Left side image */}
          {imgSrc && (
            <div className="w-full">
              <img
                className="w-full h-[180px] tablet:h-[394px] desktop:h-[394px] rounded-xl object-cover drop-shadow-sm"
                src={imgSrc}
                alt={imgAlt}
              />
            </div>
          )}
          {/* Right side for list */}
          {children && <div className="flex flex-col gap-y-10">{children}</div>}
        </div>
      </div>
    </section>
  )
};

export default FeaturesSection;
