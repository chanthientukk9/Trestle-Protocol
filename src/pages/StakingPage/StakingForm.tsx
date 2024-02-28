import Button from "../../components/Button";
import { useState } from "react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import useCheckConnected from "../../hooks/useCheckConntected";
import useBalanceOf from "../../hooks/useBalanceOf";
import TokenInput from "../../components/TokenInput";

export default function StakingForm({
  onSubmit,
}: {
  onSubmit: (value: number) => void;
}) {
  const [amountValue, setAmountValue] = useState(0);
  const { openConnectModal } = useConnectModal();
  const isConnected = useCheckConnected();
  const { balance } = useBalanceOf();

  const submitDisabled = amountValue <= 0 || Number(balance) <= 0;

  const handleChangeAmountValue: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setAmountValue(Math.abs(Number(e.target.value)));
  };

  const handleSetMaxBalance = () => {
    setAmountValue(Number(balance));
  };

  const handleSubmit = () => {
    onSubmit(amountValue);
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
        value={amountValue}
        onChange={handleChangeAmountValue}
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
