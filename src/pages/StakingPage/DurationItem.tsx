import { Duration } from "./StakingContext";

export default function DurationItem({
  duration,
  rewardAmount,
  isSelected,
  className,
  onClick,
}: {
  duration: Duration;
  rewardAmount: number;
  isSelected: boolean;
  className: string;
  onClick: () => void;
}) {
  return (
    <div
      className={`border-[1.5px] border-white/10 rounded-xl w-full ${
        isSelected
          ? "bg-white/10"
          : "bg-white/5 cursor-pointer hover:bg-white/10 active:opacity-75"
      } ${className}`}
    >
      <div
        onClick={onClick}
        className="flex flex-col justify-between items-start w-full gap-2 p-4 bg-transparent"
      >
        <h1 className="text-white text-sm font-quicksand bg-white/5 py-2 px-4 rounded-xl mb-2">
          {duration.period}
        </h1>
        <h1 className="text-white text-3xl font-quicksand font-semibold">
          {duration.APY / 100} X
        </h1>
        <h1 className="text-white text-base font-quicksand">Multiplier</h1>
        <h1 className="text-white text-sm font-quicksand font-semibold">
          ~ {rewardAmount.toFixed(8)} wTIA
        </h1>
      </div>
    </div>
  );
}
