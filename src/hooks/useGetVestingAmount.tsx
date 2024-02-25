import { formatEther, BigNumberish } from "ethers";
import useCallTokenContractMethod from "./useCallTokenContractMethod";

export default function useGetVestingAmount() {
  const { result } = useCallTokenContractMethod({
    functionName: "balanceOf",
    args: ["0xAFb979d9afAd1aD27C5eFf4E27226E3AB9e5dCC9"],
  });

  return {
    vestingAmount: Number(formatEther((result.data || 0) as BigNumberish)),
    isLoading: result.isLoading,
    error: result.error,
  };
}
