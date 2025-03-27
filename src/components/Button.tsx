// type Variants = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'links';
// type States = 'normal' | 'hover' | 'focus' | 'disabled';
// type Sizes = 'md' | 'lg' | 'xl' | 'xxl';
// type IconPosition = 'left' | 'right';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  // variant?: Variants;
  // state?: States
  // size?: Sizes
  // icon?: string;
  // iconPosition?: IconPosition;
}

// TODO: https://www.greatfrontend.com/projects/challenges/button-component
const Button = (props: ButtonProps) => {
  const { text, onClick, isDisabled } = props;

  return (
    <button
      className="min-w-[151.5px] tablet:min-w-[213px] desktop:min-w-[175.5px] py-3 tablet:py-4 px-3 mr-4 tablet:mr-8 tablet:text-lg text-neutral-900 bg-white rounded-sm my-drop-shadow cursor-pointer outline-royal-blue hover:bg-neutral-50 focus:bg-neutral-50 focus:outline-4 disabled:bg-neutral-100 disabled:text-neutral-400"
      type="button"
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  )
};

export default Button;
