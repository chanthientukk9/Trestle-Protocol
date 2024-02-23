import PillarCard from "../../components/PillarCard";
import pillarIcon1 from "../../assets/trestle-pillar-1.svg";
import pillarIcon2 from "../../assets/trestle-pillar-2.svg";
import pillarIcon3 from "../../assets/trestle-pillar-3.svg";
import pillarIcon4 from "../../assets/trestle-pillar-4.svg";

function PillarsSectionHeader() {
  return (
    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white font-quicksand">
      Trestle's 4{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#425ba7] from-[#7b77a4] font-extrabold">
        Celestial
      </span>{" "}
      Pillars
    </h1>
  );
}

function PillarsSectionContent() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-6">
        <PillarCard
          title="Manage wTIA"
          content="Wrapped TIA will now be available for Ethereum users to purchase on ETH chain, allowing for exposure to TIA without having to bridge over to Celestia network."
          iconUrl={pillarIcon1}
        />
        <PillarCard
          title="TIA Bridge"
          content="Seamlessly and securely swap between TIA and ETH network using Trestle’s interstellar bridge."
          iconUrl={pillarIcon2}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-6">
        <PillarCard
          title="Earn wTIA"
          content="Trestle Protocol will further promote decentralization of TIA by paying out wTIA to it’s holders and accruing wTIA to run as a validator for TIA network."
          iconUrl={pillarIcon3}
        />
        <PillarCard
          title="Trestle Chain"
          content="Trestle will be releasing their own roll-up chain on Celestia. Trestle's Incubator will onboard new teams onto their Celestia roll-up chain."
          iconUrl={pillarIcon4}
        />
      </div>
    </>
  );
}

function PillarsSection() {
  return (
    <section className="relative flex w-full flex-col gap-6 justify-center top-0 mb-0 md:pt-[140px] pt-20 h-full max-w-[1228px] mx-auto px-10">
      <PillarsSectionHeader />
      <PillarsSectionContent />
    </section>
  );
}

export default PillarsSection;
