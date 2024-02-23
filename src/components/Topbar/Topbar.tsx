import MenuDesktop from "./MenuDesktop";
import TopbarLogo from "./TopbarLogo";
import hamIcon from "../../assets/ham-icon.svg";
import hamCloseIcon from "../../assets/ham-close.svg";
import { useState } from "react";
import MenuMobile from "./MenuMobile";
import Nav from "./Nav";
import NavContent from "./NavContent";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import css from "./Topbar.module.css";

function Topbar() {
  const [isOpenHamMenu, setIsOpenHamMenu] = useState(false);

  const handleOpenHamMenu = () => {
    setIsOpenHamMenu(!isOpenHamMenu);
  };

  return (
    <Nav isOpenHamMenu={isOpenHamMenu}>
      <NavContent isOpenHamMenu={isOpenHamMenu}>
        <div className="flex w-full items-center gap-4">
          <TopbarLogo />
          <MenuDesktop />
        </div>
        <div
          className={
            (isOpenHamMenu ? "hidden lg:flex" : "") +
            " flex mr-6 w-[400px] gap-1 justify-end " + css.connectButtonWrapper
          }
        >
          <ConnectButton />
        </div>
        <img
          src={isOpenHamMenu ? hamCloseIcon : hamIcon}
          className="inline lg:hidden h-8 w-8 mr-2 cursor-pointer hover:opacity-70 active:opacity-50"
          onClick={handleOpenHamMenu}
        />
      </NavContent>
      {isOpenHamMenu && <MenuMobile />}
    </Nav>
  );
}

export default Topbar;
