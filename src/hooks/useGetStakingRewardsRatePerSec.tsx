import { formatEther, BigNumberish } from "ethers";
import useCallStakingContractMethod from "./useCallStakingContractMethod";

export default function useGetStakingRewardsRatePerSec() {
  const { result } = useCallStakingContractMethod({
    functionName: "rewardRatePerSec",
  });

  const r = Number(n) / 1e9;
  const { data: i } = hj({
    contracts: e.map((l, u) => ({
      address: `0x${Ie.mult.address}`,
      abi: un.mult,
      functionName: "applyMultiplier",
      args: [BigInt(l), BigInt(t[u])],
    })),
    watch: !0,
  });
  const s = i ? i.map((l) => Number(l.result) / 1e18) : [];
  const { data: a } = $r({
    address: `0x${Ie.staking.address}`,
    abi: un.staking,
    functionName: "totalWeightedStake",
    watch: !0,
  });
  const o = a ? Number(a) / 1e18 : 0;
  return e.map((l, u) => r * Number(t[u]) * (s[u] / Number(o)));

  return {
    totalStaked: Number(formatEther((result.data || 0) as BigNumberish)),
    isLoading: result.isLoading,
    error: result.error,
  };
}
