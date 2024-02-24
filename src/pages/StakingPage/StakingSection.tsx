import trestleSmallIcon from "../../assets/small-logo.svg";
import Button from "../../components/Button";
import BasicCard from "../../components/BasicCard";
import StakingSteps from "./StakingSteps";
import { useState } from "react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import useCheckConnected from "../../hooks/useCheckConntected";
import useBalanceOf from "../../hooks/useBalanceOf";

function StakingSectionHeader() {
  return (
    <div className="flex flex-col justify-start text-lext w-full">
      <h1 className="text-white text-lg font-quicksand font-semibold">
        Stake your tokens
      </h1>
    </div>
  );
}

function StakingForm({ onSubmit }: { onSubmit: (value: number) => void }) {
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
      <div className="bg-[#26222B] border-2 border-white/5 p-5 rounded-3xl w-full">
        <div className="flex justify-between w-full mb-2">
          <div className="flex gap-2 rounded-2xl px-8 py-2 bg-white/5 w-fit-content">
            <img
              src={trestleSmallIcon}
              alt="trestle"
              className="w-8 h-8 -ml-4"
            />
            <h1 className="text-white mt-0.5 text-left text-lg font-quicksand mr-4">
              $TRESTLE
            </h1>
          </div>
          <div className="flex justify-end items-center w-full">
            <h1 className="text-white text-center text-base font-quicksand font-semibold">
              Balance {balance}
            </h1>
          </div>
        </div>
        <hr className="mb-3 mt-5 border-gray-200 sm:mx-auto dark:border-white/5 lg:mb-4" />
        <div className="flex justify-end items-center w-full">
          <input
            type="number"
            placeholder="0.00"
            className="peer w-full bg-transparent border-transparent py-2 px-3 font-quicksand text-xl font-normal text-white outline outline-0 transition-all focus:outline-0"
            value={`${amountValue}`}
            onChange={handleChangeAmountValue}
          />
          <div className="flex justify-end items-center w-full">
            <h1
              className="text-transparent bg-clip-text bg-gradient-to-r to-[#425ba7] from-[#7b77a4] font-extrabold font-quicksand hover:brightness-125 active:opacity-75 cursor-pointer"
              onClick={handleSetMaxBalance}
            >
              Max
            </h1>
          </div>
        </div>
      </div>
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

export default function StakingSection() {
  const [currentStep, setCurrentStep] = useState("amount");

  const handleStake = (value: number) => {
    setCurrentStep("duration");
    return value;
  };

  return (
    <section className="relative flex flex-col justify-between md:top-0 md:pt-[160px] pt-[120px]">
      <div className="flex flex-col lg:flex-row justify-between w-full gap-6 max-w-[760px] mx-auto px-7 lg:px-4">
        <BasicCard className="max-w-[900px] md:mt-10 bg-[#0F1015]/90 border-white/5">
          <div className="flex flex-col gap-8 justify-center items-start w-full">
            <div className="flex flex-col gap-2 justify-start items-start w-full h-full">
              <StakingSectionHeader />
              <hr className="my-3 border-gray-200 sm:mx-auto dark:border-white/5 lg:my-3 w-full" />
              <StakingSteps activeStep={currentStep} />
              <hr className="my-3 border-gray-200 sm:mx-auto dark:border-white/5 lg:my-3 w-full" />
              {currentStep === "amount" && (
                <StakingForm onSubmit={handleStake} />
              )}
            </div>
          </div>
        </BasicCard>
      </div>
    </section>
  );
}
