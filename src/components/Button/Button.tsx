import { PropsWithChildren } from "react";

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  className,
  children,
  onClick,
  type,
  disabled,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      className={
        "text-white font-quicksand w-full font-bold text-lg text-center bg-[url('/btngradient.svg')] disabled:bg-none bg-white/5 bg-center bg-no-repeat bg-cover rounded-3xl py-4 px-2.5 cursor-pointer disabled:cursor-not-allowed hover:brightness-125 disabled:border-none active:opacity-75 disabled:opacity-100 " +
        className
      }
      onClick={handleClick}
      type={type || "button"}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
