import { PropsWithChildren } from "react";

const OutlineBox: React.FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <div className={"border-[1.5px] rounded-3xl border-white/20 " + className}>
      {children}
    </div>
  );
};

export default OutlineBox;
