import { STAKING_CONTRACT } from "../configs";
import useCallTokenContractMethod from "./useCallTokenContractMethod";
import useCurrentAccount from "./useCurrentAccount";

export default function useGetStakingAllowance() {
  const account = useCurrentAccount();
  const { result } = useCallTokenContractMethod({
    functionName: "allowance",
    args: [account.address, STAKING_CONTRACT],
  });

  return {
    allowance: Number(result?.data) / 1e18,
    isLoading: result.isLoading,
  };
}
