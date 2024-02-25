import { useEffect, useState } from "react";
import useGetDurationThresholds from "../../hooks/useGetDurationThresholds";
import { formatTimeToLongStr } from "../../utils";
import Button from "../../components/Button";

type Duration = {
  period: string;
  APY: string;
  rawDuration: number;
};

export default function DurationForm({ onBack }: { onBack?: () => void }) {
  const [durations, setDurations] = useState<Duration[]>([]);
  const [selectedDurationIndex, setSelectedDurationIndex] = useState(0);
  const { durationThresholds } = useGetDurationThresholds();

  const handleSelectDuration = (index: number) => () => {
    setSelectedDurationIndex(index);
  };

  useEffect(() => {
    if (durationThresholds) {
      const mappeDurations = durationThresholds.map((duration) => ({
        period: `${formatTimeToLongStr(Number(duration.threshold))}`,
        APY: `${Number(duration.multiplier) / 100}`,
        rawDuration: Number(duration.threshold),
      }));
      setDurations(mappeDurations);
    }
  }, [durationThresholds]);

  return (
    <>
      <div className="flex flex-col justify-start text-lext w-full">
        <h1 className="text-white text-lg font-quicksand font-semibold mb-5">
          How long would you like to stake?
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
        {durations.map((duration, index) => (
          <div
            key={index}
            className={`border-[1.5px] border-white/10 rounded-xl w-full ${
              selectedDurationIndex === index
                ? "bg-white/10"
                : "bg-white/5 cursor-pointer hover:bg-white/10 active:opacity-75"
            } ${
              selectedDurationIndex !== 0 && selectedDurationIndex !== index
                ? "opacity-70"
                : ""
            }`}
          >
            <div
              onClick={handleSelectDuration(index)}
              className="flex flex-col justify-between items-start w-full gap-2 p-4 bg-transparent"
            >
              <h1 className="text-white text-sm font-quicksand bg-white/5 py-2 px-4 rounded-xl mb-2">
                {duration.period}
              </h1>
              <h1 className="text-white text-3xl font-quicksand font-semibold">
                {Number(duration.APY) / 100} X
              </h1>
              <h1 className="text-white text-base font-quicksand">
                Multiplier
              </h1>
              <h1 className="text-white text-sm font-quicksand font-semibold">
                ~ ? wTIA
              </h1>
            </div>
          </div>
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
          <Button>Next</Button>
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
