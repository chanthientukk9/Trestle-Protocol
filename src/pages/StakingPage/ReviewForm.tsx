import logo from "../../assets/small-logo.svg";
import Button from "../../components/Button";
import useApproveToken from "../../hooks/useApproveToken";
import useGetStakingAllowance from "../../hooks/useGetStakingAllowance";

type Duration = {
  period: string;
  APY: string;
  rawDuration: number;
};

export default function ReviewForm({
  stakingAmount,
  duration,
  onSubmit,
  onBack,
}: {
  stakingAmount: number;
  duration?: Duration;
  onSubmit: () => void;
  onBack?: () => void;
}) {
  const { allowance } = useGetStakingAllowance();
  const { approveStaking, isLoading: isApproving } = useApproveToken({
    amount: stakingAmount,
  });

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <>
      <div className="flex flex-col justify-start text-lext w-full">
        <h1 className="text-white text-lg font-quicksand font-semibold mb-3">
          Review and confirm
        </h1>
      </div>
      <div className="flex justify-between gap-2 w-full flex-col md:flex-row">
        <div className="border-[1.5px] border-white/5 rounded-xl w-full bg-white/5">
          <div className="flex flex-col justify-between items-start w-full gap-2 p-4 bg-transparent">
            <h1 className="text-white text-base font-dmSans mb-3">Amount</h1>
            <div className="flex gap-2 rounded-xl px-6 py-2 mb-2 bg-white/5 w-fit-content">
              <img src={logo} alt="trestle" className="w-6 h-6 -ml-2" />
              <h1 className="text-white text-left text-base font-dmSans">
                $TRESTLE
              </h1>
            </div>
            <h1 className="text-white text-3xl font-dmSans font-semibold">
              {stakingAmount}
            </h1>
            <h1 className="text-white text-base font-dmSans">Tokens</h1>
          </div>
        </div>
        {stakingAmount !== 0 && (
          <div className="border-[1.5px] border-white/5 rounded-xl w-full bg-white/5">
            <div className="flex flex-col justify-between items-start w-full gap-2 p-4 bg-transparent">
              <h1 className="text-white text-base font-dmSans mb-3">
                Duration
              </h1>
              <h1 className="text-white text-sm font-dmSans bg-white/5 py-2 px-4 rounded-xl mb-2">
                {duration?.period || ""}
              </h1>
              <h1 className="text-white text-3xl font-dmSans font-semibold">
                {Number(duration?.APY || 0) / 100} X
              </h1>
              <h1 className="text-white text-base font-dmSans">Multiplier</h1>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 justify-start items-start w-full mt-5">
        {allowance < Number(stakingAmount) ? (
          <Button onClick={approveStaking}>
            {isApproving ? "Approving..." : "APPROVE"}
          </Button>
        ) : (
          <Button>STAKE</Button>
        )}
      </div>
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
