import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { STAKING_CONTRACT } from "../configs";
import stakingABI from "../contracts/stakingABI.json";

export default function useUnstake() {
  const { data, isPending, error, writeContract } = useWriteContract();

  const unstakeToken = ({
    amount,
    stakedNumber
  }: {
    amount: bigint;
    stakedNumber: number;
  }) => {
    writeContract({
      address: STAKING_CONTRACT,
      abi: stakingABI,
      functionName: "unstake",
      args: [amount, stakedNumber],
    });
  };

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash: data,
  });

  return {
    unstakeToken,
    isLoading: isPending || isLoading,
    isSuccess,
    error,
  };
}
