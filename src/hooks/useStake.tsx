import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { STAKING_CONTRACT } from "../configs";
import stakingABI from "../contracts/stakingABI.json";

export default function useStake() {
  const { data, isPending, writeContract } = useWriteContract();

  const stakeToken = ({
    amount,
    stakeTime,
    unstakeTime,
  }: {
    amount: bigint;
    stakeTime: number;
    unstakeTime: number;
  }) => {
    writeContract({
      address: STAKING_CONTRACT,
      abi: stakingABI,
      functionName: "stake",
      args: [amount, stakeTime, unstakeTime],
    });
  };

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash: data,
  });

  return {
    stakeToken,
    isLoading: isPending || isLoading,
    isSuccess
  };
}
