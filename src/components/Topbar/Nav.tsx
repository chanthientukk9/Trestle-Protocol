const Nav: React.FC<React.PropsWithChildren<{ isOpenHamMenu?: boolean }>> = ({
  children,
  isOpenHamMenu,
}) => {
  return (
    <nav
      className={
        (isOpenHamMenu ? "bg-black lg:bg-transparent " : "") +
        "fixed w-full z-50 top-0 left-0 py-4"
      }
    >
      {children}
    </nav>
  );
};

export default Nav;
