import { formatEther, BigNumberish } from "ethers";
import useReadTokenContract from "./useReadTokenContract";
import { VESTING_ADDRESS } from "../configs";

export default function useGetVestingAmount() {
  const { result } = useReadTokenContract({
    functionName: "balanceOf",
    args: [VESTING_ADDRESS],
  });

  return {
    vestingAmount: Number(formatEther((result.data || 0) as BigNumberish)),
    isLoading: result.isLoading,
    error: result.error,
  };
}
