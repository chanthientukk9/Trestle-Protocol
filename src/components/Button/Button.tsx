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
    <button className="h-10 py-0 px-3.5 bg-white text-black font-bold font-quicksand rounded-xl" onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
