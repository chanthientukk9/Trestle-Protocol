import { useAccount, useReadContracts } from "wagmi";
import { STAKING_CONTRACT } from "../configs";
import stakingABI from "../contracts/stakingABI.json";
import { formatUnits } from "ethers";

export default function useGetUserStakingRewards({
  stakingListLength,
}: {
  stakingListLength: number;
}) {
  const accounnt = useAccount();
  const results = useReadContracts({
    contracts: Array.from(
      {
        length: stakingListLength,
      },
      (_, index) => ({
        address: STAKING_CONTRACT,
        abi: stakingABI,
        functionName: "getUserRewards",
        args: [accounnt.address, BigInt(index)],
      })
    ) as readonly unknown[],
  });

  const rewards = !results.data
    ? []
    : results.data.map((reward) =>
        Number(formatUnits(Number(reward.result), "gwei"))
      );

  return {
    rewards,
    isLoading: results.isLoading,
  };
}
