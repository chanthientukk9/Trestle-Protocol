import { STAKING_CONTRACT } from "../configs";
import usePushError from "./usePushError";
import useReadPenaltyFeeContract from "./useReadPenaltyFeeContract";

export default function useCalculatePenaltyFee({
  unstakingAmount,
  duration,
}: {
  unstakingAmount: number;
  duration: number;
}) {
  const { result } = useReadPenaltyFeeContract({
    functionName: "calculate",
    args: [unstakingAmount, duration, STAKING_CONTRACT],
  });

  usePushError(result.error);

  return {
    penaltyFee: result.data as number,
    isLoading: result.isLoading,
    error: result.error,
  };
}
