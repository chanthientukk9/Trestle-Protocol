import { formatEther, BigNumberish } from "ethers";
import useReadTokenContract from "./useReadTokenContract";
import { BURNT_ADDRESS } from "../configs";

export default function useGetBurntAmount() {
  const { result } = useReadTokenContract({
    functionName: "balanceOf",
    args: [BURNT_ADDRESS],
  });

  return {
    burntAmount: Number(formatEther((result.data || 0) as BigNumberish)),
    isLoading: result.isLoading,
    error: result.error,
  };
}
