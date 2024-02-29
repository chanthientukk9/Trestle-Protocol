import usePushError from "./usePushError";
import useReadMultiplyContract from "./useReadMultiplyContract";

export type Duration = {
  threshold: string;
  multiplier: number;
};

export default function useGetDurationThresholds(): {
  durationThresholds: Duration[];
  isLoading: boolean;
  error: Error | null;
} {
  const { result } = useReadMultiplyContract({
    functionName: "getDurationThresholds",
  });

  usePushError(result.error);

  return {
    durationThresholds: result.data as Duration[],
    isLoading: result.isLoading,
    error: result.error,
  };
}
