const BasicCard: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className
}) => {
  return (
    <div className={"relative flex flex-col w-full lg:w-full justify-between mx-auto border-2 border-white/10 rounded-3xl z-30 bg-[#0F1015]/80 py-8 px-10 " + className}>
      {children}
    </div>
  );
};

export default BasicCard;
