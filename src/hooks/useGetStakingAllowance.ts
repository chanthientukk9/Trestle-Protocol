import { STAKING_CONTRACT } from "../configs";
import useReadTokenContract from "./useReadTokenContract";
import useCurrentAccount from "./useCurrentAccount";

export default function useGetStakingAllowance() {
  const account = useCurrentAccount();
  const { result } = useReadTokenContract({
    functionName: "allowance",
    args: [account.address, STAKING_CONTRACT],
  });

  return {
    allowance: Number(result?.data) / 1e18,
    isLoading: result.isLoading,
  };
}
