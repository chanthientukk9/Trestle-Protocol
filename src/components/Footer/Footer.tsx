import xLogo from "../../assets/x-logo.svg";
import telegramLogo from "../../assets/telegram-logo.svg";

function Footer() {
  return (
    <footer className="bg-white relative mt-[40px] md:mt-[100px] dark:bg-transparent">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-white/5 lg:my-8" />
        <div className="flex flex-col gap-4 items-center justify-center">
          <span className="text-xl text-white text-center font-dmSans font-extrabold">
            Trestle
          </span>
          <a
            href="mailto:info@trestleprotocol.io"
            className="text-base text-white/50 text-center font-dmSans"
          >
            info@trestleprotocol.io
          </a>
          <span className="text-base text-white/50 text-center font-dmSans">
            ©&nbsp;all copyrights reserved to Trestle 2024
          </span>
          <div className="flex gap-2">
            <li className="flex gap-2 items-center">
              <a
                className="hover:brightness-75 active:brightness-50"
                href="https://twitter.com/trestleprotocol"
                target="_blank"
              >
                <img className="w-9 h-9 mt-1 -ml-1" src={xLogo} />
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <a
                className="hover:brightness-75 active:brightness-50"
                href="https://t.me/trestleprotocol"
                target="_blank"
              >
                <img className="w-7 h-7 mt-1" src={telegramLogo} />
              </a>
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
