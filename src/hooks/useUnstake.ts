import { parseUnits } from "ethers";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { STAKING_CONTRACT } from "../configs";
import stakingABI from "../contracts/stakingABI.json";
import usePushError from "./usePushError";

export default function useUnstake() {
  const { data, isPending, error, writeContract } = useWriteContract();

  const unstakeToken = ({
    amount,
    stakedNumber,
  }: {
    amount: number;
    stakedNumber: number;
  }) => {
    writeContract({
      address: STAKING_CONTRACT,
      abi: stakingABI,
      functionName: "unstake",
      args: [parseUnits(`${amount}`, 18), stakedNumber],
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
    unstakeToken,
    isLoading: isPending || isLoading,
    isSuccess,
    error: error || receiptError,
  };
}
