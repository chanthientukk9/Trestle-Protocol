import { PENALTY_FEE_CONTRACT } from "../configs";
import penaltyFeeABI from "../contracts/penaltyFeeABI.json";
import { useReadContract } from "wagmi";

export default function useReadPenaltyFeeContract({
  functionName,
  args
}: {
  functionName: string;
  args?: readonly unknown[];
}) {
  const result = useReadContract({
    abi: penaltyFeeABI,
    address: PENALTY_FEE_CONTRACT,
    functionName,
    args
  });

  return {
    result,
  };
}
