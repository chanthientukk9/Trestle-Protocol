import PageWrapper from "../../components/PageWrapper";

function HomePage() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-10 w-full">
        <div className="flex items-center justify-center px-10 w-full max-w-[1300px] mx-auto">
          <section
            id="home"
            className="flex justify-center top-0 mb-0 md:mt-[240px] mt-[180px] md:max-h-[760px] p-4 h-full md:mx-10 w-full border-[1.5px] rounded-3xl border-white/20"
          >
            <div className="flex flex-col z-30 justify-center md:mt-0 bg-[url(/home-1.png)] bg-no-repeat bg-cover h-full p-7 md:p-20 rounded-3xl rounded-br-3xl w-full">
              <div className="flex flex-col items-center">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                  <div className="flex flex-col text-left items-start justify-start px-0 md:px-10">
                    <div className=" text-black text-4xl md:text-5xl mb-4 max-w-[450px] font-dmSans font-extrabold md:pr-20">
                      The Most Seamless Celestia Bridge
                    </div>
                    <div className=" text-black text-lg mb-4 max-w-[450px] font-dmSans font-bold md:pr-20">
                      Trestle’s mission is to allow seamless connection between
                      Ethereum chain and Celestia chain. Through Trestle users
                      can expose themselves to Celestia on ETH chain using wTIA,
                      and earn wTIA by holding Trestle.
                    </div>
                    <button className="bg-white text-black text-lg font-dmSans font-bold px-6 py-4 rounded-3xl mt-4">
                      Start Bridging
                    </button>
                  </div>
                  <div className="flex flex-col justify-end mb-4">
                    <img
                      className="max-w-[500px] md:w-full w-[90%] mx-auto"
                      src="/images/interface.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section
          id="home"
          className="relative flex w-full flex-col gap-6 justify-center top-0 mb-0 md:pt-[140px] pt-20 h-full max-w-[1228px] mx-auto px-10"
        >
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white font-dmSans">
            Trestle's 4{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#425ba7] from-[#7b77a4] font-extrabold">
              Celestial
            </span>{" "}
            Pillars
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center w-full gap-6">
            <div className="flex w-full flex-col z-30 justify-center md:mt-0 bg-gradient-to-bl from-slate-500/30 to-[#1A161D] rounded-3xl backdrop-blur-3xl h-full p-10 rounded-br-3xl">
              <div className="flex flex-col items-start gap-10 h-full justify-between">
                <img src="/images/icons/1.svg" className="w-[40px]" />
                <div className="flex flex-col lg:flex-row items-center gap-10">
                  <div className="flex flex-col text-left items-start justify-start">
                    <div className=" text-white text-3xl mb-2 max-w-[450px] font-dmSans font-extrabold pr-20">
                      Manage wTIA
                    </div>
                    <div className=" text-white/50 text-base max-w-[450px] font-dmSans fontm-edium pr-10">
                      Wrapped TIA will now be available for Ethereum users to
                      purchase on ETH chain, allowing for exposure to TIA
                      without having to bridge over to Celestia network.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col z-30 justify-center md:mt-0 bg-gradient-to-bl from-[#DCA3A3]/30 to-slate-500/10 rounded-3xl backdrop-blur-3xl h-full p-10 rounded-br-3xl">
              <div className="flex flex-col items-start gap-10 h-full justify-between">
                <img src="/images/icons/2.svg" className="w-[40px]" />
                <div className="flex flex-col lg:flex-row items-center gap-10">
                  <div className="flex flex-col text-left items-start justify-start">
                    <div className=" text-white text-3xl mb-4 max-w-[450px] font-dmSans font-extrabold pr-20">
                      TIA Bridge
                    </div>
                    <div className=" text-white/50 text-base max-w-[450px] font-dmSans fontm-edium pr-10">
                      Seamlessly and securely swap between TIA and ETH network
                      using Trestle’s interstellar bridge.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center w-full gap-6">
            <div className="flex w-full flex-col z-30 justify-center md:mt-0 bg-gradient-to-bl from-[#EA7687]/30 to-slate-800/10 rounded-3xl backdrop-blur-3xl h-full p-10 rounded-br-3xl">
              <div className="flex flex-col items-start gap-10 h-full justify-between">
                <img src="/images/icons/3.svg" className="w-[40px]" />
                <div className="flex flex-col lg:flex-row items-center gap-10">
                  <div className="flex flex-col text-left items-start justify-start">
                    <div className=" text-white text-3xl mb-4 max-w-[450px] font-dmSans font-extrabold pr-20">
                      Earn wTIA
                    </div>
                    <div className=" text-white/50 text-base max-w-[450px] font-dmSans fontm-edium pr-10">
                      Trestle Protocol will further promote decentralization of
                      TIA by paying out wTIA to it’s holders and accruing wTIA
                      to run as a validator for TIA network.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col z-30 justify-center md:mt-0 bg-gradient-to-bl from-[#2E3ED2]/20 to-slate-800/10 rounded-3xl backdrop-blur-3xl h-full p-10 rounded-br-3xl">
              <div className="flex flex-col items-start gap-10 h-full justify-between">
                <img src="/images/icons/4.svg" className="w-[40px]" />
                <div className="flex flex-col lg:flex-row items-center gap-10">
                  <div className="flex flex-col text-left items-start justify-start">
                    <div className=" text-white text-3xl mb-4 max-w-[450px] font-dmSans font-extrabold pr-20">
                      Trestle Chain
                    </div>
                    <div className=" text-white/50 text-base max-w-[450px] font-dmSans fontm-edium pr-10">
                      Trestle will be releasing their own roll-up chain on
                      Celestia. Trestle's Incubator will onboard new teams onto
                      their Celestia roll-up chain.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="home"
          className="relative flex w-full flex-col gap-6 justify-center top-0 mb-0 mt-[50px] md:mt-0 md:pt-[80px] h-full max-w-[1228px] mx-auto px-10"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r to-[#425ba7] from-[#7b77a4] font-extrabold font-dmSans">
              How it works
            </h1>
            <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white font-dmSans">
              Bridging Process
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center w-full gap-6">
            <div className="flex w-full flex-col z-30 justify-center md:mt-0  h-full rounded-br-3xl">
              <div className="hidden md:flex flex-col items-start gap-10 h-full justify-between">
                <img src="/images/diagram.svg" className="w-full" />
              </div>
              <div className="md:hidden flex flex-col items-start gap-10 h-full justify-between">
                <img src="/images/diagram-mobile.svg" className="w-full" />
              </div>
            </div>
          </div>
        </section>
        <section
          id="home"
          className="relative flex flex-col gap-6 justify-center md:w-full top-0 mb-0 md:mt-[100px] mt-[50px] mx-8 h-full max-w-[1200px] md:mx-auto p-3.5 border-[1.5px] rounded-3xl border-white/20"
        >
          <div className="flex flex-col md:flex-row justify-center items-center w-full gap-6">
            <div className="flex w-full flex-col z-30 justify-center md:mt-0 h-full p-14 border-[1.5px] rounded-3xl border-white/20 order-last">
              <div className="flex flex-col items-start gap-10 h-full justify-between">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                  <div className="flex flex-col gap-4 text-left items-start justify-start">
                    <div className=" text-white text-3xl mb-2 max-w-[450px] font-dmSans font-extrabold pr-20">
                      $TRESTLE
                    </div>
                    <div className="text-white/50 text-base max-w-[450px] font-dmSans font-medium pr-10">
                      Earn from Trestle’s ecosystem by holding $TRESTLE to earn
                      wTIA and validator revenue.
                    </div>
                    <div className="flex justify-between w-full cursor-pointer hover:opacity-70 active:opacity-50">
                      <div className="hidden md:block text-white/70 text-base max-w-[450px] font-dmSans font-medium">
                        0xdE8CD13B812BcD82218754A740b27E76ec1e86aD
                      </div>
                      <div className="block md:hidden text-white/70 text-base max-w-[450px] font-dmSans font-medium">
                        0xdE8CD13B812BcD....6ec1e86aD
                      </div>
                      <img src="/copy.svg" className="w-[16px]" />
                    </div>
                    <div className="flex justify-end items-center my-auto w-full gap-10 mt-5 max-w-[250px]">
                      <a
                        href="https://app.uniswap.org/swap?outputCurrency=0xdE8CD13B812BcD82218754A740b27E76ec1e86aD&amp;chain=ethereum"
                        target="_blank"
                        className="text-white font-dmSans w-full font-bold text-lg text-center bg-[url('/images/btngradient.svg')] bg-no-repeat bg-cover rounded-3xl py-4 px-2.5 cursor-pointer hover:brightness-125 active:opacity-75"
                      >
                        Buy $TRESTLE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col z-30 justify-center md:mt-0 bg-[url(/images/trestleBg.png)] min-h-[340px] bg-no-repeat bg-cover bg-center rounded-3xl backdrop-blur-3xl h-full p-10 rounded-br-3xl"></div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}

export default HomePage;
