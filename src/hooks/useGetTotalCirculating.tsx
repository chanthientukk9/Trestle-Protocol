// import { formatEther, BigNumberish } from "ethers";
import useCallTokenContractMethod from "./useCallTokenContractMethod";

export default function useGetTotalCirculating() {
    const { result } = useCallTokenContractMethod({
        functionName: "burn",
        args: ["ether"]
      });
      console.log('totalShares', result)
      return {
        // totalShare: formatEther((result.data || 0) as BigNumberish),
        isLoading: result.isLoading,
        error: result.error
      };
}