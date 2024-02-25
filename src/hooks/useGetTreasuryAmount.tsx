import { formatEther, BigNumberish } from "ethers";
import useCallTokenContractMethod from "./useCallTokenContractMethod";

export default function useGetTreasuryAmount() {
  const { result } = useCallTokenContractMethod({
    functionName: "balanceOf",
    args: ["0x53DDA415Cc10822e00f5749670b0fe9713f44bF9"],
  });

  return {
    treasuryAmount: Number(formatEther((result.data || 0) as BigNumberish)),
    isLoading: result.isLoading,
    error: result.error,
  };
}
