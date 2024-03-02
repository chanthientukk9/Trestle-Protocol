import usePushError from "./usePushError";
import useReadPenaltyFeeContract from "./useReadPenaltyFeeContract";

export default function useGetPenaltyFeeGroup({
  stakedNumber,
}: {
  stakedNumber: number;
}) {
  const { result } = useReadPenaltyFeeContract({
    functionName: "penaltyFeePerGroup",
    args: [stakedNumber],
  });

  usePushError(result.error);

  return {
    penaltyFeeGroup: Number(result.data),
    isLoading: result.isLoading,
    error: result.error,
  };
}
