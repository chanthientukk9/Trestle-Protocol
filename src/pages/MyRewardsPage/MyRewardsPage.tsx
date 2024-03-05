import PageWrapper from "../../components/PageWrapper";
import StakingHistorySection from "./StakingHistorySection";

function MyRewardsPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-10 w-full">
        <StakingHistorySection />
      </div>
    </PageWrapper>
  );
}

export default MyRewardsPage;
