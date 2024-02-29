import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { STAKING_CONTRACT } from "../configs";
import stakingABI from "../contracts/stakingABI.json";
import usePushError from "./usePushError";

export default function useClaimRewards() {
  const { data, isPending, error, writeContract } = useWriteContract();

  const claimRewards = (stackedNumber: number) => {
    writeContract({
      address: STAKING_CONTRACT,
      abi: stakingABI,
      functionName: "claimRewards",
      args: [stackedNumber],
    });
  };

  const {
    isLoading,
    isSuccess,
    error: receiptError,
  } = useWaitForTransactionReceipt({
    hash: data,
  });

  usePushError(error || receiptError);

  return {
    claimRewards,
    isLoading: isPending || isLoading,
    isSuccess,
    error: error || receiptError,
  };
}
