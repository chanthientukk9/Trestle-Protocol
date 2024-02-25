import { formatEther, BigNumberish } from "ethers";
import useCallTokenContractMethod from "./useCallTokenContractMethod";
import { VESTING_ADDRESS } from "../configs";

export default function useGetVestingAmount() {
  const { result } = useCallTokenContractMethod({
    functionName: "balanceOf",
    args: [VESTING_ADDRESS],
  });

  return {
    vestingAmount: Number(formatEther((result.data || 0) as BigNumberish)),
    isLoading: result.isLoading,
    error: result.error,
  };
}
