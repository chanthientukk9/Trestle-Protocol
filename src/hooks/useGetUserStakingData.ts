import { useAccount } from "wagmi";
import useReadStakingContract from "./useReadStakingContract";

export type StakeItem = {
  stakedAmount: bigint;
  duration: number;
  minimumStakeTimestamp: number;
}

export default function useGetUserStakingData(): {
  stakingList: StakeItem[],
  isLoading: boolean;
} {
  const accounnt = useAccount();
  const { result } = useReadStakingContract({
    functionName: "getUserStakes",
    args: [accounnt.address],
  });

  return {
    stakingList: (result.data || []) as StakeItem[],
    isLoading: result.isLoading
  };
}
