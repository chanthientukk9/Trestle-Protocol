import Button from "../../components/Button";
import { useContext } from "react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import useCheckConnected from "../../hooks/useCheckConntected";
import useBalanceOf from "../../hooks/useBalanceOf";
import TokenInput from "../../components/TokenInput";
import { StakingContext } from "./StakingContext";

export default function StakingForm({ onSubmit }: { onSubmit: () => void }) {
  const { stakingAmount, setStakingAmount } = useContext(StakingContext);
  const { openConnectModal } = useConnectModal();
  const isConnected = useCheckConnected();
  const { balance } = useBalanceOf();

  const submitDisabled = stakingAmount <= 0 || balance <= 0;

  const handleChangeStakingAmount: React.ChangeEventHandler<
    HTMLInputElement
  > = (e) => {
    setStakingAmount(Math.abs(Number(e.target.value)));
  };

  const handleSetMaxBalance = () => {
    setStakingAmount(balance);
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <form className="w-full">
      <div className="flex flex-col justify-start text-lext w-full">
        <h1 className="text-white text-lg font-quicksand font-semibold mb-5">
          How much would you like to stake?
        </h1>
      </div>
      <TokenInput
        balance={balance}
        value={stakingAmount}
        onChange={handleChangeStakingAmount}
        onSetMax={handleSetMaxBalance}
      />
      <div className="flex flex-col gap-2 justify-start items-start w-full mt-[1.75rem]">
        {!isConnected ? (
          <Button onClick={openConnectModal}>Connect Wallet</Button>
        ) : (
          <Button disabled={submitDisabled} onClick={handleSubmit}>
            Next
          </Button>
        )}
      </div>
    </form>
  );
}
