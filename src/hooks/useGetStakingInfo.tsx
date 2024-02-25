import { formatEther, BigNumberish } from "ethers";
import useCallStakingContractMethod from "./useCallStakingContractMethod";

export default function useGetStakingInfo() {
  const { result } = useCallStakingContractMethod({
    functionName: "totalStaked",
  });
  return {
    totalStaked: formatEther((result.data || 0) as BigNumberish),
    isLoading: result.isLoading,
    error: result.error
  };
}
