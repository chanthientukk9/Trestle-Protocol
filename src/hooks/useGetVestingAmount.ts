import { formatEther, BigNumberish } from "ethers";
import useReadTokenContract from "./useReadTokenContract";
import { VESTING_ADDRESS } from "../configs";
import usePushError from "./usePushError";

export default function useGetVestingAmount() {
  const { result } = useReadTokenContract({
    functionName: "balanceOf",
    args: [VESTING_ADDRESS],
  });

  usePushError(result.error);

  return {
    vestingAmount: Number(formatEther((result.data || 0) as BigNumberish)),
    isLoading: result.isLoading,
    error: result.error,
  };
}
