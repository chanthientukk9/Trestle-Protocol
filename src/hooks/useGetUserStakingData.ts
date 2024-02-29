import { useAccount } from "wagmi";
import useReadStakingContract from "./useReadStakingContract";
import usePushError from "./usePushError";

export type StakeItem = {
  stakedAmount: bigint;
  duration: number;
  minimumStakeTimestamp: number;
};

export default function useGetUserStakingData(): {
  stakingList: StakeItem[];
  isLoading: boolean;
} {
  const accounnt = useAccount();
  const { result } = useReadStakingContract({
    functionName: "getUserStakes",
    args: [accounnt.address],
  });

  usePushError(accounnt.isConnected ? result.error : null);

  return {
    stakingList: (result.data || []) as StakeItem[],
    isLoading: result.isLoading,
  };
}
