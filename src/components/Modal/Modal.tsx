import { PropsWithChildren } from "react";
import IconClose from "../IconClose";

type ModalProps = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
};

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  title,
  isOpen,
  children,
  onClose,
}) => {
  return isOpen ? (
    <div className="absolute z-50 bg-black/30 w-screen h-screen top-0 backdrop-blur-sm flex items-center justify-center">
      <div className="flex flex-col justify-center items-center w-full max-w-[700px] bg-[#0F1015]/90 p-8 rounded-2xl">
        <div className="flex justify-between text-lext w-full">
          <h1 className="text-white text-lg font-quicksand font-semibold">
            {title}
          </h1>
          <IconClose
            onClick={onClose}
            className="w-6 h-6 text-white cursor-pointer"
          />
        </div>
        <hr className="my-5 border-gray-200 w-full sm:mx-auto dark:border-white/5" />
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
