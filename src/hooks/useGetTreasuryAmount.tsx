import { formatEther, BigNumberish } from "ethers";
import useCallTokenContractMethod from "./useCallTokenContractMethod";
import { TREASURY_ADDRESS } from "../configs";

export default function useGetTreasuryAmount() {
  const { result } = useCallTokenContractMethod({
    functionName: "balanceOf",
    args: [TREASURY_ADDRESS],
  });

  return {
    treasuryAmount: Number(formatEther((result.data || 0) as BigNumberish)),
    isLoading: result.isLoading,
    error: result.error,
  };
}
