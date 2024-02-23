import { PropsWithChildren } from "react";

type ButtonProps = {
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
}) => {
  return (
    <button className="text-white font-quicksand w-full font-bold text-lg text-center bg-[url('/btngradient.svg')] bg-no-repeat bg-cover rounded-3xl py-4 px-2.5 cursor-pointer hover:brightness-125 active:opacity-75" onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
