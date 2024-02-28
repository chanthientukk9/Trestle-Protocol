import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { STAKING_CONTRACT } from "../configs";
import stakingABI from "../contracts/stakingABI.json";

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

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash: data,
  });

  return {
    claimRewards,
    isLoading: isPending || isLoading,
    isSuccess,
    error
  };
}
