import useReadStakingContract from "./useReadStakingContract";
import { useReadContract, useReadContracts } from "wagmi";
import { MULTIPLY_CONTRACT, STAKING_CONTRACT } from "../configs";
import multiplyABI from "../contracts/multiplyABI.json";
import stakingABI from "../contracts/stakingABI.json";
import usePushError from "./usePushError";

export default function useGetStakingRewards({
  stakingAmounts,
  rawDurations,
}: {
  stakingAmounts: number[];
  rawDurations: number[];
}) {
  const { result } = useReadStakingContract({
    functionName: "rewardRatePerSec",
  });

  const rewardRatePerSec = Number(result.data || 0) / 1e9;

  const results = useReadContracts({
    contracts: stakingAmounts.map((stakingAmount, index) => ({
      address: MULTIPLY_CONTRACT,
      abi: multiplyABI,
      functionName: "applyMultiplier",
      args: [BigInt(stakingAmount), BigInt(rawDurations[index])],
    })) as readonly unknown[],
  });

  const amounts = results?.data
    ? (results?.data || []).map((amount) => Number(amount.result) / 1e18)
    : [];

  const { data: totalWeightedStake } = useReadContract({
    address: STAKING_CONTRACT,
    abi: stakingABI,
    functionName: "totalWeightedStake",
  });

  const formatedWeighted = totalWeightedStake
    ? Number(totalWeightedStake) / 1e18
    : 0;

  const rewardAmount = stakingAmounts.map(
    (_, index) =>
      rewardRatePerSec *
      Number(rawDurations[index]) *
      (amounts[index] / Number(formatedWeighted))
  );

  usePushError(result.error || results.error);

  return {
    rewardAmount,
    isLoading: result.isLoading || results.isLoading,
    error: result.error,
  };
}
