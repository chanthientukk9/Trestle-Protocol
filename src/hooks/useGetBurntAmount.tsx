import { formatEther, BigNumberish } from "ethers";
import useCallTokenContractMethod from "./useCallTokenContractMethod";

export default function useGetBurntAmount() {
  const { result } = useCallTokenContractMethod({
    functionName: "balanceOf",
    args: ["0x000000000000000000000000000000000000dEaD"],
  });

  return {
    burntAmount: Number(formatEther((result.data || 0) as BigNumberish)),
    isLoading: result.isLoading,
    error: result.error,
  };
}
