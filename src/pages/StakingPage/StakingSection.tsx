import BasicCard from "../../components/BasicCard";
import StakingSteps from "./StakingSteps";
import { useState } from "react";
import StakingForm from "./StakingForm";
import DurationForm from "./DurationForm";
import ReviewForm from "./ReviewForm";
import { useNavigate } from "react-router-dom";

type Duration = {
  period: string;
  APY: number;
  rawDuration: number;
};

function StakingSectionHeader() {
  return (
    <div className="flex flex-col justify-start text-lext w-full">
      <h1 className="text-white text-lg font-quicksand font-semibold">
        Stake your tokens
      </h1>
    </div>
  );
}

export default function StakingSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [stakingAmount, setStakingAmount] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState<Duration>();
  const navigate = useNavigate();

  const handleSetStakingAmount = (value: number) => {
    setStakingAmount(value);
    setCurrentStep(2);
  };

  const handleSelectDuration = (duration: Duration) => {
    setSelectedDuration(duration);
    setCurrentStep(3);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleStake = () => {
    navigate("/my-rewards");
  };

  return (
    <section className="relative flex flex-col justify-between md:top-0 md:pt-[160px] pt-[120px]">
      <div className="flex flex-col lg:flex-row justify-between w-full gap-6 max-w-[760px] mx-auto px-6 md:px-7 lg:px-4">
        <BasicCard className="max-w-[900px] md:mt-10 bg-[#0F1015]/90 border-white/5 px-6 md:px-10">
          <div className="flex flex-col gap-8 justify-center items-start w-full">
            <div className="flex flex-col gap-2 justify-start items-start w-full h-full">
              <StakingSectionHeader />
              <hr className="my-3 border-gray-200 sm:mx-auto dark:border-white/5 lg:my-3 w-full" />
              <StakingSteps activeStep={currentStep} />
              <hr className="my-3 border-gray-200 sm:mx-auto dark:border-white/5 lg:my-3 w-full" />
              {currentStep === 1 && (
                <StakingForm onSubmit={handleSetStakingAmount} />
              )}
              {currentStep === 2 && (
                <DurationForm
                  stakingAmount={stakingAmount}
                  onSubmit={handleSelectDuration}
                  onBack={handleBack}
                />
              )}
              {currentStep === 3 && (
                <ReviewForm
                  stakingAmount={stakingAmount}
                  duration={selectedDuration}
                  onSubmit={handleStake}
                  onBack={handleBack}
                />
              )}
            </div>
          </div>
        </BasicCard>
      </div>
    </section>
  );
}
