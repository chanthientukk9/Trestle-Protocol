import { useAccount } from "wagmi";
import useReadTokenContract from "./useReadTokenContract";
import { formatEther } from "ethers";
import { BigNumberish } from "ethers";
import usePushError from "./usePushError";

export default function useBalanceOf() {
  const accounnt = useAccount();
  const { result } = useReadTokenContract({
    functionName: "balanceOf",
    args: [accounnt.address],
  });

  usePushError(accounnt.isConnected ? result.error : null);

  return {
    balance: Number(formatEther((result.data || 0) as BigNumberish)),
    isLoading: result.isLoading,
    error: result.error,
  };
}
