import { formatEther } from "ethers";
import useReadTokenContract from "./useReadTokenContract";
import usePushError from "./usePushError";

export default function useGetTotalSupply() {
  const { result } = useReadTokenContract({
    functionName: "totalSupply",
  });

  usePushError(result.error);

  return {
    totalSupply: Number(formatEther(`${result.data || 0}`)),
    isLoading: result.isLoading,
    error: result.error,
  };
}
