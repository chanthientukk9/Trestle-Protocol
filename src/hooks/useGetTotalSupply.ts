import { formatUnits } from "ethers";
import useReadTokenContract from "./useReadTokenContract";
import usePushError from "./usePushError";

export default function useGetTotalSupply() {
  const { result } = useReadTokenContract({
    functionName: "totalSupply",
  });

  usePushError(result.error);

  return {
    totalSupply: Number(formatUnits(`${result.data || 0}`, 18)),
    isLoading: result.isLoading,
    error: result.error,
  };
}
