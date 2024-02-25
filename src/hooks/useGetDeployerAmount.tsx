import { formatEther, BigNumberish } from "ethers";
import useCallTokenContractMethod from "./useCallTokenContractMethod";

export default function useGetDeployerAmount() {
  const { result } = useCallTokenContractMethod({
    functionName: "balanceOf",
    args: ["0x1964f3Eaf7d8fca7E559468a384453d2d8490744"],
  });

  return {
    deployerAmount: Number(formatEther((result.data || 0) as BigNumberish)),
    isLoading: result.isLoading,
    error: result.error,
  };
}
