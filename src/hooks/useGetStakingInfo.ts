import { formatEther, BigNumberish } from "ethers";
import useReadStakingContract from "./useReadStakingContract";

export default function useGetStakingInfo() {
  const { result } = useReadStakingContract({
    functionName: "totalStaked",
  });
  return {
    totalStaked: Number(formatEther((result.data || 0) as BigNumberish)),
    isLoading: result.isLoading,
    error: result.error
  };
}
