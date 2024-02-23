import { Link, useLocation } from "react-router-dom";
import xLogo from "../../assets/x-logo.svg";
import telegramLogo from "../../assets/telegram-logo.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import css from "./Topbar.module.css";

function MenuFooter() {
  return (
    <div className="bg-white relative mt-[40px] md:mt-[100px] dark:bg-transparent">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-white/5 lg:my-8" />
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="flex gap-10">
            <li className="flex gap-2 items-center">
              <a
                className="hover:brightness-75 active:brightness-50"
                href=""
                target="_blank"
              >
                <img className="w-[50px] h-[50px] mt-1 -ml-1" src={xLogo} />
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <a
                className="hover:brightness-75 active:brightness-50"
                href=""
                target="_blank"
              >
                <img className="w-[60px] h-[60px] mt-1" src={telegramLogo} />
              </a>
            </li>
          </div>
          <span className="text-2xl text-white text-center font-quicksand font-extrabold mt-5 mb-5">
            Trestle
          </span>
          <span className="text-lg text-white/50 text-center font-quicksand">
            ©&nbsp;all copyrights reserved to Trestle 2024
          </span>
        </div>
      </div>
    </div>
  );
}

function MenuMobileItem({
  label,
  path,
  isActive,
  isDisable,
}: {
  label: string;
  path?: string;
  isActive?: boolean;
  isDisable?: boolean;
}) {
  const defaultClasses =
    "block py-2 pl-3 pr-4 text-3xl font-quicksand font-medium rounded md:bg-transparent md:p-0 text-white hover:text-white/50 transition-all duration-300 ease-in-out hover:underline";
  const normalClasses = `${defaultClasses} cursor-pointer`;
  const activeClasses = `${defaultClasses} underline cursor-text`;
  const disableClasses = `${defaultClasses} opacity-50 cursor-not-allowed`;

  const finalPath = path || "";

  return (
    <Link
      className={
        isActive ? activeClasses : !isDisable ? normalClasses : disableClasses
      }
      aria-current="page"
      to={!isDisable && !isActive ? finalPath : ""}
    >
      {label}
    </Link>
  );
}

function MenuMobile() {
  const location = useLocation();
  const pathname = location.pathname;

  const menuItemData = [
    {
      label: "Bridge",
      path: "/bridge",
    },
    {
      label: "Staking",
      path: "/staking",
    },
    {
      label: "My Rewards",
      path: "/my-rewards",
    },
    {
      label: "Stats",
      path: "/stats",
    },
    {
      label: "Incubator",
      isDisable: true,
    },
  ];

  return (
    <div className="w-screen h-screen z-10 bg-black absolute lg:hidden flex">
      <div className="flex flex-col items-center justify-start w-full">
        <ul className="flex flex-col p-4 font-light w-screen gap-10 items-center justify-center">
          {menuItemData.map((item, index) => (
            <li key={index}>
              <MenuMobileItem
                label={item.label}
                path={item.path}
                isDisable={item.isDisable}
                isActive={pathname === item.path}
              />
            </li>
          ))}
          <li>
            <a
              href="https://trestle-protocol.gitbook.io/trestle-docs/"
              target="_blank"
              className="block py-2 pl-3 pr-4 text-3xl font-quicksand font-medium rounded md:bg-transparent md:p-0 text-white cursor-pointer hover:text-white/50 transition-all duration-300 ease-in-out hover:underline"
              aria-current="page"
            >
              Docs
            </a>
          </li>
        </ul>
        <div className={"mt-6 " + css.connectButtonWrapper}>
          <ConnectButton />
        </div>
        <MenuFooter />
      </div>
    </div>
  );
}

export default MenuMobile;
