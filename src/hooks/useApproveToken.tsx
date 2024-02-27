import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { STAKING_CONTRACT, TOKEN_CONTRACT } from "../configs";
import tokenABI from "../contracts/tokenABI.json";
import { parseUnits } from "ethers";

export default function useApproveToken({ amount }: { amount: number }) {
  const { data, isPending, writeContract } = useWriteContract();

  const approveStaking = () => {
    writeContract({
      address: TOKEN_CONTRACT,
      abi: tokenABI,
      functionName: "approve",
      args: [STAKING_CONTRACT, parseUnits(`${amount}`, 18)],
    });
  };

  const { isLoading } = useWaitForTransactionReceipt({
    hash: data,
  });

  return {
    approveStaking,
    isLoading: isPending || isLoading,
  };
}
