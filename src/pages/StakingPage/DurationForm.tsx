import { useContext, useState } from "react";
import useGetStakingDurations from "../../hooks/useGetStakingDurations";
import Button from "../../components/Button";
import useGetStakingRewards from "../../hooks/useGetStakingRewards";
import { StakingContext } from "./StakingContext";
import DurationItem from "./DurationItem";

export default function DurationForm({
  onSubmit,
  onBack,
}: {
  onSubmit: () => void;
  onBack?: () => void;
}) {
  const { stakingAmount, setStakingDuration } = useContext(StakingContext);
  const [selectedDurationIndex, setSelectedDurationIndex] = useState(0);
  const { durations, isLoading: isLoadingStakingDurations } =
    useGetStakingDurations();

  const { rewardAmount } = useGetStakingRewards({
    stakingAmounts:
      durations && stakingAmount ? durations.map(() => stakingAmount) : [],
    rawDurations:
      durations && stakingAmount
        ? durations.map((duration) => duration.rawDuration)
        : [],
  });

  const handleSelectDuration = (index: number) => () => {
    setSelectedDurationIndex(index);
    setStakingDuration(durations[index]);
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <>
      <div className="flex flex-col justify-start text-lext w-full">
        <h1 className="text-white text-lg font-quicksand font-semibold mb-5">
          How long would you like to stake?
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
        {isLoadingStakingDurations && <div>Loading...</div>}
        {durations.map((duration, index) => (
          <DurationItem
            key={index}
            duration={duration}
            rewardAmount={rewardAmount[index]}
            isSelected={selectedDurationIndex === index}
            className={
              selectedDurationIndex !== 0 && selectedDurationIndex !== index
                ? "opacity-70"
                : ""
            }
            onClick={handleSelectDuration(index)}
          />
        ))}
      </div>
      <div className="flex flex-col justify-start text-lext w-full mt-6">
        <h1 className="text-white text-base font-quicksand font-light mb-3">
          Approx wTIA rewarded for time frame based on amount of $TRESTLE you
          are planning to stake.
        </h1>
      </div>
      {selectedDurationIndex !== 0 ? (
        <div className="flex flex-col gap-2 justify-start items-start w-full mt-5">
          <Button onClick={handleSubmit}>Next</Button>
        </div>
      ) : (
        <div className="flex flex-col gap-2 justify-start items-start w-full mt-5">
          <Button disabled>Next</Button>
        </div>
      )}
      <div className="flex flex-col gap-2 justify-start items-start w-full mt-5">
        <Button
          onClick={onBack}
          className="bg-none bg-white/0 border-[1px] border-white/80 hover:border-white/80 hover:brightness-125"
        >
          Back
        </Button>
      </div>
    </>
  );
}
