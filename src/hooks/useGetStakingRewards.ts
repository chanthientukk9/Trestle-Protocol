import useReadStakingContract from "./useReadStakingContract";
import { useReadContract, useReadContracts } from "wagmi";
import { MULTIPLY_CONTRACT, STAKING_CONTRACT } from "../configs";
import multiplyABI from "../contracts/multiplyABI.json";
import stakingABI from "../contracts/stakingABI.json";
import usePushError from "./usePushError";
import { formatUnits, parseUnits } from "ethers";

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

  const rewardRatePerSec = Number(formatUnits(`${result.data || 0}`, "gwei"));

  const results = useReadContracts({
    contracts: stakingAmounts.map((stakingAmount, index) => ({
      address: MULTIPLY_CONTRACT,
      abi: multiplyABI,
      functionName: "applyMultiplier",
      args: [parseUnits(`${stakingAmount}`, 18), rawDurations[index]],
    })) as readonly unknown[],
  });

  const amounts = results?.data
    ? (results?.data || []).map((amount) =>
        Number(formatUnits(`${amount.result || 0}`, 18))
      )
    : [];

  const { data: totalWeightedStake } = useReadContract({
    address: STAKING_CONTRACT,
    abi: stakingABI,
    functionName: "totalWeightedStake",
  });

  const formatedWeighted = Number(
    formatUnits(`${totalWeightedStake || 0}`, 18)
  );

  const rewardAmount = stakingAmounts.map(
    (_, index) =>
      rewardRatePerSec *
      Number(rawDurations[index]) *
      (amounts[index] / formatedWeighted)
  );

  usePushError(result.error || results.error);

  return {
    rewardAmount,
    isLoading: result.isLoading || results.isLoading,
    error: result.error,
  };
}
