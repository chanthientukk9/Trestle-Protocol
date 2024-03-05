import { useState } from "react";
import Button from "../../components/Button";
import IconPenaltyFee from "../../components/IconPenaltyFee";
import IconTimeLeft from "../../components/IconTimeLeft";
import Modal from "../../components/Modal";
import TokenInput from "../../components/TokenInput";
import { StakeItem } from "../../hooks/useGetUserStakingData";
import useGetPenaltyFeeGroup from "../../hooks/useGetPenaltyFeeGroup";
import useCalculatePenaltyFee from "../../hooks/useCalculatePenaltyFee";
import useUnstake from "../../hooks/useUnstake";

export default function UnstakeModal({
  isOpen,
  onClose,
  stakedNumber,
  stakedItem,
  currentTime,
}: {
  isOpen: boolean;
  onClose: () => void;
  stakedNumber: number;
  stakedItem: StakeItem;
  currentTime: number;
}) {
  const [unstakeAmount, setUnstakeAmount] = useState(0);

  const { penaltyFeeGroup } = useGetPenaltyFeeGroup({ stakedNumber });
  const { penaltyFee } = useCalculatePenaltyFee({
    unstakingAmount: unstakeAmount,
    duration: stakedItem?.duration,
  });

  const { isLoading: isUnstaking, unstakeToken } = useUnstake();

  const handleChangeUnstakeAmount: React.ChangeEventHandler<
    HTMLInputElement
  > = (e) => {
    setUnstakeAmount(Number(e.target.value));
  };

  const handleSetMaxAmount = () => {
    setUnstakeAmount(stakedItem?.stakedAmount || 0);
  };

  const handleUnstake = () => {
    unstakeToken({
      amount: unstakeAmount,
      stakedNumber,
    });
  };

  return (
    <Modal title="Confirm Unstake" isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between text-lext w-full">
        <h1 className="text-white text-base font-quicksand font-light">
          You can still claim your wTIA any time you want, your rewards are safe
          and you will not lose earned rewards even if you unstake your
          $TRESTLE.
        </h1>
      </div>
      <hr className="my-5 border-gray-200 w-full sm:mx-auto dark:border-white/5" />
      <TokenInput
        balance={stakedItem?.stakedAmount || 0}
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
            (stakedItem?.minimumStakeTimestamp + stakedItem?.duration) * 1e3
          ).toLocaleString()}
        </h1>
      </div>
      {currentTime < stakedItem?.minimumStakeTimestamp && (
        <>
          <h1 className="text-white text-lg font-quicksand font-light my-5 text-left self-start">
            Unstaking your $TRESTLE before due time will incur a penalty fee of{" "}
            {penaltyFeeGroup / 100}%
          </h1>
          <div className="flex justify-between text-lext w-full">
            <div className="flex justify-start items-center gap-2 text-lext w-full">
              <IconPenaltyFee />
              <h1 className="text-white text-lg font-quicksand">Penalty Fee</h1>
            </div>
            <h1 className="text-red-400 text-lg font-quicksand text-right whitespace-nowrap">
              {penaltyFee > 0 ? penaltyFee : 0}
              {" $TRESTLE"}
            </h1>
          </div>
        </>
      )}
      <div className="flex flex-col gap-2 justify-start items-start w-full mt-8">
        <Button onClick={handleUnstake} disabled={isUnstaking}>
          {isUnstaking ? "Unstaking..." : "Unstake"}
        </Button>
      </div>
      <div className="flex flex-col gap-2 justify-start items-start w-full mt-5">
        <Button onClick={onClose}>Cancel</Button>
      </div>
    </Modal>
  );
}
