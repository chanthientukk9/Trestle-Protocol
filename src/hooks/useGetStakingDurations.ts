import { formatTimeToLongStr } from "../utils";
import usePushError from "./usePushError";
import useReadMultiplyContract from "./useReadMultiplyContract";

export type RawDuration = {
  threshold: string;
  multiplier: number;
};

export type Duration = {
  period: string;
  APY: number;
  rawDuration: number;
};

export default function useGetStakingDurations(): {
  durations: Duration[];
  isLoading: boolean;
  error: Error | null;
} {
  const { result } = useReadMultiplyContract({
    functionName: "getDurationThresholds",
  });

  const mappeDurations = ((result.data || []) as RawDuration[]).map(
    (duration) => ({
      period: `${formatTimeToLongStr(Number(duration.threshold))}`,
      APY: Number(duration.multiplier) / 100,
      rawDuration: Number(duration.threshold),
    })
  );

  usePushError(result.error);

  return {
    durations: mappeDurations,
    isLoading: result.isLoading,
    error: result.error,
  };
}
