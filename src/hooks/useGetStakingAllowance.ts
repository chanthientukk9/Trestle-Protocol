import { STAKING_CONTRACT } from "../configs";
import useReadTokenContract from "./useReadTokenContract";
import useCurrentAccount from "./useCurrentAccount";
import usePushError from "./usePushError";
import { formatUnits } from "ethers";

export default function useGetStakingAllowance() {
  const account = useCurrentAccount();
  const { result } = useReadTokenContract({
    functionName: "allowance",
    args: [account.address, STAKING_CONTRACT],
  });

  usePushError(result.error);

  return {
    allowance: Number(formatUnits(`${result?.data || 0}`, 18)),
    isLoading: result.isLoading,
  };
}
