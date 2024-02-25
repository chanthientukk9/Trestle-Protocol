import { STAKING_CONTRACT } from "../configs";
import stakingABI from "../contracts/stakingABI.json";
import { useReadContract } from "wagmi";

export default function useCallStakingContractMethod({
  functionName,
  args,
}: {
  functionName: string;
  args?: readonly unknown[];
}) {
  const result = useReadContract({
    abi: stakingABI,
    address: STAKING_CONTRACT,
    functionName,
    args,
  });

  return {
    result,
  };
}
