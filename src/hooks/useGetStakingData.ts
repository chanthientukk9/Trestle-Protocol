import { formatEther, BigNumberish } from "ethers";
import useReadStakingContract from "./useReadStakingContract";
import usePushError from "./usePushError";

export default function useGetStakingData() {
  const { result } = useReadStakingContract({
    functionName: "totalStaked",
  });

  usePushError(result.error);

  return {
    totalStaked: Number(formatEther((result.data || 0) as BigNumberish)),
    isLoading: result.isLoading,
    error: result.error
  };
}
