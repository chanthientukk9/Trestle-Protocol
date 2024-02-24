import { useAccount } from "wagmi";
import useCallTokenContractMethod from "./useCallTokenContractMethod";
import { formatEther } from "ethers";
import { BigNumberish } from "ethers";

export default function useBalanceOf() {
  const accounnt = useAccount();
  const { result } = useCallTokenContractMethod({
    functionName: "balanceOf",
    args: [accounnt.address],
  });
  return {
    balance: formatEther((result.data || 0) as BigNumberish),
  };
}
