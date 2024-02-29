import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { STAKING_CONTRACT, TOKEN_CONTRACT } from "../configs";
import tokenABI from "../contracts/tokenABI.json";
import { parseUnits } from "ethers";
import usePushError from "./usePushError";

export default function useApproveToken({ amount }: { amount: number }) {
  const { data, isPending, error, writeContract } = useWriteContract();

  const approveStaking = () => {
    writeContract({
      address: TOKEN_CONTRACT,
      abi: tokenABI,
      functionName: "approve",
      args: [STAKING_CONTRACT, parseUnits(`${amount}`, 18)],
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
    approveStaking,
    isLoading: isPending || isLoading,
    isSuccess,
    error: error || receiptError,
  };
}
