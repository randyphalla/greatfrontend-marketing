interface ButtonProps {
  text?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { text, onClick, isDisabled } = props;

  return (
    <button
      className="w-full py-[10px] text-white text-base font-normal rounded-lg bg-indigo-600 cursor-pointer hover:bg-indigo-800 focus:bg-indigo-800 focus:outline-4 outline-royal-blue disabled:bg-neutral-100 disabled:text-neutral-400"
      type="button"
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  )
};

export default Button;
