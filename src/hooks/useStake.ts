import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { STAKING_CONTRACT } from "../configs";
import stakingABI from "../contracts/stakingABI.json";
import usePushError from "./usePushError";
import { parseUnits } from "viem";

export default function useStake() {
  const { data, isPending, error, writeContract } = useWriteContract();

  const stakeToken = ({
    amount,
    stakeTime,
    unstakeTime,
  }: {
    amount: number;
    stakeTime: number;
    unstakeTime: number;
  }) => {
    writeContract({
      address: STAKING_CONTRACT,
      abi: stakingABI,
      functionName: "stake",
      args: [parseUnits(`${amount}`, 18), stakeTime, unstakeTime],
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
    stakeToken,
    isLoading: isPending || isLoading,
    isSuccess,
    error: error || receiptError,
  };
}
