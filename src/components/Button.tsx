import './Button.css';

type Variants = 'primary' | 'secondary' | 'tertiary' | 'link-colour' | 'link-grey' | 'destructive';
type States = 'normal' | 'hover' | 'focus' | 'disabled';
type Sizes = 'md' | 'lg' | 'xl' | 'xxl';
type IconPositions = 'left' | 'right' | 'both';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  variant?: Variants;
  state?: States
  size?: Sizes
  icon?: React.ReactNode;
  iconPosition?: IconPositions;
};

const Button = (props: ButtonProps) => {
  const { text, onClick, isDisabled, variant, state, size, icon, iconPosition } = props;

  let variantStyle = "";
  let stateStyle = "";
  let sizeStyle = "";
  let iconPositionStyle = "button__icon";
  let defaultStyle = "flex justify-center items-center cursor-pointer outline-royal-blue rounded-sm my-drop-shadow focus:outline-4 disabled:bg-neutral-100 disabled:text-neutral-400";

  const generateVariantClasses = () => {
    if (variant === 'primary') {
      variantStyle = "text-white bg-indigo-700 hover:bg-indigo-800 focus:bg-indigo-800";
    } else if (variant === 'secondary') {
      variantStyle = "text-neutral-900 bg-white hover:bg-neutral-50 focus:bg-neutral-50";
    } else if (variant === 'tertiary') {
      variantStyle = "text-indigo-700 hover:bg-neutral-50 focus:bg-neutral-50";
    } else if (variant === 'link-colour') {
      variantStyle = "text-indigo-700 hover:text-indigo-800 focus:text-indigo-800";
    } else if (variant === 'link-grey') {
      variantStyle = "text-neutral-600 hover:text-neutral-900 focus:text-neutral-900";
    } else if (variant === 'destructive') {
      variantStyle = "text-white bg-red-600 hover:bg-red-700 focus:bg-red-700";
    }

    return variantStyle;
  };

  /***
   * TESTING ONLY
   * TODO: add styling
   */
  const generateStateClasses = () => {
    if (variant === 'primary') {
      if (state === 'normal') stateStyle = "";
      if (state === 'hover') stateStyle = "";
      if (state === 'focus') stateStyle = "";
      if (state === 'disabled') stateStyle = "";
    }

    if (variant === 'secondary') {
      if (state === 'normal') stateStyle = "";
      if (state === 'hover') stateStyle = "";
      if (state === 'focus') stateStyle = "";
      if (state === 'disabled') stateStyle = "";
    }

    if (variant === 'tertiary') {
      if (state === 'normal') stateStyle = "";
      if (state === 'hover') stateStyle = "";
      if (state === 'focus') stateStyle = "";
      if (state === 'disabled') stateStyle = "";
    }

    if (variant === 'link-colour') {
      if (state === 'normal') stateStyle = "";
      if (state === 'hover') stateStyle = "";
      if (state === 'focus') stateStyle = "";
      if (state === 'disabled') stateStyle = "";
    }

    if (variant === 'destructive') {
      if (state === 'normal') stateStyle = "";
      if (state === 'hover') stateStyle = "";
      if (state === 'focus') stateStyle = "";
      if (state === 'disabled') stateStyle = "";
    }
    if (variant === 'link-colour') {
      if (state === 'normal') stateStyle = "";
      if (state === 'hover') stateStyle = "";
      if (state === 'focus') stateStyle = "";
      if (state === 'disabled') stateStyle = "";
    }

    return stateStyle;
  };

  const generateSizeClasses = () => {
    if (size === 'md') {
      sizeStyle = "py-[10px] px-[15px] text-sm";
    } else if (size === 'lg') {
      sizeStyle = "py-[12px] px-[17px] text-base";
    } else if (size === 'xl') {
      sizeStyle = "py-[15px] px-[20px] text-lg";
    } else if (size === 'xxl') {
      sizeStyle = "py-[20px] px-[25px] text-lg";
    }

    // used for updating height/width for svg
    if (icon) {
      if (size === 'md') {
        sizeStyle += " button__size--md";
      } else if (size === 'lg') {
        sizeStyle += " button__size--lg";
      } else if (size === 'xl') {
        sizeStyle += " button__size--xl";
      } else if (size === 'xxl') {
        sizeStyle += " button__size--xxl";
      }
    }

    return sizeStyle;
  };

  const generateIconPositionsClasses = () => {
    if (iconPosition === 'left') {
      iconPositionStyle += " button__icon--left";
    } else if (iconPosition === 'right') {
      iconPositionStyle += " button__icon--right";
    }

    return iconPositionStyle;
  };

  return (
    <button
      className={`${generateVariantClasses()} ${generateStateClasses()} ${generateSizeClasses()} ${generateIconPositionsClasses()} ${defaultStyle}`}
      type="button"
      onClick={onClick}
      disabled={isDisabled}
    >
      {(icon && (iconPosition === 'left' || iconPosition === 'right')) && <>{icon}</>}
      {text
        ? <>{text}</>
        : <>{icon}</>}
    </button>
  )
};

export default Button;
