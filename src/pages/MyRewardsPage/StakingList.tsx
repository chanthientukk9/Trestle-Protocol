import useGetStakingRewards from "../../hooks/useGetStakingRewards";
import useGetUserStakingData, {
  StakeItem,
} from "../../hooks/useGetUserStakingData";
import useGetUserStakingRewards from "../../hooks/useGetUserStakingRewards";
import StakedItemCard from "./StakedItemCard";

export default function StakingList({
  isConnected,
  currentTime,
  handleOpenUnstakeForm,
}: {
  isConnected: boolean;
  currentTime: number;
  handleOpenUnstakeForm: ({
    stakedNumber,
    stakedItem,
  }: {
    stakedNumber: number;
    stakedItem: StakeItem;
  }) => () => void;
}) {
  const { stakingList, isLoading: isLoadingStakingList } =
    useGetUserStakingData();

  const { rewards } = useGetUserStakingRewards({
    stakingListLength: stakingList.length,
  });
  const { rewardAmount } = useGetStakingRewards({
    stakingAmounts: (stakingList || []).map((staking) => staking.stakedAmount),
    rawDurations: (stakingList || []).map((staking) => staking?.duration),
  });

  return isConnected && stakingList?.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
      {stakingList.map(
        (staking, index) =>
          (staking?.stakedAmount > 1e-10 || rewards[index] > 1e-4) && (
            <StakedItemCard
              key={index}
              staking={staking}
              reward={rewards[index]}
              rewardAmount={rewardAmount[index]}
              currentTime={currentTime}
              stakeNumber={index}
              onUnstake={handleOpenUnstakeForm({
                stakedNumber: index,
                stakedItem: stakingList[index],
              })}
            />
          )
      )}
    </div>
  ) : (
    <div className="flex flex-col w-full h-40 items-center justify-center">
      <h1 className="text-white text-lg font-quicksand">
        {isConnected && isLoadingStakingList
          ? "Loading staking activities..."
          : "Connect your wallet to view your staking activity"}
      </h1>
    </div>
  );
}
