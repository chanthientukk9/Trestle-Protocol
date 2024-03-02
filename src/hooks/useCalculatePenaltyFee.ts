import { formatUnits, parseUnits } from "ethers";
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
    args: [parseUnits(`${unstakingAmount}`, "wei"), duration || 0, STAKING_CONTRACT],
  });

  usePushError(result.error);

  return {
    penaltyFee: Number(formatUnits(`${result.data || 0}`, "ether")),
    isLoading: result.isLoading,
    error: result.error,
  };
}
