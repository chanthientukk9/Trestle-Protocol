import diagramImg from "../../assets/hiw-diagram.svg";
import diagramMobileImg from "../../assets/hiw-diagram-mobile.svg";

function HowItWorksSectionHeader() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r to-[#425ba7] from-[#7b77a4] font-extrabold font-quicksand">
        How it works
      </h1>
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white font-quicksand">
        Bridging Process
      </h1>
    </div>
  );
}

function HowItWorksSectionContent() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full gap-6">
      <div className="flex w-full flex-col z-30 justify-center md:mt-0  h-full rounded-br-3xl">
        <div className="hidden md:flex flex-col items-start gap-10 h-full justify-between">
          <img src={diagramImg} className="w-full" />
        </div>
        <div className="md:hidden flex flex-col items-start gap-10 h-full justify-between">
          <img src={diagramMobileImg} className="w-full" />
        </div>
      </div>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <section className="relative flex w-full flex-col gap-6 justify-center top-0 mb-0 mt-[50px] md:mt-0 md:pt-[80px] h-full max-w-[1228px] mx-auto px-10">
      <HowItWorksSectionHeader />
      <HowItWorksSectionContent />
    </section>
  );
}

export default HowItWorksSection;
