import stakingABI from "../contracts/stakingABI.json";
import { useReadContract } from "wagmi";

const STAKING_CONTRACT = "0x3a1b5ca5a3dfbde8745c3e6609d9c2162cd00508";

export default function useCallStakingContractMethod({
  functionName,
  args
}: {
  functionName: string;
  args?: readonly unknown[];
}) {
  const result = useReadContract({
    abi: stakingABI,
    address: STAKING_CONTRACT,
    functionName,
    args
  });

  return {
    result,
  };
}
