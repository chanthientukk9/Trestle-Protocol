import { useAccount } from "wagmi";
import useReadStakingContract from "./useReadStakingContract";
import usePushError from "./usePushError";
import { formatUnits } from "ethers";

export type StakeItem = {
  stakedAmount: number;
  duration: number;
  minimumStakeTimestamp: number;
};

type StakeRawData = {
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

  const stakingList: StakeItem[] = ((result.data || []) as StakeRawData[]).map(
    (stake) => ({
      stakedAmount: Number(formatUnits(stake.stakedAmount || 0, "ether")),
      duration: Number(stake.duration || 0),
      minimumStakeTimestamp: Number(stake.minimumStakeTimestamp || 0),
    })
  );

  return {
    stakingList,
    isLoading: result.isLoading,
  };
}
