import { ReactElement, ReactNode } from "react";
import externalIcon from "../../assets/external.svg";
import { Link, useLocation } from "react-router-dom";

function MenuItem({
  label,
  path,
  isActive,
  isDisable,
}: {
  label: string;
  path?: string;
  isActive?: boolean;
  isDisable?: boolean;
  icon?: ReactNode | ReactElement;
}) {
  const defaultClasses =
    "block py-2 pl-3 pr-4 font-medium rounded md:bg-transparent md:p-0";
  const normalClasses = `${defaultClasses} text-white cursor-pointer hover:text-white/50 transition-all duration-300 ease-in-out hover:underline`;
  const activeClasses = `${defaultClasses} text-white underline cursor-text hover:text-white`;
  const disableClasses = `${defaultClasses} opacity-50 text-white cursor-not-allowed hover:text-white/50 transition-all duration-300 ease-in-out hover:underline`;

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

function MenuList() {
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
    <div
      className="flex-col hidden lg:flex items-center justify-between space-x-1 font-quicksand"
      id="navbar-sticky"
    >
      <ul className="flex p-4 md:p-0 font-light md:flex-row md:space-x-8 md:mt-0 md:border-0">
        {menuItemData.map((item, index) => (
          <li key={index}>
            <MenuItem
              label={item.label}
              path={item.path}
              isDisable={item.isDisable}
              isActive={pathname === item.path}
            />
          </li>
        ))}
        <li>
          <a
            className="block py-2 pl-3 pr-4 font-medium rounded md:bg-transparent md:p-0 cursor-pointer hover:opacity-70 active:opacity-50 text-white cursor-pointer hover:text-white/50 transition-all duration-300 ease-in-out hover:underline"
            href="https://trestle-protocol.gitbook.io/trestle-docs/"
            target="_blank"
            aria-current="page"
          >
            Docs{" "}
            <span>
              <img src={externalIcon} className=" inline h-5 w-5" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MenuList;
