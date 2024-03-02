import { formatUnits } from "ethers";
import useReadTokenContract from "./useReadTokenContract";
import { TREASURY_ADDRESS } from "../configs";
import usePushError from "./usePushError";

export default function useGetTreasuryAmount() {
  const { result } = useReadTokenContract({
    functionName: "balanceOf",
    args: [TREASURY_ADDRESS],
  });

  usePushError(result.error);

  return {
    treasuryAmount: Number(formatUnits(`${result.data || 0}`, 18)),
    isLoading: result.isLoading,
    error: result.error,
  };
}
