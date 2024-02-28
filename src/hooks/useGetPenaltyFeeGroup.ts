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

  return {
    penaltyFeeGroup: result.data as number,
    isLoading: result.isLoading,
    error: result.error,
  };
}
