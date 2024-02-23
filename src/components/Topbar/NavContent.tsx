const NavContent: React.FC<
  React.PropsWithChildren<{ isOpenHamMenu?: boolean }>
> = ({ children, isOpenHamMenu }) => {
  return (
    <div
      className={
        (isOpenHamMenu
          ? "bg-black lg:bg-black/20 lg:backdrop-blur-xl lg:p-4 lg:rounded-3xl"
          : "bg-black/20 backdrop-blur-xl p-4 rounded-3xl") +
        " max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4 z-20 "
      }
    >
      {children}
    </div>
  );
};

export default NavContent;
