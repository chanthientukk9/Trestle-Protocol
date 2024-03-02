import { formatUnits } from "ethers";
import useReadStakingContract from "./useReadStakingContract";
import usePushError from "./usePushError";

export default function useGetStakingData() {
  const { result } = useReadStakingContract({
    functionName: "totalStaked",
  });

  usePushError(result.error);

  return {
    totalStaked: Number(formatUnits(`${result.data || 0}`, 18)),
    isLoading: result.isLoading,
    error: result.error
  };
}
