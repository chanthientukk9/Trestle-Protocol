import { useAccount } from "wagmi";
import useReadTokenContract from "./useReadTokenContract";
import { formatUnits } from "ethers";
import usePushError from "./usePushError";

export default function useBalanceOf() {
  const accounnt = useAccount();
  const { result } = useReadTokenContract({
    functionName: "balanceOf",
    args: [accounnt.address],
  });

  usePushError(accounnt.isConnected ? result.error : null);

  return {
    balance: Number(formatUnits(`${result.data || 0}`, 18)),
    isLoading: result.isLoading,
    error: result.error,
  };
}
