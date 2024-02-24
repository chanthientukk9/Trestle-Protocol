import PageWrapper from "../../components/PageWrapper";
import StakingSection from "./StakingSection";

function StakingPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-10 w-full">
        <StakingSection />
      </div>
    </PageWrapper>
  );
}

export default StakingPage;
