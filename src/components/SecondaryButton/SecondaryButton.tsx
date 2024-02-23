import { PropsWithChildren } from "react";

type SecondaryButtonProps = {
  className?: string;
  onClick?: () => void;
};

const SecondaryButton: React.FC<PropsWithChildren<SecondaryButtonProps>> = ({
  children,
  onClick,
}) => {
  return (
    <button className="bg-white text-black text-lg font-quicksand font-bold px-6 py-4 rounded-3xl mt-4" onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default SecondaryButton;
