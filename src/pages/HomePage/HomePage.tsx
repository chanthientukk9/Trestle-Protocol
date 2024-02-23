import PageWrapper from "../../components/PageWrapper";
import BuyTrestleSection from "./BuyTrestleSection";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";
import PillarsSection from "./PillarsSection";

function HomePage() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-10 w-full">
        <HeroSection />
        <PillarsSection />
        <HowItWorksSection />
        <BuyTrestleSection />
      </div>
    </PageWrapper>
  );
}

export default HomePage;
