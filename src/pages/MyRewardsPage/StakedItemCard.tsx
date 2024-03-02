import logo from "../../assets/small-logo.svg";
import IconClock from "../../components/IconClock";
import { formatTimeToLongStr } from "../../utils";
import IconUnlock from "../../components/IconUnlock";
import IconReward from "../../components/IconReward";
import IconChartLine from "../../components/IconChartLine";
import IconTimeLeft from "../../components/IconTimeLeft";
import Button from "../../components/Button";
import { StakeItem } from "../../hooks/useGetUserStakingData";
import useClaimRewards from "../../hooks/useClaimRewards";

export default function StakedItemCard({
  staking,
  reward,
  rewardAmount,
  currentTime,
  stakeNumber,
  onUnstake,
}: {
  staking: StakeItem;
  reward: number;
  rewardAmount: number;
  currentTime: number;
  stakeNumber: number;
  onUnstake: () => void;
}) {
  const { claimRewards, isLoading: isClaiming } = useClaimRewards();

  const handleClaimRewards = () => {
    claimRewards(stakeNumber);
  };

  const handleOpenUnstakeForm = () => {
    onUnstake();
  };

  return (
    <div className="flex flex-col gap-3 justify-start items-start w-full">
      <div className="flex bg-white/5 p-5 rounded-2xl flex-col justify-start items-start w-full">
        <div className="flex flex-col justify-start text-lext w-full">
          <h1 className="text-white text-base font-quicksand">
            Staking $TRESTLE
          </h1>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-white/5 w-full" />
        <div className="flex flex-col gap-6 justify-between items-center w-full mt-2">
          <div className="flex flex-row gap-2 justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <img
                src={logo}
                alt="token icon"
                className="w-5 h-5 text-white mr-2.5"
              />
              <p className="text-white text-base font-quicksand">Staked</p>
            </div>
            <p className="text-white text-base font-quicksand">
              {staking?.stakedAmount || 0}
            </p>
          </div>
          <div className="flex flex-row gap-2 justify-between items-center w-full">
            <div className="flex flex-row gap-2 justify-between items-center w-full">
              <div className="flex gap-2 items-center">
                <IconClock />
                <p className="text-white text-base font-quicksand">Duration</p>
              </div>
              <p className="text-white text-base font-quicksand">
                {formatTimeToLongStr(staking.duration)}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <IconUnlock />
              <p className="text-white text-base font-quicksand">Unlock Time</p>
            </div>
            <p className="text-white text-sm font-quicksand text-right">
              {new Date(
                (staking.minimumStakeTimestamp || 0) * 1000
              ).toLocaleString()}
            </p>
          </div>
          <div className="flex flex-col gap-6 justify-between items-center w-full mt-2">
            <div className="flex flex-row gap-2 justify-between items-center w-full">
              <div className="flex gap-2 items-center">
                <IconReward />
                <p className="text-white text-base font-quicksand">Rewards</p>
              </div>
              {reward && (
                <p className="text-white text-base font-quicksand">
                  {reward ? reward.toFixed(4) : "0"} wTIA
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <IconChartLine />
              <p className="text-white text-base font-quicksand">
                Reward Period Yield
              </p>
            </div>
            <p className="text-white text-base font-quicksand">
              {`~ ${rewardAmount.toFixed(8)} wTIA`}
            </p>
          </div>
          <div className="flex flex-row gap-2 justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <IconTimeLeft />
              <p className="text-white text-base font-quicksand">Time Left</p>
            </div>
            <p className="text-white text-sm font-quicksand text-right w-[40%]">
              {(staking?.minimumStakeTimestamp || 0) - Math.floor(currentTime) >
              0
                ? formatTimeToLongStr(
                    (staking?.minimumStakeTimestamp || 0) -
                      Math.floor(currentTime)
                  )
                : "0 seconds"}
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-start items-start w-full mt-5">
            <Button onClick={handleClaimRewards} disabled={isClaiming}>
              {isClaiming ? "Claiming..." : "Claim"}
            </Button>
            {staking && (staking.stakedAmount || 0) > 1e-10 ? (
              <Button onClick={handleOpenUnstakeForm}>Unstake</Button>
            ) : (
              <Button>Unstaked</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
