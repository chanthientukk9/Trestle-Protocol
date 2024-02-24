import PageWrapper from "../../components/PageWrapper";
import StakingHistory from "./StakingHistory";

function MyRewardsPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-10 w-full">
        <StakingHistory />
      </div>
    </PageWrapper>
  );
}

export default MyRewardsPage;
