import { PropsWithChildren } from "react";
import homeInterfaceImg from "../../assets/home-interface.png";
import OutlineBox from "../../components/OutlineBox";
import SecondaryButton from "../../components/SecondaryButton";
import { useNavigate } from "react-router-dom";

const HeroSectionLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col z-30 justify-center md:mt-0 bg-[url(/home-1.png)] bg-no-repeat bg-cover h-full p-7 md:p-10 lg:p-20 rounded-3xl rounded-br-3xl w-full">
      <div className="flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {children}
        </div>
      </div>
    </div>
  );
};

function HeroSectionContent() {
  const navigate = useNavigate();

  const handleOpenBridge = () => {
    navigate("/bridge");
  }
  return (
    <div className="flex flex-col text-left items-start justify-start px-0 lg:px-10">
      <div className=" text-black text-4xl md:text-5xl mb-4 max-w-[450px] font-quicksand font-extrabold lg:pr-20">
        The Most Seamless Celestia Bridge
      </div>
      <div className=" text-black text-lg mb-4 max-w-[450px] font-quicksand font-bold lg:pr-20">
        Trestle’s mission is to allow seamless connection between Ethereum chain
        and Celestia chain. Through Trestle users can expose themselves to
        Celestia on ETH chain using wTIA, and earn wTIA by holding Trestle.
      </div>
      <SecondaryButton onClick={handleOpenBridge}>Start Bridging</SecondaryButton>
    </div>
  );
}

function HeroSectionImage() {
  return (
    <div className="flex flex-col justify-end mb-4">
      <img
        className="max-w-[500px] md:w-full w-[90%] mx-auto"
        src={homeInterfaceImg}
      />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="flex items-center justify-center px-10 w-full max-w-[1300px] mx-auto">
      <OutlineBox className="flex justify-center top-0 mb-0 md:mt-[240px] mt-[180px] lg:max-h-[760px] p-4 h-full md:mx-10 w-full">
        <HeroSectionLayout>
          <HeroSectionContent />
          <HeroSectionImage />
        </HeroSectionLayout>
      </OutlineBox>
    </section>
  );
}

export default HeroSection;
