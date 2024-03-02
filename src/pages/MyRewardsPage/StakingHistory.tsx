import BasicCard from "../../components/BasicCard";
import useCheckConnected from "../../hooks/useCheckConntected";
import useGetUserStakingData from "../../hooks/useGetUserStakingData";
import useGetUserStakingRewards from "../../hooks/useGetUserStakingRewards";
import useGetStakingRewards from "../../hooks/useGetStakingRewards";
import { useEffect, useState } from "react";
import StakedItemCard from "./StakedItemCard";
import IconTimeLeft from "../../components/IconTimeLeft";
import useGetPenaltyFeeGroup from "../../hooks/useGetPenaltyFeeGroup";
import IconPenaltyFee from "../../components/IconPenaltyFee";
import Button from "../../components/Button";
import useCalculatePenaltyFee from "../../hooks/useCalculatePenaltyFee";
import Modal from "../../components/Modal";
import TokenInput from "../../components/TokenInput";
import useUnstake from "../../hooks/useUnstake";

export default function StakingHistory() {
  const [currentTime, setCurrentTime] = useState(Date.now() / 1000);
  const [isOpenUnstakeForm, setIsOpenUnstakeForm] = useState(false);
  const [stakedNumber, setStakedNumber] = useState(0);
  const [unstakeAmount, setUnstakeAmount] = useState(0);

  const isConnected = useCheckConnected();

  const { stakingList, isLoading: isLoadingStakingList } =
    useGetUserStakingData();
  const { rewards } = useGetUserStakingRewards({
    stakingListLength: stakingList.length,
  });
  const { rewardAmount } = useGetStakingRewards({
    stakingAmounts: (stakingList || []).map((staking) => staking.stakedAmount),
    rawDurations: (stakingList || []).map((staking) => staking?.duration),
  });
  const { penaltyFeeGroup } = useGetPenaltyFeeGroup({ stakedNumber });
  const { penaltyFee } = useCalculatePenaltyFee({
    unstakingAmount: unstakeAmount,
    duration: stakingList[stakedNumber]?.duration,
  });

  const { isLoading: isStaking, unstakeToken } = useUnstake();

  const handleOpenUnstakeForm =
    ({ stakedNumber: index }: { stakedNumber: number }) =>
    () => {
      setStakedNumber(index);
      setIsOpenUnstakeForm(true);
    };

  const handleCloseUnstakeForm = () => {
    setIsOpenUnstakeForm(false);
  };

  const handleChangeUnstakeAmount: React.ChangeEventHandler<
    HTMLInputElement
  > = (e) => {
    setUnstakeAmount(Number(e.target.value));
  };

  const handleSetMaxAmount = () => {
    setUnstakeAmount(stakingList[stakedNumber]?.stakedAmount || 0);
  };

  const handleUnstake = () => {
    unstakeToken({
      amount: unstakeAmount,
      stakedNumber,
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Date.now() / 1000);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative flex flex-col justify-between md:top-0 md:pt-[160px] pt-[120px]">
      <div className="flex flex-col lg:flex-row justify-between w-full gap-6 max-w-[1300px] mx-auto px-7 lg:px-4">
        <BasicCard className="md:mt-10 bg-[#0F1015]/90 border-white/5">
          <div className="flex flex-col gap-8 justify-center items-start w-full">
            <div className="flex flex-col gap-2 justify-start items-start w-full h-full">
              <div className="flex flex-col justify-start text-lext w-full">
                <h1 className="text-white text-lg font-quicksand font-semibold">
                  Overview
                </h1>
              </div>
              <hr className="my-3 border-gray-200 sm:mx-auto dark:border-white/5 lg:my-3 w-full" />

              {isConnected && stakingList?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                  {stakingList.map(
                    (staking, index) =>
                      (staking?.stakedAmount > 1e-10 ||
                        rewards[index] > 1e-4) && (
                        <StakedItemCard
                          key={index}
                          staking={staking}
                          reward={rewards[index]}
                          rewardAmount={rewardAmount[index]}
                          currentTime={currentTime}
                          stakeNumber={index}
                          onUnstake={handleOpenUnstakeForm({
                            stakedNumber: index,
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
              )}
            </div>
          </div>
        </BasicCard>
      </div>
      <Modal
        title="Confirm Unstake"
        isOpen={isOpenUnstakeForm}
        onClose={handleCloseUnstakeForm}
      >
        <div className="flex justify-between text-lext w-full">
          <h1 className="text-white text-base font-quicksand font-light">
            You can still claim your wTIA any time you want, your rewards are
            safe and you will not lose earned rewards even if you unstake your
            $TRESTLE.
          </h1>
        </div>
        <hr className="my-5 border-gray-200 w-full sm:mx-auto dark:border-white/5" />
        <TokenInput
          balance={stakingList[stakedNumber]?.stakedAmount}
          value={unstakeAmount}
          onChange={handleChangeUnstakeAmount}
          onSetMax={handleSetMaxAmount}
        />
        <hr className="my-5 border-gray-200 w-full sm:mx-auto dark:border-white/5" />
        <div className="flex justify-between text-lext w-full mb-4">
          <h1 className="text-white text-lg font-quicksand">
            REVIEW AND CONFIRM
          </h1>
        </div>
        <div className="flex justify-between text-lext w-full">
          <div className="flex justify-start items-center gap-2 text-lext w-full">
            <IconTimeLeft />
            <h1 className="text-white text-lg font-quicksand">Unstake Date</h1>
          </div>
          <h1 className="text-white text-lg font-quicksand text-right whitespace-nowrap">
            {new Date(
              (stakingList[stakedNumber]?.minimumStakeTimestamp +
                stakingList[stakedNumber]?.duration) *
                1e3
            ).toLocaleString()}
          </h1>
        </div>
        {currentTime < stakingList[stakedNumber]?.minimumStakeTimestamp && (
          <>
            <h1 className="text-white text-lg font-quicksand font-light my-5 text-left self-start">
              Unstaking your $TRESTLE before due time will incur a penalty fee
              of {penaltyFeeGroup / 100}%
            </h1>
            <div className="flex justify-between text-lext w-full">
              <div className="flex justify-start items-center gap-2 text-lext w-full">
                <IconPenaltyFee />
                <h1 className="text-white text-lg font-quicksand">
                  Penalty Fee
                </h1>
              </div>
              <h1 className="text-red-400 text-lg font-quicksand text-right whitespace-nowrap">
                {penaltyFee > 0 ? penaltyFee : 0}
                {" $TRESTLE"}
              </h1>
            </div>
          </>
        )}
        <div className="flex flex-col gap-2 justify-start items-start w-full mt-8">
          <Button onClick={handleUnstake} disabled={isStaking}>
            {isStaking ? "Unstaking..." : "Unstake"}
          </Button>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start w-full mt-5">
          <Button onClick={handleCloseUnstakeForm}>Cancel</Button>
        </div>
      </Modal>
    </section>
  );
}
